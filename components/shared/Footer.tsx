import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="wrapper flex-center flex flex-between flex-col gap-5 md:flex-row">
        <Link href="/">HKongnect</Link>
        <p>2024 HKongnect. All Right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
