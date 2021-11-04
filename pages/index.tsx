import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Para = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return (
    <div className="bg-indigo-500">
      Welcome
      <Para>asdf</Para>
    </div>
  );
};

export default Home;
