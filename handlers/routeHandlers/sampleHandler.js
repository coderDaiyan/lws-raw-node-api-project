/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Abdallah Daiyan
 * Date: 4/6/21
 */

// * modules scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);

  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
