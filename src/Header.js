import styled from 'styled-components'
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <HeaderDiv>
            <LeftLogo><img src="https://res.cloudinary.com/dl4murstw/image/upload/v1664043955/HarvardGEtop_hmqdr0.png" width="180"/></LeftLogo>
            <MenuBar>
                <MenuItem><Link to="/about">ABOUT US</Link></MenuItem>
                <MenuItem><Link to="/courses">COURSES</Link></MenuItem>
                <MenuItem><Link to="/timetable">TIMETABLE</Link></MenuItem>
                <MenuItem><Link to="/career">CAREER</Link></MenuItem>
                <MenuItem><Link to="/contact">CONTACT US</Link></MenuItem>
            </MenuBar>

        </HeaderDiv>
    )
}

export default Header

const HeaderDiv = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    // border: 1px solid red;
`

const LeftLogo = styled.div`
    width: 40%;
    margin-left: 2em;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    // border: 1px solid red;
`

const NameText = styled.p`
    font-size:0.9em;
`
const MenuBar = styled.div`
    display:flex;
    width:70%;
    justify-content:space-around;
    margin-right: 4em;
`

const MenuItem = styled.p`
    font-size:0.9em;
    font-family: 'Inter';
    font-weight: 600;
    color: #699B80;
    a {
        text-decoration: none;
    }
    a:visited {
        color: #699B80;
    }
`

const SearchBar = styled.div`
    width: 100px;
    // border: 1px solid blue;
`
