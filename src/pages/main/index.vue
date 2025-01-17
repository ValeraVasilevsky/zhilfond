<template>
  <div :class="styles.container">
    <Placeholder text="Выберите сотрудника, чтобы посмотреть его профиль" />
  </div>
</template>

<script setup lang="ts">
import { Placeholder } from "shared/ui/placeholder";

import styles from "./styles.module.scss";
</script>
