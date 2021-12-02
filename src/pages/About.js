import React from 'react';
import aboutimage from '../images/c1.jpg';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import styled  from '@emotion/styled';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from '@mui/material';


const useStyles = makeStyles( () => ({
    cardContainer: {
        display: 'flex',
        maxWidth: '100rem',
        margin: '3rem auto',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    cardItems: {
        margin: '1rem'
    }
}))

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const cardContents = [
    {
        imgSource: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
        name: 'Arnulfo',
        description: lorem,
        portfolioLink:"https://github.com/arn-misagal",
        githubLink: "https://github.com/arn-misagal",
    },
    {
        imgSource: "https://i.picsum.photos/id/338/2000/1333.jpg?hmac=-sTSfHkgHcFg1Jdut1v8HTVl9S1cyeMQ0OY_8dj30fY",
        name: 'Lemuel',
        description: lorem,
        portfolioLink:"https://sickenwings.vercel.app/",
        githubLink: "https://github.com/nameiswing",
    },
    {
        imgSource: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
        name: 'Rhodette',
        description: lorem,
        portfolioLink:"https://broodcoffee.github.io/portfolio/",
        githubLink: "https://github.com/broodcoffee",
    },
    
]


function About() {
    const classes = useStyles();
    
    return (
        <>
            <div id='about'>
                <div className='about-text'>
                    <h1>ABOUT US</h1>
                    <p>At Codesourcing, we strive to source talented Web Developers to help clients in their Website needs. 
                        Meanwhile, we also enable talents to reach better opportunities to maximize their potentials in their career. 
                        <br /><br />If you wish to open more opportunities to aspiring talents, or if you are someone looking for a match to your potentials,
                        we are more than happy to work with you. </p>
                            <a href='/contact' type='button' className='about-button'>Contact Us</a>
                </div>
                <div className='about-image'>
                    <img src={aboutimage} alt='about section background' />
                </div>
            </div>
    
            <Typography 
                variant="h1" 
                color="initial"
                sx={{ 
                    letterSpacing: "-1.5px",
                    color: '#333',
                    textAlign: 'center',
                    mt: 5,
                    fontSize: '3rem'
                }}
            >
                The Team

            </Typography>

            <Box className={classes.cardContainer}>
            {cardContents.map( item => (
                <StyledCard className={classes.cardItems} sx={{ maxWidth: 345 }} key={item.name + item.githubLink}>
                    <CardMedia
                        component="img"
                        alt="profile"
                        height="auto"
                        image={item.imgSource}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography gutterBottom variant="subtitle1" component="div" color="primary">
                            Web Developer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.description}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link underline="none" sx={{ml:'auto'}} href={item.portfolioLink} target="_blank">
                            <Button size="small" startIcon={<PersonIcon />} sx={{mr:2}}>Portfolio</Button>
                        </Link>
                        <Link underline="none" href={item.githubLink} target="_blank">
                            <Button size="small" startIcon={<GitHubIcon />} sx={{mr:1}}>Github</Button>
                        </Link>
                    </CardActions>
                </StyledCard>
            ))}
            </Box>

        </>
    )
}

export default About;

const StyledCard = styled(Card)`
    &:hover {
        box-shadow:  2px 2px 12px rgba(3, 93, 128, 0.445);
    }
`
