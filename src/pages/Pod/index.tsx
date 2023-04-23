import Card from "./components/Card";
import { Pod, PodToken } from "../../mocks/handlers/pod";
import { useQuery } from "react-query";
import { useState } from "react";

const CollectionDescription = ({ pod }: { pod: Pod }) => {
  return (
    <div className="pb-28">
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center mb-8">
          <img
            src={pod.tokens[0].asset.url}
            alt={pod.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2 text-white">{pod.name}</h2>
            <p className="text-gray-700 text-base">{pod.description}</p>
          </div>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="border border-gray-300 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Assets</h4>
          <p className="text-xl font-bold">{pod.stats.tokens}</p>
        </div>
        <div className="border border-gray-300 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Hodlers</h4>
          <p className="text-xl font-bold">{pod.stats.owners}</p>
        </div>
        <div className="border border-gray-300 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Volume</h4>
          <p className="text-xl font-bold">{pod.stats.volume.monthly}</p>
        </div>
        <div className="border border-gray-300 p-4 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Floor Price</h4>
          <p className="text-xl font-bold">{pod.stats.floorPrice.current}</p>
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
}: {
  sortType: string;
  sortDirection: string;
  pod: Pod;
  itemsFilterValue: string;
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pod.tokens
        .sort((a, b) => {
          if (sortType === "recency")
            // sort date by recency
            return new Date(b.transaction.date) - new Date(a.transaction.date);
          if (sortType === "price")
            return a.transaction.amount - b.transaction.amount;
          return 0;
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
        <div>Collection Activity</div>
        <div>
          <input
            className="text-black"
            value={itemsFilterValue}
            onChange={(e) => setItemsFilterValue(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div>
            <button
              className="rounded-full"
              onClick={() => setSortDirection("asc")}
            >
              asc
            </button>
            <button
              className="rounded-full"
              onClick={() => setSortDirection("desc")}
            >
              desc
            </button>
          </div>
          <div>
            <button
              className="rounded-full"
              onClick={() => setSortType("recency")}
            >
              Recency
            </button>
            <button
              className="rounded-full"
              onClick={() => setSortType("price")}
            >
              Price
            </button>
          </div>
        </div>
        <div>
          <button
            className="rounded-full"
            onClick={() => setItemsFilterType("all")}
          >
            All items
          </button>
          <button
            className="rounded-full"
            onClick={() => setItemsFilterType("my")}
          >
            My items
          </button>
          <button>More Filters</button>
        </div>
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
  const [podTokens, setPodTokens] = useState([]);

  const onItemsFilterValueChange = (e: any) => {
    setItemsFilterValue(e.target.value);
    collection.data.pod.name.includes(itemsFilterValue);
  };

  // Collection data will be accessible
  // here, using the mock server.
  // To manipulate this reponse object,
  // change ./src/mocks/handlers/collection.ts
  console.log("#############");
  console.log(collection.data);
  console.log("#############");

  if (collection.isLoading) return <p>Loading...</p>;

  return (
    <>
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
        pod={collection.data.pod}
      />
    </>
  );
}

export default Collection;
