<template>
  <Question
    :question="currentQuestion"
    @time-finished="quizStore.onTimeFinished"
    @answer-select="quizStore.onAnswerSelect"
  />
  <Progress />
</template>

<script lang="ts" setup>
import { useQuizStore } from "~/features/quiz/quizStore";
import Question from "~/features/quiz/components/quizer/Question.vue";
import Progress from "~/features/quiz/components/quizer/Progress.vue";

const quizStore = useQuizStore();
const currentQuestion = computed(() => {
  return quizStore.questions[quizStore.currentQuestionIndex];
});
</script>

<style scoped></style>
