import React from "react";
import AddDevice from "./AddDeviceForm";
import DevicesList from "./DevicesList";
import styles from './DevicesScreen.module.scss';

const DevicesScreen = () => {
    return (
        <div className={styles.DevicesScreen}>
            <AddDevice />
            <DevicesList />
        </div>
    );
};

export default DevicesScreen;
