import Image from "next/image";
import Link from "next/link";

interface News {
  imageUrl: string;
  title: string;
  description: string;
  category: string;
  id: string | number;
}

const MainNews = ({ news }: { news: News[] }) => {
  if (!news || news.length === 0) return null;

  const [firstNews, ...otherNews] = news;

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      {/* Featured Big News (Left Side) */}
      <div className="md:col-span-7">
        <Link href={`/news/${firstNews.id}`} className="group block h-full">
          <div className="card bg-base-100 h-full">
            <figure className="relative h-56 sm:h-72 w-full overflow-hidden rounded-lg">
              <Image
                src={firstNews.imageUrl}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                alt={firstNews.title}
                priority
              />
            </figure>
            <div className="card-body px-0 pt-4 pb-2">
              <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                {firstNews.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {firstNews.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mt-1">
                {firstNews.description}
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Side List News (Right Side) */}
      <div className="md:col-span-5 flex flex-col justify-between gap-3 divide-y divide-gray-100">
        {otherNews.slice(0, 5).map((item) => (
          <div key={item.id} className="pt-3 first:pt-0">
            <span className="text-xs font-medium text-red-600">
              {item.category}
            </span>
            <Link
              href={`/news/${item.id}`}
              className="block mt-1 text-sm sm:text-base font-semibold text-gray-800 hover:text-red-600 transition-colors line-clamp-2"
            >
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
