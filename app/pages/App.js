import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// COMPONENT IMPORTS
import Page from "../components/Page";
import Header from "../components/Header";
import UserProfile from "../components/UserProfile";
import DateRange from "../components/DateRange";
import Distance from "../components/Distance";
import Footer from "../components/Footer";

// REDUX ACTIONS IMPORT
import { USERDATA } from "../store/userProfileReducer";
import { STRAVATOKEN } from "../store/stravaTokensReducer";

function Login(props) {
  // REDUX HOOKS START
  const dispatch = useDispatch();
  const accessToken = useSelector(
    (store) => store.stravaTokenReducer.accessToken
  );
  const authorizationCode = useSelector(
    (store) => store.authReducer.authorizationCode
  );
  // REDUX HOOKS END
  // MAKING A REQUEST FOR ACCESS TOKEN START
  useEffect(() => {
    if (authorizationCode === "") {
      props.history.push("/");
    }
    const postUrl = `https://www.strava.com/oauth/token?client_id=${
      process.env.CLIENTID
    }&client_secret=${process.env.CLIENTSECRET}&code=${localStorage.getItem(
      "authorizationCode"
    )}&grant_type=authorization_code`;

    Axios.post(postUrl)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("strava_access_token", response.data.access_token);
        localStorage.setItem(
          "strava_refresh_token",
          response.data.refresh_token
        );
        localStorage.setItem(
          "currentAthlete",
          JSON.stringify(response.data.athlete)
        ),
          localStorage.setItem("strava_expires-at", response.data.expires_at),
          localStorage.setItem("strava_expires-in", response.data.expires_in);
        dispatch({
          type: USERDATA,
          userData: {
            firstName: response.data.athlete.firstname,
            lastName: response.data.athlete.lastname,
            profilePicture: response.data.athlete.profile,
          },
        });
        dispatch({
          type: STRAVATOKEN,
          tokenData: {
            accessToken: response.data.access_token,
            expiresAt: response.data.expires_at,
            expiresIn: response.data.expires_in,
            refreshToken: response.data.refresh_token,
            tokenType: response.data.token_type,
          },
        });
      })
      .catch((error) => console.log(error));
  }, []);
  // MAKING A REQUEST FOR ACCESS TOKEN END
  return (
    <Page title={"App"}>
      <Header />
      <UserProfile />
      <DateRange />
      <Distance />
      <Footer />
    </Page>
  );
}

export default Login;
