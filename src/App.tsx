function App() {
  return (
    <div className=" bg-gradient-to-b from-sky-500 to-sky-950 h-full grid grid-cols-[500px] place-content-center text-stone-50 gap-2">
      <div className="group flex flex-col gap-2">
        <h1>Hello Developer!</h1>
        <p>
          You're about to embark on a fun and interactive journey to create a
          dynamic dashboard that showcases the wonderful world of animals. This
          challenge will test your skills in React, API integration, and UI/UX
          design. As you navigate through this challenge, remember to prioritize
          user experience, code quality, and creativity.
        </p>
        <p>
          Before you dive in, take a moment to familiarize yourself with the
          provided{" "}
          <a
            href="../README.md"
            className=" group-hover:text-stone-950 transition-all duration-300"
          >
            documentation and requirements
          </a>
          . We've set up a scaffold for you to get started quickly, but the
          magic touch is all yours!
        </p>
        <p>
          Happy coding, and may your dashboard be as lively and dynamic as the
          animals it represents!
        </p>
        <div className="w-28 place-self-center stroke-slate-50 group-hover:stroke-red-950 group-hover:fill-slate-50 fill-transparent transition-all duration-300  flex gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,2 31.18,17.36 48,18.36 34,29.64 37.36,44 25,36.72 12.64,44 16,29.64 2,18.36 18.82,17.36" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,2 31.18,17.36 48,18.36 34,29.64 37.36,44 25,36.72 12.64,44 16,29.64 2,18.36 18.82,17.36" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
            <polygon points="25,2 31.18,17.36 48,18.36 34,29.64 37.36,44 25,36.72 12.64,44 16,29.64 2,18.36 18.82,17.36" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
