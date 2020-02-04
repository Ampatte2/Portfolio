import React from 'react'
import style from "../style/styledcomponents"




export default function About() {
    return (
        <>
        <style.abouth1>About Me</style.abouth1>
        <style.about>
            
            <style.aboutdiv>
                
                    <style.abouticon>
                    
                    <i className="fa fa-server fa-5x"></i>
                    <h2>Back End</h2>
                    </style.abouticon>
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
                <style.abouticon>
                <i className="fa fa-clone fa-5x"></i>
                <h2>Front End</h2>
                </style.abouticon>
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
                <style.abouticon>
                <i className="fa fa-database fa-5x"></i>
                <h2>Database</h2>
                </style.abouticon>
                <style.aboutlist>
                    <li>Mongoose</li>
                    <li>MongoDB</li>
                    <li>MySQL</li>
                    <li>CPanel MySQL</li>
                </style.aboutlist>

            </style.aboutdiv>
           
        </style.about>
        </>
    )
}
