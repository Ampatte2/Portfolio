import React from 'react'
import style from "../style/styledcomponents"
import {FaServer, FaClone, FaDatabase} from "react-icons/fa"
import {IconContext} from "react-icons";


export default function About() {
    return (
        <style.about>
            <IconContext.Provider value={{className:"aboutIcons"}}>
            <style.aboutdiv>

                    <FaServer size={"3vw"}></FaServer>

                    <style.aboutlist>
                    <li>Axios</li>
                    <li>Bcrypt</li>
                    <li>JSON Web Tokens</li>
                    <li>Node.js</li>
                    <li>StyledComponents</li>
                    <li>SocksJS</li>
                    </style.aboutlist>

                </style.aboutdiv>
            <style.aboutdiv>

                <FaClone size={"3vw"}></FaClone>

                <style.aboutlist>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Redux-Thunk</li>
                    <li>React-Router</li>
                    <li>StyledComponents</li>
                    <li>Angular</li>
                    <li>NgRX Effects/Store</li>
                </style.aboutlist>

            </style.aboutdiv>
            <style.aboutdiv>

                <FaDatabase size={"3vw"}></FaDatabase>

                <style.aboutlist>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>CPanel MySQL</li>
                </style.aboutlist>
                            
            </style.aboutdiv>
            </IconContext.Provider>
        </style.about>
    )
}
