import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <Link href='/' ><p className="font-medium text-2xl">HKongnect</p></Link>
        <div>login</div>
      </div>
    </header>
  );
};

export default Header;
