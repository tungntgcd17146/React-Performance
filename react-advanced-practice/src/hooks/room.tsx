import { useContext } from 'react';
import { RoomsContext } from '../context/RoomContext';

export const useRoom = () => useContext(RoomsContext);
