/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Abdallah Daiyan
 * Date: 4/6/21
 */

// * modules scaffolding
const handler = {};

handler.sampleHandler = (reqProps, callback) => {
  console.log(reqProps);
  callback(200, {
    message: "This is a sample url",
  });
};

module.exports = handler;
