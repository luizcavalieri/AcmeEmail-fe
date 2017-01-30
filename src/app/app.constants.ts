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

        break;
    case 'local':

        break;
    case 'prod':
    case 'production':

    default:
        break;
}

/*
 Export Constants
 */
export const ExampleConstant = "ExampleConstant";
