import React from 'react';
import { Link } from 'react-router-dom';
import classes from './style/footerMenuLinkWidget.module.css';

/**
 * use this component inside <ul></ul> tag . It is  using recomandation of this  component 
 * @param {to ,  children} param0 
 * @returns FooterMenuLinkWidget;
 */

export default function FooterMenuLinkWidget({to , children}) {
  return (
      <li className={`${classes.list_item}`} ><Link to={to} >{ children}</Link></li>
  )
}
