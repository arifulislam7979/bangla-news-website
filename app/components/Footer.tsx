import Image from "next/image";
import Link from "next/link";

interface NavCategory {
  slug: string;
  title: string;
  scrapable: boolean;
}

const Footer = async () => {
  const currentYear = new Date().getFullYear();

  // Dynamic Categories Fetch
  let categories: NavCategory[] = [];
  try {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    categories = (data.data || []).filter((item: NavCategory) => item.scrapable);
  } catch (error) {
    console.error("Failed to fetch footer categories:", error);
  }

  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 border-t-4 border-red-700">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.webp"
                alt="Bangla News 24 Logo"
                width={48}
                height={48}
                className="rounded-xl object-cover bg-white p-1"
              />
              <div>
                <h2 className="text-xl font-bold text-white tracking-tight">
                  Bangla <span className="text-red-600">News 24</span>
                </h2>
                <p className="text-[10px] text-gray-400">সততা ও সত্যের সন্ধানে</p>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed">
              দেশ ও দেশের বাইরের সবধরনের বস্তুনিষ্ঠ সংবাদ সবার আগে আপনার কাছে পৌঁছে দিতে আমরা নিরলসভাবে কাজ করে যাচ্ছি।
            </p>
          </div>

          
          <div>
            <h3 className="text-white text-base font-bold mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              বিভাগসমূহ
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
              {categories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/category/${cat.slug}`}
                    className="hover:text-red-500 transition-colors block py-0.5"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-3">
            <h3 className="text-white text-base font-bold mb-4 pb-2 border-b border-gray-800 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-600"></span>
              নিউজলেটার
            </h3>
            <p className="text-xs text-gray-400">
              দৈনিক গুরুত্বপূর্ণ খবরের আপডেট ইমেইলে পেতে সাবস্ক্রাইব করুন।
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="আপনার ইমেইল ঠিকানা..."
                className="bg-gray-800 border border-gray-700 text-white text-xs px-3 py-2 rounded-md focus:outline-none focus:border-red-600"
              />
              <button
                type="button"
                className="bg-red-700 hover:bg-red-800 text-white font-medium text-xs py-2 rounded-md transition-colors"
              >
                সাবস্ক্রাইব
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-gray-950 border-t border-gray-800 py-4 text-xs text-gray-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <p>© {currentYear} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।</p>
          <p className="text-gray-500">
            ডেভেলপমেন্টে{" "}
            <span className="text-gray-300 font-medium">Bangla News 24 Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;