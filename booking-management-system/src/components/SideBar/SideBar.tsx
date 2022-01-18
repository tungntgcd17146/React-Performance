import React from 'react'

import { CreateRooms } from './CreateRoom/CreateRoom'
import { RoomCategory } from './RoomCategory/RoomCategory'

import RoomsProvider from '../../contexts/RoomsContext'

export const SideBar = () => {
    return (
        <div className="">
            <div className="row">
                <RoomsProvider>
                    <CreateRooms />
                    <RoomCategory />
                </RoomsProvider>
            </div>
        </div>
    )
}