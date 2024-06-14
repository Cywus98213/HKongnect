import NavItems from "@/components/shared/NavItems";
import MobileNav from "@/components/shared/MobileNav";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex-between wrapper">
        <Link href="/">
          <p className="font-bold text-2xl">HKongnect</p>
        </Link>

        <div className="flex ml-auto gap-4 justify-center items-center">
          <SignedOut>
            <Button variant="default" size="sm">
              <Link href="/sign-in" className="px-3">
                Login
              </Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <nav className="hidden md:block">
              <NavItems />
            </nav>
            <UserButton afterSignOutUrl="/" />

            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
