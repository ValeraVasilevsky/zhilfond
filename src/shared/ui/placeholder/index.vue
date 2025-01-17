<template>
  <div :class="styles.placeholder">{{ props.text }}</div>
</template>

<script setup lang="ts">
import styles from "./styles.module.scss";

interface PlaceholderProps {
  text: string;
}

const props = defineProps<PlaceholderProps>();
</script>
