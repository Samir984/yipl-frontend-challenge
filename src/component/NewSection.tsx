import { useEffect, useState } from "react";
import SecondaryHeading from "./SecondaryHeading";
import NewsCard from "./NewsCard";
type NewsItemStructure = {
  title: string;
  date: string;
  author: string;
  category: string;
  content: string;
  image: string;
};

export default function NewSection() {
  const [news, setNews] = useState<NewsItemStructure[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<string | null>(null);
  const [seeMore, setSeeMore] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/younginnovations/internship-challenges/master/front-end/news_list.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        const data = await response.json();
        setNews(data.news);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-[1109px] mx-auto">
        <SecondaryHeading
          secondaryHeading="News"
          text="We aim to stop public funds siphoning off and we have a plan that will help. We are working at the national and EU levels to advance."
        />
      </div>
      <div className="mt-8 min-h-[955px]">
        {isLoading ? (
          <div className=" flex  justify-center items-center w-full h-full ">
            <span className="loader mt-24"></span>
          </div>
        ) : (
          <div className="flex flex-wrap items-center justify-center max-w-[1109px] gap-4 mx-auto ">
            {news?.map((newsItem, i) => {
              if (i > 5 && !seeMore) return;
              return (
                <div key={newsItem.date}>
                  <NewsCard
                    image={newsItem.image}
                    title={newsItem.title}
                    description={newsItem.content}
                  />
                </div>
              );
            })}
          </div>
        )}
        {isError && (
          <div className="bg-red-600 px-4 py-2">
            Something when wrong while fetching data
          </div>
        )}
      </div>
      {!isError && (
        <div
          className="w-full text-center mt-8"
          onClick={() => setSeeMore((prev) => !prev)}
        >
          <button className="border-2 border-[#1D6FA3]  px-4 py-[10px] rounded hover:bg-slate-100   ">
            {seeMore ? "View less news" : "View more news"}
          </button>
        </div>
      )}
    </div>
  );
}
