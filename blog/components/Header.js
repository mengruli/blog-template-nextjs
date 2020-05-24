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
import config from 'config';

export default function() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const categories = config.get("visible_categories");

    return(
        <Navbar color="info" dark expand="md">
        <NavbarBrand href="/">
            <img src="/images/logo-sm.png" alt="GrayCat89.com"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {categories.map(ct => {
              return <NavItem>
                <NavLink href={"/posts?category="+ct}>{ct}</NavLink>
              </NavItem>
            })}
          </Nav>
        </Collapse>
      </Navbar>
    )
}