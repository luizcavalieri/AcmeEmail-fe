/**
 * Created by LuizCavalieri on 30/01/2017.
 */
'use strict';

/*
 Declare Environment Variables
 */

let _EMAIL_SERVICE_URL;

/*
 Assign variables according to Environment
 */
switch (process.env.ENV)
{
    case 'dev':
    case 'development':
        _EMAIL_SERVICE_URL = 'https://hcd2oxinxl.execute-api.ap-southeast-2.amazonaws.com/dev';
        break;
    case 'local':
        _EMAIL_SERVICE_URL = 'https://hcd2oxinxl.execute-api.ap-southeast-2.amazonaws.com/dev';
        break;
    case 'prod':
    case 'production':
        _EMAIL_SERVICE_URL = 'https://18qeiwf8ff.execute-api.ap-southeast-2.amazonaws.com/prod';
    default:
        break;
}

/*
 Export Constants
 */
export const JWT_TOKEN_NAME = 'jwt_token';
export const EMAIL_SERVICE_URL = _EMAIL_SERVICE_URL;
export const CLIENT_ID = 'c1734063-25ce-47dd-9c24-b8ba1400bc50';
export const FROM_EMAIL = 'contact_form@lambdas.io';
export const TO_EMAIL = 'admin@lambdas.io';

