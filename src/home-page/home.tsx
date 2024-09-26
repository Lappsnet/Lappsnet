import { Button } from "@/components/ui/button";
import Link from "next/link";
import Script from "next/script";

export default async function HomePage() {
  return (
    <section className="w-full flex flex-col">
      <div className="container h-screen px-4 md:px-6 flex-grow flex flex-col justify-center">
        <div className="text-center mb-8">
          <span
            id="colorChangingBadge"
            className="inline-block px-2 py-1 text-xs font-semibold rounded-full transition-colors duration-[3000ms] ease-in-out mb-4"
          >
            Lappsnet
          </span>
          <h1 className="font-bold text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 mb-4">
            The Transformational Power of Asset Tokenization
          </h1>
          <p className="text-zinc-200 text-sm md:text-xl max-w-3xl mx-auto mb-6">
            Blockchain Integration for Asset Tokenization, Fireblocks
            Tokenization Platform.
          </p>
          <Link href="/" className="inline-block">
            <Button variant="outline" className="max-w-sm" type="submit">
              See more information
            </Button>
          </Link>
        </div>
      </div>
     {/*  <div className="w-full overflow-hidden">
        <FireblocksScroll />
      </div>
      <div className="h-screen">hi</div> */}

      <Script id="badge-animation">
        {`
          function getRandomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
          }

          function changeColor() {
            const badge = document.getElementById('colorChangingBadge');
            badge.style.backgroundColor = getRandomColor();
          }

          setInterval(changeColor, 2000); // Change color every 2 seconds
        `}
      </Script>
    </section>
  );
}
