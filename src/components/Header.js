import './header.scss';
import { Link } from "react-router-dom"

  export default function Header() {
  return (
    <header>
    <a href="https://hebahiari.com/">Heba Alhyari</a> 
    <div>
    <Link to="/experience">Skills and Experience</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
    </div> 
    </header>
  )}
