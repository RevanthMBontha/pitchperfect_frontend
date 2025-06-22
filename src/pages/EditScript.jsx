import { useNavigate } from "react-router";
import GeneratedScript from "../components/GeneratedScript";
import { useAtomValue } from "jotai";
import { selectedScriptAtom } from "../atoms";

const EditScript = () => {
  const navigate = useNavigate();
  const selectedScript = useAtomValue(selectedScriptAtom);

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };
  const handleNext = () => {
    navigate("/final-product"); // Navigate to the next page
  };
  return (
    <div className="flex h-screen w-screen flex-col gap-y-4 bg-zinc-950 p-4 text-slate-50">
      <h1 className="text-2xl font-bold">
        Choose the generated script that best fits your product video:
      </h1>

      <div className="mx-auto flex h-full w-3/5 flex-col gap-y-2 overflow-y-auto rounded-md bg-zinc-500 p-2">
        <GeneratedScript title={"How To"} />
        <GeneratedScript title={"Brand Value"} />
        <GeneratedScript title={"Product Highlights"} />
      </div>

      {/* Action Buttons */}
      <div className="mb-4 flex h-fit w-full items-center justify-center gap-x-8">
        <button
          onClick={handleGoBack}
          className="h-12 w-36 cursor-pointer rounded-md border border-white bg-transparent text-lg hover:bg-zinc-600"
        >
          Go Back
        </button>

        <button
          onClick={handleNext}
          disabled={!selectedScript}
          className="h-12 w-36 cursor-pointer rounded-md bg-sky-400 text-lg hover:bg-sky-500"
        >
          Generate Video
        </button>
      </div>
    </div>
  );
};

export default EditScript;
