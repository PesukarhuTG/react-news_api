import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { сhangeSortDateFrom } from 'store/actions';
import State from 'types/InitialStateProps';

const SortDateFrom = () => {
  const { sortDateFrom } = useSelector((state: State) => state);
  const dispatch = useDispatch();

  return (
    <label>
      <span>date from: </span>
      <InputDate
        name="date-from"
        type="date"
        value={sortDateFrom}
        onChange={(e) => dispatch(сhangeSortDateFrom(e.target.value))}
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

export default SortDateFrom;
