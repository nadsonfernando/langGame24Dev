// Firebase implementartion
//Mock

import { TQuiz } from "./types/TQuiz";

export function getQuiz(): TQuiz {
  return {
    affirmation: {
      query: "The house is small.",
      draft: "house",
    },
    question: {
      query: "Das Hause ist klein.",
      hidden: "Hause",
    },
    options: ["folgen", "Schaf", "Bereiden", "Hause"],
  };
}
