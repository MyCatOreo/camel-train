import { Item, UserItem } from "./item";
import { MapLocation } from "./mapLocation";
import { User } from "./user";

export interface Trip {
  id: string;
  active: boolean;
  name: string;
  date: Date;
  user: User;
  members: User[];
  destination: MapLocation[];
  items: UserItem[];
  groupedItems?: { category: string; data: UserItem[] }[];
}
