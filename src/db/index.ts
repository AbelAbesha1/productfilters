import { Index } from "@upstash/vector";
import * as dotenv from "dotenv";

dotenv.config();

export type Product = {
  id: string;
  name: string;
  price: number;
  imageId: string;
  size: "S" | "M" | "L";
  color: "white" | "beige" | "blue" | "green" | "purple";
};

export const db = new Index<Product>();
