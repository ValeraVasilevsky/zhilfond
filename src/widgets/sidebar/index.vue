<template>
  <aside :class="styles.sidebar">
    <Typography variant="font-l" :class="styles.title">
      Поиск сотрудников
    </Typography>

    <BaseInput v-model="search" placeholder="Введите Id или имя" />

    <Typography variant="font-l" :class="styles.title"> Результат </Typography>

    <div :class="styles.list">
      <!-- <Typography variant="font-s" :class="styles.title">
        Начните поиск
      </Typography> -->

      <UserList />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UserList } from "features/user-searched-list";
import { Typography, BaseInput } from "shared/ui";

import styles from "./styles.module.scss";

const search = ref<string>("");
</script>
