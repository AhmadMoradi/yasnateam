<template>
  <button class="btn btn-primary btn-lg">Start</button>
</template>

<script lang="ts" setup>
import { useAppStore } from "~/store/appStore";

const store = useAppStore();
</script>

<style scoped></style>
