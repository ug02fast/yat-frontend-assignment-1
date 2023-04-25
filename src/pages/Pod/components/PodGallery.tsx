import Card from "./Card";
import { Pod } from "../../../mocks/handlers/pod";

export const PodGallery = ({
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
            assetId={token.asset.id}
            name={token.collection.name}
            token={token}
          />
        ))}
    </div>
  );
};

export default PodGallery;
