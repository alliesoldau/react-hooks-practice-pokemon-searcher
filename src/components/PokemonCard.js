import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {

  const [imageSource, setImageSource] = useState(poke.sprites.front);

  function handleSpriteFlip() {
    if (imageSource === poke.sprites.front) {
      setImageSource(poke.sprites.back)
    } else {
      setImageSource(poke.sprites.front);
    }
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleSpriteFlip}>
          <img alt="oh no!" src={imageSource}/>
        </div>
        <div className="content">
          <div className="header">{poke.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poke.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
