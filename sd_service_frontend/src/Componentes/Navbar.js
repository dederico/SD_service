import React from 'react'
import {
  Navbar, NavbarBrand,
  NavbarToggler, NavItem,
  NavLink, UncontrolledDropdown, 
  DropdownToggle, DropdownMenu,
  DropdownItem, Collapse,
  Nav, NavbarText
} from 'reactstrap'

export default function NavbarD() {
  return (
    <div>
      <Navbar
    color="light"
    expand="md"
    light
  >
    <NavbarBrand href="/">
      sd_service
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/components/">
            Clientes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://github.com/reactstrap/reactstrap">
            Cotizaciones
          </NavLink>
        </NavItem>
        <UncontrolledDropdown
          inNavbar
          nav
        >
          <DropdownToggle
            caret
            nav
          >
            Pedidos
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              Pedidos Completos
            </DropdownItem>
            <DropdownItem>
              Pedidos En Proceso
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              Pedidos Cancelados
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>
      <NavbarText>
        Busqueda
      </NavbarText>
    </Collapse>
  </Navbar></div>
  )
}
