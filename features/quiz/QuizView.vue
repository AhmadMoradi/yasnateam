<template>
  <div class="container">
    <Start v-if="quizStore.status === 'idle'" />
    <div
      v-if="quizStore.status === 'loading-questions'"
      class="fixed inset-0 flex items-center justify-center"
    >
      loading questions...
    </div>
    <Quizer v-if="quizStore.status === 'running'" />
    <Result v-if="quizStore.status === 'finished'" />
  </div>
</template>

<script lang="ts" setup>
import { useQuizStore } from "~/features/quiz/quizStore";

import Start from "./components/Start.vue";
import Quizer from "./components/quizer/Quizer.vue";
import Result from "./components/Result.vue";

const quizStore = useQuizStore();
</script>

<style scoped></style>
