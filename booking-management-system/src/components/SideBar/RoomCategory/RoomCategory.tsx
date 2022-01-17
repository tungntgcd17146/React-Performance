import React from 'react'
import { useState, useEffect } from 'react'

import api from '../../../api/index.js'

import style from './RoomCategory.module.css'
import '../../../../public/images/deluxe-king-1.jpg'

type room = {
    id: number,
    price: string,
    roomName: string,
    totalRoom: number
}

export const RoomCategory = () => {

    const [roomCategory, setRoomCategory] = useState([])

    //Retrieve Room category
    const retrieveCategory = async () => {
        const response = await api.get("/roomCategory")
        return response.data;
    }

    useEffect(() => {
        const getRoomCategory = async () => {
            const allRoom = await retrieveCategory();
            if (allRoom) {
                setRoomCategory(allRoom)
            }
        }
        getRoomCategory();
    }, [])

    console.log(roomCategory)

    const renderCategory = roomCategory.map((room: room) => {
        return (
            <div className="card mb-3" key={room.id}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="../../../../public/images/Deluxe-02.jpg" className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                            <h5 className="card-title">{room.roomName}</h5>
                            <p className="card-text">{room.price}</p>
                            <p className="card-text"><small className="text-muted">Room available: {room.totalRoom} room</small></p>
                            <button className="btn btn-outline-primary mb-3">Edit</button>
                            <button className={`${style.button} btn btn-outline-danger mb-3`}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="mt-3">
            <h2>Room Category</h2>
            <div className={`mt-3 ${style.color} ${style.heightContent}`}>
                <div className="row mt-3">
                    {renderCategory}
                </div>
            </div>
        </div>
    )
}