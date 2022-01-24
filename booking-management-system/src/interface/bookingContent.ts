export interface Info {
  id: number;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  nightPrice: string;
  roomName: string;
  roomNumber: string;
  totalPrice: string;
}

export interface State {
  byIdInfo: { [id: number]: Info };
  allIdsInfo: number[];
}

export type Payload = {
  id?: number;
  infos?: Info[];
  info?: Info;
};

export interface ActionInfos {
  type: string;
  payload: Payload;
}
