import { RoomsContext } from '../../contexts/RoomsContext';
import { useContext } from 'react';

import { BookingInfoContext } from '../../contexts/BookingInfosContext';

export const useRoom = () => {
  const [state, dispatch] = useContext(RoomsContext);

  return [state, dispatch];
};

export const useBookInfo = () => {
  const [state, dispatch] = useContext(BookingInfoContext);

  return [state, dispatch];
};
