import './Navbar.css';
const Nav = () => {
 return (
    <nav className="navbar">
      <h1>Achraf Hunter</h1>
      <div className="links">
        <a className='link' href="#Home">Home</a>
        <a className='link' href="#About">About</a>
        <a className='link' href="#Projects">Projects</a>
        <a className='link' href="#Contact">Contact</a>
        <a className="DownloadCv" href='/' download={"img/asabbar.jpg"}>Download CV</a>
      </div>
    </nav>
  );
}
 
export default Nav;
