<template>
  <div :class="styles.list">
    <UserListItem />

    <Observer />
  </div>
</template>

<script setup lang="ts">
import { UserListItem } from "./item";
import { Observer } from "shared/ui";

import styles from "./styles.module.scss";
</script>
