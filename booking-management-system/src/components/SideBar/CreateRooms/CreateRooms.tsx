import { useContext, useRef, useState, useEffect } from 'react'
import { ThemeContext } from '../../../contexts/ThemeModeContext'

import { useReducer } from 'react'
import { init } from '../../../reducer/sidebar/reducer'

import api from '../../../api/index.js'


export const CreateRooms = () => {

    const context = useContext(ThemeContext)

    const nameRef = useRef(null)
    const priceRef = useRef(null)
    const availableRef = useRef(null)
    const imageRef = useRef(null)

    // const [state, dispath] = useReducer(reducer, init)

    const handleSubmit = async () => {

        const postRoom = {
            "rommImage": imageRef.current.value, 
            "roomName": nameRef.current.value,
            "totalRoom": availableRef.current.value,
            "price": priceRef.current.value
        }

        await api.post("/roomCategory", postRoom)

        console.log([
            nameRef.current.value, 
            priceRef.current.value, 
            availableRef.current.value,
            imageRef.current.value
        ])
        nameRef.current.value = "";
        priceRef.current.value = "";
        availableRef.current.value = "";
        imageRef.current.value = "";
        
        nameRef.current.focus()
    }

    return (
        <div className="row mt-3">
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Room type:</label>
                <input 
                ref={nameRef}
                type="text" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com" 
                />
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Price for 1 night:</label>
                <input 
                ref={priceRef}
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com" 
                />
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Room available:</label>
                <input 
                ref={availableRef}
                type="email" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com" 
                />
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Room image:</label>
                <input 
                ref={imageRef}
                type="file" 
                className="form-control" 
                id="exampleFormControlInput1" 
                placeholder="name@example.com" 
                />
            </div>
            <div className="col-6">
                <button 
                onClick={handleSubmit}
                // type="submit" 
                className="btn btn-outline-success mb-3">Submit</button>
            </div>
        </div>
    )
}