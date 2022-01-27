import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, TextField, InputAdornment, Typography,Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import { login } from "../../actions/userActions";


function LoginScreen({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <Grid
      container
      item
      xs={12}
      sm={6}
      alignItems="center"
      direction="column"
      justify="space-between"
      style={{ padding: 10 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 400, minWidth: 200 }}>
        <div style={{ height: 100 }} />
        <Typography variant='h4' color=
          'burlywood' fontFamily='Monospace' fontWeight='bold' >SRI LAKSHMI HEAVENS PG</Typography>
        <div className="loginContainer">
          {error && <ErrorMessage >{error}</ErrorMessage>}
          {loading && <Loading />}
          <form onSubmit={submitHandler}>

            <TextField
              variant="standard"
              label="email"
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />{' '}
                  </InputAdornment>
                )
              }}
            />



            <TextField
              variant="standard"
              label="password"
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                )
              }}
            />


            <div style={{ height: 20 }} />
            <Button type="submit" size="small" variant="contained" style={{ width: '30%' }}>
              Login
            </Button>
          </form>
        </div>
      </div>
    </Grid>
  );
}

export default LoginScreen;
