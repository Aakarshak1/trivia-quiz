import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import * as actions from '../../store/action/rootAction';

const ScoreParagraph = styled.p`
  margin: 2rem auto;
  font-size: 3rem;
  position: absolute;
  left: 50%;
`;

const Scores = styled.ul`
  list-style-type: none;
  margin: 1rem auto;
  font-size: 1.5rem;
`;
const Score = () => {
  const score = useSelector((state) => state.user.score);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getScore());
    // return () => {  /* cleanup */  }
  }, []);
  return (
    <React.Fragment>
      <ScoreParagraph>Score: {score}</ScoreParagraph>
    </React.Fragment>
  );
};

export default Score;
