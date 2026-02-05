import Image from "next/image";
import React from "react";
import logo from "../public/spott.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 bg-background/80
        backdrop-blur-xl z-20
        border-b
      "
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Logo"
              width={50}
              height={50}
              className="w-full h-11"
              priority
            />
          </Link>
          {/* Pro */}
          {/* Search */}
          {/* Right side */}
        </div>
        {/* Mobile Search */}
      </nav>
      {/* modals */}
    </>
  );
};

export default Header;
