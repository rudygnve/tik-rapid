import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/" className="text-slate-800 text-2xl font-semibold">
      Tik<span className="text-primary ">Rapid</span>
    </Link>
  );
};

export default Logo;
