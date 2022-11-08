import FormProps from './Form';
import CardProps from 'types/Card';
import SavedCardProps from './SavedCardData';

interface State {
  searchVal: string;
  formName: string;
  formDate: string;
  formCity: string;
  formAccept: boolean;
  formGender: string;
  formList: FormProps[];
  searchIn: string;
  sortBy: string;
  sortDateFrom: string;
  sortDateTo: string;
  currentPage: number;
  totalPageAmount: number;
  pageSize: number;
  selectedFile: string | null;
  fileText: string;
  savedCardData: SavedCardProps;
  disableCurrentPosition: boolean;
  newsData: CardProps[];
}

export default State;
