import React, { useCallback, useState, useEffect, useRef } from "react";

import { Affirmation } from "./components/affirmation";
import { Question } from "./components/question/question";

import { getQuiz } from "../../services";
import { TQuiz } from "../../services/types/TQuiz";

import isEmpty from "lodash/isEmpty";

import * as S from "./styles";

export function Quiz() {
  const questionRef = useRef();

  const [quiz, setQuiz] = useState<TQuiz>({} as TQuiz);

  const onGetQuiz = useCallback(() => {
    const response = getQuiz();

    setQuiz(response);
  }, []);

  const onSelectOption = useCallback((option) => {
    questionRef.current?.setOption(option);
  }, []);

  useEffect(() => {
    onGetQuiz();
  }, [onGetQuiz]);

  return (
    <S.Wrapper>
      <S.Title>Fill in the missing world</S.Title>

      {!isEmpty(quiz) && (
        <S.Content>
          <S.Header>
            <Affirmation
              query={quiz.affirmation.query}
              draft={quiz.affirmation.draft}
            />
            <Question
              ref={questionRef}
              query={quiz.question.query}
              hidden={quiz.question.hidden}
            />
          </S.Header>

          <S.OptionsContent>
            {quiz.options?.map((option) => (
              <S.OptionButton
                key={option}
                value={option}
                onPress={() => onSelectOption(option)}
              />
            ))}
          </S.OptionsContent>
        </S.Content>
      )}

      <S.ContinueButton value="Continue" />
    </S.Wrapper>
  );
}
