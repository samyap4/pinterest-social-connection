/* globals request */
module.exports = function fetchUserProfile(accessToken, context, cb) {
  const axios = require("axios@0.22.0");
  const userInfoEndpoint = "https://oauth.reddit.com/api/v1/me";
  const headers = { Authorization: `Bearer ${accessToken}` };

  axios
    .get(userInfoEndpoint, { headers })
    .then((res) => {
      if (res.status !== 200) {
        return cb(new Error(res.data));
      }

      const userData = res.data;
      console.log(userData);

      const profile = {
        user_id: userData.id,
        nickname: userData.name,
      };

      cb(null, profile);
    })
    .catch((err) => cb(err));
};
