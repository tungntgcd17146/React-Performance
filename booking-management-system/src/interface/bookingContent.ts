export interface Info {
  id: string;
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
  byIdInfo: { [id: string]: Info };
  allIdsInfo: string[];
}

export type Payload = {
  id?: string;
  infos?: Info[];
  info?: Info;
  totalPrice?: boolean;
};

export interface ActionInfos {
  type: string;
  payload: Payload;
}
