import styled from 'styled-components';

export const InputContainer = styled.label`
  background-color: var(--color-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radii);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    width: 280px;
    margin-bottom: 0;
  }
`;

export const Input = styled.input.attrs({
  type: 'search',
  placeholder: 'Search for a country...'
})`
  margin-left: 2rem;
  color: var(--color-text);
  border: none;
  outline: none;
  background-color: var(--color-ui-base);
`;
