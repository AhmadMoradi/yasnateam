<template>
  <form class="mt-4 flex flex-col items-center">
    <p class="p-4 bg-blue-200 rounded-lg w-75 text-center">
      {{ question.title }}
    </p>
    <div class="flex flex-col items-center my-4">
      Counter Time: {{ remainingTime }}S
      <div class="timer w-[320px] rounded-full bg-gray-200 mt-3">
        <div
          class="bg-green-500 rounded-full h-4 self-start"
          :style="{ width: (remainingTime / question.time) * 100 + '%' }"
        ></div>
      </div>
    </div>
    <div class="mt-2 flex flex-col w-full items-center">
      <label
        v-for="ans in question.answers"
        :key="ans.id"
        class="bg-yellow-100 my-2 p-3 rounded-lg w-50 cursor-pointer hover:bg-yellow-300"
      >
        <input
          type="radio"
          v-model="selectedAnswer"
          :value="ans.id"
          name="answer"
          class="invisible"
          @change="onAnswerSelect"
        />
        {{ ans.content }}
      </label>
    </div>
  </form>
</template>

<script lang="ts" setup>
interface Props {
  question: {
    id: string;
    title: string;
    time: number;
    answers: Array<{ id: string; content: string }>;
  };
}

const props = defineProps<Props>();
const emit = defineEmits(["time-finished", "answer-select"]);

const remainingTime = ref(0);
const timerId = ref();
const selectedAnswer = ref<string>();
function startTimer() {
  remainingTime.value = props.question.time;
  clearInterval(timerId.value);
  timerId.value = setInterval(() => {
    remainingTime.value = remainingTime.value - 1;
    if (remainingTime.value === 0) {
      clearInterval(timerId.value);
      emit("time-finished", props.question.id);
    }
  }, 1000);
}

function onAnswerSelect() {
  emit("answer-select", {
    questionId: props.question.id,
    answerId: selectedAnswer.value,
  });
}

watch(
  () => props.question,
  () => {
    startTimer();
  },
  { immediate: true },
);
</script>

<style></style>
