import React, { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/NewsCards/NewsCards";
import Home from "./components/pages/Home";
import wordsToNumbers from "words-to-numbers";

const alanKey =
  "4136b608b1e402c9e20c0c85f243b57e2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1)

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, res, number}) => {
        if (command === "news") {
          setActiveArticle(-1)
          setArticles(res);
          window.scrollTo(0, 500);
        }
        else if(command==='highlight'){
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        }
        else if(command==='test'){
          const parseNumber =  number.length > 2 ? wordsToNumbers(number, {fuzzy: true}) : number

          const article = res[parseNumber - 1];
          window.open(article.url, '_blank');
         
        }
      },
    });
  }, []);

  return (
    <div>

      <Home />
      <NewsCards articles={articles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
