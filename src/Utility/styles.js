import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing : border-box;
  
} 
html {
  font-size: 62.5%
}
body {
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro|Ultra&display=swap');
  font-family: 'Source Sans Pro', sans-serif;
  background-color:rgb(11,31,58);
  color: rgb(196,154,104);
  min-height: 100vh;
  padding: 0 5vw;
}
`;

export const Button = styled.div`
  display: inline-block;
  font-size: 2rem;
  padding: 1rem;
  background: linear-gradient(to bottom left, #1E1F26, #4D648D)
  border: solid #fff 3px;
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.8);
  transition-duration: 1500;
  position: relative;
  left: 23%;
  top: 10px;
  &:hover {
    box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.6);
    background: linear-gradient(to bottom left, #1E1F26, #4D648D)
    cursor: pointer;
  }
  &:active {
    transform: translate(0);
  }
`;

export const AnswerButton = styled.button`
  display: inline-block;
  font-size: 2rem;
  padding: 1rem;
  background: linear-gradient(to bottom left, #1E1F26, #4D648D)
  border: solid #fff 3px;
  border-radius: 1.5rem;
  box-shadow: 0.25rem 0.5rem 1rem rgba(0, 0, 0, 0.8);
  transition-duration: 1500;
  &:hover {
    box-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.6);
    background: linear-gradient(to bottom left, #1E1F26, #4D648D)
    cursor: pointer;
  }
  &:active {
    transform: translate(0);
  }
`;

export const Select = styled.select`
  display: block;
  margin: auto ;
  font-size: 2rem
  font-family: sans-serif;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 50%;
  border: 3px solid #DDDDDD;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
`;
