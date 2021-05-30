// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const Axios = require("axios");

const handler = async (event) => {
  const authorizationCode = JSON.parse(
    JSON.parse(JSON.stringify(event.body))
  ).authorizationCode;
  console.log(authorizationCode);

  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  try {
    const API_ENDPOINT = `https://www.strava.com/oauth/token?client_id=${process.env.CLIENTID}&client_secret=${process.env.CLIENTSECRET}&code=${authorizationCode}&grant_type=authorization_code`;
    const stravaResponse = await Axios.post(API_ENDPOINT, headers);
    console.log(stravaResponse.data);
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ data: stravaResponse.data }),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
