import React from 'react';
import styles from './LoginScreen.module.scss';

const LoginScreen = () => {
    const handleLogin = (event) => {
        event.preventDefault()
        console.log('login');   
    }

    return (
        <div className={styles.loginForm}>
            <form onSubmit={handleLogin}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">User</span>
                    <input type="text" className="form-control" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                    <input type="password"  className="form-control" />
                </div>

                <div className={styles.loginButton}>
                    <button className='btn btn-primary ' type='submit'>Login</button>
                </div>
            </form>
        </div>
    );
}

export default LoginScreen;