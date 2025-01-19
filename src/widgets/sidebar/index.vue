<template>
  <aside :class="styles.sidebar">
    <Typography variant="font-l" :class="styles.title">
      Поиск сотрудников
    </Typography>

    <BaseInput
      v-model="search"
      placeholder="Введите Id или имя"
      @update:model-value="startLoader"
    />

    <Typography variant="font-l" :class="styles.title"> Результат </Typography>

    <div :class="styles.list">
      <Loader v-if="isLoading" :class="styles.loader" />

      <Typography variant="font-s" :class="titleClasses">
        {{ titleText }}
      </Typography>

      <UserList v-if="showUsersList" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { storeToRefs } from "pinia";
import { UserList, useUserStore } from "entities/user";
import { Typography, BaseInput, Loader } from "shared/ui";
import { watchDebounced } from "@vueuse/core";

import styles from "./styles.module.scss";

const { users } = storeToRefs(useUserStore());
const { getUsers, clearUsers, clearSelectedUser } = useUserStore();

const search = ref<string>("");
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);

const titleClasses = computed((): string[] => {
  const classes: string[] = [];

  if (isError.value) classes.push(styles.error);

  return classes;
});
const titleText = computed((): string => {
  if (!search.value && !isLoading.value) return "Начните поиск";
  if (isError.value && !isLoading.value) return "Ошибка. Повторите запрос";
  if (!users.value.length && search.value && !isLoading.value)
    return "Ничего не найдено";
  return "";
});
const showUsersList = computed(
  (): boolean => !isLoading.value && !!search.value && !!users.value.length
);

const fetchUsers = async (): Promise<void> => {
  isError.value = false;

  try {
    await getUsers(search.value);
  } catch (error) {
    isError.value = true;
    return Promise.reject(error);
  } finally {
    isLoading.value = false;
  }
};
const startLoader = (): void => {
  isLoading.value = true;
};

watchDebounced(
  search,
  async (): Promise<void> => {
    if (!search.value.length) {
      isError.value = false;
      isLoading.value = false;
      clearUsers();
      clearSelectedUser();
      return;
    }

    isLoading.value = true;
    await fetchUsers();
  },
  {
    debounce: 500,
    maxWait: 1000,
  }
);
</script>
