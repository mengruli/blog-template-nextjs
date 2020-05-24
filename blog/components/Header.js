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

export default function() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return(
        <Navbar color="info" dark expand="md">
        <NavbarBrand href="/">
            <img src="/images/logo-sm.png" alt="GrayCat89.com"/>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/posts?category=engineering">Engineering Mindset</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/posts?category=programming">Just Programming</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/posts?category=cooking">Cooking - Non Tech</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/posts?category=life">Think about Life</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
}