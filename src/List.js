//Where we will display the list
import React, { useState } from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        //We iterate through our array
        const { name, age, image, id } = person; //We destructure our object

        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
