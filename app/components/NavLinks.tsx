
import Link from "next/link";

export interface Navs {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

interface NavLinksProps {
  navs: Navs[];
}

const NavLinks = ({ navs }: NavLinksProps) => {
  const filteredNavs = navs.filter((nav) => nav.scrapable);

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 py-2 text-sm md:text-base font-medium">
      <Link
        className="text-gray-800 hover:text-red-700 transition-colors py-1 px-2 rounded-md hover:bg-red-50"
        href="/"
      >
        হোম
      </Link>
      
      {filteredNavs.map((nav) => (
        <Link
          key={nav.slug}
          className="text-gray-700 hover:text-red-700 transition-colors py-1 px-2 rounded-md hover:bg-red-50 whitespace-nowrap"
          href={`/category/${nav.slug}`}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;