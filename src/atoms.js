import { atom } from "jotai";

// For the product URL input
export const productURLAtom = atom("");

// For the product details input
export const productDetailsAtom = atom({
  name: "",
  about: "",
  description: "",
  price: "",
  images: [],
});

// For the selected images out of the product images
export const selectedImagesAtom = atom([]);

export const targetAudienceAtom = atom(""); // Default target audience

export const aspectRatioAtom = atom("16:9"); // Default aspect ratio
export const videoDurationAtom = atom(30); // Default video duration in seconds

// For the generated scripts
export const selectedScriptAtom = atom("");

export const selectedDurationAtom = atom("30");

export const selectedAspectRatioAtom = atom("portrait");
