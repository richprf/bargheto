'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface NavLinkProps {
  href: string;
  label: string;
}

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "text-sm font-medium transition-colors",
        isActive
          ? "text-primary-600"
          : "text-gray-600 hover:text-gray-900"
      )}
    >
      {label}
    </Link>
  );
}
