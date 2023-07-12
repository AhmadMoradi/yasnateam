export default defineEventHandler((_event) => ({
  result: [
    {
      id: "Pu8FIV",
      title: "This is first Question ?",
      time: 10,
      correct_answer: "6JyKfr",
      answers: shuffle([
        {
          id: "EqGVeo",
          content: "Mistake answer 1",
        },
        {
          id: "6JyKfr",
          content: "Correct answer",
        },
        {
          id: "rsOVso",
          content: "Mistake answer 2",
        },
        {
          id: "na0D9I",
          content: "Mistake answer 3",
        },
      ]),
    },
    {
      id: "a1pRcs",
      title: "This is second Question ?",
      time: 10,
      correct_answer: "i4HG5G",
      answers: shuffle([
        {
          id: "MMfr7B",
          content: "Mistake answer 1",
        },
        {
          id: "i4HG5G",
          content: "Correct answer",
        },
        {
          id: "59u6sm",
          content: "Mistake answer 2",
        },
        {
          id: "YFtt5c",
          content: "Mistake answer 3",
        },
      ]),
    },
    {
      id: "nD5SQs",
      title: "This is third Question ?",
      time: 10,
      correct_answer: "Wg7i0m",
      answers: shuffle([
        {
          id: "wb4T4x",
          content: "Mistake answer 1",
        },
        {
          id: "Wg7i0m",
          content: "Correct answer",
        },
        {
          id: "74oMJX",
          content: "Mistake answer 2",
        },
        {
          id: "vmoo0Q",
          content: "Mistake answer 3",
        },
      ]),
    },
    {
      id: "MA7qzK",
      title: "This is fourth Question ?",
      time: 10,
      correct_answer: "eo1MHH",
      answers: shuffle([
        {
          id: "Af2NXT",
          content: "Mistake answer 1",
        },
        {
          id: "eo1MHH",
          content: "Correct answer",
        },
        {
          id: "muyOh1",
          content: "Mistake answer 2",
        },
        {
          id: "ixiKKB",
          content: "Mistake answer 3",
        },
      ]),
    },
    {
      id: "wVy7B5",
      title: "This is fifth Question ?",
      time: 10,
      correct_answer: "17ktrQ",
      answers: shuffle([
        {
          id: "ZbbedD",
          content: "Mistake answer 1",
        },
        {
          id: "17ktrQ",
          content: "Correct answer",
        },
        {
          id: "3bL92M",
          content: "Mistake answer 2",
        },
        {
          id: "8XCghi",
          content: "Mistake answer 3",
        },
      ]),
    },
  ],
}));

function shuffle(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
