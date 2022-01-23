import { useReducer, createContext, ReactNode } from 'react';
import reducer, { InitInfos } from '../reducer/bookingContent/reducer';

import { FC } from 'react';

export const BookingInfoContext = createContext({});

export type Props = {
  children?: ReactNode;
};

const InfoProvider: FC<Props> = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, InitInfos);

  return (
    <BookingInfoContext.Provider value={[state, dispatch]}>{children}</BookingInfoContext.Provider>
  );
};

export default InfoProvider;
