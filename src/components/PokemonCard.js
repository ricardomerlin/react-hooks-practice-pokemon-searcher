import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ name, image, hp}) {

const[sprite, setSprite] = useState(true)

function handleSprite() {
  setSprite(!sprite)
}

  return (
    <Card>
      <div>
        <div className="image">
          {sprite ? <img alt="oh no!" src={image.front} onClick={handleSprite} /> : <img alt="oh no!" src={image.back} onClick={handleSprite}/> }
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
