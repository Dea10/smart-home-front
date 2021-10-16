import React from 'react';

const AddDevice = () => {
    return (
        <form action="">
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Device Name</span>
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Device Type</span>
                    <input type="text" className="form-control" />
                </div>

                <div>
                    <button className='btn btn-primary ' type='submit'>Submit</button>
                </div>
            </form>
    );
}

export default AddDevice;