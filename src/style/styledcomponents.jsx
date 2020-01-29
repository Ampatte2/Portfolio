import styled from "styled-components"
import {device} from "./device"

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
    display:block;
    padding:14px 16px;
    text-decoration:none;
    text-align:center;
    font-size: 2vh;
    padding-top:3vh;
    font-family:'Raleway', sans-serif;
`
const navImg = styled.img`
    padding-top:3vh;
    height:4vh;
    float: left;
    margin-left: 10vw;
`
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
const projectDiv = styled.div`
    background-color:#4D5061;
    width:30%;
    height:40vh;
    margin:auto;
    margin-bottom:10%;
    @media${device.mobileL}{
        width:80%;
       
    }
    @media${device.tablet}{
        width:60%
    }
    @media${device.laptop}{
        height:25vh;
    }
    &:hover{
        background:red;
    }
    
`
const projectContainer = styled.div`
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin-top: -5vh;
    
    @media${device.tablet}{
        flex-direction:column;
    }

    
    
`
const aboutMe = styled.div`
    width:100%;
    height:20vh;
    margin:auto;
    text-align:center;
    padding-top:20vh;
`
const contactMe = styled.div`
    width:100%;
    height:20vh;
    margin:auto;
    text-align:center;
    padding-top:10vh;
`

const style = {
    nav: navbar,
    banner: bannerDiv,
    project: projectDiv,
    projectcontainer: projectContainer,
    about: aboutMe,
    contact: contactMe,
    title: titleDiv,
    navlist: navList,
    navlistitem: navListItem,
    navimg: navImg
}




export default style;