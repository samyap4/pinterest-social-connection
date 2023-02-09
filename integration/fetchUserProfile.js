/* globals request */
module.exports = function(accessToken, ctx, cb) {
  const axios = require("axios@0.22.0");
 const userInfoEndpoint = "https://api.pinterest.com/v5/user_account";
 const headers = { Authorization: `Bearer ${accessToken}` };

 axios
   .get(userInfoEndpoint, { headers })
   .then((res) => {
     if (res.status !== 200) {
       return cb(new Error(res.data));
     }

     const userData = res.data;

     const profile = {
       user_id: userData.username,
       nickname: userData.username,
       picture: userData.profile_image
     };

     cb(null, profile);
   })
   .catch((err) => cb(err));
 }
