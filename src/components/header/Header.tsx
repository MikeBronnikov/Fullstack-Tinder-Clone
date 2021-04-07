import React from 'react'
import './header.scss'
import PersonIcon from '@material-ui/icons/Person';
import  IconButton  from '@material-ui/core/IconButton';


export const Header = () => {
    return (
        <div className='header'>
            <IconButton>
           <PersonIcon className='header__profile' fontSize='large'/>
           </IconButton>

           <img className='header__logo'
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/TinderLogo-2017.svg/1024px-TinderLogo-2017.svg.png" alt="logo"/>
        </div>
    )
}
export default Header