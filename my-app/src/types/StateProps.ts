import FormProps from './Form';
import SavedCardProps from './SavedCardData';

interface StateProps {
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
}

export default StateProps;
