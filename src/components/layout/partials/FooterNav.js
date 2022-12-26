import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link to="#0" style={{'color': '#FFFFFF'}}>Sobre nosotros</Link>
        </li>
        <li>
          <Link to="#0" style={{'color': '#FFFFFF'}}>Ayuda</Link>
        </li>
        <li>
          <Link to="#0" style={{'color': '#FFFFFF'}}>Política de privacidad</Link>
        </li>
        <li>
          <Link to="#0" style={{'color': '#FFFFFF'}}>Política de cookies</Link>
        </li>
        <li>
          <Link to="#0" style={{'color': '#FFFFFF'}}>Configuración de Cookies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;