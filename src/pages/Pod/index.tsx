import { Pod } from "../../mocks/handlers/pod";
import { ReactNode } from "react";
import { useQuery } from "react-query";

const GalleryContainer = ({ children }: { children: ReactNode }) => {
  const containerStyle = {
    padding: "28px 245px",
  };

  return <div style={containerStyle}>{children}</div>;
};

const PodGallery = ({ pod }: { pod: Pod }) => {
  return (
    <>
      <div className="flex items-start justify-between mb-8">
        <div className="flex items-center mb-8">
          <img
            src={pod.tokens[0].asset.url}
            alt={pod.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="text-left">
            <h2 className="text-2xl font-bold mb-2">{pod.name}</h2>
            <p className="text-gray-700 text-base">{pod.description}</p>
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {pod.tokens.map((token, index) => (
          <div key={index} className="shadow-lg p-4 rounded-lg">
            <img
              src={token.asset.url}
              alt={token.collection.name}
              className="w-full h-auto object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{token.collection.name}</h3>
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
    <GalleryContainer>
      <PodGallery pod={collection.data.pod} />
    </GalleryContainer>
  );
}

export default Collection;
