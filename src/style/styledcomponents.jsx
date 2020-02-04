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
    width:25vw;
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
    
    width:100%;
    height:70vh;    
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
    height:50vh; 
    position:absolute;
    left:10vw;
    top:30vh;
    margin:auto;
    @media(max-width:1700px){
        width:70vw;
        
    }
    @media${device.tablet}{
        width:90vw;
        left:0;
        margin-left:5vw;
        margin-right:5vw;
    }
`
//Individual Project Containers
const projectDiv = styled.div`
    background-color:#4D5061;
    width:60vh;
    height:60vh;
    margin:auto;
    margin-bottom:5vh;
    border-radius:6px;
    box-shadow: 1px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    @media${device.mobileL}{
        
       
    }
    @media${device.tablet}{
        width:100vw;
        height:100vw;
    }
    @media${device.laptop}{
        
    }
    
    
`
//Projects Container
const projectContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top:-5vh;
    @media${device.tablet}{
        flex-direction:column;
        margin-top:5vh;
    }

    
    
`
//Project Images
const projectImg = styled.img`
    width:100%;
    height:100%;
    border-radius:6px;
    
    &:hover{
        opacity:0.7
    }
`

//About Me
const aboutMe = styled.div`
    width:100%;
    height:85vh;
    margin:auto;
    text-align:center;
    background-color:#5C80BC;
    
    color: #CDD1C4 ;
    font-family: 'Merriweather', serif;
    font-size: 1.0vw;    
    text-decoration: none;
    
    display:flex;
    flex-direction:row;
    flex-wrap:nowrap;
    @media${device.laptop}{
        height:60vh;
    }
    @media${device.tablet}{
        flex-direction:column;
        flex-wrap: nowrap;
        font-size:3vw;
        height:175vh;
    }
    
`
const aboutMeDiv = styled.div`
    height:100%;
    width:25vw;
    margin:auto;
    display:flex;
    flex-direction:column;
    margin-top:10vh;
    border-radius:2px;
    border-color: rgba(92, 128, 188, 0.4);
    @media${device.tablet}{
        width:100%;
        margin-top:5vh;
    }
    
`
const aboutMeList = styled.ul`
    text-align:left;
    list-style-type:none;
    margin-left:7.5vw;
    @media${device.tablet}{
        
        margin-left:20vw;
        
    }
    
`
const aboutMeIcon = styled.div`
    margin-bottom:1vh;
    text-align:left;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:2vh
`
const aboutMeH1 = styled.h1`
    color:#CDD1C4;
    text-align:center;
    background-color: #4D5061;
    margin:auto;
    height:7vh;
    padding-top:3.0vh;
    left:45vw;
`

//Contact Me
const contactMe = styled.div`
    width:100%;
    height:20vh;
    margin:auto;
    margin-top:30vh;
    text-align:center;
    
    
`
const contactForm = styled.form`
    display:flex;
    flex-direction: column;
    width:30vw;
    margin:auto;
    border:none;
    padding-bottom: 20vh;
    
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
//modal styles

const modal = styled.div`
    width:80vw;
    height:40vw;
    position:fixed;
    top:10vh;
    left:10vw;
    background-color:white;
    border-color:#4D5061;
    border-radius:5px;
    box-shadow: 1px 4px 8px 0 #CDD1C4, 1px 4px 8px 0 rgba(0, 0, 0, 1);
    filter: blur(0);
    visibility:visible;
    margin:none;
    padding:none;
    z-index: 99;
    text-align:center;
    display: flex;
    flex-direction: row;
    @media${device.tablet}{
        flex-direction:column;
        height:90vh;
        width:90vw;
        top:5vh;
        left:5vw;
        
    }
`
const modalImg = styled.img`
    width:40vw;
    height:40vw;
    border-radius:5px;
    @media${device.tablet}{
        width:90vw;
        height:45vh;
    }
    
`
const modalButton = styled.button`
    position:fixed;
    top:0;
    right:0;
    border:none;
    padding:0;
    @media${device.tablet}{
        
    }
`
const modalInfo = styled.div`
    display:flex;
    flex-direction:column;
`
const modalItem = styled.div`
    width:10vw;
    padding:1vh;
    border-radius:2px;
    margin:5px;
    color: #CDD1C4;
    background-color:#5C80BC;
    @media${device.tablet}{
        width:7.5vw;
        font-size:2vw;
        padding:2vw;
    }
`
const modalDescription = styled.div`
    font-family: 'Merriweather', serif;
    font-size:1rem;
    line-height: 2;
    margin-top:10vh;
    margin-left:2vw;
    margin-right:2vw;
    @media${device.tablet}{
        margin-top:2.5vh;
        font-size:1.5vh;
        
    }
    
`
const modalBanner = styled.div`
    
    
    
    
`
const modalLink = styled.a`
    margin-left:2vw;
    display:flex;
    flex-direction:row;
    
    
    text-decoration:none;
    &:visited{
        text-decoration:none;
        color:#4D5061;
    }
    &:hover{
        color:#E8C547;
    }
    
    @media${device.tablet}{
        
    }
    
    
`
const modalLinkDiv = styled.div`
    position:absolute;
    display:flex;
    flex-direction:row;
    font-size:2vh;
    right:0;
    bottom:0;
    padding-top:10px;
    color:#4D5061;
    &:hover{
        color: #E8C547;
    }
    @media${device.tabletL}{
        right:1vw;
        bottom:1vh;
        
    }

`
const modalFramework = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:center;
    
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
    abouticon:aboutMeIcon,
    abouth1:aboutMeH1,
    contact: contactMe,
    contactbutton: contactButton,
    contactform:contactForm,
    modal: modal,
    modalbutton:modalButton,
    modalimg:modalImg,
    modalinfo:modalInfo,
    modalitem:modalItem,
    modalbanner: modalBanner,
    modallink: modalLink,
    modaldescription: modalDescription,
    modallinkdiv: modalLinkDiv,
    modalframework: modalFramework,
    title: titleDiv,
    navlist: navList,
    navlistitem: navListItem,
    navimg: navImg,
    burger: burgerButton,
    burgerdiv: burgerDiv,
    burgeritem: burgerItem
}




export default style;