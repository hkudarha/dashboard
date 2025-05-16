import React from "react";

const Card = ({ img, amount, percent, wide, blackAvatar }) => {
  return (
    <div
      className={`flex items-center justify-between px-4 py-2 rounded-full 
        ${wide ? "sm:flex-[1.5]" : "sm:flex-1"} 
        w-full sm:w-auto bg-white border text-black shadow-sm`}
    >
      <div className="flex items-center gap-2">
        <div
          className={`w-6 h-6 rounded-full overflow-hidden flex items-center justify-center 
            ${blackAvatar ? "bg-black" : ""}`}
        >
          <img src={img} alt="avatar" className="w-full h-full object-cover" />
        </div>
        <span className="text-sm font-semibold">{amount}</span>
      </div>
      <span className="text-xs text-gray-500">{percent}</span>
    </div>
  );
};

const DeshbordHeader4 = () => {
  return (
    <div className="flex flex-wrap gap-2 w-full mx-auto p-3 my-4 rounded-2xl bg-gray-100 items-center justify-center sm:justify-start">
      <Card img="https://i.pravatar.cc/40?img=30" amount="$209,633" percent="39.63%" wide />
      <Card img="https://i.pravatar.cc/40?img=31" amount="$209,633" percent="39.63%" />
      <Card img="https://i.pravatar.cc/40?img=32" amount="$209,633" percent="39.63%" />
      <Card img="https://i.pravatar.cc/40?img=33" amount="$209,633" percent="39.63%" blackAvatar />
      <button className="bg-black text-white text-sm px-5 py-2 rounded-full w-full sm:w-auto">
        Details
      </button>
    </div>
  );
};

export default DeshbordHeader4;
