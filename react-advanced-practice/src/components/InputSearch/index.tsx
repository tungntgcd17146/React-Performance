import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, Dispatch, SetStateAction, memo } from 'react';

type Prop = {
  onChangeValue: Dispatch<SetStateAction<string>>;
};

const InputSearch = ({ onChangeValue }: Prop) => {
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event.target.value);
  };

  return (
    <div className="input-group w-50 input-search">
      <span className="input-group-text">
        <FaSearch />
      </span>
      <input
        onChange={handleChangeInput}
        className="form-control me-2"
        type="search"
        placeholder="Search by room name"
        aria-label="Search"
      />
    </div>
  );
};

export default memo(InputSearch);

InputSearch.whyDidYouRender = true;
