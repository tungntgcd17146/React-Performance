//import { memo } from 'react';
import { useRoom } from '../../context/RoomContext';
import TotalNumberWrapper from './TotalNumberWrapper';

const TotalNumber = () => {
  const { roomsAfterFilter } = useRoom();
  return <TotalNumberWrapper roomsAfterFilter={roomsAfterFilter} />;
};

export default TotalNumber;

TotalNumber.whyDidYouRender = true;
