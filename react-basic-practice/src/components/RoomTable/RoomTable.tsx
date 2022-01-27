//import { useState } from 'react';
import { RoomList } from './RoomList';
import { SortByName } from './SortByName';

export const RoomTable = () => {
  return (
    <table className="table table-hover table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">
            Room name <SortByName />
          </th>
          <th scope="col">Unique code</th>
          <th scope="col">Price for 1 night</th>
          <th scope="col">Rooms available</th>
          <th scope="col">Config</th>
        </tr>
      </thead>
      <tbody>
        <RoomList />
      </tbody>
    </table>
  );
};
