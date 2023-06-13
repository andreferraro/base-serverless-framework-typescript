import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { generateRandomNumber } from './handler.service';
import schema from './schema';

import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
export const main: ValidatedEventAPIGatewayProxyEvent<
    typeof schema
> = async event => {
    const name = event.body ? event.body.name : 'World';
    const randomNumber = generateRandomNumber();
    return formatJSONResponse({
        message: `Bye ${name}. Your random number: ${randomNumber}!`,
        randomNumber,
    });
};

export const bye = middyfy(main);
