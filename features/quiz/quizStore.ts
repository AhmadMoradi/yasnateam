import { defineStore } from "pinia";
import { fetchQuestions } from "~/features/quiz/quizService";

export const useQuizStore = defineStore("quiz", () => {
  const status = ref("idle");
  const questions = ref();
  const currentQuestionIndex = ref<number>(0);
  const userAnswers = ref<Record<string, string | null>>();

  const colors = computed(() => {
    if (status.value === "running") {
      return questions.value.reduce(
        (
          acc: Record<string, string>,
          x: { id: string; correct_answer: string },
          index: number,
        ) => {
          if (index < currentQuestionIndex.value) {
            acc[x.id] =
              userAnswers.value?.[x.id] === x.correct_answer ? "green" : "red";
          } else {
            acc[x.id] = "inherit";
          }
          return acc;
        },
        {},
      );
    } else {
      return {};
    }
  });

  async function startQuiz() {
    if (status.value === "idle") {
      status.value = "loading-questions";
      const { data, error } = await fetchQuestions();
      if (error.value) {
        status.value = "error";
        return;
      }
      questions.value = data.value?.result;
      status.value = "running";
    }
  }

  function onQuizFinished() {
    status.value = "finished";
  }

  function onTimeFinished(questionId: string) {
    userAnswers.value = { ...userAnswers.value, [questionId]: null };
    goToNextQuestion();
  }

  function goToNextQuestion() {
    if (currentQuestionIndex.value === questions.value.length - 1) {
      onQuizFinished();
    } else {
      currentQuestionIndex.value += 1;
    }
  }

  function onAnswerSelect(payload: { questionId: string; answerId: string }) {
    userAnswers.value = {
      ...userAnswers.value,
      [payload.questionId]: payload.answerId,
    };
    goToNextQuestion();
  }

  function restart() {
    userAnswers.value = {};
    currentQuestionIndex.value = 0;
    status.value = "idle";
    questions.value = [];
  }

  return {
    status,
    questions,
    currentQuestionIndex,
    userAnswers,
    colors,
    startQuiz,
    onTimeFinished,
    onAnswerSelect,
    restart,
  };
});
