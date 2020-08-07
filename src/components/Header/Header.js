import React from "react";
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import {Link, useHistory} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Header({backButton}) {
    const history = useHistory();
    return (
        <div className="header">
            {backButton ? (
                <>
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIcon className="header__icon" fontSize="large"></ArrowBackIcon>
                    </IconButton>
                    <Link to='/'>
                    <IconButton>
                        <img className="header__logo" alt="tinder_logo" src="https://static-s.aa-cdn.net/img/gp/20600001364294/stlBGKS482zWajOTk82IXFZhr22hk_NQewNOAJ0IeptPO73qfNesCyfNwW1-xwBiwv0=s300?v=1"></img>
                    </IconButton>
                    </Link>
                    <Link to='/chat'>
                        <IconButton>
                            <ForumIcon className="header__icon" fontSize="large"/>
                        </IconButton>
                    </Link>
                </>
            ) : (
                <>
            <IconButton>
                <PersonIcon className="header__icon" fontSize="large"/>
            </IconButton> 

            <Link to='/'>
                <IconButton>
                    <img className="header__logo" alt="tinder_logo" src="https://static-s.aa-cdn.net/img/gp/20600001364294/stlBGKS482zWajOTk82IXFZhr22hk_NQewNOAJ0IeptPO73qfNesCyfNwW1-xwBiwv0=s300?v=1"></img>
                </IconButton>
            </Link>

            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className="header__icon" fontSize="large"/>
                </IconButton>
            </Link>
            </>
            )}
        </div>
    )
}


export default Header;