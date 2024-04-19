import React, { useState } from 'react';
import styles from './Login.module.css'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogIn] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("")
        setUsername("")
        setPassword("")
        try {
            if (username === 'rekhaNSamudra' && password === 'h2w') {
                setLogIn(true)
            }
            else {
                throw Error
            }
        } catch (error) {
            setError("Incorrect username or password")
        }
    }

    return (
        <>

            <div>

                {login ? (
                    <div>
                        <h3>Welcome {username}</h3>
                        <p> You are wonderful humanbeing. </p>
                        <p>You will be very happy, healthy and wealthy...forever babesss</p>


                        <button
                            className={`${styles.button} ${styles.logout}`}
                            onClick={() => setLogIn(false)}
                        >
                            Logout
                        </button>
                    </div>

                )
                    :
                    (
                        <>
                            <h3>Login Form</h3>
                            <form onSubmit={handleSubmit}>
                                <input
                                    className={styles.inputBox}
                                    type='text'
                                    placeholder='UserName'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <br />
                                <input
                                    className={styles.inputBox}
                                    type='password'
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <br />
                                <button
                                    className={`${styles.button} ${styles.login}`}
                                    type='submit'
                                >
                                    Login
                                </button>
                                <p
                                    className={styles.error}>
                                    {error}
                                </p>
                            </form>
                        </>
                    )
                }
            </div>

        </>
    )
}

export default Login