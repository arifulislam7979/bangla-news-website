import NewsCard from "@/app/components/NewsCard";

interface News {
  id: string | number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface CategoryProp {
  params: Promise<{ categoryId: string }>;
}

const CategoryNews = async ({ params }: CategoryProp) => {
  const { categoryId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    {
      next: { revalidate: 60 },
    },
  );
  const data = await res.json();
  const categoryNews: News[] = data.data || [];

  
  const categoryTitle =
    data.title || categoryId.charAt(0).toUpperCase() + categoryId.slice(1);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      
      <h1 className="text-2xl font-bold border-b-2 border-red-700 pb-2 mb-6 text-gray-900 capitalize">
        {categoryTitle}
      </h1>
      {categoryNews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          এই ক্যাটাগরিতে কোনো সংবাদ পাওয়া যায়নি।
        </div>
      )}
    </main>
  );
};

export default CategoryNews;
