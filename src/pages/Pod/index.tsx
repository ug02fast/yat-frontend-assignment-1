import CollectionActivity from "./components/CollectionActivity";
import { CollectionDescription } from "./components/CollectionDescription";
import PodGallery from "./components/PodGallery";
import TopRowNav from "./components/TopRowNav";
import { useQuery } from "react-query";
import { useState } from "react";

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
