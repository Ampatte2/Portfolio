import styled from "styled-components"
import { device } from "./device"


//Nav components
const navbar = styled.nav`
    background-color:#E8C547;
    position:fixed;
    top:0;
    width:100%;
    text-align:center;
    height:10vh;
    box-shadow: 0px 2px 1px #4D5061;
    z-index:1;
    
`
const navList = styled.ul`
    list-style-type: none;
    margin:0;
    padding:0;
    overflow: hidden
    
    
`
const navListItem = styled.li`
    
    padding:14px 16px;
    text-decoration:none;
    text-align:center;
    font-size: 2vh;
    padding-top:3vh;
    font-family:'Raleway', sans-serif;
    float:right;
`
const navImg = styled.img`
    padding-top:3vh;
    height:4vh;
    float: left;
    margin-left: 10vw;
`
//Burger Components
const burgerButton = styled.button`
    position:relative;
    border:none;
    right:2vw;
    top:2.5vh;
    overflow: hidden;
    float:right;
    background-color:transparent
    
    
`
const burgerDiv = styled.div`
    position:fixed;
    top:10vh;
    width:20vw;
    height:${props => props.height || "0"};
    visibility: ${props=>props.visibility || "visible"};
    right:0;
    transition-duration: 0.5s;
    transition-timing:ease;
    overflow:hidden;
    text-align:center;    
    border-radius:0px 0px 5px 5px;
    box-shadow: 0px 1px 0px 0px #4D5061;
    background-color: white;
    border: 1px solid rgba(92, 128, 188, 0.5);
    
    
`
const burgerItem = styled.button`
    display:flex;
    flex-direction:column;
    font-family:'Raleway', sans-serif;
    margin:auto;
    width:100%;
    height:25%;
    background-color: transparent;
    align-items:center;
    justify-content:center;
    font-size:2vh;
    border:none;
    text-decoration:underline;
    cursor:pointer;
    @media${device.mobileL}{
        font-size:1.5vh;
    }
    &:hover{
        background-color:rgba(92, 128, 188, 0.3);
    }
`
//Center banner div
const bannerDiv = styled.div`
    background-color:#5C80BC;
    width:100%;
    height:60vh;    
    font-family: 'Merriweather', serif;
    padding-bottom:10vh;
    padding-top:20vh;
    font-size:3vh;
    
    @media${device.mobileS}{
        font-size:1.5vh;
        
    }
    @media${device.mobileL}{
        font-size:1.5vh;
       
    }
    @media${device.laptop}{
        
        font-size:2.25vh
    }
    @media${device.laptopL}{
        
        font-size:2.75vh;
    }
    @media${device.tablet}{
        text-align:center;
        font-size:2.0vh;
    }
   
`
const titleDiv = styled.div`
    width:50vw;
    height:50%; 
    position:absolute;
    left:10vw;
    margin:auto;
    @media(max-width:1700px){
        width:70vw;
        
    }
    @media${device.tablet}{
        width:100%;
        left:0;
    }
`
//Individual Project Containers
const projectDiv = styled.div`
    background-color:#4D5061;
    width:30vw;
    height:30vw;
    margin:auto;
    margin-bottom:10%;
    border-radius:6px;
    @media${device.mobileL}{
        
       
    }
    @media${device.tablet}{
        width:60vw;
        height:60vw;
    }
    @media${device.laptop}{
        
    }
    
    
`
//Projects Container
const projectContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: -5vh;
    @media${device.tablet}{
        flex-direction:column;
    }

    
    
`
//Project Images
const projectImg = styled.img`
    width:100%;
    height:100%;
    border-radius:6px;
    box-shadow: -0.1rem 0.1rem 0.5rem #4D5061;
    &:hover{
        opacity:0.7
    }
`

//About Me
const aboutMe = styled.div`
    width:80vw;
    height:60vh;
    margin:auto;
    text-align:center;
    background-color: white;
    border: 1px solid rgba(92, 128, 188, 0.1);
    color: #4D5061;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 1.0vw;    
    text-decoration: none;
    text-transform: uppercase;
    border-radius:10px;
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    @media${device.tablet}{
        flex-direction:column;
        flex-wrap: nowrap;
        width:60%;
        height:100vh;
    }
    
`
const aboutMeDiv = styled.div`
    height:100%;
    width:30%;
    margin:auto;
    display:flex;
    flex-direction:column;
    border-color: rgba(92, 128, 188, 0.1);
    @media${device.tablet}{
        width:100%;
    }
    
`
const aboutMeList = styled.ul`
    text-align:left;
`

//Contact Me
const contactMe = styled.div`
    width:100%;
    height:20vh;
    margin:auto;
    margin-top:30vh;
    text-align:center;
    padding-bottom:20vh;
    
`
const contactForm = styled.form`
    display:flex;
    flex-direction: column;
    width:30vw;
    margin:auto;
    border:none;
    padding-bottom: 10vh;
    
    @media${device.laptopL}{
        width:50vw;
    }
    @media${device.mobileL}{
        width:70vw;
    }
`
const contactButton = styled.button`
    box-shadow: 0px 1px 0px 0px #4D5061;
    background-color: #5C80BC;
    border: 1px solid #4D5061;
    display: inline-block;
    cursor: pointer;
    color: #CDD1C4;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 14px;
    padding: 8px 18px;
    text-decoration: none;
    text-transform: uppercase;
    border-radius:5px;
`

const style = {
    nav: navbar,
    banner: bannerDiv,
    project: projectDiv,
    projectcontainer: projectContainer,
    projectimg:projectImg,
    about: aboutMe,
    aboutdiv:aboutMeDiv,
    aboutlist:aboutMeList,
    contact: contactMe,
    contactbutton: contactButton,
    contactform:contactForm,
    title: titleDiv,
    navlist: navList,
    navlistitem: navListItem,
    navimg: navImg,
    burger: burgerButton,
    burgerdiv: burgerDiv,
    burgeritem: burgerItem
}




export default style;