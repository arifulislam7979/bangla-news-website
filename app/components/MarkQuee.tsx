
import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headline {
  id: string | number;
  title: string;
}

const MarkQuee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10", {
    next: { revalidate: 60 }, 
  });
  const data = await res.json();
  const headlines: Headline[] = data.data || [];

  return (
    <div className="bg-red-700 text-white shadow-sm">
      <div className="flex items-center max-w-7xl mx-auto overflow-hidden">
        
        <div className="bg-red-800 py-2.5 px-5 font-semibold text-sm whitespace-nowrap z-10 shrink-0">
          সর্বশেষ
        </div>

        <MarqueeText
          className="cursor-pointer flex items-center"
          direction="right"
          duration={10} 
        >
          {headlines.map((headline) => (
            <span key={headline.id} className="inline-flex items-center">
              <Link
                href={`/news/${headline.id}`}
                className="hover:underline transition-all text-sm md:text-base font-medium"
              >
                {headline.title}
              </Link>
              <span className="mx-4 text-red-300">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default MarkQuee;