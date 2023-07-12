<template>
  <div class="fixed inset-0 h-full w-full flex items-center justify-center">
    <button class="btn btn-lg btn-primary" @click="quizStore.startQuiz()">
      Start
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useQuizStore } from "~/features/quiz/quizStore";

const quizStore = useQuizStore();
</script>

<style scoped></style>
