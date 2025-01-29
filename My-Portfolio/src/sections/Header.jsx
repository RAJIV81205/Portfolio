function Header() {
  return (
    <header>
      <div className="logo-name">Rajiv</div>

      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="hamburger-menu">
        <img src="assets/burger-bar.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
