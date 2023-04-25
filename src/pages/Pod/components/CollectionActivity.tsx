export const CollectionActivity = ({
  setItemsFilterType,
  setItemsFilterValue,
  setSortDirection,
  setSortType,
  itemsFilterValue,
}: {
  setItemsFilterType: (type: string) => void;
  setItemsFilterValue: (value: string) => void;
  setSortDirection: (sortDirection: string) => void;
  setSortType: (sortType: string) => void;
  itemsFilterValue: string;
}) => {
  return (
    <div className="pb-28">
      <div className="flex justify-between">
        <div className="text-4xl font-bold mb-10">Collection Activity</div>
        <div>
          <div className="w-full max-w-md mx-auto">
            <div className="flex items-cent sm:flex-1er bg-white/5 rounded-full p-2 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-2 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                value={itemsFilterValue}
                onChange={(e) => setItemsFilterValue(e.target.value)}
                className="bg-transparent outline-none ml-2 pl-1 w-full rounded-full text-white"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <input
            className="hidden rounded-full p-5"
            type="radio"
            name="sortDirection"
            id="asc"
            value="asc"
            onChange={() => setSortDirection("asc")}
          />
          <label
            className="rounded-full font-bold p-5 bg-slate-800"
            htmlFor="asc"
          >
            <button>
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.27971 0.294C4.37285 0.200681 4.48368 0.126904 4.60571 0.0769997C4.72665 0.0261745 4.85652 -4.76837e-06 4.98771 -4.76837e-06C5.1189 -4.76837e-06 5.24877 0.0261745 5.36971 0.0769997C5.49174 0.126904 5.60258 0.200681 5.69571 0.294L9.69571 4.294C9.79115 4.38631 9.86726 4.49671 9.91958 4.61875C9.9719 4.74079 9.99939 4.87203 10.0004 5.00481C10.0015 5.13759 9.97611 5.26925 9.92575 5.39211C9.87538 5.51497 9.80105 5.62657 9.70709 5.72039C9.61313 5.81422 9.50143 5.88839 9.3785 5.93859C9.25557 5.98878 9.12387 6.01399 8.99109 6.01274C8.85831 6.0115 8.72711 5.98382 8.60515 5.93132C8.48318 5.87883 8.37289 5.80257 8.28071 5.707L5.98771 3.414V11C5.98771 11.2652 5.88235 11.5196 5.69482 11.7071C5.50728 11.8946 5.25293 12 4.98771 12C4.7225 12 4.46814 11.8946 4.28061 11.7071C4.09307 11.5196 3.98771 11.2652 3.98771 11V3.414L1.69471 5.707C1.50611 5.88916 1.25351 5.98995 0.99131 5.98767C0.729114 5.9854 0.478301 5.88023 0.292893 5.69482C0.107485 5.50941 0.00231622 5.2586 3.78026e-05 4.9964C-0.00224062 4.7342 0.0985537 4.4816 0.280712 4.293L4.27971 0.294Z"
                  fill="white"
                />
              </svg>
            </button>
          </label>
          <input
            className="hidden rounded-full"
            type="radio"
            name="sortDirection"
            id="desc"
            value="desc"
            onChange={() => setSortDirection("desc")}
          />
          <label className="rounded-full p-5 mr-3 bg-slate-800" htmlFor="desc">
            <button onClick={() => setSortDirection("desc")}>
              <svg
                width="10"
                height="12"
                viewBox="0 0 10 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.27971 11.706C4.37285 11.7993 4.48368 11.8731 4.60571 11.923C4.72665 11.9738 4.85652 12 4.98771 12C5.1189 12 5.24877 11.9738 5.36971 11.923C5.49174 11.8731 5.60258 11.7993 5.69571 11.706L9.69571 7.706C9.79115 7.61369 9.86726 7.50329 9.91958 7.38125C9.9719 7.25921 9.99939 7.12797 10.0004 6.99519C10.0015 6.86241 9.97611 6.73075 9.92575 6.60789C9.87538 6.48503 9.80105 6.37343 9.70709 6.27961C9.61313 6.18578 9.50143 6.11161 9.3785 6.06141C9.25557 6.01122 9.12387 5.98601 8.99109 5.98726C8.85831 5.9885 8.72711 6.01618 8.60515 6.06868C8.48318 6.12117 8.37289 6.19743 8.28071 6.293L5.98771 8.586V1C5.98771 0.734784 5.88235 0.48043 5.69482 0.292893C5.50728 0.105357 5.25293 0 4.98771 0C4.7225 0 4.46814 0.105357 4.28061 0.292893C4.09307 0.48043 3.98771 0.734784 3.98771 1V8.586L1.69471 6.293C1.50611 6.11084 1.25351 6.01005 0.99131 6.01233C0.729114 6.0146 0.478301 6.11977 0.292893 6.30518C0.107485 6.49059 0.00231622 6.7414 3.78026e-05 7.0036C-0.00224062 7.2658 0.0985537 7.5184 0.280712 7.707L4.27971 11.706Z"
                  fill="white"
                  fillOpacity="1"
                />
              </svg>
            </button>
          </label>

          <button
            className="rounded-full"
            onClick={() => setSortType("recency")}
          >
            <input
              className="hidden"
              type="radio"
              name="sortType"
              value="recency"
              id="recency"
            />
            <label
              className="rounded-full font-bold p-3 px-5 mr-2 bg-slate-800"
              htmlFor="recency"
            >
              Recency
            </label>
          </button>

          <button className="" onClick={() => setSortType("price")}>
            <input className="hidden" type="radio" name="sortType" id="price" />
            <label
              className="rounded-full font-bold p-3 px-5 bg-slate-800"
              htmlFor="price"
            >
              Price
            </label>
          </button>
        </div>
        <div>
          <button onClick={() => setItemsFilterType("all")}>
            <input
              className="hidden"
              type="radio"
              name="filterType"
              id="all"
              value="all"
            />
            <label
              className="rounded-full font-bold p-3 px-5 mr-2 bg-slate-800"
              htmlFor="all"
            >
              All items
            </label>
          </button>
          <button onClick={() => setItemsFilterType("my")}>
            <input
              className="hidden"
              type="radio"
              name="filterType"
              id="my"
              value="my"
            />
            <label
              className="rounded-full font-bold p-3 px-5 mr-2 bg-slate-800"
              htmlFor="my"
            >
              My items
            </label>
          </button>
          <button className="rounded-full font-bold p-2.5 px-5 bg-slate-800">
            <span className="opacity-100 text-white">More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionActivity;
