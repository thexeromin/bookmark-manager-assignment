"use client";

import React, { useState } from "react";
import clsx from "clsx";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AlignJustify, X } from "lucide-react";
import { Button } from "../atoms/button";

const signedInLinks = [
  {
    label: "Dashboard",
    href: "/dashboard"
  }
];

const links = [
  {
    label: "Product",
    href: "/product"
  },
  {
    label: "Docs",
    href: "/docs"
  },
  {
    label: "Changelog",
    href: "/changelog"
  },
  {
    label: "Pricing",
    href: "/pricing"
  }
];

export default function Navbar() {
  const pathname = usePathname();
  const { openSignIn, openSignUp } = useClerk();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-gray-100 focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X /> : <AlignJustify />}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center mr-10">
              <Link
                href="/"
                className="scroll-m-20 text-lg font-semibold tracking-tight "
              >
                Manager
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <SignedOut>
                  {links.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className={clsx(
                        "px-3 py-2 text-sm font-medium text-black underline-offset-4 hover:underline",
                        {
                          underline: pathname === link.href
                        }
                      )}
                      aria-current={pathname === link.href && "page"}
                    >
                      {link.label}
                    </Link>
                  ))}
                </SignedOut>

                <SignedIn>
                  {signedInLinks.map((link) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className={clsx(
                        "px-3 py-2 text-sm font-medium text-black underline-offset-4 hover:underline",
                        {
                          underline: pathname === link.href
                        }
                      )}
                      aria-current={pathname === link.href && "page"}
                    >
                      {link.label}
                    </Link>
                  ))}
                </SignedIn>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <SignedOut>
              <p
                onClick={() => openSignIn()}
                className="px-3 py-2 text-sm font-bold text-black flex justify-center items-center underline-offset-4 hover:underline"
              >
                <span>Login</span>
              </p>

              <p className="hidden md:block" onClick={() => openSignUp()}>
                <Button>Sign up free</Button>
              </p>
            </SignedOut>

            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 bg-gray-50">
            {links.map((link) => (
              <Link
                href={link.href}
                key={link.href + link.label}
                className={clsx(
                  "block rounded-md px-3 py-2 text-base font-medium text-black hover:bg-white-800",
                  {
                    "bg-blue-800": pathname === link.href
                  }
                )}
                aria-current={pathname === link.href && "page"}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
