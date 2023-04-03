import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./HOC/Main";
import Left from "./HOC/Left";
import Right from "./HOC/Right";
import Home from "./Home/Home";
import "../index.css";
import Social from "./Social/Social";
import Profile from "./Profile";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";
import Languages from "./Languages";
import Interests from "./Interests";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate, NavLink } from 'react-router-dom';


const Accueil = () => {
    const navigate = useNavigate();
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user);
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successful');
            navigate("/");
        }).catch(error => console.log(error))
    }

    return (

        <>
            <center>
                <div>
                    {authUser ? <p>{`Sign In as ${authUser.email}`} <button onClick={userSignOut}>sign out</button></p> : <p>You can sign in by clicking here  &nbsp;
                        <NavLink to="/SignIn" >
                            sign In
                        </NavLink></p>}
                </div>
            </center>
            <br></br>
            {/*========== HEADER ==========*/}
            < Header />
            <Main>
                <Left>
                    <Home />
                    <Social />
                    <Profile />

                    <Skills />
                </Left>
                <Right>
                    <Education />
                    <Experience />
                    <Languages />
                    <Interests />
                </Right>
            </Main>

        </>
    )
}

export default Accueil
