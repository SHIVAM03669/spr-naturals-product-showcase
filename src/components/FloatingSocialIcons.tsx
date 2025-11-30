"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaXTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa6";

const socials = [
  {
    name: "X (Twitter)",
    href: "https://x.com/Exporter_Indian",
    bgClass: "bg-black",
    icon: <FaXTwitter className="h-5 w-5 text-white" />,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/exporter_indian1983/",
    bgClass:
      "bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600",
    icon: <FaInstagram className="h-5 w-5 text-white" />,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/exporterindian1983",
    bgClass: "bg-[#316FF6]",
    icon: <FaFacebookF className="h-5 w-5 text-white" />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/india-true-global-exims-4699a6378/",
    bgClass: "bg-[#0A66C2]",
    icon: <FaLinkedinIn className="h-5 w-5 text-white" />,
  },
  {
    name: "WhatsApp",
    href:
      "https://wa.me/917447755042?text=Hello!%20I'm%20interested%20in%20SPR%20Naturals%20products.",
    bgClass: "bg-[#25D366]",
    icon: <FaWhatsapp className="h-5 w-5 text-white" />,
  },
];

export default function FloatingSocialIcons() {
  return (
    <div className="fixed bottom-4 right-6 z-50 flex flex-col items-center gap-3">
      {socials.map((social) => (
        <div key={social.name} className="relative h-12 w-12 overflow-hidden rounded-full shadow-lg shadow-black/15">
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${social.name} page`}
            className="group block h-full w-full"
          >
            <span
              className={`${social.bgClass} absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-full`}
            >
              {social.icon}
            </span>
            <span
              className={`${social.bgClass} absolute inset-0 flex items-center justify-center translate-y-full transition-transform duration-300 group-hover:translate-y-0`}
            >
              {social.icon}
            </span>
            <span className="sr-only">{social.name}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}


