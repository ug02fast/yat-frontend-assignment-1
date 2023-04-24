import Card from "./components/Card";
import { Pod } from "../../mocks/handlers/pod";
import { useQuery } from "react-query";
import { useState } from "react";

const DescriptionBlock = ({
  title,
  amount,
}: {
  title: string;
  amount: number;
}) => (
  <div className="border border-gray-300 p-4 rounded-lg">
    <h4 className="text-lg font-semibold mb-2">{title}</h4>
    <p className="text-xl font-bold text-shadow-glow animate-glow">{amount}</p>
  </div>
);

const CollectionDescription = ({ pod }: { pod: Pod }) => {
  return (
    <div className="pb-28">
      <div className="flex items-start justify-between mb-8 flex-wrap">
        <div className="flex items-center mb-8 ">
          <img
            src={pod.tokens[0].asset.url}
            alt={pod.name}
            className="w-24 h-24 rounded-md mr-4 gradient-border"
          />
          <div className="text-left">
            <h2 className="font-bold mb-2 text-white text-5xl">{pod.name}</h2>
            <p className="text-gray-700 text-base">{pod.description}</p>
          </div>
        </div>
        <div className="flex space-x-4 flex-wrap">
          <DescriptionBlock title="Assets" amount={pod.stats.tokens} />
          <DescriptionBlock title="Hodlers" amount={pod.stats.owners} />
          <DescriptionBlock title="Volume" amount={pod.stats.volume.monthly} />
          <DescriptionBlock
            title="Floor Price"
            amount={pod.stats.floorPrice.current}
          />
        </div>
      </div>
    </div>
  );
};

const PodGallery = ({
  pod,
  sortDirection,
  sortType,
  itemsFilterValue,
  itemsFilterType,
}: {
  sortType: string;
  sortDirection: string;
  pod: Pod;
  itemsFilterValue: string;
  itemsFilterType: string;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pod.tokens
        .sort((a, b) => {
          if (sortDirection === "asc" && sortType === "recency") {
            return (
              new Date(b.transaction.date).getTime() -
              new Date(a.transaction.date).getTime()
            );
          } else if (sortDirection === "desc" && sortType === "recency") {
            return (
              new Date(a.transaction.date).getTime() -
              new Date(b.transaction.date).getTime()
            );
          } else if (sortDirection === "asc" && sortType === "price")
            return a.transaction.amount - b.transaction.amount;
          else if (sortDirection === "desc" && sortType === "price")
            return b.transaction.amount - a.transaction.amount;
          else return 0;
        })
        .filter((token) => {
          if (itemsFilterType === "all") return true;
          else if (itemsFilterType === "my")
            return token.owner.yat === "⭐🤖⭐";
          else return false;
        })
        .filter((token) =>
          token.collection.name
            .toLowerCase()
            .includes(itemsFilterValue.toLowerCase())
        )
        .map((token, index) => (
          <Card
            key={index}
            imageSrc={token.asset.url}
            yat={token.owner.yat}
            twitter={token.owner.twitter}
          />
        ))}
    </div>
  );
};

