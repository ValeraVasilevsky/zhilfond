<template>
  <div :class="styles.container">
    <Placeholder
      v-if="!selectedUser"
      text="Выберите сотрудника, чтобы посмотреть его профиль"
    />
    <UserCard v-else />
  </div>
</template>

<script setup lang="ts">
import { UserCard, useUserStore } from "entities/user";
import { Placeholder } from "shared/ui/placeholder";

import styles from "./styles.module.scss";
import { storeToRefs } from "pinia";

const { selectedUser } = storeToRefs(useUserStore());
</script>
