<template>
  <component :is="element" :class="[variant]">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { computed } from "vue";

import type { TypographyProps } from "./types";
import { elementMaps, variantsMap } from "./types";

const props = defineProps<TypographyProps>();

const element = computed(() => props.as || elementMaps[props.variant]);
const variant = computed(() => variantsMap[props.variant]);
</script>
