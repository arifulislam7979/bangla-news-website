import Image from "next/image";
import Link from "next/link";

interface News {
  id: string | number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface NewsCardProp {
  news: News;
}

const NewsCard = ({ news }: NewsCardProp) => {
  return (
    <Link href={`/news/${news.id}`} className="group block">
      <div className="card bg-white border border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        <figure className="relative h-44 w-full overflow-hidden bg-gray-100">
          <Image
            src={news.imageUrl}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            alt={news.title}
          />
        </figure>
        <div className="p-3 flex flex-col flex-grow">
          <span className="text-xs font-semibold text-red-600 uppercase">
            {news.category}
          </span>
          <h3 className="font-bold text-gray-900 text-base mt-1 line-clamp-2 group-hover:text-red-600 transition-colors">
            {news.title}
          </h3>
          <p className="text-gray-500 text-xs mt-2 line-clamp-2 flex-grow">
            {news.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
