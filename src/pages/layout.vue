<template>
  <div :class="styles.container">
    <MainHeader />

    <div :class="styles.wrapper">
      <Sidebar />

      <div :class="styles.page">
        <RouterView v-slot="{ Component }">
          <Suspense>
            <template #default>
              <component :is="Component" />
            </template>
          </Suspense>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Sidebar } from "widgets/sidebar";
import { MainHeader } from "shared/ui";

import styles from "./styles.module.scss";
</script>
