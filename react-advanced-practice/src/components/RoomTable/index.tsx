/* eslint-disable no-unused-vars */
import Room from './Room';
import SortButton from './SortButton';
import { RoomInterface } from '../../interface/room';

import { ErrorBoundary } from 'react-error-boundary';

type Props = {
  roomsAfterFilter: RoomInterface[];
  onDeleteRoom: (roomId: string) => void;
  onSortButton: () => void;
  toggleSort: Boolean;
};

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

const ErrorFallback = ({ error, resetErrorBoundary }: ErrorFallbackProps) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

const Bomb = () => {
  throw new Error('Do not have any list!!');
};

export const RoomTable = ({ roomsAfterFilter, onDeleteRoom, onSortButton, toggleSort }: Props) => (
  <table className="table-fill">
    <thead>
      <tr>
        <th className="text-left" scope="col">
          ID
        </th>
        <th className="text-left" scope="col">
          Room name <SortButton onSortButton={onSortButton} toggleSort={toggleSort} />
        </th>
        <th className="text-left" scope="col">
          Price for 1 night
        </th>
        <th className="text-left" scope="col">
          Rooms available
        </th>
        <th className="text-left" scope="col">
          Config
        </th>
      </tr>
    </thead>
    <tbody className="table-hover">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {roomsAfterFilter.length === 0 ? (
          <Bomb />
        ) : (
          roomsAfterFilter.map((room: RoomInterface, index: number) => (
            <Room key={room.id} room={room} order={index + 1} onDelete={onDeleteRoom} />
          ))
        )}
      </ErrorBoundary>
    </tbody>
  </table>
);

RoomTable.whyDidYouRender = true;
