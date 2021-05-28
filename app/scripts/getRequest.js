import Axios from "axios";

const getRequest = async (url) => {
  const response = await Axios.get(url);
  return response;
};
export default getRequest;
