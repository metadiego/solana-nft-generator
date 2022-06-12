type NFTAttribute = {
  trait_type: string;
  value: string;
}

type NFTFile = {
  uri: string;
  type: 'image/png'
}

type NFTProperties = {
  creators: {
    address: string;
    share: number;
  }
  files: NFTFile[]
}

/// All data that Candy Machine V2 requires about an NFT.
export type NFTSpec = {
    name: string;
    symbol: string;
    description: string;
    seller_fee_basis_points: number;
    image: string;
    attributes: NFTAttribute[];
    properties: {
      creators: {
        address: string;
        share: number;
      }
      files: NFTFile[]
    };
    collection: {
      name: string;
      family: string;
    };
  }
