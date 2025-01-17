<template>
  <article v-if="selectedUser" :class="styles.card">
    <img src="/img.png" />

    <div :class="styles.info">
      <Typography variant="font-l">{{ selectedUser.name }}</Typography>

      <div :class="styles.field">
        <Typography variant="font-s" :class="styles.value">
          <span :class="styles.key">email: </span>
          {{ selectedUser.email }}
        </Typography>
      </div>

      <div :class="styles.field">
        <Typography variant="font-s" :class="styles.value">
          <span :class="styles.key">phone: </span>
          {{ selectedUser.phone }}
        </Typography>
      </div>

      <div :class="[styles.field, styles.description]">
        <Typography variant="font-s" :class="styles.key">О себе: </Typography>
        <Typography variant="font-s" :class="styles.value">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";
import { storeToRefs } from "pinia";
import { useUserStore } from "../../model";

import styles from "./styles.module.scss";

const { selectedUser } = storeToRefs(useUserStore());
</script>
