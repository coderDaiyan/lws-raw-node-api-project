/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Abdallah Daiyan
 * Date: 4/6/21
 */

// * modules scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Your requested URL was not found!",
  });
};

module.exports = handler;
