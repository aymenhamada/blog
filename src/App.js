import React, { useState } from "react";
import Home from "./Components/Home";
import Error from "./Components/Error";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, Route, Switch, useHistory, Link } from "react-router-dom";
import DashNav from "./Components/DashNav";
import "./css/Dashboard.css";
import Profile from "./Components/Profile";
import profile from "./images/profile.jpg";
import DashboardContent from "./Components/DashboardContent";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./css/Post.css";
import ReactHtmlParser from "react-html-parser";
import PostCard from "./Components/PostCard";
function App() {
  const history = useHistory();
  const [adminPassword, setAdminPassword] = useState("");
  function handleChange(event) {
    setAdminPassword(event.target.value);
  }
  let warning;
  const authentication = {
    isLoggedIn: false,
    onAuthentication() {
      this.isLoggedIn = true;
    },
    offAuthentication() {
      history.push("/admin");
      this.isLoggedIn = false;
      setAdminPassword("");
    },
    getLoginStatus() {
      return this.isLoggedIn;
    },
  };
  function SecuredRouter(props) {
    return (
      <Route
        path={props.path}
        render={(data) =>
          authentication.getLoginStatus() ? (
            <props.component {...data}></props.component>
          ) : (
            <Redirect to="/admin"></Redirect>
          )
        }
      ></Route>
    );
  }

  function logout() {
    authentication.offAuthentication();
  }
  function handleClick() {
    if (adminPassword === "vainadeya2003SR") {
      history.push("/admin/dashboard");
      warning = "";
      authentication.onAuthentication();
    } else {
      history.push("/admin");
      warning = (
        <p style={{ margin: "15px", color: "red" }}>ⓘ Password is incorrect</p>
      );
    }
  }
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        Rishi's Blog {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      height: "100vh",
    },
    image: {
      backgroundImage:
        "url(https://source.unsplash.com/1600x900/?nature,water)",
      backgroundRepeat: "no-repeat",
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[50]
          : theme.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  function SignInSide() {
    const classes = useStyles();
    authentication.isLoggedIn = false;
    return (
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image}></Grid>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Admin Log in
            </Typography>
            {warning}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoFocus
              autoComplete="current-password"
              value={adminPassword}
              onChange={handleChange}
            />

            <Button
              onClick={handleClick}
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <a
              rel="noopener noreferrer"
              href="/"
              style={{ textDecoration: "none", margin: "20px" }}
            >
              <Button variant="contained" color="primary">
                Home
              </Button>
            </a>
            <Box mt={5}>
              <Copyright />
            </Box>
          </div>
        </Grid>
      </Grid>
    );
  }

  function Dashboard() {
    return (
      <div>
        <div className="navbar">
          <DashNav />
          <h3 className="heading">Welcome, Rishikesh</h3>
          <div className="nav-container">
            <img
              className="profile-img"
              style={{ height: "70px", borderRadius: "50%", padding: "20px" }}
              src={profile}
              alt=""
            />
            <Button onClick={logout} variant="contained" color="primary">
              Logout
            </Button>
          </div>
        </div>
        <DashboardContent />
      </div>
    );
  }

  const posts = JSON.parse(localStorage.getItem("posts"));
  const Post = ({ match }) => {
    const post = posts.find((post) => {
      return parseInt(match.params.id) === post.id;
    });
    document.title = post.title;
    return (
      <div>
        <Navbar />
        <div className="intro-container">
          <h1>{post.title}</h1>

          <div className="intro-inside-container">
            <Link
              style={{ textDecoration: "none", color: " gray" }}
              to="/profile"
            >
              <img
                style={{ borderRadius: "50%", height: "30px" }}
                src={profile}
                alt=""
              />
            </Link>
            <Link
              style={{ textDecoration: "none", color: " gray" }}
              to="/profile"
            >
              <span className="span">Rishikesh,</span>
            </Link>

            <span style={{ color: "#888888" }} className="span">
              {" "}
              {post.date}
            </span>
            <span style={{ color: "#888888" }} className="span mob-span">
              {" "}
              •{post.time}
            </span>
          </div>
          <img className="intro-image" src={post.imgSource} alt="" />
        </div>
        <div className="post-body">
          <div className="post-body-inside">
            {ReactHtmlParser(post.postBody)}
          </div>
        </div>
        <div className="btn-holder">
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <Button fullWidth variant="contained" color="primary">
              Home
            </Button>
          </Link>
        </div>
        <hr style={{ marginTop: "60px" }} />
        <h1 className="post-header">More Articles by Rishikesh</h1>
        <div className="card-holder">
          {posts.map((post) => {
            return (
              <PostCard
                id={post.id}
                key={post.id}
                title={post.title}
                date={post.date}
                imgSource={post.imgSource}
                postBodyTitle={post.postBodyTitle}
                time={post.time}
              />
            );
          })}
        </div>
        <hr style={{ width: "100%" }} />
        <Footer />
      </div>
    );
  };
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/admin" component={SignInSide} />
        <SecuredRouter
          exact
          path="/admin/dashboard"
          component={Dashboard}
          function={logout}
        />

        <Route path="/posts/:id" component={Post} />
        <Route exact path="/profile" component={Profile} />
        <Route path="*" component={Error} />
      </Switch>
    </>
  );
}

export default App;
