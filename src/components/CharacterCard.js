import React from "react";
import {Card, Image } from 'semantic-ui-react';

export default function CharacterCard({ character }) {
  return (
    <div className="character-list">
    <Card>
    <Image src={character.image} />
      <Card.Content>
        <h2>{character.name}</h2>
      </Card.Content>
    </Card>
    </div>
  );
}
