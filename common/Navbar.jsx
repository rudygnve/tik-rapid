import Logo from "@/components/Logo";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = ({ handleShowMenu, handleCloseMenu, showMenu }) => {
  const router = useRouter();
  const [navLinkMp3, setNavLinkMp3] = useState("");

  useEffect(() => {
    if (router.pathname == "/") {
      setNavLinkMp3(true);
    } else {
      setNavLinkMp3(false);
    }
  }, []);

  return (
    <div className="w-full border border-x-0 border-t-0">
      <nav
        onClick={(e) => e.stopPropagation()}
        className="w-full py-4 sm:py-5 max-w-5xl mx-auto bg-white flex items-center justify-between px-3"
      >
        <Logo />
        <ul
          className={`transition-all duration-400 fixed md:static md:bg-none md:flex-row md:justify-normal md:py-0 md:shadow-none py-10 left-0 ${
            !showMenu ? "top-[-110%]" : "top-0"
          } right-0 shadow-lg flex-col justify-center bg-white z-[100] flex items-center gap-8`}
        >
          <RxCross2
            onClick={handleCloseMenu}
            className="text-2xl cursor-pointer absolute top-4 right-4 text-slate-800 flex md:hidden"
          />
          <li>
            <Link
              onClick={handleCloseMenu}
              href="#howitworks"
              className="text-slate-800 font-medium"
            >
              How It <span className="text-primary">Works</span>
            </Link>
          </li>
          <li>
            {navLinkMp3 ? (
              <Link
                onClick={handleCloseMenu}
                href="/download-mp3"
                className="text-slate-800 font-medium"
              >
                Download TikTok <span className="text-primary">MP3</span>
              </Link>
            ) : (
              <Link
                onClick={handleCloseMenu}
                href="/"
                className="text-slate-800 font-medium"
              >
                Download TikTok <span className="text-primary">Video</span>
              </Link>
            )}
          </li>
          <li className="md:hidden flex text-center">
            <Link
              className="text-slate-800 font-medium"
              href="https://www.buymeacoffee.com/tikrapid"
              target="_blank"
            >
              Buy me a coffee ☕
            </Link>
          </li>
        </ul>
        <div className="hidden md:flex">
          <Link
            className="text-slate-800 font-medium"
            href="https://www.buymeacoffee.com/tikrapid"
            target="_blank"
          >
            Buy me a coffee ☕
          </Link>
        </div>
        <div
          onClick={handleShowMenu}
          className="flex md:hidden items-center justify-center cursor-pointer"
        >
          <HiMenu className="text-3xl text-slate-800" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
