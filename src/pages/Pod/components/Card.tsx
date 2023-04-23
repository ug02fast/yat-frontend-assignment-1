import React from "react";

const Card = ({
  imageSrc,
  yat,
  twitter,
}: {
  imageSrc: string;
  yat: string;
  twitter: string;
}) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md gradient-border">
      <img src={imageSrc} alt={yat} className="w-full object-cover" />
      <div className="bg-gradient-to-r from-yat-blue via-white-600 to-yat-purple p-12">
        <div className="flex justify-center relative">
          {!twitter ? (
            <div className="bg-gradient-to-r from-yat-darkblue to-yat-blue text-white px-4 py-1 rounded-full border-2 border-indigo-500/50 min-w-max">
              <span>{yat}</span>
            </div>
          ) : (
            <div className="flex justify-center relative">
              <span className="bg-gradient-to-r from-yat-darkblue to-yat-blue text-white px-4 py-1 rounded-full border-2 border-indigo-500/50 min-w-max relative z-10">
                {yat}
              </span>
              <span className="bg-gradient-to-r from-yat-darkblue to-yat-blue px-4 py-1 flex items-center rounded-full border-2 border-indigo-500/25 font-semibold text-white absolute left-[64px]">
                {twitter}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
