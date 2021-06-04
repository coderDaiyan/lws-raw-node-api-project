/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Abdallah Daiyan
 * Date: 4/6/21
 */

// * modules scaffolding
const handler = {};

handler.notFoundHandler = (reqProps, callback) => {
  callback(404, {
    message: "Not Found! Try again",
  });
};

module.exports = handler;
