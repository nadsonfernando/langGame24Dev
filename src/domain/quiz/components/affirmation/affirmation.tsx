import React, { useMemo } from "react";

import * as S from "./styles";

import isEqual from "lodash/isEqual";

type Props = {
  query: string;
  draft: string;
};

export function Affirmation({ query, draft }: Props) {
  const words = useMemo(() => {
    return query.split(" ");
  }, []);

  return (
    <S.Wrapper>
      <S.WordsContent>
        {words?.map((word, index) => (
          <S.WordContent isDraft={isEqual(word, draft)} key={index.toString()}>
            <S.Word isDraft={isEqual(word, draft)}>{`${word} `}</S.Word>
          </S.WordContent>
        ))}
      </S.WordsContent>
    </S.Wrapper>
  );
}
