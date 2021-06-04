/*
 * Title: Routes
 * Description: Application Routes
 * Author: Abdallah Daiyan (Developer Daiyan)
 * Date: 4/6/21
 */

const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

// * dependencies
const routes = {
  sample: sampleHandler,
};

module.exports = routes;
