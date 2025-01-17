<template>
  <article :class="styles.item">
    <div :class="styles.img" />

    <div :class="styles.info">
      <Typography variant="font-s" :class="styles.name">Bret</Typography>
      <Typography variant="font-s" :class="styles.email">
        Sincere@april.biz
      </Typography>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";

import styles from "./styles.module.scss";
</script>
