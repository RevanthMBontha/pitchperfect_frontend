import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full w-screen text-slate-50">
      <section className="flex h-screen w-screen flex-col items-center justify-center gap-y-16 bg-gradient-to-b from-indigo-600 via-sky-400 to-slate-50">
        <div className="flex w-full flex-col items-center justify-center gap-y-4">
          <h1 className="text-8xl font-extrabold text-slate-50">
            Product Videos That Sell.
          </h1>
          <p className="text-lg font-light text-slate-50">
            Powered by AI, Made for You!
          </p>
        </div>
        <button
          onClick={() => navigate("/extract-url")}
          className="cursor-pointer rounded-md border-2 border-solid border-black p-4 text-2xl font-bold text-slate-50"
        >
          Try for Free
        </button>
      </section>
    </div>
  );
};

export default Home;
