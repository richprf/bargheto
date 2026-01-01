import { Product, ProductFilters } from "../types/product.types";

const PER_PAGE = 10;

export const ProductService = {
  async getProducts(filters: ProductFilters) {
    const res = await fetch("https://dummyjson.com/products");
    if (!res.ok) throw new Error("Failed to fetch products");

    let products: Product[] = (await res.json()).products;

    // filter by search
    if (filters.search?.trim()) {
      const search = filters.search.trim().toLowerCase();
      products = products.filter(p => p.title.toLowerCase().includes(search));
    }

    // filter by category
    if (filters.category?.trim()) {
      const category = filters.category.trim().toLowerCase();
      products = products.filter(p => p.category.toLowerCase() === category);
    }

    // pagination
    const page = filters.page ?? 1;
    const perPage = filters.perPage ?? PER_PAGE;
    const total = products.length;
    const paginated = products.slice((page - 1) * perPage, page * perPage);

    return { products: paginated, total };
  },
};
