import { useContext } from 'react'
import { ThemeContext } from '../../../contexts/ThemeModeContext'



export const CreateRooms = () => {
    const context = useContext(ThemeContext)

    return (
        <form className="row mt-3">
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Room type:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Price for 1 night:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Room available:</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-12 mb-3">
                <label htmlFor="exampleFormControlInput1" className={`form-label ${context.theme}`}>Room image:</label>
                <input type="file" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="col-6">
                <button type="submit" className="btn btn-outline-success mb-3">Submit</button>
            </div>
        </form>
    )
}