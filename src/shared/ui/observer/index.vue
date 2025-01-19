<template>
  <div ref="observer" :class="styles.observer" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

import styles from "./styles.module.scss";

type ObserverEmits = {
  intersect: [value: void];
};

const emits = defineEmits<ObserverEmits>();
const observer = ref<HTMLDivElement>();

useIntersectionObserver(observer, ([{ isIntersecting }]): void => {
  if (!isIntersecting) return;
  emits("intersect");
});
</script>
