import Image from "next/image";
import { Inter } from "next/font/google";
import React from 'react';
import "../hooks/main";


export default function Home() {
  return (
    <div>

<header className="sticky bg-main top-0 z-10 shadow-lg bg-main-color">
    <section className="max-w-4xl mx-auto p-4 flex justify-between items-center text-main-color">
      <h1 className="text-3xl font-medium text-light-shade"><a href="#hero">
Nicholas Geronimo</a></h1>
      <div>
        <button id="hamburger-button" className="text-3xl md:hidden cursor-pointer relative w-8 h-8">
          {/* &#9776; */}
          <div className="bg-white w-8 h-1 rounded absolute top-4 -mt-0.5 transition-all duration-500 before:content-[''] before:bg-white before:w-8 before:h-1 before:rounded before:absolute before:transition-all before:duration-500 before:-translate-x-4 before:-translate-y-3 after:content-[''] after:bg-white after:w-8 after:h-1 after:rounded after:absolute after:transition-all after:duration-500 after:-translate-x-4 after:translate-y-3"></div>
        </button>
        <nav className="hidden md:block space-x-8 text-xl text-light-shade" aria-label="main">
          {/* <a href="#work" className="link hover:opacity-90">Work</a> */}
          <a href="#skills" className="link hover:opacity-90">Skills</a>
          {/* <a href="#contact" className="link hover:opacity-90">Contact</a> */}
        </nav>
      </div>
    </section>
      <section id="mobile-menu" className="absolute top-68 bg-dark-accent w-full text-5xl flex-col justify-content-center origin-top hidden">
        {/* <button className="text-8xl self-end px-6">&times;</button> */}
        <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
          <a href="#hero" className="w-full text-center py-8 hover:opacity-90"> Home</a>
          {/* <a href="#work" className="w-full text-center py-8 hover:opacity-90"> Work</a> */}
          <a href="#skills" className="w-full text-center py-8 hover:opacity-90"> Skills</a>
          {/* <a href="#contact" className="w-full text-center py-8 hover:opacity-90"> Contact</a> */}
        </nav>
      </section>
  </header>
  <main className="max-w-4xl mx-auto divide-y-2">
    <section id="hero" className="flex flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 tallscreen:section-min-height widescreen:section-min-height">
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-4xl font-bold text-center  sm:text-5xl sm:text-left text-light-shade">
          Hello! My Name Is <br/>

          <span className="text-light-shade">&#10100;Nick&#10101;</span> 
        </h2>
      </article>
      <img src="./ng.png" alt="Picture" className="rounded-full md:rounded-bl-none " />
    </section>
    {/* <section id="work" className="p-6 my-12 scroll-mt-20 tallscreen:section-min-height widescreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">Work</h2></section>
    <hr className="mx-auto bg-white " /> */}





    
    <section id="skills" className="p-6 my-12 scroll-mt-20 tallscreen:section-min-height widescreen:section-min-height">
      <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">Skills</h2>
      <ul className="list-none grid gap-4 grid-cols-2 md:grid-cols-4 w-full max-w-screen-lg">
          <li className="  bg-main-color py-6 px-2 rounded-xl shadow-xl"><h3 className="text-lg text-center text-light-shade">Shopify</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">Github</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">Google Tag Manager</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">Google Analytics</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">HTML5</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">CSS</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">JavaScript</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">PHP</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">MongoDB</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">Express</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">React</h3> </li> 
          <li className="  bg-dark-accent py-6 px-2 rounded-3xl shadow-xl"><h3 className="text-lg text-center text-white">Node</h3> </li> 

      </ul>
      </section>
    {
    /* <hr className="mx-auto bg-white " />
    <section id="contact" className="p-6 my-12 scroll-mt-16 tallscreen:section-min-height widescreen:section-min-height"><h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-white">Contact</h2>
    <form action="" className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4" aria-required>
      <label htmlFor="subject">Email Me:</label>
      <input type="text" name="subject" minLength={3} maxLength={60} placeholder ="Subject" className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl"required/>
      <label htmlFor="message">Message:</label>
      <textarea name="message" id="message" cols={30} rows={10} className="resize-none w-full text-black text-2xl sm:text-3xl p-3 rounded-xl"></textarea>
      <button className="bg-teal-700 hover:bg-teal-600 active:bg-teal-500 text-white p-3 w-48 rounded-xl">Send</button>
    </form>
    
    
    </section> */
    }
  </main>

  <footer id="footer" className="bg-main-color text-light-shade text-xl shadow-lg shadow-white">
    <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
      <address>
        Email: <a href="mailto:Nicholas.Geronimo@gmail.com">Nicholas.Geronimo@gmail.com</a>
        <br/>
        Phone: <a href="4079626583">(407) 962-6583</a>
      </address>

      <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
          {/* <a href="#work" className="link hover:opacity-90">Work</a> */}
          <a href="#skills" className="link hover:opacity-90">Skills</a>
          {/* <a href="#contact" className="link hover:opacity-90">Contact</a>       */}
      </nav>

    </section>
  </footer>
    </div>
  );
}


