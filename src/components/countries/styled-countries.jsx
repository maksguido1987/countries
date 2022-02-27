import styled from 'styled-components';

export const ListWrapper = styled.section`
  width: 100%;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    padding: 2.5rem 0;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 4rem;
  }
`;

export const CountryCardWrapper = styled.article`
  border-radius: var(--radii);
  background-color: var(--color-ui-base);
  cursor: pointer;
  box-shadow: var(--shadow);
  overflow: hidden;
  color: var(--color-text)
`;

export const CountryCardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

export const CountryCardBody = styled.div`
  padding: 1rem 1.5rem 2rem;
`;

export const CountryCardTitle = styled.h3`
  margin: 0;
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
`;

export const CountryCardList = styled.ul`
  margin: 0;
  padding: 1rem 0 0;
  list-style: none;
`;

export const CountryCardItem = styled.li`
  font-weight: var(--fw-light);
  line-height: 1.5;
  font-size: var(--fs-sm);

  & > b {
    font-weight: var(--fw-bold);
  }
`;
