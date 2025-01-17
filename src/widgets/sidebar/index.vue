<template>
  <aside :class="styles.sidebar">
    <Typography variant="font-l" :class="styles.title">
      Поиск сотрудников
    </Typography>

    <BaseInput v-model="search" placeholder="Введите Id или имя" />

    <Typography variant="font-l" :class="styles.title"> Результат </Typography>

    <div :class="styles.list">
      <Loader v-if="isLoading" :class="styles.loader" />
      <Typography
        v-else-if="!search && !isLoading"
        variant="font-s"
        :class="styles.title"
      >
        {{ titleText }}
      </Typography>

      <UserList v-else-if="!isLoading && search" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { UserList, useUserStore } from "entities/user";
import { Typography, BaseInput, Loader } from "shared/ui";
import { watchDebounced } from "@vueuse/core";

import styles from "./styles.module.scss";

const { getUsers, clearUsers } = useUserStore();

const search = ref<string>("");
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);

const titleText = computed((): string => {
  return isError.value ? "Ошибка. Повторите снова" : "Начните поиск";
});

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

watchDebounced(
  search,
  async (): Promise<void> => {
    if (!search.value) {
      isError.value = false;
      clearUsers();
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
