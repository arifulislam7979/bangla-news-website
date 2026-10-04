// import Image from "next/image";

// interface News {
//   title: string;
//   text: string;
//   imageUrl: string;
// }

// interface PageProps {
//   params: Promise<{ newsId: string }>;
// }

// const NewsDetail = async ({ params }: PageProps) => {
//   const { newsId } = await params;
//   const res = await fetch(
//     `https://news-api-v2.vercel.app/api/article/${newsId}`,
//   );

//   const data = await res.json();
//   const news: News = data.data;
//   if (!news) {
//     return (
//       <div className="max-w-7xl mx-auto py-10 text-center">
//         <h2>News not found!</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto">
//       <h1>{news.title}</h1>
//       <Image src={news.imageUrl} alt="img" width={600} height={600} />
//       <p>{news.text}</p>
//     </div>
//   );
// };

// export default NewsDetail;

import Image from "next/image";
import Link from "next/link";

interface News {
  title: string;
  text: string;
  imageUrl: string;
  category?: string;
  date?: string;
}

interface PageProps {
  params: Promise<{ newsId: string }>;
}

const NewsDetail = async ({ params }: PageProps) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
    {
      next: { revalidate: 60 },
    }
  );

  const data = await res.json();
  const news: News = data.data;

  // News Not Found State
  if (!news) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-2">
            সংবাদটি পাওয়া যায়নি!
          </h2>
          <p className="text-gray-600 mb-6">
            আপনি যেই লিঙ্কটি খুঁজছেন তা হয়তো সরানো হয়েছে অথবা আইডি ভুল।
          </p>
          <Link
            href="/"
            className="inline-block bg-red-700 hover:bg-red-800 text-white font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            হোমপেজে ফিরে যান
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-8">
        {/* Category Label (Optional) */}
        {news.category && (
          <span className="inline-block text-xs font-semibold uppercase text-red-600 tracking-wider mb-2">
            {news.category}
          </span>
        )}

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
          {news.title}
        </h1>

        {/* Featured Image Container */}
        <div className="relative w-full h-[280px] sm:h-[400px] md:h-[480px] mb-8 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>

        {/* Main Body Text */}
        <div className="text-gray-800 text-base sm:text-lg leading-relaxed whitespace-pre-line space-y-4 font-normal">
          {news.text}
        </div>
      </article>
    </main>
  );
};

export default NewsDetail;
