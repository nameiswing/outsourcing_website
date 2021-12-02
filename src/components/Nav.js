import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import { ResponsiveBox } from "./utils";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from "@mui/material";
import { theme as customTheme } from "../mui-theme";
import { useGlobalDataContext } from "../App";
import Logo from './Logo';
import { useState } from "react";


function Nav() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { setPageName } = useGlobalDataContext();
    const [ drawerState, setDrawerState ] = useState(false);

    const selectActive = (e) => { //puts an underline on a selected nav link
        let links = document.querySelectorAll('.route-links');
        links.forEach( link => link.classList.remove('active') );
        if(e.currentTarget.matches('.navbar-logo')) return;
        e.target.classList.add('active');
    }

    return (
        <NavContainer position="sticky" color="default" sx={{ boxShadow: 0 }}>
            <ResponsiveBox>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0 .25rem',
                    borderBottom: '1px solid var(--gray1)'
                }}>
                    <Link to='/' className='navbar-logo route-links' onClick={ e => selectActive(e)}> 
                        <Logo className='navbar-logo' />
                    </Link>
                    {!isMobile ? (
                        <Box>
                            <StyledLink 
                                onClick={(e)=> {
                                    setPageName("jobs");
                                    selectActive(e)
                                }} 
                                className="route-links" 
                                to="/jobs"
                            >
                                Jobs
                            </StyledLink>&nbsp;
                            <StyledLink
                                onClick={(e)=> {
                                    setPageName("workers");
                                    selectActive(e)
                                }} 
                                className="route-links" 
                                to="/workers"
                            >
                                Workers
                            </StyledLink>
                            <StyledLink onClick={ e => selectActive(e)} className="route-links" to="/about">About Us</StyledLink>
                            <StyledLink onClick={ e => selectActive(e)} className="route-links" to="/contact">Contact Us</StyledLink>
                        </Box>
                    ) : (
                        <>
                            <IconButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={() => setDrawerState(true)}
                            >
                                <MenuIcon htmlColor={customTheme.palette.grey[600]}/>
                            </IconButton>
                            { (drawerState && isMobile) &&
                                <NavDrawer onClick={ () => setDrawerState(false) }>
                                    <StyledLinkBox>
                                        <StyledLink1 onClick={ e => selectActive(e)} className="route-links" to="/">Home</StyledLink1>
                                        <StyledLink1
                                            onClick={(e)=> {
                                                setPageName("jobs");
                                                selectActive(e)
                                            }}
                                            className="route-links"
                                            to="/jobs"
                                        >
                                            Jobs
                                        </StyledLink1>
                                        <StyledLink1
                                            onClick={(e)=> {
                                                setPageName("workers");
                                                selectActive(e)
                                            }}
                                            className="route-links"
                                            to="/workers"
                                        >
                                            Workers
                                        </StyledLink1>
                                        <StyledLink1 onClick={ e => selectActive(e)} className="route-links" to="/about">About Us</StyledLink1>
                                        <StyledLink1 onClick={ e => selectActive(e)} className="route-links" to="/contact">Contact Us</StyledLink1>
                                    </StyledLinkBox>
                                </NavDrawer>
                            }
                        </>
                        
                    )}
                </Toolbar>
            </ResponsiveBox>
        </NavContainer>
    );
}

export default Nav;


const NavContainer = styled(AppBar)`
    background-color: var(--color5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 .5rem;
    /* box-shadow: 0 2px 6px rgba(0,0,0,0.25); */
`;
const StyledLink = styled(Link)`
    color: var(--gray4);
    font-size: .875rem;
    font-weight: 600;
    margin-left: clamp(1rem, 3vmin, 2.5rem);
    position: relative;
    text-decoration: none;
    letter-spacing: -.5px;

    &::after {
            content: '';
            height: 2px;
            width: 0;
            transition: .2s;
            position: absolute;
            bottom: -.25rem;
            left: 0;
            background-color: var(--color2);
        }

    &:hover:not(.active) {
        &::after {
            width: 100%;
        }
    }
`;

const NavDrawer = styled.div`
    position: absolute;
    background-color: #37474f92;
    height: 100vh;
    width: calc(100% + 1rem);
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: row-reverse;
`
const entrance = keyframes`
    to {
        transform: translateX(0%);
        opacity: 1;
    }
`
const StyledLinkBox = styled(Box)`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: max-content;
    gap: 1rem;
    padding: 2rem 3rem 0 2rem;
    background-color: var(--color5);
    transform: translateX(50%);
    opacity: 0;
    animation: ${entrance} .3s ease-out forwards;
`
const StyledLink1 = styled(StyledLink)`
    width: max-content;
`