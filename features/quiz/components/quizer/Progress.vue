<template>
  <div class="flex gap-2 justify-center">
    <div
      v-for="q in quizStore.questions"
      :key="q.id"
      class="w-8 h-8 rounded-full border"
      :style="{
        backgroundColor: quizStore.colors[q.id],
      }"
    />
  </div>
</template>

<script lang="ts" setup>
import { useQuizStore } from "~/features/quiz/quizStore";

const quizStore = useQuizStore();
</script>

<style scoped></style>
