<template>
  <article :class="styles.item">
    <img :src="props.image" :alt="props.name" :class="styles.img" />

    <div :class="styles.info">
      <Typography variant="font-s" :class="styles.name">
        {{ props.name }}
      </Typography>
      <Typography variant="font-s" :class="styles.email">
        {{ props.email }}
      </Typography>
    </div>
  </article>
</template>

<script setup lang="ts">
import { Typography } from "shared/ui";
import type { User } from "../../../model";

import styles from "./styles.module.scss";

const props = defineProps<User>();
</script>
