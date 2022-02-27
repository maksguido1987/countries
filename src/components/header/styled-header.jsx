import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const HeaderTitle = styled(Link).attrs({
  to: '/',
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

export const HeaderModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  display: flex;
  align-items: center;
  cursor: pointer;
  text-transform: capitalize;
`
