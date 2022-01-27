//import { useState } from 'react';
import { RoomList } from './RoomList';

export const RoomTable = () => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <RoomList />
      </tbody>
    </table>
  );
};
