import React from 'react';

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => {
  return (
    <>
      <h2>Nilesh</h2>
      <div>
        <a href="#home">Home</a>
        <a href="#work">Project</a>
        {/* <a href="#timeline">Experience</a> */}
        
    
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:nilesh.tiwari2021@vitstudent.ac.in">
        <button>Email</button>
      </a>
    </>
  );
};

export default Header;
