// import MainNews from "./components/MainNews";

// import MostRead from "./components/MostRead";
// import NewsCard from "./components/NewsCard";
// interface OtherSection {
//   curationId: string
//   title: string
//   articles: {
//     id: string
//     title: string
//     description: string
//     category: string
//     imageUrl: string
//   }[]
// }

// const Home = async () => {
//   const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
//   const data = await res.json();
//   const sections = data.data;
//   const mainNews = sections[0].articles;

//   const otherSections: OtherSection[] = sections.slice(1);
//   return (
//     <div>
      
//       <div className="grid grid-cols-3 mt-5 gap-4 max-w-7xl mx-auto">
//         <div className=" col-span-2 ">
//           <MainNews news={mainNews}></MainNews>

//           <div className="grid gap-5 mt-5">
//             {otherSections.map((section) => (
//               <div key={section.curationId}>
//                 <h1 className="font-bold border-b-2 border-red-700 pb-2">
//                   {section.title}
//                 </h1>

//                 <div className="grid grid-cols-3 mt-5 gap-2">
//                   {section.articles.map((news) => (
//                     <NewsCard key={news.id} news={news}></NewsCard>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className=" col-span-1-1">
//           <MostRead></MostRead>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import MainNews from "./components/MainNews";
import MostRead from "./components/MostRead";
import NewsCard from "./components/NewsCard";

interface Article {
  id: string | number;
  title: string;
  description: string;
  category: string;
  imageUrl: string;
}

interface OtherSection {
  curationId: string;
  title: string;
  articles: Article[];
}

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections", {
    next: { revalidate: 60 },
  });
  const data = await res.json();
  const sections = data.data || [];
  
  const mainNews = sections[0]?.articles || [];
  const otherSections: OtherSection[] = sections.slice(1);

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Content Area (Left 2 Columns on Desktop) */}
        <div className="lg:col-span-2 space-y-8">
          {mainNews.length > 0 && <MainNews news={mainNews} />}

          {/* Category Sections */}
          <div className="space-y-8">
            {otherSections.map((section) => (
              <section key={section.curationId} className="space-y-4">
                <h2 className="text-xl font-bold border-b-2 border-red-700 pb-2 text-gray-900">
                  {section.title}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {section.articles.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* Sidebar (Right 1 Column on Desktop) */}
        <aside className="lg:col-span-1">
          <MostRead />
        </aside>

      </div>
    </main>
  );
};

export default Home;