import type { NextPage } from "next";
import styled from "styled-components";

const Para = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <div className="bg-0">
      Welcome
      <Para>asdf</Para>
      <h1>This is h1</h1>
      <input className="" type="text" />
      <input type="checkbox" className="rounded text-indigo-500" />
    </div>
  );
};

export default Home;