const CollectionActivity = ({
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
        <div className="text-4xl font-bold">Collection Activity</div>
        <div>
          <div className="w-full max-w-md mx-auto mt-10">
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
          />
          <label className="rounded-full font-bold p-5" htmlFor="asc">
            <button
              className="rounded-full"
              onClick={() => setSortDirection("asc")}
            >
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
            className="hidden rounded-full p-5"
            type="radio"
            name="sortDirection"
            id="desc"
            value="desc"
          />
          <label className="rounded-full p-3" htmlFor="desc">
            <button
              className="rounded-full p-3"
              onClick={() => setSortDirection("desc")}
            >
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
                  fill-opacity="1"
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
              className="rounded-full font-bold p-3 px-5"
              htmlFor="recency"
            >
              Recency
            </label>
          </button>

          <button className="" onClick={() => setSortType("price")}>
            <input className="hidden" type="radio" name="sortType" id="price" />
            <label className="rounded-full font-bold p-3 px-5" htmlFor="price">
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
            <label className="rounded-full font-bold p-3 px-5" htmlFor="all">
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
            <label className="rounded-full font-bold p-3 px-5" htmlFor="my">
              My items
            </label>
          </button>
          <button className="rounded-full font-bold p-3 px-5 bg-white opacity-5">
            <span className="opacity-100 text-black">More Filters</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const TopRowNav = () => {
  return (
    <div>
      <div className="flex justify-center mb-24">
        <button className="w-12 h-12 mr-4 rounded-full bg-slate-800 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.5 21.285H8.92857C9.20471 21.285 9.42857 21.0612 9.42857 20.785V17.4279C9.42857 16.785 9.42857 14.8565 12 14.8565C14.5714 14.8565 14.5714 16.785 14.5714 17.4279V20.785C14.5714 21.0612 14.7953 21.285 15.0714 21.285H20.5C20.7761 21.285 21 21.0612 21 20.785V10.6335C21 10.0496 20.7449 9.49494 20.3016 9.11497L12.6508 2.55715C12.2763 2.23616 11.7237 2.23616 11.3492 2.55715L3.69842 9.11497C3.25513 9.49494 3 10.0496 3 10.6335V20.785C3 21.0612 3.22386 21.285 3.5 21.285Z"
              fill="white"
              fill-opacity="0.7"
            />
          </svg>
        </button>
        <button className="w-12 h-12 mr-4 rounded-full bg-slate-800 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9968 3C14.7191 3 16.9466 5.22743 16.9466 7.94988C16.9466 10.6723 14.7191 12.8998 11.9968 12.8998C9.27438 12.8998 7.04688 10.6723 7.04688 7.94988C7.04688 5.2275 9.27438 3 11.9968 3Z"
              fill="white"
              fill-opacity="0.7"
            />
            <path
              d="M11.9999 14.2497C12.6749 14.2497 13.3274 14.1372 13.9574 13.9347C15.9375 13.2823 18.1199 13.8223 19.4475 15.4197C20.4149 16.6123 21 18.1424 21 19.7848C21 20.7074 20.2575 21.4499 19.3349 21.4499H4.66505C3.7425 21.4499 3 20.7074 3 19.7848C3 18.1423 3.5849 16.6123 4.5525 15.4197C5.85738 13.8221 8.06243 13.2821 10.0424 13.9347C10.6723 14.1372 11.3249 14.2497 11.9999 14.2497Z"
              fill="white"
              fill-opacity="0.7"
            />
          </svg>
        </button>
        <button className="w-12 h-12 mr-4 rounded-full bg-slate-800 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.4 11.1C9.39411 11.1 10.2 10.2941 10.2 9.3C10.2 8.30589 9.39411 7.5 8.4 7.5C7.40589 7.5 6.6 8.30589 6.6 9.3C6.6 10.2941 7.40589 11.1 8.4 11.1ZM17.4 9.3C17.4 10.2941 16.5941 11.1 15.6 11.1C14.6059 11.1 13.8 10.2941 13.8 9.3C13.8 8.30589 14.6059 7.5 15.6 7.5C16.5941 7.5 17.4 8.30589 17.4 9.3ZM18.2004 14.6928C17.6268 17.2503 14.6782 19.2 12 19.2C9.3218 19.2 6.37319 17.2503 5.79964 14.6928C5.69087 14.2078 6.10294 13.8 6.6 13.8H17.4C17.8971 13.8 18.3091 14.2078 18.2004 14.6928Z"
              fill="white"
              fill-opacity="0.7"
            />
          </svg>
        </button>
        <button className="w-12 h-12 mr-4 rounded-full bg-slate-800 flex items-center justify-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7128 9.42496L13.0312 5H18.2956C18.4275 5 18.5474 5.06391 18.6234 5.16797L21.6093 9.42495L16.7128 9.42496Z"
              fill="white"
            />
            <path
              d="M7.9375 9.4247H15.6722L12.1103 5.1436C12.1064 5.13977 12.1016 5.13591 12.0968 5.13203C12.0917 5.12793 12.0865 5.1238 12.0824 5.11967C12.0794 5.11664 12.077 5.11306 12.0745 5.10935C12.0704 5.10322 12.066 5.09673 12.0585 5.09174C12.0526 5.08789 12.0467 5.08496 12.0409 5.08204C12.0348 5.07899 12.0287 5.07593 12.0225 5.07183C11.9999 5.05666 11.9772 5.04523 11.9546 5.03386L11.9506 5.03184L11.9486 5.03119C11.9253 5.02354 11.9019 5.01584 11.8786 5.01194C11.8547 5.00792 11.8306 5.00391 11.8027 5.00391C11.7788 5.00391 11.7547 5.00792 11.7307 5.01194C11.7028 5.01595 11.6787 5.02381 11.6548 5.03586C11.6309 5.04389 11.6108 5.05577 11.5869 5.07183C11.5809 5.0757 11.5741 5.07864 11.5672 5.08158C11.5601 5.08462 11.553 5.08766 11.5469 5.09174C11.543 5.0957 11.5401 5.10059 11.5371 5.1055C11.5341 5.11055 11.531 5.1156 11.527 5.11967C11.5237 5.12179 11.5205 5.12362 11.5174 5.12541C11.5088 5.13027 11.5009 5.13479 11.495 5.1436L7.9375 9.4247Z"
              fill="white"
            />
            <path
              d="M12.1852 21.7166L15.7746 10.2246H7.82812L11.4218 21.7166C11.4243 21.727 11.4285 21.7339 11.4334 21.7419L11.4375 21.7488L11.4417 21.7566C11.4457 21.7726 11.4536 21.7885 11.4656 21.8046C11.4817 21.8325 11.5018 21.8566 11.5217 21.8765L11.5576 21.9125C11.5936 21.9404 11.6376 21.9643 11.6816 21.9804C11.7097 21.9874 11.7377 21.9914 11.763 21.9949L11.7736 21.9965H11.7975L11.8016 22.0005C11.8036 22.0005 11.8056 21.9985 11.8056 21.9985C11.8056 21.9985 11.8076 21.9965 11.8096 21.9965H11.8256C11.8576 21.9965 11.8896 21.9924 11.9215 21.9804H11.9255C11.9695 21.9645 12.0135 21.9404 12.0495 21.9125C12.0555 21.9065 12.0605 21.9005 12.0655 21.8945C12.0704 21.8885 12.0754 21.8825 12.0814 21.8765C12.1054 21.8566 12.1253 21.8325 12.1413 21.8046L12.1592 21.7686L12.1653 21.7566C12.1672 21.7485 12.1712 21.7425 12.1752 21.7365C12.1792 21.7305 12.1832 21.7245 12.1852 21.7166Z"
              fill="white"
            />
            <path
              d="M21.59 10.2246H16.6173L13.5234 20.1298L21.59 10.2246Z"
              fill="white"
            />
            <path
              d="M6.99205 10.2246L10.09 20.1298L2.02344 10.2246H6.99205Z"
              fill="white"
            />
            <path
              d="M2 9.42508H6.90077L10.578 5.00012H5.31363C5.18582 5.00012 5.06186 5.0642 4.9859 5.16809L2 9.42508Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

function Collection() {
  // Fetch collection data (response will be mocked)
  const fetchCollection = async () => {
    const res = await fetch("http://mock-server/collection/test");
    return res.json();
  };
  const collection = useQuery("collection", fetchCollection);

  const [sortDirection, setSortDirection] = useState("asc");
  const [sortType, setSortType] = useState("price");
  const [itemsFilterType, setItemsFilterType] = useState("all");
  const [itemsFilterValue, setItemsFilterValue] = useState("");

  // Collection data will be accessible
  // here, using the mock server.
  // To manipulate this reponse object,
  // change ./src/mocks/handlers/collection.ts
  console.log("#############");
  console.log(collection.data);
  console.log("#############");

  if (collection.isLoading) return <p>Loading...</p>;

  return (
    <div className="md:px-48 md:py-7 px-3 py-2">
      <TopRowNav />
      <CollectionDescription pod={collection.data.pod} />
      <CollectionActivity
        setSortDirection={setSortDirection}
        setSortType={setSortType}
        setItemsFilterType={setItemsFilterType}
        setItemsFilterValue={setItemsFilterValue}
        itemsFilterValue={itemsFilterValue}
      />
      <PodGallery
        sortDirection={sortDirection}
        sortType={sortType}
        itemsFilterValue={itemsFilterValue}
        itemsFilterType={itemsFilterType}
        pod={collection.data.pod}
      />
    </div>
  );
}

export default Collection;
