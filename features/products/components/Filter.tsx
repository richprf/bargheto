'use client';
import { useState } from "react";

interface FiltersProps {
  onChange: (filters: { search: string; category: string }) => void;
}

export default function Filters({ onChange }: FiltersProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  function handleChange() {
    onChange({ search, category });
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleChange();
        }}
        className="border p-2 rounded flex-1"
      />

      <label className="flex flex-col">
        Category
      <select
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          handleChange();
        }}
        className="border p-2 rounded  "
      >
        <option value="">All Categories</option>
        <option value="smartphones">Smartphones</option>
        <option value="laptops">Laptops</option>
        <option value="fragrances">Fragrances</option>
      </select>
      </label>
    </div>
  );
}


