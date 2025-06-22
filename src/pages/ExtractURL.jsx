import { useAtom } from "jotai";
import { useNavigate } from "react-router";
import { productURLAtom } from "../atoms";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const ExtractURL = () => {
  const [url, setURL] = useAtom(productURLAtom);

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setURL(e.target.value);
  };

  const handleNext = () => {
    if (!url) toast.error("Please enter a URL");
    navigate("/edit-details");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-y-8 bg-zinc-950 text-slate-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Share <span className="text-sky-400">product link</span> to generate
          video
        </h1>
      </div>

      <div className="text-center">
        <p className="text-lg">Currently supports:</p>
        <p className="font-extralight">Items list</p>
      </div>

      <div className="flex h-fit w-1/2 items-center justify-center gap-x-2 rounded-lg bg-zinc-500 p-2">
        <input
          name="url"
          type="text"
          className="h-12 w-full rounded-md font-thin caret-slate-50 focus:outline-0"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter product URL here"
          autoFocus
          autoComplete="off"
          spellCheck="false"
          required
          pattern="https?://.+"
          title="Please enter a valid URL starting with http:// or https://"
          aria-label="Product URL"
        />
        <button
          onClick={handleNext}
          className="h-full w-36 cursor-pointer rounded-md bg-sky-400 hover:bg-sky-500"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ExtractURL;
