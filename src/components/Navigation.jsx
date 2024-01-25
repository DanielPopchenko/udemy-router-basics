import React from 'react';
import { useNavigate } from 'react-router-dom';
// ! NavLink helps us to detect when the link is active
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.list}>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.notActive}`
              }
              end
            >
              Go to products
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : `${styles.notActive}`
              }
            >
              Go Home
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
