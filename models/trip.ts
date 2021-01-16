import { Item, UserItem } from "./item";
import { MapLocation } from "./mapLocation";
import { User } from "./user";

export interface Trip {
  id: string;
  name: string;
  date: Date;
  members: User[];
  destination: MapLocation[];
  items: UserItem[];
}
