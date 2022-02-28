import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, Dispatch, memo, SetStateAction } from 'react';

type Prop = {
  setInputSearch: Dispatch<SetStateAction<string>>;
};

const InputSearch = ({ setInputSearch }: Prop) => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
  };

  return (
    <div className="input-group w-50 input-search">
      <span className="input-group-text" data-testid="add-icon-search">
        <FaSearch />
      </span>
      <input
        onChange={handleChangeInput}
        className="form-control me-2"
        type="search"
        placeholder="Search by room name"
        aria-label="Search"
        data-testid="add-word-input"
      />
    </div>
  );
};

export default memo(InputSearch);

InputSearch.whyDidYouRender = true;
