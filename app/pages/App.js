import React, { useEffect } from "react";
import Axios from "axios";
import { useDispatch } from "react-redux";

// COMPONENT IMPORTS
import Page from "../components/Page";
import Header from "../components/Header";
// import UserProfile from "../components/UserProfile";
import DateRange from "../components/DateRange";
import Distance from "../components/Distance";
import Footer from "../components/Footer";

// REDUX ACTIONS IMPORT
import { USERDATA } from "../store/userProfileReducer";
import { STRAVATOKEN } from "../store/stravaTokensReducer";

function Login(props) {
  // REDUX HOOKS START
  const dispatch = useDispatch();
  const accessToken = sessionStorage.getItem("strava_access_token");
  const authorizationCode = sessionStorage.getItem("authorizationCode");
  // REDUX HOOKS END
  // MAKING A REQUEST FOR ACCESS TOKEN START
  const getAccessToken = async () => {
    try {
      const response = await Axios.post("/.netlify/functions/stravaOAuth", {
        authorizationCode: authorizationCode,
      });
      const data = response.data.data;
      sessionStorage.setItem("strava_access_token", data.access_token);
      sessionStorage.setItem("strava_refresh_token", data.refresh_token);
      sessionStorage.setItem("currentAthlete", JSON.stringify(data.athlete));
      sessionStorage.setItem("strava_expires-at", data.expires_at);
      sessionStorage.setItem("strava_expires-in", data.expires_in);
      dispatch({
        type: USERDATA,
        userData: {
          firstName: data.athlete.firstname,
          lastName: data.athlete.lastname,
          profilePicture: data.athlete.profile,
        },
      });
      dispatch({
        type: STRAVATOKEN,
        tokenData: {
          accessToken: data.access_token,
          expiresAt: data.expires_at,
          expiresIn: data.expires_in,
          refreshToken: data.refresh_token,
          tokenType: data.token_type,
        },
      });
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    if (authorizationCode === null) {
      props.history.push("/");
    } else if (accessToken === null) {
      getAccessToken();
    }
  }, []);
  // MAKING A REQUEST FOR ACCESS TOKEN END
  useEffect(() => {
    if (sessionStorage.getItem("currentAthlete")) {
      const currentAthlete = JSON.parse(
        sessionStorage.getItem("currentAthlete")
      );
      dispatch({
        type: USERDATA,
        userData: {
          firstName: currentAthlete.firstname,
          lastName: currentAthlete.lastname,
          profilePicture: currentAthlete.profile,
        },
      });
    }
  }, []);

  return (
    <Page title={"App"}>
      <Header />
      {/* <UserProfile /> */}
      <DateRange />
      <Distance />
      <Footer />
    </Page>
  );
}

export default Login;
