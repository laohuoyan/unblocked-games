import { useParams } from "next/navigation";
import { PageParams } from "@/types";

export default function useCategory() {
  const { category } = useParams<PageParams>();
  return category; 
}