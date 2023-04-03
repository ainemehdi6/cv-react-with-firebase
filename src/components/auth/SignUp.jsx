import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
    const [emailRef, setEmailRef] = useState('')
    const [passwordRef, setPasswordRef] = useState('')

    const signupHandler = async (event) => {
        event.preventDefault()

        if (emailRef === '' && passwordRef === '') {
            console.log('empty fields!!')
        }
        else {
            await createUserWithEmailAndPassword(auth, emailRef, passwordRef)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(user);
                    navigate("/SignIn")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                    // ..
                });
        }
    }

    return (
        <div className='sign-in-container'>
            <form onSubmit={signupHandler}>
                <h1>Create an account</h1>
                <input type='email' placeholder='Email' id='email' onChange={(event) => setEmailRef(event.target.value)} />
                <input type='password' placeholder='Password' id='password' onChange={(event) => setPasswordRef(event.target.value)} />
                <button type='submit'>Sign Up</button>
                <p>
                    Already have an account?{' '}
                    <NavLink to="/SignIn" >
                        Sign in
                    </NavLink>
                </p>
            </form>
        </div>
    )
}

export default SignUp