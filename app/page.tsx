import Head from "next/head";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/ Contact";
import Footer from "./component/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Votre Site Vitrine</title>
        <meta name="description" content="Votre site vitrine professionnel avec contact WhatsApp" />
      </Head>

      <Header />
      <main className="flex-grow container mx-auto px-4 py-10">
        <Hero />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
