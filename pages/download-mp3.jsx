import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import Accordion from "@/components/Accordion";
import { faqs, SITENAME } from "@/data";
import axios from "axios";
import FileSaver from "file-saver";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { BsCheckLg } from "react-icons/bs";
import { FaRegPaste } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function DownloadMP3Page() {
  const [inputText, setInputText] = useState("");
  const [pasted, setPasted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [data, setData] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  const [navLink, setNavLink] = useState("");

  const regex = /https:\/\/(vm|www).tiktok.com\/.+/g;

  useEffect(() => {
    if (inputText) {
      setPasted(true);
    } else {
      setPasted(false);
    }
  }, [inputText]);

  const handleCopyPaste = (e) => {
    e.preventDefault();
    if (inputText) {
      setInputText("");
      setPasted(true);
    } else {
      navigator.clipboard.readText().then((clipText) => setInputText(clipText));
      setPasted(false);
    }
  };

  useEffect(() => {
    if (router.asPath == "download-mp3") {
      setNavLink("mp3");
    }
  }, []);

  const handleDownload = async (e) => {
    e.preventDefault();
    if (inputText && regex.test(inputText)) {
      setIsDownloading(true);
      setIsFetching(true);
      const options = {
        method: "GET",
        url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
        params: {
          url: inputText,
          hd: "1",
        },
        headers: {
          "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
          "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_API_HOST,
        },
      };

      try {
        const response = await axios.request(options);
        setData(response.data.data);
        setIsFetching(false);
      } catch (error) {
        console.log(error);
        setIsFetching(false);
        setIsDownloading(false);
        setErrorMsg("Oopss! An error occurred! Please try again");
        setTimeout(() => {
          setErrorMsg("");
        }, 4000);
      }
    } else {
      setErrorMsg("Please provide a valid TikTok URL!");
      setTimeout(() => {
        setErrorMsg("");
      }, 4000);
    }
  };

  const handleDownloadMp3 = (url, filename) => {
    FileSaver.saveAs(url, `${filename}.mp3`);
  };

  const handleShowMenu = () => {
    setShowMenu(true);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <main
      onClick={handleCloseMenu}
      className="w-full selection:text-white selection:bg-secondary"
    >
      <Helmet></Helmet>
      <section className="w-full">
        <Navbar
          navLink={navLink}
          handleShowMenu={handleShowMenu}
          handleCloseMenu={handleCloseMenu}
          showMenu={showMenu}
        />
        {!isDownloading ? (
          <div className="w-full py-10 sm:py-16 bg-primary px-3">
            <div className="w-full max-w-4xl mx-auto flex flex-col text-center items-center justify-between">
              <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4">
                TikTok MP3 Downloader
              </h1>
              <span className="text-slate-100 text-base sm:text-lg font-medium mb-8">
                Download your favorite TikTok videos without watermark
              </span>
              <form className="w-full p-0 sm:p-2 rounded-md bg-transparent sm:bg-white flex gap-3 sm:gap-0 flex-col sm:flex-row">
                <div className="w-full flex-none sm:flex-1 flex items-center rounded-lg sm:rounded-none px-2 sm:py-0 py-2 bg-white sm:bg-transparent">
                  <input
                    type="text"
                    className="w-full flex-1 h-10 sm:h-full bg-transparent text-lg text-slate-800 px-1 sm:pb-0 sm:pr-3"
                    placeholder="Paste your TikTok URL"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <button
                    onClick={handleCopyPaste}
                    className="px-3 sm:h-full rounded-lg border-[2px] border-primary bg-primary bg-opacity-[15%] border-solid flex items-center gap-1 h-10 text-sm text-primary"
                  >
                    {pasted ? (
                      <RxCross2 className="text-lg sm:text-xl" />
                    ) : (
                      <FaRegPaste className="text-lg sm:text-xl" />
                    )}
                    <span className="hidden sm:flex items-center justify-center">
                      {inputText ? "Clear" : "Paste"}
                    </span>
                  </button>
                </div>
                <button
                  onClick={handleDownload}
                  className="px-4 text-white bg-secondary h-12 rounded-lg font-medium"
                >
                  Download
                </button>
              </form>
              {errorMsg && (
                <div className="pt-4 w-full">
                  <div className="w-full rounded-md bg-red-500 text-white p-2">
                    {errorMsg}
                  </div>
                </div>
              )}
              <div className="hidden sm:flex sm:flex-row flex-col items-center justify-center gap-6 sm:gap-10 text-white font-medium text-lg mt-8">
                <span className="flex items-center gap-1">
                  <BsCheckLg className="text-xl" />
                  Free
                </span>
                <span className="flex items-center gap-1">
                  <BsCheckLg className="text-xl" />
                  Unlimited Downloads
                </span>
                <span className="flex items-center gap-1">
                  <BsCheckLg className="text-xl" />
                  Super Fast
                </span>
              </div>
            </div>
          </div>
        ) : isFetching && !data?.cover && !data ? (
          <div className="w-full flex items-center justify-center py-10 bg-primary">
            <div className="flex flex-row gap-5">
              <div class="one loading__dots aspect-square rounded-full w-5 md:w-10" />
              <div class="two loading__dots aspect-square rounded-full w-5 md:w-10" />
              <div class="three loading__dots aspect-square rounded-full w-5 md:w-10" />
              <div class="four loading__dots aspect-square rounded-full w-5 md:w-10" />
              <div class="five loading__dots aspect-square rounded-full w-5 md:w-10" />
            </div>
          </div>
        ) : (
          <div className="w-full bg-primary py-10 flex items-center justify-center">
            <div className="p-4 rounded-lg max-w-[350px] w-full bg-white flex flex-col gap-4">
              <div className="w-full flex gap-2 justify-between">
                <div className="flex-1 w-full h-full">
                  <img
                    src={data?.cover}
                    className="flex-1 aspect-square w-full object-center object-cover rounded-md"
                    alt=""
                  />
                </div>
                <div className="flex-[3] flex justify-between flex-col w-full">
                  <span className="text-sm text-slate-700">
                    {data?.title.substring(0, 50) + "..." || "No description"}
                  </span>
                  <span className="text-sm font-medium text-slate-400">
                    {data?.author?.nickname || "No author"}
                  </span>
                </div>
              </div>
              <div className="w-full flex flex-col gap-2 flex-[4]">
                <button
                  onClick={() => handleDownloadMp3(data?.music, data?.aweme_id)}
                  className="h-12 w-full bg-secondary text-white font-medium rounded-md"
                >
                  Extract & Download
                </button>
                <button
                  onClick={() => {
                    setIsDownloading(false);
                    setInputText("");
                    setData(null);
                  }}
                  className="h-12 w-full bg-secondary text-white font-medium rounded-md"
                >
                  Extract More
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
      <section id="howitworks" className="w-full pt-14 sm:pt-20 pb-6 sm:pb-10">
        <div className="w-full max-w-5xl mx-auto grid gird-cols-1 px-3 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <div className="relative flex flex-col">
            <h3 className="text-slate-800 font-semibold text-xl mb-4">
              Copy your TikTok URL
            </h3>
            <p className="text-slate-700">
              Open TikTok, get to the video, and copy its link.
            </p>
            <span className="text-5xl font-bold text-opacity-50 text-primary absolute top-0 right-0">
              1
            </span>
          </div>
          <div className="relative flex flex-col">
            <h3 className="text-slate-800 font-semibold text-xl mb-4">
              Paste your link
            </h3>
            <p className="text-slate-700">
              Open your browser and Vist TikRapid (www.tikrapid.com).
            </p>
            <span className="text-5xl font-bold text-opacity-50 text-primary absolute top-0 right-0">
              2
            </span>
          </div>
          <div className="relative flex flex-col">
            <h3 className="text-slate-800 font-semibold text-xl mb-4">
              Download your video
            </h3>
            <p className="text-slate-700">
              Finally paste the link and press "Extract Audio"
            </p>
            <span className="text-5xl font-bold text-opacity-50 text-primary absolute top-0 right-0">
              3
            </span>
          </div>
        </div>
      </section>
      {/* <section className="w-full pt-14 py-6 sm:py-10">
        <div className="max-w-5xl mx-auto w-full px-3">
          <div className="w-full text-center flex flex-col gap-2 mb-8 sm:mb-10">
            <h2 className="text-slate-800 text-2xl sm:text-3xl font-bold">
              Features
            </h2>
            <span className="text-slate-700 text-sm sm:text-base">
              Discover the features {SITENAME} got to simplify your TikTok
              journey
            </span>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
              <img
                src="/assets/1.svg"
                className="max-w-[300px] w-full"
                alt=""
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-start text-slate-800">
                  Download TikTok <span className="text-primary">Videos</span>
                </h3>
                <p className="text-slate-700 text-center sm:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  earum suscipit odio a odit. Enim dolor qui facere velit sequi?
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
              <div className="flex flex-col gap-3 order-1 sm:order-none">
                <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-start text-slate-800">
                  Download TikTok{" "}
                  <span className="text-primary">Carousels</span>
                </h3>
                <p className="text-slate-700 text-center sm:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  earum suscipit odio a odit. Enim dolor qui facere velit sequi?
                </p>
              </div>
              <img
                src="/assets/2.svg"
                className="max-w-[300px] w-full"
                alt=""
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-20">
              <img
                src="/assets/3.svg"
                className="max-w-[300px] w-full"
                alt=""
              />
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-center sm:text-start text-slate-800">
                  Download TikTok <span className="text-primary">Musics</span>
                </h3>
                <p className="text-slate-700 text-center sm:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                  earum suscipit odio a odit. Enim dolor qui facere velit sequi?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <section className="w-gull py-8 sm:py-14">
        <div className="max-w-5xl mx-auto w-full px-3">
          <h2 className="w-full text-center text-slate-800 font-bold text-2xl sm:text-3xl mb-5">
            FAQS
          </h2>
          <div className="w-full flex flex-col gap-4">
            {faqs.map((item, i) => (
              <Accordion
                key={i}
                question={item.question}
                answer={item.answer}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
