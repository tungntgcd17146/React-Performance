import { FaSearch } from 'react-icons/fa';
import { ChangeEvent, memo } from 'react';
import { useRoom } from '../../context/RoomContext';

const InputSearch = () => {
  const { setInputSearch } = useRoom();

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputSearch(event.target.value);
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
