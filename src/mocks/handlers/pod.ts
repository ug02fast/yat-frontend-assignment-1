import { rest } from "msw";

// types for pod.tokens
export type PodToken = {
  collection: {
    name: string;
  };
  asset: {
    id: number;
    url: string;
  };
  transaction: {
    date: string;
    currency: string;
    amount: number;
  };
  owner: {
    twitter: string;
    yat: string;
  };
};

// type for pod
export type Pod = {
  id: number;
  name: string;
  description: string;
  tokens: PodToken[];
  stats: {
    tokens: number;
    owners: number;
    volume: {
      daily: number;
      weekly: number;
      monthly: number;
    };
    floorPrice: { current: number };
  };
};

export const pod = rest.get(
  "http://mock-server/collection/test",
  (req, res, ctx) => {
    function randomNumber(max: number): number {
      return Math.floor(Math.random() * (max + 1));
    }

    function randomPick(list: unknown[]) {
      const randomKey = randomNumber(list.length - 1);
      return list[randomKey];
    }

    function randomIsoDate(start: Date, end: Date) {
      const randomDate = new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
      );
      return randomDate.toISOString();
    }

    function randomOwner() {
      const owners = [
        {
          twitter: "Alwaregg",
          yat: "💰",
        },
        {
          twitter: "MrGabeReis",
          yat: "⭐🤖⭐",
        },
        {
          twitter: "timesync",
          yat: "🎵🍸🎵",
        },
        {
          twitter: null,
          yat: "☠🐙☠",
        },
        {
          twitter: null,
          yat: "🤖🤖🤖🤖",
        },
      ];

      return randomPick(owners);
    }

    function randomAsset() {
      const assets = [
        // Capsule House
        "https://i.seadn.io/gcs/files/34ec699d923281ba396502d76b8f9078.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/e31726c360bdd007d56b85902ded1e35.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/e10518f2f6062697cc14d43b5104734e.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/093b5ee647f490b93b13c6957ed2b9fb.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/57880c15c634d7de5b84b1b35217a9cb.jpg?auto=format&w=500",

        // Crypto Punks
        "https://i.seadn.io/gcs/files/9008e1ff76a030fd412be9850badd3e9.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/2f7cf7e7d33efa8f9cd493517d30a88e.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/73712b47114c565b235bdaae4e933ddd.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/190eaea1412f964a4db01360624011f7.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/b7e41cc2497b08874b14ecbb23b69aaf.png?auto=format&w=500",

        // World of Women
        "https://i.seadn.io/gcs/files/270b5ee1fd52c52f418a587f083533b0.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/c433307dd0bceb11be2770bb07ae77c5.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/fb85c32e2b15a48dd49a6bb609db88a0.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/5f87bee9ff5d45170a3ba058d6b0816e.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/141ab6cf8850d0b05e9e65a4e10e0d87.png?auto=format&w=500",

        // Doodles
        "https://i.seadn.io/gcs/files/de829f9984bc157942835d6aea2b6ec3.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/b2a1b626daa5bc84b8a57fa013ee5aae.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/d058401040c522e6208931021f179f75.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/6dea971677024cd1ab9aa5b7bc5bf98e.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/ef6baceb1f8dc7e3ee9bc70d513ad821.png?auto=format&w=500",

        // Mutant Ape Yatch Club
        "https://i.seadn.io/gcs/files/fee435c4c5ace8b914f90b10feb503db.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/79d3c3c4e47091ce91c1c7ea4ccd5161.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/a1d5b0dceb33f0d8803fadecf8edf08c.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/b88bda59c8be22a8483c3d4e7083adc9.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/94ed4b465ab46cc68992aaaddd7f1002.png?auto=format&w=500",

        // Pudgy Penguins
        "https://i.seadn.io/gcs/files/6d05196e6f35c1e14af737971ab93da4.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/deabe1c7356935546463537cb8cc3ab1.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/043187c873d2a6f89156e7d4b849bd05.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/ebf940b515174c821b17b011749bf437.png?auto=format&w=500",
        "https://i.seadn.io/gcs/files/66bf877644657ffb67f0b1cf872b64af.png?auto=format&w=500",
      ];

      return {
        id: randomNumber(10000),
        url: randomPick(assets),
      };
    }

    function randomCollection() {
      const collections = [
        { name: "Capsule Home" },
        { name: "Crypto Punks" },
        { name: "World of Women" },
        { name: "Doodles" },
        { name: "Mutant Ape Yatch Club" },
        { name: "Pudgy Penguins" },
      ];

      return randomPick(collections);
    }

    function randomTokens(limit: number) {
      const tokens = [];

      for (let i = 0; i < limit; i++) {
        tokens.push({
          collection: randomCollection(),
          asset: randomAsset(),
          transaction: {
            date: randomIsoDate(new Date(2023, 0, 1), new Date()),
            currency: "eth",
            amount: randomNumber(5),
          },
          owner: randomOwner(),
        });
      }
      return tokens;
    }

    return res(
      ctx.status(200),

      ctx.json({
        pod: {
          name: "Test Pod",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras commodo magna mauris, sed vulputate odio blandit at. Donec eleifend lectus.",
          stats: {
            tokens: 10000,
            owners: 5257,
            volume: {
              daily: 98561,
              weekly: 169234,
              monthly: 4641231,
            },
            floorPrice: {
              current: 0.515,
            },
          },
          tokens: randomTokens(100),
        },
      })
    );
  }
);
