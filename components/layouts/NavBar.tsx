'use client';

import { Navbar as HeroNavbar, NavbarBrand, NavbarContent } from "@heroui/react";
import NavLink from "./NavLink";


export default function Navbar() {
  return (
    <HeroNavbar
      className="border-b bg-white"
      maxWidth="xl"
      position="sticky"
    >
      {/* Logo */}
      <NavbarBrand>
        <span className="font-bold text-lg text-primary-600">
          Bargheto
        </span>
      </NavbarBrand>

      {/* Links */}
      <NavbarContent className="hidden md:flex gap-6">
        <NavLink href="/" label="Dashboard" />
        <NavLink href="/products" label="Products" />
      </NavbarContent>
    </HeroNavbar>
  );
}
