// import { State, ActionRooms } from '@/interface/roomCategory';

import { State, ActionInfos } from '@/interface/bookingContent';
import { useReducer, createContext, ReactNode, useContext } from 'react';
import reducer, { initInfos } from '../reducer/bookingContent/reducer';

interface RoomContextProps {
  stateInfo: State;
  // eslint-disable-next-line no-unused-vars
  dispatchInfo(action: ActionInfos): void;
}

export const BookingInfoContext = createContext({} as RoomContextProps);

export type Props = {
  children: ReactNode;
};

const InfoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initInfos);

  return (
    <BookingInfoContext.Provider value={{ stateInfo: state, dispatchInfo: dispatch }}>
      {children}
    </BookingInfoContext.Provider>
  );
};

export const useBookInfo = () => {
  const { stateInfo, dispatchInfo } = useContext(BookingInfoContext);

  return { stateInfo, dispatchInfo };
};

export default InfoProvider;
