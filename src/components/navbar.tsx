"use client";
import { useState } from "react";
import Link from "next/link";
import { MenuIcon } from "./icons/icons";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Image from "next/image";

export default function NavbarV0() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseMenu = () => setIsOpen(false);

  return (
    <header className="flex h-20 w-full mx-auto items-center justify-between px-4 md:px-6 bg-[#091e3a] text-white ">
      {/* Mobile Menu */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col bg-[#091e3a] text-white"
        >
          <div className="flex items-center p-4">
            <Link href="/" prefetch={false} onClick={handleCloseMenu}>
              <Image
                src="/logo.png"
                width={70}
                height={70}
                title="Logo"
                className="h-20"
                alt="Company Logo"
              />
            </Link>
          </div>
          <nav className="flex-grow flex flex-col mt-4 space-y-4 text-lg">
            <Link
              href="/"
              className="hover:bg-neutral-700 py-2 px-4 rounded"
              prefetch={false}
              onClick={handleCloseMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:bg-neutral-700 py-2 px-4 rounded"
              prefetch={false}
              onClick={handleCloseMenu}
            >
              About Us
            </Link>
            <Link
              href="/earnings"
              className="hover:bg-neutral-700 py-2 px-4 rounded"
              prefetch={false}
              onClick={handleCloseMenu}
            >
              Earnings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>

      {/* Logo for Larger Screens */}
      <Link
        href="/"
        className="hidden lg:flex items-center mr-6"
        prefetch={false}
      >
        <Image
          src="/logo.png"
          width={70}
          height={130}
          title="Logo"
          className="h-12"
          alt="Company Logo"
        />
      </Link>

      {/* Navigation Links for Larger Screens */}
      <nav className="hidden lg:flex items-center space-x-6">
        <Link
          href="/"
          className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg"
          prefetch={false}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg"
          prefetch={false}
        >
          About Us
        </Link>
        <Link
          href="/earnings"
          className="text-sm font-medium hover:bg-neutral-700 p-2 rounded-lg"
          prefetch={false}
        >
          Earnings
        </Link>
      </nav>
    </header>
  );
}
