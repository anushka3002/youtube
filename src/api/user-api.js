import axios from "axios";

export const postUser = async (user) => {
  try {
    const response = await axios.put(
      `https://641ff90182bea25f6df7bf9c.mockapi.io/youtube/users/${1}`,
      user
    );
    return response;
  } catch (err) {
    return err;
  }
};
