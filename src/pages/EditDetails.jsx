import { useAtom, useAtomValue } from "jotai";
import { useNavigate } from "react-router";
import {
  IoPhonePortraitOutline,
  IoPhoneLandscapeOutline,
} from "react-icons/io5";
import {
  productDetailsAtom,
  productURLAtom,
  selectedAspectRatioAtom,
} from "./../atoms.js";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../components/Loading.jsx";

const EditDetails = () => {
  const url = useAtomValue(productURLAtom);
  const [productDetails, setProductDetails] = useAtom(productDetailsAtom);
  const [selectedAspectRatio, setSelectedAspectRatio] = useAtom(
    selectedAspectRatioAtom,
  );

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleNext = () => {
    navigate("/edit-script"); // Navigate to the next page
  };

  const { isLoading } = useQuery({
    queryKey: ["get-product-details"],
    queryFn: async () => {
      const response = await axios.get(
        `http://localhost:8080/api/v1/scrape-product-url?url=${url}`,
      );
      setProductDetails(response.data.data);
      return response.data.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="flex h-screen w-screen flex-col gap-y-4 bg-zinc-950 p-4 text-slate-50">
      <h1 className="text-2xl font-bold">
        Edit Product Details and Media as needed:
      </h1>

      {/* Details */}
      <div className="flex h-full w-full">
        {/* Product Details */}
        <div className="flex h-full w-full flex-col gap-y-4 p-2">
          <div className="flex flex-col gap-y-2">
            <label className="font-semibold" htmlFor="title">
              Product Name:
            </label>
            <input
              name="title"
              type="text"
              className="h-12 w-3/4 rounded-md bg-zinc-500 pl-1 caret-slate-50 focus:outline-0"
              value={productDetails.title || ""}
              onChange={(e) =>
                setProductDetails({ ...productDetails, name: e.target.value })
              }
              placeholder="Enter product name"
            />
          </div>

          <div className="flex flex-col gap-y-4">
            <label className="font-semibold" htmlFor="title">
              Product Description:
            </label>
            <textarea
              name="title"
              className="h-48 w-3/4 rounded-md bg-zinc-500 pl-1 caret-slate-50 focus:outline-0"
              value={productDetails.description || ""}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  description: e.target.value,
                })
              }
              placeholder="Enter product description"
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <label className="font-semibold" htmlFor="title">
              Product About:
            </label>
            <textarea
              name="title"
              className="h-48 w-3/4 rounded-md bg-zinc-500 pl-1 caret-slate-50 focus:outline-0"
              value={productDetails.about || ""}
              onChange={(e) =>
                setProductDetails({
                  ...productDetails,
                  about: e.target.value,
                })
              }
              placeholder="Enter product description"
            />
          </div>
        </div>

        {/* Media Assets */}
        {/* TODO: Have to work on how to display the media assets */}
        <div className="flex h-full w-full flex-col gap-y-4 p-2">
          {/* Images displayed here */}
          <div className="flex h-full w-full flex-col gap-y-2">
            <p className="font-semibold">Media Assets</p>
            <div className="flex h-full w-full flex-wrap gap-4 overflow-y-auto rounded-md bg-zinc-500 p-4">
              {productDetails?.image_urls?.map((item, idx) => (
                <div className="h-fit w-fit" key={idx}>
                  <img className="h-24 w-auto" src={item} />
                </div>
              ))}
            </div>
          </div>

          {/* Video Length */}
          <div className="flex w-full flex-col gap-y-2">
            <div className="flex flex-col gap-y-2">
              <label className="font-semibold">Aspect Ratio</label>
              <div className="flex gap-x-2">
                <div
                  onClick={() => setSelectedAspectRatio("portrait")}
                  className={`flex cursor-pointer items-center gap-x-2 rounded-md border ${selectedAspectRatio === "portrait" ? "border-sky-400 text-sky-400" : "border-slate-50 text-slate-50"} p-2`}
                >
                  <IoPhonePortraitOutline size={24} />
                  <span>9:16</span>
                </div>
                <div
                  onClick={() => setSelectedAspectRatio("landscape")}
                  className={`flex cursor-pointer items-center gap-x-2 rounded-md border ${selectedAspectRatio === "landscape" ? "border-sky-400 text-sky-400" : "border-slate-50 text-slate-50"} p-2`}
                >
                  <IoPhoneLandscapeOutline size={24} />
                  <span>16:9</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          className="h-12 w-36 cursor-pointer rounded-md bg-sky-400 text-lg hover:bg-sky-500"
        >
          Generate Script
        </button>
      </div>
    </div>
  );
};

export default EditDetails;
