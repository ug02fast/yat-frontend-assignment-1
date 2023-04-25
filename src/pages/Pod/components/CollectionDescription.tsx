import { Pod } from "../../../mocks/handlers/pod";

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

export const CollectionDescription = ({ pod }: { pod: Pod }) => {
  return (
    <div className="flex items-start lg:justify-between justify-center mb-32">
      <div className="flex items-center mb-8 lg:basis-1/2">
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
      <div className="grid gap-4 lg:grid-cols-4 lg:grid-rows-1 grid-cols-2 grid-rows-2">
        <DescriptionBlock title="Assets" amount={pod.stats.tokens} />
        <DescriptionBlock title="Hodlers" amount={pod.stats.owners} />
        <DescriptionBlock title="Volume" amount={pod.stats.volume.monthly} />
        <DescriptionBlock
          title="Floor Price"
          amount={pod.stats.floorPrice.current}
        />
      </div>
    </div>
  );
};
