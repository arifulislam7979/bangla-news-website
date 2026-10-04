import Image from "next/image";
import Link from "next/link";
import NavLinks, { Navs } from "./NavLinks";

const HeaderPage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
    next: { revalidate: 3600 },
  });
  const data = await res.json();
  const navs: Navs[] = data.data || [];

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              className="w-10 h-10 md:w-12 md:h-12 rounded-xl object-cover"
              height={50}
              width={50}
              src="/logo.webp"
              alt="Bangla News 24 Logo"
              priority
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-red-700 leading-tight">
                Bangla News 24
              </h1>
              <p className="text-[11px] md:text-xs text-gray-500 font-medium">
                {date}
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-2 md:gap-3">
            <button className="text-xs md:text-sm font-medium text-gray-700 hover:text-red-700 transition-colors px-2 py-1.5 cursor-pointer">
              সাইন ইন
            </button>
            <button className="bg-red-700 hover:bg-red-800 text-white font-medium text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-md transition-colors cursor-pointer">
              সাইন আপ
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="mt-3 pt-2 border-t border-gray-100 overflow-x-auto">
          <NavLinks navs={navs} />
        </nav>
      </div>
    </header>
  );
};

export default HeaderPage;
