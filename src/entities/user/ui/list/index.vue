<template>
  <div :class="styles.list">
    <UserListItem
      v-for="user of users"
      :key="user.id"
      v-bind="user"
      @click="onClick(user.id)"
    />
    <Observer />
    <!-- API не предлагает вроде как пагинацию, но я сделал вот типа ленивую подгрузку
       и, когда пользователей будет 2к и выше, можно ихп подгружать по-странично -->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { UserListItem } from "./item";
import { Observer } from "shared/ui";

import styles from "./styles.module.scss";

import { useUserStore } from "../../model";

const { users } = storeToRefs(useUserStore());
const { setSelectedUser } = useUserStore();

const onClick = (userId: string): void => {
  setSelectedUser(userId);
};
</script>
