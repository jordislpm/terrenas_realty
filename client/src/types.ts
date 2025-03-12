export type QueryStateType = {
    type: "buy" | "rent"; // Adjust based on possible values
    location: string | null;
    minPrice: number;
    maxPrice: number;
  };