import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary/5 py-5 md:py-10">
        <div className="wrapper">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="h1-bold">
              Uniting Hong Kongers Across Canada – Host and Connect!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Join a dynamic community where you can host events, connect with
              fellow Hong Kongers, and celebrate our shared heritage. Make
              meaningful connections and create lasting memories across Canada.
            </p>
            <Button className="w-full md:w-fit">
              <Link href="#events">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Events: </h2>
        <div className="flex flex-col w-full gap-5 md:flex-row">
          Search Filter
        </div>
      </section>
    </>
  );
}
