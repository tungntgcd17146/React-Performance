import { useReducer, createContext } from 'react';
import reducer, { InitInfos } from '../reducer/bookingContent/reducer';

export const BookingInfoContext = createContext({});

const InfoProvider = ({ children }: {children: string}) => {
  const [state, dispatch] = useReducer(reducer, InitInfos);

  return (
    <BookingInfoContext.Provider value={[state, dispatch]}>{children}</BookingInfoContext.Provider>
  );
};

export default InfoProvider;
