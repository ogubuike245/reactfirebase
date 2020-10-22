import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedInLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">NEW PROJECT</NavLink>
      </li>
      <li>
        <NavLink to="/">LOG OUT</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          OE
        </NavLink>
      </li>
    </ul>
  );
}
