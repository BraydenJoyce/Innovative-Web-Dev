import React from 'react';
import PlayerCard from '../components/PlayerCard';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Who are your favorite players?</h1>

      <div className="cards-row">
        <PlayerCard
          name="Wayne Gretzky"
          imageSrc="/images/gretzky.jpg"
          description={
            'Wayne Gretzky, nicknamed "The Great One," is widely considered the greatest hockey player ' +
            'of all time. He holds over 60 NHL records and scored more goals than any other player in league history, until Alexander Ovechkin broke his record in 2025.'
          }
        />
        <PlayerCard
          name="Sidney Crosby"
          imageSrc="/images/crosby.jpeg"
          description={
            'Sidney Crosby is the captain of the Pittsburgh Penguins and has won three Stanley Cup ' +
            'championships. He is considered one of the best players of his generation.'
          }
        />
        <PlayerCard
          name="Connor McDavid"
          imageSrc="/images/mcdavid.webp"
          description={
            'Connor McDavid is the captain of the Edmonton Oilers and is regarded as the fastest skater ' +
            'in the NHL. He has won multiple Hart Trophy awards as the league\'s most valuable player.'
          }
        />
      </div>
    </div>
  );
};

export default Home;
