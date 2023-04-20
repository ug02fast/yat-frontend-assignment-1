import { Pod, PodToken } from "../../mocks/handlers/pod";

import React from "react";
import { useQuery } from "react-query";

const PodGallery = ({
  images,
  collection,
}: {
  images: PodToken[];
  collection: Pod;
}) => {
  const stats = [
    { label: "Assets", value: 100 },
    { label: "Holders", value: 50 },
    { label: "Volume", value: 2000 },
    { label: "Floor Price", value: 1.5 },
  ];
  return (
    <>
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center mb-8">
          <img
            src={collection.tokens[0].asset.url}
            alt={collection.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2">{collection.name}</h2>
            <p className="text-gray-700 text-base">{collection.description}</p>
          </div>
        </div>
        <div className="flex space-x-4">
          {stats.map((stat, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">{stat.label}</h4>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="shadow-lg p-4 rounded-lg">
            <img
              src={image.asset.url}
              alt={image.collection.name}
              className="w-full h-auto object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{image.collection.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
};

function Collection() {
  // Fetch collection data (response will be mocked)
  const fetchCollection = async () => {
    const res = await fetch("http://mock-server/collection/test");
    return res.json();
  };
  const collection = useQuery("collection", fetchCollection);

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
      <PodGallery
        images={collection.data.pod.tokens}
        collection={collection.data.pod}
      />
    </>
  );
}

export default Collection;
