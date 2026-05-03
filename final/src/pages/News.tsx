import React from 'react';

const News: React.FC = () => {
  return (
    <div>
      <h1>Some Latest News</h1>
      <p className="subtitle">Stories about Hockey</p>

      <div className="news-spotlight">
        <h2>Spotlight News</h2>
        <p className="news-label">Connor McDavid</p>
        <img src="/images/mcdavid-news.jpg" alt="Connor McDavid" className="news-img" />
        <p className="news-text">
          Connor McDavid has continued to dominate the NHL, putting up historic point totals
          and leading the Edmonton Oilers deep into the playoffs. Often compared to Wayne
          Gretzky for his combination of speed and elite playmaking, McDavid has redefined
          what is possible at the center position. His edge work and explosive acceleration
          make him nearly impossible to contain one on one, and analysts across the league
          agree that he is in a class of his own among active players. McDavid has won the
          Hart Trophy as league MVP multiple times and shows no signs of slowing down,
          cementing his place among the all time greats of the sport.
        </p>
      </div>
    </div>
  );
};

export default News;
