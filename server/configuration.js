//This file gathers all configuration parameters, 
//preferably set from the environment
//(but with defaults whenever possible without a
//security risk)

exports.Port = function () {
  return process.env.PORT || 8080;
};

exports.DataBase = function () {
	return process.env.MONGODB_URL || 'no-connection';
}
