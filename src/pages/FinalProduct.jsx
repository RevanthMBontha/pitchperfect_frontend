import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtomValue } from "jotai";
import {
  productDetailsAtom,
  selectedAspectRatioAtom,
  selectedScriptAtom,
} from "../atoms";
import Loading from "../components/Loading";

const FinalProduct = () => {
  const selectedScript = useAtomValue(selectedScriptAtom);
  const productDetails = useAtomValue(productDetailsAtom);
  const selectedAspectRatio = useAtomValue(selectedAspectRatioAtom);

  const { data, isLoading } = useQuery({
    queryKey: ["generate-video"],
    queryFn: async () => {
      const response = await axios.post(
        "http://localhost:8080/api/v1/generate-video",
        {
          script: selectedScript,
          images: productDetails?.image_urls,
          orientation: selectedAspectRatio,
        },
      );
      return response.data;
    },
    retry: false,
  });

  if (isLoading) return <Loading />;

  return (
    <div className="flex h-screen w-screen flex-col gap-y-2 bg-zinc-950 p-4 text-slate-50">
      <div className="flex h-full w-full">
        <div className="flex h-full w-full flex-col justify-center gap-y-8">
          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Script for the video</p>
            <p>{selectedScript}</p>
          </div>

          <div className="flex flex-col gap-y-2">
            <p className="text-xl font-semibold">Video Orientation</p>
            <p className="capitalize">{selectedAspectRatio}</p>
          </div>

          <a
            href={`http://localhost:8080/${data?.videoPath}`}
            download
            className="w-1/4 cursor-pointer rounded-md bg-sky-400 px-2 py-3 text-center hover:bg-sky-500"
          >
            Download
          </a>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <div className="mx-auto max-h-[640px] max-w-[640px] rounded-md border-2 border-white">
            <video className="h-auto w-full rounded-lg shadow-lg" controls>
              <source
                src={`http://localhost:8080/${data?.videoPath}`}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default FinalProduct;
