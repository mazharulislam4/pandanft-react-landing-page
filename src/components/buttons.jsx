import React from 'react';
import { Link } from 'react-router-dom';
import classes from './style/buttons.module.css';

export function AnchorOutlineBtn({children , to, className , ...rest} ) {
    return (
       <span className={`${classes.AnchorOutlineBtn} ${className}`} {...rest} ><Link to={to} >{ children}</Link></span> 
    )
}


export function AnchorFillBtn({children , to , className , ...rest}) {
    return <span className={`${classes.AnchorFillBtn} ${className}`}  {...rest}><Link to={to} >{ children}</Link></span> 
}