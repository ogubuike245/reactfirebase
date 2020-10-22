import React from "react";
import { NavLink } from "react-router-dom";

export default function SignedOutLinks() {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">SIGNUP</NavLink>
      </li>
      <li>
        <NavLink to="/">LOG IN</NavLink>
      </li>
    </ul>
  );
}
