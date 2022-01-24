export interface Room {
  id: number;
  roomImage: string;
  roomName: string;
  totalRoom: number;
  price: number;
}

export interface State {
  byId: { [id: number]: Room };
  allIds: number[];
}

export type Payload = {
  id?: number;
  rooms?: Room[];
  room?: Room;
};

export interface ActionRooms {
  type: string;
  payload: Payload;
}
