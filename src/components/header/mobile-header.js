import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"

import TitleLink from "./title-link"
import NavLink from "./nav-link"

const HeaderTopBar = styled.div`
  align-items: center;
  background: goldenrod;
  display: flex;
  flex-flow: row nowrap;
  height: 3em;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 998;

  > h1 {
    font-size: 1.5em;
    font-weight: 600;
    padding-left: 1.5em;
  }
  > button {
    background: transparent;
    border: 0;
    color: inherit;
    cursor: pointer;
    display: inline-block;
    height: 100%;
    outline: 0;
    padding: 0 1.5em 0 0;
    text-transform: uppercase;
    width: auto;
  }
`
const MobileNav = styled.nav`
  background-color: lightblue;
  display: flex;
  opacity: 1;
  position: fixed;
  width: 100%;
  z-index: 997;
  > ul {
    margin-top: 3em;
    padding: 1em 0;
    display: inline-block;
    width: 100%;
    opacity: 1;
    > li {
      list-style: none;
      margin: 0 0 0.5em;
      padding: 0;
      text-align: center;
      &:last-child {
        margin: 0;
      }
      > a {
        display: block;
        transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
        width: 100%;
        text-decoration: none;
        &:hover {
          background: grey;
          color: #fff;
        }
      }
    }
  }
`

const MobileHeader = styled.header`
  margin-bottom: 3em;

  /* "Menu" button */
  > span {
    color: green;
    float: right;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
      color: #fff;
    }
  }
`

const activeLinkStyles = {
  color: "pink",
}

export default () => {
  const [open, setOpen] = useState(false)
  const navRef = useRef()

  const handleClick = e => {
    if (navRef.current.contains(e.target)) return // inside click
    setOpen(false) // outside click
  }

  useEffect(() => {
    open
      ? document.addEventListener("click", handleClick)
      : document.removeEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [open])

  const toggleMenu = () => setOpen(!open)

  return (
    <MobileHeader>
      <HeaderTopBar>
        <TitleLink to="/">Billy Bunn</TitleLink>
        <button onClick={() => toggleMenu()}>Menu</button>
      </HeaderTopBar>

      <MobileNav style={{ display: open ? "flex" : "none" }} ref={navRef}>
        <ul>
          <li>
            <NavLink to="/about" activeStyles={activeLinkStyles}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/work" activeStyles={activeLinkStyles}>
              Work
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" activeStyles={activeLinkStyles}>
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeStyles={activeLinkStyles}>
              Contact
            </NavLink>
          </li>
        </ul>
      </MobileNav>
    </MobileHeader>
  )
}