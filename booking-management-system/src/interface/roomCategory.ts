export interface Room {
  id: string;
  roomImage: string;
  roomName: string;
  totalRoom: number;
  price: number;
}

export interface State {
  byId: { [id: string]: Room };
  allIds: string[];
}

export type Payload = {
  id?: string;
  rooms?: Room[];
  room?: Room;
};

export interface ActionRooms {
  type: string;
  payload: Payload;
}
