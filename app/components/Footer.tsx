'use client'

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const categories = [
    { name: "জাতীয়", href: "/category/national" },
    { name: "রাজনীতি", href: "/category/politics" },
    { name: "অর্থনীতি", href: "/category/economy" },
    { name: "আন্তর্জাতিক", href: "/category/international" },
    { name: "খেলাধুলা", href: "/category/sports" },
    { name: "বিনোদন", href: "/category/entertainment" },
    { name: "প্রযুক্তি", href: "/category/technology" },
    { name: "জীবনযাপন", href: "/category/lifestyle" },
  ];

  const quickLinks = [
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "যোগাযোগ", href: "/contact" },
    { name: "গোপনীয়তা নীতি", href: "/privacy-policy" },
    { name: "ব্যবহারের শর্তাবলী", href: "/terms" },
    { name: "বিজ্ঞাপন", href: "/advertisement" },
    { name: "আর্কাইভ", href: "/archive" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 mt-12 border-t-4 border-red-700">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Bangla News 24 Logo"
                width={45}
                height={45}
                className="rounded-lg object-cover bg-white p-1"
              />
              <span className="text-2xl font-bold text-white tracking-wide">
                Bangla<span className="text-red-500">News24</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              সত্য ও বস্তুনিষ্ঠ সংবাদের নির্ভরযোগ্য মাধ্যম। দেশের সর্বশেষ খবর, রাজনীতি, অর্থনীতি, খেলাধুলা ও বিনোদনের আপডেট পেতে আমাদের সাথেই থাকুন।
            </p>
          </div>

          {/* Column 2: News Categories */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              বিভাগসমূহ
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="hover:text-red-500 transition-colors duration-200"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              গুরুত্বপূর্ণ লিঙ্ক
            </h3>
            <ul className="space-y-2 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-red-500 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter / Contact */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              নিউজলেটার
            </h3>
            <p className="text-xs text-gray-400">
              প্রতিদিনের গুরুত্বপূর্ণ খবরের আপডেট ইমেইলে পেতে সাবস্ক্রাইব করুন।
            </p>
            <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="আপনার ইমেইল দিন..."
                className="bg-gray-800 border border-gray-700 text-white text-sm px-3 py-2 rounded-md focus:outline-none focus:border-red-600"
              />
              <button
                type="submit"
                className="bg-red-700 hover:bg-red-800 text-white font-medium text-sm py-2 rounded-md transition-colors"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-gray-950 border-t border-gray-800 py-4 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p>© {currentYear} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-gray-500">
            ডিজাইন ও ডেভেলপমেন্টে{" "}
            <span className="text-gray-300 font-medium">Bangla News 24 Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;