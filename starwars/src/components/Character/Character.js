import React from "react";
import styled from "styled-components";

const StarWarCharacter = styled.div`
  background-color: #d9d1c4;
  color: gray;
  width: 30%;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Character = props => {
  let { name, height, hair_color, eye_color } = props.character;
  return (
    <StarWarCharacter>
      <p>Name: {name}</p>
      <p>height: {height}</p>
      <p>Hair color: {hair_color}</p>
      <p>Eye color: {eye_color}</p>
    </StarWarCharacter>
  );
};

export default Character;
