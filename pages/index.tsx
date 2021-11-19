import type { NextPage } from "next";
import styled from "styled-components";

const Para = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <div className="bg-indigo-500">
      Welcome
      <Para>asdf</Para>
      <h1>This is h1</h1>
    </div>
  );
};

export default Home;
