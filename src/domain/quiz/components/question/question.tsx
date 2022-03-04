import React, {
  useMemo,
  useState,
  forwardRef,
  useImperativeHandle,
} from "react";

import * as S from "./styles";

import isEqual from "lodash/isEqual";
import isEmpty from "lodash/isEmpty";

type Props = {
  query: string;
  hidden: string;
};

function QuestionImpl({ query, hidden }: Props, ref) {
  const [option, setOption] = useState<string>("");

  const words = useMemo(() => {
    return query.split(" ");
  }, []);

  useImperativeHandle(ref, () => ({
    setOption,
  }));

  return (
    <S.Wrapper>
      <S.WordsContent>
        {words?.map((word, index) => (
          <S.WordContent
            isHide={isEqual(word, hidden) && !isEmpty(option)}
            isHidden={isEqual(word, hidden)}
            key={index.toString()}>
            {isEqual(word, hidden) && !isEmpty(option) && (
              <S.Option value={option} onPress={() => setOption("")} />
            )}

            {!isEqual(word, hidden) && <S.Word>{`${word} `}</S.Word>}

            {isEqual(word, hidden) && isEmpty(option) && (
              <S.Word isHidden={isEqual(word, hidden)}>{`${word} `}</S.Word>
            )}
          </S.WordContent>
        ))}
      </S.WordsContent>
    </S.Wrapper>
  );
}

export const Question = forwardRef(QuestionImpl);
