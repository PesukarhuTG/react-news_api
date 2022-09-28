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
    this.state = {
      value: localStorage.getItem('searchData') ?? '',
    };
    console.log('constructor');
  }

  onSearch(searchValue: string) {
    this.setState({ value: searchValue });
  }

  componentDidMount(): void {
    console.log('mount');
  }

  componentDidUpdate(): void {
    console.log('update');
  }

  componentWillUnmount(): void {
    localStorage.setItem('searchData', this.state.value); // Input value should be saved to LocalStorage during component’s unmount
    console.log('unmount');
  }

  render() {
    console.log('render');
    return (
      <StyledSearch
        placeholder="Search..."
        onSearch={(value) => this.onSearch(value)}
        value={this.state.value}
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
