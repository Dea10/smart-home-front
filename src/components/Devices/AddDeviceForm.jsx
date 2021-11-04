import React from 'react';
import { deviceTypes } from './mockData';

const AddDevice = () => {

    const handleAddDevice = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleAddDevice}>
            <div className="input-group mb-3">
                <span className="input-group-text" id="inputGroup-sizing-default">Device Name</span>
                <input type="text" className="form-control" />
            </div>

            <div className="input-group mb-3">
                <select class="form-select" aria-label="Default select example">
                    <option selected>Device type</option>
                    {
                        deviceTypes.map(type => (
                            <option value={ type }>{ type }</option>        
                        ))
                    }
                </select>
            </div>

            <div>
                <button className='btn btn-primary' type='submit' >Add</button>
            </div>
        </form>
    );
}

export default AddDevice;