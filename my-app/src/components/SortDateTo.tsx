import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { сhangeSortDateTo } from 'store/actions';
import State from 'types/InitialStateProps';

const SortDateTo = () => {
  const { sortDateTo } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  return (
    <label>
      <span>date to: </span>
      <InputDate
        name="date-from"
        type="date"
        value={sortDateTo}
        onChange={(e) => dispatch(сhangeSortDateTo(e.target.value))}
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
