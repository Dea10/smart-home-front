import React from 'react';
import styles from './DevicesScreen.module.scss';
import { deviceslist } from './mockData';

const DevicesList = () => {
    return (
        <table className={`table ${styles.table}`}>
                <thead>
                    <tr>
                        <th scope="col">Device</th>
                        <th scope="col">Type</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        deviceslist.map(({ name, type, status }) => (
                            <tr>
                                <td>{ name }</td>
                                <td>{ type }</td>
                                <td>{ status }</td>
                                <td>
                                    <button className='btn btn-warning'>Edit</button>
                                </td>
                                <td>
                                    <button className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
    );
}

export default DevicesList;