import { MapLocation } from "./mapLocation";
import { User } from "./user";

export interface Item {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  // unit?: string;
  // isSharable: boolean;
  // isForIndividual: boolean;
  // isFreshFood: boolean;
  // isMultiple: boolean;
}

export interface UserItem extends Item {
  item: Item;
  status?: UserItemStatus[];
}

export interface UserItemStatus {
  user: User;
  count?: number;
  todo: "question" | "todo" | "done";
}
