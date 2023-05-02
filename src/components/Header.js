import './header.scss';
import { Link } from "react-router-dom"

  export default function Header() {
  return (
    <header>
    <a href="/">Heba Alhyari</a> 
    <div className='navitems'>
    <Link to="/experience" className="navitem">Skills and Experience</Link>
    <Link to="/projects" className="navitem">Projects</Link>
    <Link to="/contact" className="navitem">Contact</Link>
    </div> 
    </header>
  )}
