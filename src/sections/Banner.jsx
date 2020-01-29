import React from 'react'
import style from "../style/styledcomponents"
import {FaGithubSquare, FaLinkedin} from "react-icons/fa"
import {TiDocumentText} from "react-icons/ti"

export default class Banner extends React.Component {
    
    render() {
        return (
            <style.banner>
                <style.title>

                    <h1 style={{opacity: "0.7", color:"#CDD1C4"}}>Andrew Patterson</h1>

                    <h2>Fullstack Web Developer specializing in Javascript Technologies</h2>

                    <a href="https://github.com/AndrewmPatterson" target="_blank"><FaGithubSquare id="hover-effect" size={"5vh"} color={"#CDD1C4"}/></a>

                    <a href="https://www.linkedin.com/in/andrewmpatterson/" target="_blank"><FaLinkedin id="hover-effect" size={"5vh"} color={"#CDD1C4"}/></a>

                    <a href="https://www.linkedin.com/in/andrewmpatterson/" target="_blank"><TiDocumentText id="hover-effect" size={"5vh"} color={"#CDD1C4"}/></a>

                </style.title>
            
            </style.banner>
        )
    }
}

