import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import he from 'he';
import { Box, Typography, Paper, Button, makeStyles } from '@material-ui/core';
import styled from 'styled-components';

import * as actions from '../../store/action/rootAction';
import { Button as Response } from '../../Utility/styles';

const Answer = styled(Button)`
display: inline-block;
color: #111;
font-size: 2em;
font-weight: 600;

width: 50%;
margin-bottom: 15px;

border: solid #dddddd 3px;
border-radius: 1.5rem;
box-shadow: '0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.8)';
transition-duration: 1500;
@media (max-width: 768px) {
width: '95%';
};
&:disabled {
    color: #111;
}
background: ${(props) => {
  if (props.answered && props.index === props.correctanswerindex)
    return '#2ECC40';
  else if (props.answered && props.index === props.answeredindex)
    return '#FF4136';
  else return '#fff';
}};
&:hover {
  background: ${(props) => {
    if (props.answered && props.index === props.correctanswerindex)
      return '#2ECC40';
    else if (props.answered && props.index === props.answeredindex)
      return '#FF4136';
    else return '#dddddd';
  }};
  border: solid #111 3px;
  box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

&:active {
  transform: 'translate(0)';
};
}
`;

const useStyles = makeStyles((theme, props) => ({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(8),
      marginRight: theme.spacing(15),
      marginLeft: theme.spacing(3) * 2,

      padding: `${theme.spacing(5)}px 0 ${theme.spacing(5)}px 0`,
    },
    backgroundColor: theme.secondary.main,
    border: '2px solid #393E46',
    borderRadius: '22px',
    boxShadow: '0px 5px 31px -3px rgba(0,0,0,0.50)',
  },
  img: {
    display: 'inline-block',
    position: 'relative',
    left: '35%',
    top: '-20em',
  },
}));

const Question = ({
  answers,
  question,
  correct_answer,
  nextQuestion,
  handleQuit,
  gameEnd,
  questionCount,
}) => {
  const classes = useStyles();
  const [answeredIndex, setAnsweredIndex] = useState();
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState('');
  const [questionNumber, setQuestionNumber] = useState(1);

  const dispatch = useDispatch();

  const correctAnswerIndex =
    answers === undefined ? -1 : answers.indexOf(correct_answer);

  const next = () => {
    if (selected === correct_answer) {
      dispatch(actions.addScore());
    }
    setAnswered(false);
    nextQuestion();
    setQuestionNumber(questionNumber + 1);
  };
  const selectAnswer = (e) => {
    const { answer, index } = e.target.parentNode.dataset;
    setAnsweredIndex(+index);

    setAnswered(true);

    setSelected(answer);
  };

  return (
    <React.Fragment>
      {gameEnd ? (
        { handleQuit }
      ) : (
        <React.Fragment>
          <div className={classes.layout}>
            <Paper className={classes.paper} elevation={2}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
              >
                <Typography
                  style={{
                    color: '#eeeeee',
                    fontWeight: 400,
                    fontSize: '2em',
                  }}
                  component="h2"
                  variant="h4"
                  gutterBottom
                >
                  {questionNumber}. {he.decode(question)}
                </Typography>

                {answers.map((ans, index) => (
                  <Answer
                    className={classes.button}
                    key={index}
                    onClick={selectAnswer}
                    answered={answered ? 1 : 0}
                    answeredindex={answeredIndex}
                    correctanswerindex={correctAnswerIndex}
                    data-answer={ans}
                    data-index={index}
                    disabled={answered}
                    index={index}
                  >
                    {he.decode(ans)}
                  </Answer>
                ))}

                {questionNumber === questionCount || !answered ? (
                  <Response
                    onClick={handleQuit}
                    // onClick={returnScore}
                    style={{
                      visibility:
                        questionNumber === questionCount || !answered
                          ? 'visible'
                          : 'hidden',
                      left: 0,
                    }}
                  >
                    Game Over
                  </Response>
                ) : (
                  <Response
                    onClick={next}
                    style={{
                      visibility: answered ? 'visible' : 'hidden',
                      left: 0,
                    }}
                  >
                    Next Question
                  </Response>
                )}
              </Box>
            </Paper>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Question;
