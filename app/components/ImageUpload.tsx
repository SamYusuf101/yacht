"use client";

import { CldUploadWidget } from "next-cloudinary";

import React from "react";

const ImageUpload = () => {
  return (
    <CldUploadWidget uploadPreset="lcm2a5an">
      {({ open }) => {
        //@ts-ignore
        function handleOnClick(e) {
          e.preventDefault();
          open();
        }
        return (
          <button className="button" onClick={handleOnClick}>
            Upload an Image
          </button>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
