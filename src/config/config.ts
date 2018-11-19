import * as Joi from 'joi';

// require and configure dotenv, will load vars in .env in PROCESS.ENV
import * as dotenv from 'dotenv';
import { join } from 'path';

dotenv.config();

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'test', 'provision'])
    .default('development'),
  SERVER_PORT: Joi.number()
    .default(4040),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('development'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    }),
  JWT_SECRET: Joi.string().required()
    .description('JWT Secret required to sign'),
  MONGO_HOST: Joi.string().required()
    .description('Mongo DB host url'),
  MONGO_PORT: Joi.number()
    .default(27017),
  MONGO_HOST_PROD: Joi.string().required()
    .description('Mongo DB host url prod'),
  MONGO_PORT_PROD: Joi.number()
    .default(27017),
  ROOT_URI: Joi.string().required()
    .description('Root Uri'),
  WX_APP_ID: Joi.string().required()
    .description('WeChat AppId'),
  WX_APP_SECRET: Joi.string().required()
    .description('WeChat AppSecret'),
  WX_APP_ID_MOBILE: Joi.string().required()
    .description('WeChat AppId for mobile apps'),
  WX_APP_SECRET_MOBILE: Joi.string().required()
    .description('WeChat AppSecret for mobile apps'),
  WX_LOGIN_URI: Joi.string().required()
    .description('WeChat LoginUri'),
  REDIRECT_URI: Joi.string().required()
    .description('WeChat RedirectUri'),
  MYSQL_HOST: Joi.string().required()
    .description('MYSQL_HOST'),
  MYSQL_PORT: Joi.number().default(3306)
    .description("Port"),
  MYSQL_USER: Joi.string().default("root")
    .description('MYSQL_USER'),
  MYSQL_PASSWORD: Joi.string().required()
    .description('MSSQL_PASSWORD'),
  MYSQL_DATABASE: Joi.string().required()
    .description('MSSQL_DATABASE'),
  MSSQL_HOST: Joi.string().required()
    .description('MSSQL_HOST'),
  MSSQL_USER: Joi.string().required()
    .description('MSSQL_USER'),
  MSSQL_PASSWORD: Joi.string().required()
    .description('MSSQL_PASSWORD'),
  MSSQL_DATABASE: Joi.string().required()
    .description('MSSQL_DATABASE'),
  REDIS_URI: Joi.string().required()
    .description('REDIS_URI'),
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export const config = {
  env: envVars.NODE_ENV,
  port: envVars.SERVER_PORT,
  mongooseDebug: envVars.MONGOOSE_DEBUG,
  jwtSecret: envVars.JWT_SECRET,
  mongo: {
    host: envVars.MONGO_HOST,
    port: envVars.MONGO_PORT,
    hostProd: envVars.MONGO_HOST_PROD,
    portProd: envVars.MONGO_PORT_PROD,
  },
  wx: {
    appId: envVars.WX_APP_ID,
    appSecret: envVars.WX_APP_SECRET,
    appIdMobile: envVars.WX_APP_ID_MOBILE,
    appSecretMobile: envVars.WX_APP_SECRET_MOBILE,
    loginUrl: envVars.WX_LOGIN_URI,
    redirectUrl: encodeURIComponent(envVars.REDIRECT_URI),
    downloadUrl: envVars.DOWNLOAD_URI,
  },
  mysql: {
    host: envVars.MYSQL_HOST,
    port: envVars.MYSQL_PORT,
    user: envVars.MYSQL_USER,
    password: envVars.MYSQL_PASSWORD,
    database: envVars.MYSQL_DATABASE,
  },
  mssql: {
    host: envVars.MSSQL_HOST,
    user: envVars.MSSQL_USER,
    password: envVars.MSSQL_PASSWORD,
    database: envVars.MSSQL_DATABASE,
  },
  redis: {
    uri: envVars.REDIS_URI,
  },
  rootUrl: envVars.ROOT_URI,
};

export default config;
