export function fetchQuestions() {
  return useFetch("/api/questions", { pick: ["result"] });
}
