export interface PostRoom {
  id: number;
  roomImage: string;
  roomName: string;
  totalRoom: number;
  price: number;
}

export interface InitRooms {
  byId: {};
  allIds: string[];
}

export interface ActionRooms {
  type: string;
  payload: PostRoom[];
}
