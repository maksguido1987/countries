import React from 'react';
import {
  CountryCardWrapper,
  CountryCardImage,
  CountryCardBody,
  CountryCardTitle,
  CountryCardList,
  CountryCardItem,
} from './index';

export const CountryCard = ({ img, name, info = [], onClick }) => {
  return (
    <CountryCardWrapper onClick={onClick}>
      <CountryCardImage src={img} alt={name} />
      <CountryCardBody>
        <CountryCardTitle>{name}</CountryCardTitle>
        <CountryCardList>
          {info.map((el) => (
            <CountryCardItem key={el.title}>
              <b>{el.title}:</b> {el.description}
            </CountryCardItem>
          ))}
        </CountryCardList>
      </CountryCardBody>
    </CountryCardWrapper>
  );
};
