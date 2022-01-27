import React, { useEffect } from "react";
import {
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AppBar, Grid } from "@mui/material";
import Button from '@mui/material/Button';

import { useDispatch, useSelector } from "react-redux";
import { } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header() {
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => { }, [userInfo]);

  return (

    <Grid>



      <Navbar.Collapse id="responsive-navbar-nav">

        <Nav>
          {userInfo ? (
            <>
              <AppBar
                title={`${userInfo.name}`}
                id="collasible-nav-dropdown"
              >

                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </AppBar>
            </>
          ) : (
            <Button ><Link href="/login"></Link></Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Grid>

  );
}

export default Header;
