// import { State, ActionRooms } from '@/interface/roomCategory';

import { State, ActionInfos } from '@/interface/bookingContent';
import { useReducer, createContext, ReactNode, useContext } from 'react';
import reducer, { initInfos } from '../reducer/bookingContent/reducer';

//import { filterPrice } from '../utils/helper/filter'

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

  // const getBookingInfo = (id: number) => {
  //   return state.byIdInfo[id];
  // };

  // const getInfoAvailable = (id: number) => {
  //   return state.allIdsInfo.includes(id)
  // }

  // const infosAfterFilter = () => filterSims(getBookingInfo, filterPrice)
  // );

  // filterPrice()

  console.log('testState:', state);

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
