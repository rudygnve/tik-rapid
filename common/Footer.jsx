import Logo from "@/components/Logo";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="w-full max-w-5xl mx-auto px-3">
        <ul className="w-full flex items-center justify-center flex-wrap py-5 gap-x-5 sm:gap-x-8 gap-y-4">
          <li>
            <Link href="/" className="text-slate-700 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-slate-700 font-medium">
              About
            </Link>
          </li>
          <li>
            <Link href="/privacy-policy" className="text-slate-700 font-medium">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-slate-700 font-medium">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-slate-700 font-medium">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="border border-x-0 border-b-0 px-3">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 py-4 justify-between">
          <Logo />
          <span className="text-slate-600">
            © {new Date().getFullYear()} TikRapid | All Rights Reversed.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
