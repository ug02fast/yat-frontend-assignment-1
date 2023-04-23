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
    <div className="bg-[#090719] rounded-xl overflow-hidden shadow-md gradient-border">
      <img src={imageSrc} alt={yat} className="w-full object-cover" />
      <div className="bg-gradient-to-r from-yat-purple via-white-600 to-yat-purple p-12">
        <div className="flex justify-center relative text-white">8718</div>
        <div className="text-white">Capsule House</div>
      </div>
      <div className="bg-gradient-to-r from-yat-purple via-white-600 to-yat-blue p-12">
        <div className="flex justify-center relative">
          {!twitter ? (
            <div className="bg-gradient-to-r from-yat-darkblue to-yat-black text-white px-4 py-1 rounded-full border-2 border-indigo-500/50 min-w-max">
              <span>{yat}</span>
            </div>
          ) : (
            <div className="flex justify-center relative">
              <span className="bg-gradient-to-r from-yat-darkblue to-yat-black text-white px-4 py-1 rounded-full border-2 border-indigo-500/50 min-w-max relative z-10">
                {yat}
              </span>
              <span className="bg-gradient-to-r from-yat-darkblue to-yat-blue px-4 py-1 flex items-center rounded-full border-2 border-indigo-500/25 font-semibold text-link absolute left-[64px]">
                @
                <a className="link" href={`https://www.twitter.com/${twitter}`}>
                  {twitter}
                </a>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
