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
        console.log(data)
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
                  <img
                    className="article-img object-cover"
                    src={article.img}
                    alt=""
                  height='300'
                  />
                <div className="article-parag">
                    <h1 className="article-title">{article.title}</h1>
                  <div className="article-bottom">
                    <img
                      src={article.authorImg}
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
