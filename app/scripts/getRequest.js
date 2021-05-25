import Axios from "axios";

const getRequest = async (url) => {
  const response = await Axios.get(url);
  console.log(response);
  return response;
};
// "https://www.strava.com/api/v3/athlete/activities?before=1622246400&after=1619827201&page=1&per_page=30&access_token=bc1615ea28032ec49e2712972c3b4aec676fa78f"
export default getRequest;
