import styled from 'styled-components';
import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--color-ui-base)',
      color: 'var(--color-text)',
      borderRadius: 'var(--radii)',
      boxShadow: 'var(--shadow)',
      padding: '0.25rem',
      height: '50px',
      border: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--color-text)',
      backgroundColor: state.isSelected
        ? 'var(--color-bg)'
        : 'var(--color-ui-base)',
    }),
  },
})`
  width: 100%;
  max-width: 290px;
  font-family: var(--family);
  border-radius: var(--radii);
  border: none;

  & > * {
    box-shadow: var(--shadow);
  }

  & input {
    padding-left: 0.25rem;
  }

  & * {
    color: var(--color-text) !important;
  }

  & > div[id] {
    background-color: var(--color-ui-base);
  }
`;
