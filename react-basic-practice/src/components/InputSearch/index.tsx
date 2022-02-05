import { Dispatch, SetStateAction } from 'react';

type Prop = {
  setInputSearch: Dispatch<SetStateAction<string>>;
};

export const InputSearch = ({ setInputSearch }: Prop) => {
  return (
    <div className="input-group w-50">
      <span className="input-group-text">Input Search</span>
      <input
        onChange={(event) => {
          setInputSearch(event.target.value);
        }}
        className="form-control me-2"
        type="search"
        placeholder="Search by room name"
        aria-label="Search"
      />
    </div>
  );
};
