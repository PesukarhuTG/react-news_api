import React from 'react';

interface GlobalContent {
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<GlobalContent>({
  searchVal: '',
  setSearchVal: () => {},
});
