import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const { Search } = Input;

interface SearchInputProps {
  value?: string;
}

interface SearchInputState {
  value: string;
}

class SearchPanel extends React.Component<SearchInputProps, SearchInputState> {
  constructor(props: SearchInputProps) {
    super(props);
    this.state = { value: '' };
  }

  onSearch(value: string) {
    localStorage.setItem('searchData', value);
  }

  componentDidMount(): void {
    const data = (
      localStorage.getItem('searchData') ? localStorage.getItem('searchData') : ''
    ) as string;

    console.log(data);

    this.setState({ value: data });
    console.log(this.state.value);
  }

  render() {
    return (
      <StyledSearch
        placeholder="Search..."
        onSearch={(value) => this.onSearch(value)}
        enterButton
      />
    );
  }
}

const StyledSearch = styled(Search)`
  display: block;
  margin: 20px 0;
  font-size: 30px;

  .ant-input-group .ant-input {
    height: 50px;
    background-color: var(--second-contrast);
    border: 1px solid var(--second-contrast);
    color: var(--main-color);

    &:hover {
      border: 1px solid var(--primary);
    }
  }

  .ant-input-group {
    height: 50px;
  }

  button.ant-input-search-button {
    height: 50px !important;
  }
`;

export default SearchPanel;
