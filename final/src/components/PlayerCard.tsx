import React from 'react';

interface PlayerCardProps {
  name: string;
  description: string;
  imageSrc: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ name, description, imageSrc }) => {
  return (
    <div className="card">
      <h3>{name}</h3>
      {imageSrc ? (
        <img src={imageSrc} alt={name} className="card-img" />
      ) : (
        <div className="img-placeholder">[ Add image ]</div>
      )}
      <p>{description}</p>
    </div>
  );
};

export default PlayerCard;
