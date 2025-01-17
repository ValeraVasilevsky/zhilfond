<template>
  <input
    type="text"
    v-model="inputValue"
    :placeholder="props.placeholder"
    :class="styles.input"
    @input="onInput"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";

import styles from "./styles.module.scss";

type BaseInputEmits = {
  "update:model-value": [value: string];
};
interface BaseInputProps {
  placeholder: string;
  modelValue: string;
}

const props = defineProps<BaseInputProps>();
const emits = defineEmits<BaseInputEmits>();

const inputValue = ref<string>(props.modelValue);

const onInput = (): void => {
  emits("update:model-value", inputValue.value);
};
</script>
