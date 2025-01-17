<template>
  <aside :class="styles.sidebar">
    <Typography variant="font-l" :class="styles.title">
      Поиск сотрудников
    </Typography>

    <BaseInput v-model="search" placeholder="Введите Id или имя" />

    <Typography variant="font-l" :class="styles.title"> Результат </Typography>

    <div :class="styles.list">
      <Typography v-if="!search" variant="font-s" :class="styles.title">
        Начните поиск
      </Typography>

      <UserList v-else />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserList, useUserStore } from "entities/user";
import { Typography, BaseInput } from "shared/ui";
import { watchDebounced } from "@vueuse/core";

import styles from "./styles.module.scss";

const { getUsers } = useUserStore();

const search = ref<string>("");

watchDebounced(
  search,
  (): void => {
    getUsers(search.value);
  },
  {
    debounce: 1000,
    maxWait: 1500,
  }
);
</script>
