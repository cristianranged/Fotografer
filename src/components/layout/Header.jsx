import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '@/constants/site';
import { imageAssets } from '@/utils/imageAssets';

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-nav container" aria-label="Principal">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={imageAssets.logoBlack} alt="Rangel Shot" />
          <span>
            Rangel Shot<small>Foto & video</small>
          </span>
        </NavLink>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`site-navigation ${open ? 'is-open' : ''}`} id="site-navigation">
          {navItems.map(({ label, to }) => (
            <NavLink end={to === '/'} key={to} to={to} onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
