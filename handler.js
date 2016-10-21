'use strict';

module.exports.hello = (event, context, callback) => {
  const versionNumber = event.pathParameters.version_number;
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      version: versionNumber
    }),
  };

  callback(null, response);
};
