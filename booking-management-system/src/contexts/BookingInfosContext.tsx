import { useReducer, createContext, ReactNode } from 'react';
import reducer, { initInfos } from '../reducer/bookingContent/reducer';

export const BookingInfoContext = createContext({});

export type Props = {
  children: ReactNode;
};

const InfoProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initInfos);

  return (
    <BookingInfoContext.Provider value={[state, dispatch]}>{children}</BookingInfoContext.Provider>
  );
};

export default InfoProvider;
