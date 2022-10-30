import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from 'store/Context';

const SortDateTo = () => {
  const { sortDateTo, setDateTo } = useContext(Context);

  return (
    <label>
      <span>date to: </span>
      <InputDate
        name="date-from"
        type="date"
        value={sortDateTo}
        onChange={(e) => setDateTo(e.target.value)}
      />
    </label>
  );
};

const InputDate = styled.input`
  background-color: var(--main-background);
  border: 1px solid var(--input-border);
  outline: none;
  cursor: pointer;

  &:hover {
    border: 1px solid var(--primary);
  }
`;

export default SortDateTo;
