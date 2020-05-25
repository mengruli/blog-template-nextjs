import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import config from '../utils/config'

export default function() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const categories = Object.keys(config["visible_categories"])
    const logoSrc = config["images"]["author_logo"]

    return(
        <Navbar color="info" dark expand="md">
        <NavbarBrand href="/">
            <img className="img-logo-topnav" src={`/images/${logoSrc}`} alt="GrayCat89.com"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {categories.map(ct => {
              return <NavItem key={ct}>
                <NavLink href={"/posts?category="+ct}>{ct}</NavLink>
              </NavItem>
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
}

