import React from 'react'
import style from "../style/styledcomponents"


export default class Banner extends React.Component {
    
    render() {
        return (
            <style.banner>
                <style.title>

                    <h1 style={{opacity: "0.7", color:"#5C80BC"}}>Andrew Patterson</h1>

                    <h2 style={{marginBottom:"20px"}}>Fullstack Web Developer specializing in Javascript Technologies</h2>

                    <a href="https://github.com/AndrewmPatterson" target="_blank" rel="noopener noreferrer"><style.bannericon className="fa fa-github-square fa-2x homeicons"></style.bannericon></a>

                    <a href="https://www.linkedin.com/in/andrewmpatterson/" target="_blank" rel="noopener noreferrer"><style.bannericon className="fa fa-linkedin fa-2x homeicons"></style.bannericon></a>

                    <a href="https://www.linkedin.com/in/andrewmpatterson/" target="_blank" rel="noopener noreferrer"><style.bannericon className="fa fa-file fa-2x homeicons"></style.bannericon></a>

                </style.title>
            
            </style.banner>
        )
    }
}

