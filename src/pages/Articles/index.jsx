import React, { useState, useEffect } from "react";
import "./style.css";

const index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articleData, setArticleData] = useState([]);
  useEffect(() => {
    fetch("https://courageous-lime-betta.cyclic.app/article")
      .then((response) => response.json())
      .then((data) => {
        setArticleData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="article-bg">
      <div className="container">
        <h1 className="article">Articles</h1>
        <div className="article-card-wrap">
          {articleData.map((article) => {
            return (
              <div className="article-card mb-5" key={article.id}>
                <a href={article.img} target="_blank">
                  <img
                    className="article-img object-cover"
                    src={article.image}
                    alt=""
                  />
                </a>
                <div className="article-parag">
                  <a target="_blank" href={article.img}>
                    <h1 className="article-title">{article.title}</h1>
                  </a>
                  <div className="article-bottom">
                    <img
                      src={article.authorImage}
                      className="rounded-5"
                      alt=""
                    />
                    <div>
                      <h5 className="article-person-name"> {article.name}</h5>
                      <span className="article-created-at">
                        {article.created_at}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default index;
