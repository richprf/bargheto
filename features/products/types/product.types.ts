export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: string;
}

export interface PageinationProps {
  initialPage: number;
  total: number | undefined;
  setPage: (page: number) => void;
}

export interface ProductFilters {
  page?: number;
  perPage?: number;
  search?: string;
  category?: string;
}