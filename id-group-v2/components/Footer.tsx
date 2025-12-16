import Link from "next/link";
import Image from "next/image";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-id-dark text-white py-12 border-t-4 border-id-red">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Manifesto */}
          <div className="md:col-span-1">
             <div className="mb-6 bg-white p-2 inline-block rounded">
                <Image
                    src="/logos/ID GROUP.png"
                    alt="ID GROUP Logo"
                    width={100}
                    height={35}
                    className="object-contain"
                />
             </div>
            <p className="text-gray-400 text-sm mb-4">
              Notre manifeste &quot;Soin du Vivant&quot; guide chacune de nos actions pour un avenir durable dans l&apos;habitat, l&apos;industrie et l&apos;agriculture.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-gray-400 hover:text-id-red transition-colors"><Linkedin size={20}/></Link>
              <Link href="#" className="text-gray-400 hover:text-id-red transition-colors"><Facebook size={20}/></Link>
              <Link href="#" className="text-gray-400 hover:text-id-red transition-colors"><Instagram size={20}/></Link>
            </div>
          </div>

          {/* Verticales */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 uppercase text-id-red">Nos Univers</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">ID HOME</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ID PRO</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">ID AGRI</Link></li>
            </ul>
          </div>

           {/* Corporate */}
           <div>
            <h4 className="font-heading font-bold text-lg mb-4 uppercase text-id-red">Le Groupe</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="#" className="hover:text-white transition-colors">À propos</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Carrières</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">RSE & Positiv&apos;ID</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Presse</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4 uppercase text-id-red">Contact</h4>
            <address className="not-italic text-gray-300 text-sm space-y-2">
              <p>Siège Social</p>
              <p>123 Avenue de l&apos;Industrie</p>
              <p>75000 Paris, France</p>
              <p className="mt-4"><a href="tel:+33100000000" className="hover:text-white">+33 1 00 00 00 00</a></p>
              <p><a href="mailto:contact@id-group.com" className="hover:text-white">contact@id-group.com</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} ID GROUP. Tous droits réservés.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white">Mentions Légales</Link>
            <Link href="#" className="hover:text-white">Politique de Confidentialité</Link>
            <Link href="#" className="hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
