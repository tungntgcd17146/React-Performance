import { ChangeEvent, Dispatch, SetStateAction } from 'react';

type Prop = {
  onChangeValue: Dispatch<SetStateAction<string>>;
};

export const InputSearch = ({ onChangeValue }: Prop) => {
  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    onChangeValue(event.target.value);
  };

  return (
    <div className="input-group w-50">
      <span className="input-group-text">Input Search</span>
      <input
        onChange={onChangeInput}
        className="form-control me-2"
        type="search"
        placeholder="Search by room name"
        aria-label="Search"
      />
    </div>
  );
};
