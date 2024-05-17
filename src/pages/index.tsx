import Image from "next/image";
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <main className="min-h-screen">

<header className="sticky bg-slate-950 top-0 z-10">
    <section className="max-w-4xl mx-auto p-4 flex justify-between items-center border-fade">
      <h1 className="text-3xl font-medium"><a href="#hero">
  <Image
          className="rounded-full p-1 inline-block"
          src="./testdog.png"
          alt="Next.js Logo"
          width={50}
          height={50}
          priority
        />    
Nicholas Geronimo</a></h1>
      <div>
        <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
          &#9776;
        </button>
        <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
          <a href="#rockets" className="link hover:opacity-90">Rockets</a>
          <a href="#testimonials" className="link hover:opacity-90">Testimonials</a>
          <a href="#contact" className="link hover:opacity-90">Contact</a>
        </nav>
      </div>
    </section>
  </header>
  <main className="max-w-4xl mx-auto">
    <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12">
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
        </h2>
      </article>
    </section>
  </main>


    </main>
  );
}
