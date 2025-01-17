<template>
  <header :class="styles.header">
    <Typography variant="font-xl" :class="styles.logo">Жилфонд</Typography>
    <Typography variant="font-m" :class="styles.user">Пользователь</Typography>
  </header>
</template>

<script setup lang="ts">
import { Typography } from "../typography";

import styles from "./styles.module.scss";
</script>
