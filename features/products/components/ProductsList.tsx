'use client';
import { useState } from "react";
import Image from "next/image";
import { Pagination } from "@heroui/react";
import { useProducts } from "../hooks/products.hooks";
import Filters from "./Filter";


const PER_PAGE = 10;

export default function ProductsList() {
  const [filters, setFilters] = useState({ search: "", category: "", page: 1 });

  const { data, isLoading, isError, error } = useProducts({
    search: filters.search,
    category: filters.category,
    page: filters.page,
    perPage: PER_PAGE,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  const products = data?.products ?? [];
  const totalPages = data?.total ? Math.ceil(data.total / PER_PAGE) : 1;

  return (
    <div>
      <Filters onChange={(f) => setFilters({ ...filters, search: f.search, category: f.category, page: 1 })} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow relative h-56 ">
            <Image src={product.images[0]} alt={product.title} fill className="object-contain" />
            <h2 className="font-bold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-600">${product.price}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6">
        <Pagination
          page={filters.page}
          total={totalPages}
          onChange={(p) => setFilters({ ...filters, page: p })}
        />
      </div>
    </div>
  );
}
