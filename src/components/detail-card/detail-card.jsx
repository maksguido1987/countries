import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { filterByCode } from '../../config';
import {
  DCWrapper,
  DCImage,
  DCTitle,
  DCListGroup,
  DCList,
  DCLink,
  Meta,
  TagGroup,
  Tag,
} from './index';

export const DetailCard = (props) => {
  const {
    name,
    nativeName,
    flag,
    capital,
    population,
    region,
    subregion,
    topLevelDomain = [],
    currencies = [],
    languages = [],
    borders = [],
  } = props;

  const [neighbors, setNeighbors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (borders.length)
      axios
        .get(filterByCode(borders))
        .then(({ data }) => setNeighbors(data.map((c) => c.name)));
  }, [borders]);

  return (
    <DCWrapper>
      <DCImage src={flag} alt={name} />
      <div>
        <DCTitle>{name}</DCTitle>
        <DCListGroup>
          <DCList>
            <DCLink>
              <b>Native Name:</b> {nativeName}
            </DCLink>
            <DCLink>
              <b>Population:</b> {population}
            </DCLink>
            <DCLink>
              <b>Region:</b> {region}
            </DCLink>
            <DCLink>
              <b>Sub Region:</b> {subregion}
            </DCLink>
            <DCLink>
              <b>Capital:</b> {capital}
            </DCLink>
          </DCList>
          <DCList>
            <DCLink>
              <b>Top Level Domain:</b>{' '}
              {topLevelDomain.map((d) => (
                <span key={d}>{d}</span>
              ))}
            </DCLink>
            <DCLink>
              <b>Currency:</b>{' '}
              {currencies.map((c) => (
                <span key={c.code}>{c.name} </span>
              ))}
            </DCLink>
            <DCLink>
              <b>Languages:</b>{' '}
              {languages.map((l) => (
                <span key={l.name}>{l.name}</span>
              ))}
            </DCLink>
          </DCList>
        </DCListGroup>
        <Meta>
          <b>Border Countries</b>
          {/* {!borders.lenght ? (
            <span>There is no border countrie</span>
          ) : ( */}
          <TagGroup>
            {neighbors.map((t) => (
              <Tag key={t} onClick={() => navigate(`/country/${t}`)}>
                {t}
              </Tag>
            ))}
          </TagGroup>
          {/* )} */}
        </Meta>
      </div>
    </DCWrapper>
  );
};
