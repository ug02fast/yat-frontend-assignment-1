import { PodToken } from "../../../mocks/handlers/pod";
import React from "react";

function daysAgo(timestamp: string): number {
  const date = new Date(timestamp);
  const now = new Date();
  const difference = now.getTime() - date.getTime();
  const days = Math.round(difference / (1000 * 60 * 60 * 24));
  return days;
}

const Card = ({
  imageSrc,
  yat,
  twitter,
  assetId,
  name,
  token,
}: {
  imageSrc: string;
  yat: string;
  twitter: string;
  assetId: number;
  name: string;
  token: PodToken;
}) => {
  return (
    <div className="bg-[#090719] rounded-xl overflow-hidden shadow-md gradient-border relative">
      <img src={imageSrc} alt={yat} className="w-full object-cover" />
      <div className="top-2 left-3 rounded-lg px-2 py-1 absolute bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg text-[8px] font-bold">
        {daysAgo(token.transaction.date)}D AGO
      </div>
      <div className="flex absolute top-64 left-3 bg-gradient-to-r from-yat-green via-[#43C57799]-600 to-yat-black rounded-lg px-2 py-1 text-[12px]">
        Bought
        <svg
          width="8"
          height="14"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pt-1 mx-1"
        >
          <path d="M0.25 6L4 8.25V4.5L0.25 6Z" fill="#EEEEEE" />
          <path d="M4 8.25L7.75 6L4 4.5V8.25Z" fill="#CDCDCD" />
          <path d="M7.75 6L4 0V4.5L7.75 6Z" fill="#EEEEEE" />
          <path d="M4 0L0.25 6L4 4.5V0Z" fill="white" />
          <path d="M0.25 6.75L4 12V9L0.25 6.75Z" fill="white" />
          <path d="M4 12L7.75 6.75L4 9V12Z" fill="#EEEEEE" />
        </svg>
        {token.transaction.amount}
      </div>
      <div className="bg-gradient-to-br from-yat-purple via-white-600 to-yat-darkblue p-4 text-left">
        <div className="text-white font-bold">#{assetId}</div>
        <div className="text-slate-600 text-sm">{name}</div>
      </div>
      <div className="bg-gradient-to-r from-yat-purple via-white-600 to-yat-blue p-4">
        <div className="flex justify-center relative">
          {!twitter ? (
            <div className="bg-gradient-to-r from-yat-darkblue to-yat-black text-white px-4 py-1 rounded-full border-2 border-indigo-500/50 min-w-max">
              <span>{yat}</span>
            </div>
          ) : (
            <div className="flex justify-center relative">
              <span className="bg-gradient-to-b from-yat-darkblue to-yat-black text-white px-4 py-1 rounded-full border-2 border-indigo-500/50 min-w-max">
                {yat}
              </span>
              <span className="bg-gradient-to-r from-yat-darkblue to-yat-blue px-4 py-1 flex items-center rounded-full border-2 border-indigo-500/25 font-semibold text-link">
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
