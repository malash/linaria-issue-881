import React from "react";
import ReactDOM from "react-dom";
import { styled } from "@linaria/react";

const Title = styled.h1`
  font-family: sans-serif;
  font-size: 48px;
  color: #f15f79;
`;

const App = () => <Title>Hello world!</Title>;

ReactDOM.render(<App />, document.getElementById("root"));
