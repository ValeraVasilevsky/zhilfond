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
        Начните поиск
      </Typography>

      <UserList v-else />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserList, useUserStore } from "entities/user";
import { Typography, BaseInput, Loader } from "shared/ui";
import { watchDebounced } from "@vueuse/core";

import styles from "./styles.module.scss";

const { getUsers } = useUserStore();

const search = ref<string>("");
const isLoading = ref<boolean>(false);

const fetchUsers = async (): Promise<void> => {
  isLoading.value = true;

  try {
    await getUsers(search.value);
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  } finally {
    isLoading.value = false;
  }
};

watchDebounced(
  search,
  async (): Promise<void> => {
    await fetchUsers();
  },
  {
    debounce: 1000,
    maxWait: 1500,
  }
);
</script>
