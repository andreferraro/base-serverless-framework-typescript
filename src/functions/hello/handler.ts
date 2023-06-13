import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { generateRandomNumber } from './handler.service';
import schema from './schema';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
export const main: ValidatedEventAPIGatewayProxyEvent<
    typeof schema
> = async event => {
    const name = event.queryStringParameters
        ? event.queryStringParameters.name
        : 'World';
    const randomNumber = generateRandomNumber();
    return formatJSONResponse({
        message: `Hello ${name}, welcome to the exciting Serverless world. Your random number: ${randomNumber}!`,
    });
};

export const hello = middyfy(main);
