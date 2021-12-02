import React from 'react'
import { useGlobalDataContext } from '../App';
import { StyledRouterLink } from './utils';

const DevBox = (props) => {

    const { setCategory } = useGlobalDataContext();
    
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image} alt="stock figure"/>
            </div>

            <div claassName='a-b-text'>
                <h2>{props.title}</h2>
                <StyledRouterLink 
                    to='/workers' 
                    type='button' 
                    className='devbox-button'
                    onClick={()=>setCategory(props.category)}
                >
                    Hire now
                </StyledRouterLink>
            </div>
        </div>
    )
}

export default DevBox
