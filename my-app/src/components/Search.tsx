import React, { useContext } from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import CardProps from '../types/Card';
import { getNews, searchNews } from '../services/getDataApi';
import { SearchContext } from 'store/Context';

const { Search } = Input;

interface SearchProps {
  onSearch: (data: CardProps[]) => void;
}

const SearchPanel: React.FC<SearchProps> = ({ onSearch }) => {
  const { searchVal, setSearchVal } = useContext(SearchContext);

  const onChange = (searchValue: string): void => {
    setSearchVal(searchValue);
  };

  const handleSubmit = async () => {
    if (searchVal) {
      await searchNews(searchVal).then((resp) => {
        onSearch(resp.articles);
      });
    } else {
      await getNews().then((resp) => {
        onSearch(resp.articles);
      });
    }
  };

  return (
    <StyledSearch
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
      onSearch={handleSubmit}
      value={searchVal}
      data-testid="input-search"
      allowClear
      enterButton
    />
  );
};

const StyledSearch = styled(Search)`
  display: block;
  margin: 20px 0;
  font-size: 30px;

  .ant-input-group .ant-input {
    height: 50px;
    background-color: var(--second-contrast);
    color: var(--main-color);
  }

  .ant-input-group {
    height: 50px;
  }

  button.ant-input-search-button {
    height: 52px !important;
  }

  .ant-input-affix-wrapper {
    background-color: var(--second-contrast);
    border: 1px solid var(--second-contrast);
    padding: 0 15px 0 15px;
  }

  .ant-input-clear-icon {
    font-size: 18px;
    color: var(--main-color);

    &:hover {
      color: var(--primary);
    }
  }
`;

export default SearchPanel;
