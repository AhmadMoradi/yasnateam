<template>
  <div class="fixed inset-0 flex flex-col items-center justify-center">
    <p>You have answered {{ correctness }}% of the questions</p>
    <button class="btn btn-lg btn-primary mt-4" @click="quizStore.restart()">
      Restart
    </button>
  </div>
</template>
<script lang="ts" setup>
import { useQuizStore } from "~/features/quiz/quizStore";

const quizStore = useQuizStore();

const correctness = computed(() => {
  const correctAnswersNo = quizStore.questions.reduce(
    (acc: number, q: { id: string; correct_answer: string }) => {
      if (quizStore.userAnswers?.[q.id] === q.correct_answer) {
        acc += 1;
      }
      return acc;
    },
    0,
  );
  return (correctAnswersNo / quizStore.questions.length) * 100;
});
</script>
