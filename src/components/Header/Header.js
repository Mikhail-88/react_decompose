import React from 'react';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.header}>
      <h1 className={style.header__title}>Site Name</h1>
      <nav className={style.navigation}>
        <a className={style.navigation__link} href="#about">About</a>
        <a className={style.navigation__link} href="#services">Services</a>
        <a className={style.navigation__link} href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
