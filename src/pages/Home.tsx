import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "samit";
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-700 via-pink-600 to-indigo-900 text-white">
      <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight text-center animate-crazy drop-shadow-[0_0_20px_rgba(255,255,255,0.75)]">
        samit
      </h1>
      <p className="mt-6 text-lg md:text-xl max-w-xl text-center text-white/75 animate-pulse">
        Welcome to the most ridiculously over-the-top animated title you&apos;ll ever see.
      </p>
    </main>
  );
};

export default Home;
