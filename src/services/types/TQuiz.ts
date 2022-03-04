export type TQuiz = {
  affirmation: {
    query: string;
    draft: string;
  };
  question: {
    query: string;
    hidden: string;
  };
  options: string[];
};
