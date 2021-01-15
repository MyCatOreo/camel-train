import { MapLocation } from "./mapLocation";
import { User } from "./user";

export interface Item {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  defaultWeight?: number;
  unit?: string;
  isSharable: boolean;
  isFreshFood: boolean;
  isContainer: boolean;
}

export interface UserItem extends Item {
  item: Item;
  user?: User;
  count?: number;
  weight?: number;
  note: string;
  status: "To Buy" | "To Pack" | undefined;
  toBuyAt?: MapLocation;
  container?: "string";
}
