import { Pagination } from "@heroui/react";
import { PageinationProps } from "../types/product.types";

export default function PaginationComponent({total , initialPage , setPage }:PageinationProps) {
  return <Pagination initialPage={initialPage} total={total!}  onChange={setPage}/>;
}
