import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useAtom, useAtomValue } from "jotai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import {
  productDetailsAtom,
  selectedDurationAtom,
  selectedScriptAtom,
} from "../atoms";
import axios from "axios";

const titleMapping = {
  "How To": "how_to",
  "Brand Value": "brand_value",
  "Product Highlights": "product_highlights",
};

const GeneratedScript = ({ title }) => {
  const productDetails = useAtomValue(productDetailsAtom);
  const [selectedScript, setSelectedScript] = useAtom(selectedScriptAtom);
  const selectedDuration = useAtomValue(selectedDurationAtom);
  const [generatedScript, setGeneratedScript] = useState("");

  const { isLoading } = useQuery({
    queryKey: ["generate-script", title],
    queryFn: async () => {
      const response = await axios.post(
        `http://localhost:8080/api/v1/generate-script`,
        {
          product_details: productDetails,
          script_type: titleMapping[title],
          duration: selectedDuration,
        },
      );
      setGeneratedScript(response.data.script);
      return response.data.script;
    },
  });

  if (isLoading) return <div className="text-slate-50">Loading...</div>;

  return (
    <div
      onClick={() => setSelectedScript(generatedScript)}
      className="flex h-fit w-full cursor-pointer flex-col gap-y-2 rounded-md bg-zinc-700 p-4"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-x-2">
          {selectedScript === generatedScript && (
            <IoMdCheckmarkCircleOutline size={30} className="text-sky-400" />
          )}
          <p className="text-2xl font-semibold">{title}</p>
        </div>
      </div>
      <hr className="border-slate-300" />
      <p className="rounded-md bg-zinc-700 p-2 hover:bg-zinc-800">
        {generatedScript}
      </p>
    </div>
  );
};

export default GeneratedScript;
