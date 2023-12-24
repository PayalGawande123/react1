import React,{useState} from 'react';
import'./navbar.css';
import {Link} from 'react-scroll';
import menu from '../../assets/menu.png';


const Navbar = () => {
  const[showMenu,setshowMenu] = useState(false);
 
  return (
    <nav className="navbar">
      <img src ="" alt=""/>
      <div className="deskstopmenu">
          <Link activeClass='active ' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="deskstopMenuListItem">Home</Link>
          <Link activeClass='active ' to='skills' spy={true} smooth={true} offset={-2} duration={500}className="deskstopMenuListItem">About</Link>
          <Link activeClass='active ' to='works' spy={true} smooth={true} offset={-80} duration={500}className="deskstopMenuListItem">Portfolio</Link>
          <Link activeClass='active ' to='clients' spy={true} smooth={true} offset={-50} duration={500}className="deskstopMenuListItem">Dream Company</Link>
      </div>
      <button className="deskstopMenuBtn"onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});

      }}>
           <img src="" alt ="" className="deskstopmenuImg" />Contact Me</button>
           <img src={menu} alt="Menu" className="mobMenu" onClick={() => setshowMenu(!showMenu)}/>
        <div className='navMenu' style={{display:showMenu? 'flex':'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Home</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>About</Link>
          <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Portfolio</Link>
          <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Clients</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='listItem' onClick={()=>setshowMenu(false)}>Contact</Link>        
          </div>

      
      
    </nav>
  )
}

export default Navbar;







