import Link from "next/link";

interface MostReadType {
  id: string | number;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 300 },
  });
  const data = await res.json();
  const news: MostReadType[] = data.data || [];

  return (
    <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm sticky top-4">
      <h2 className="text-lg font-bold text-red-700 mb-4 pb-2 border-b border-red-100 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-red-600"></span>
        সর্বাধিক পঠিত
      </h2>

      <div className="space-y-4">
        {news.map((n, ind) => (
          <div key={n.id} className="flex gap-3 items-start group">
            <span className="text-2xl font-black text-red-600 leading-none min-w-[24px]">
              {ind + 1}
            </span>
            <Link
              href={`/news/${n.id}`}
              className="text-sm font-semibold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-2"
            >
              {n.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRead;
