import Header from "@/components/Header";
import VerticalSlider from "@/components/VerticalSlider";
import Footer from "@/components/Footer";
import ArchitecturalSketchNav from "@/components/SketchNav";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-body text-id-dark bg-white">
      <Header />

      {/* Hero Section */}
      <VerticalSlider />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-heading font-heavy text-id-dark mb-6">
            CONSTRUIRE L&apos;AVENIR DES <span className="text-id-red">ESPACES DE VIE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
            <span className="font-bold text-id-dark">ID GROUP</span> unifie trois expertises complémentaires pour offrir des solutions durables et innovantes dans l&apos;habitat, l&apos;industrie et l&apos;agriculture.
          </p>
        </div>
      </section>

      {/* Interactive Sketch Demo (Placed here to show capability) */}
      <ArchitecturalSketchNav />

      {/* Engagements Section */}
      <section className="py-20 bg-id-bg-light">
         <div className="container mx-auto px-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                 <div>
                     <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-id-dark">Nos Engagements RSE</h2>
                     <p className="text-lg text-gray-700 mb-6">
                         Au cœur de notre stratégie, le programme <span className="text-id-green font-bold text-id-agri">Positiv&apos;ID</span> vise à réduire notre empreinte carbone et à promouvoir le bien-être au travail.
                     </p>
                     <ul className="space-y-4">
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-id-red"></div>
                             <span>Matériaux éco-responsables</span>
                         </li>
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-id-red"></div>
                             <span>Production locale et circuits courts</span>
                         </li>
                         <li className="flex items-center gap-3">
                             <div className="w-2 h-2 rounded-full bg-id-red"></div>
                             <span>Innovation sociale</span>
                         </li>
                     </ul>
                 </div>
                 <div className="h-64 md:h-96 bg-gray-300 rounded-lg relative overflow-hidden">
                     {/* Placeholder for engagement image */}
                     <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl bg-gray-200">
                         IMAGE RSE / POSITIV&apos;ID
                     </div>
                 </div>
             </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
