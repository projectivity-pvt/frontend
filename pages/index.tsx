import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div
        className="custom"
        tw="bg-indigo-500 text-red-500 select-all text-xl "
      >
        Welcome
      </div>
      <h1>h1 tag</h1>
      <h2>h2 tag</h2>
      <button tw="btn">Button</button>
    </>
  );
};

export default Home;
