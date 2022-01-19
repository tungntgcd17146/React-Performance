import { RoomsContext } from '../../contexts/RoomsContext';
import { useContext } from 'react';

export const useRoom = () => {
  const [state, dispatch] = useContext(RoomsContext);

  return [state, dispatch];
};
