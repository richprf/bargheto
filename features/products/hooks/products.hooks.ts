'use client';
import { useQuery } from "@tanstack/react-query";
import { ProductService } from "../services/products.service";
import { ProductFilters } from "../types/product.types";

export const useProducts = (filters: ProductFilters) => 
  useQuery({
    queryKey: ["products", filters],
    queryFn: () => ProductService.getProducts(filters),
    staleTime: 1000 * 60, 
    placeholderData: { products: [], total: 0 },
  });
