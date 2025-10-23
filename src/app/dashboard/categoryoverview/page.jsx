import React from "react";
import CatCardss from "../../components/catcards"
import ChartLineMultiple from "../../components/catlinegraph"


const page = () => {
  return (
    <>
    <div className="pt-24 pl-80">
      <h1 className="text-3xl font-semibold mb-8 text-[#42A5F5] border-b-2 border-[#42A5F5] inline-block pb-2">
        Analytics Overview
      </h1>
    </div>

    <div className="ml-80">
      <CatCardss/>
    </div>

    <div className="">
      <ChartLineMultiple/>
    </div>
    </>
  );
};

export default page;
