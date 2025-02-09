import { useMemo } from "react";
import {
  createIsographEnvironment,
  createIsographStore,
  IsographEnvironmentProvider,
} from '@isograph/react';

export function makeNetworkRequest<T>(
  queryText: string,
  variables: unknown,
): Promise<T> {
  const promise = fetch('https://graphqlpokemon.favware.tech/v8', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: queryText, variables }),
  }).then(async (response) => {
    const json = await response.json();

    if (response.ok) {
      /**
       * Enforce that the network response follows the specification:: {@link https://spec.graphql.org/draft/#sec-Errors}.
       */
      if (Object.hasOwn(json, 'errors')) {
        if (!Array.isArray(json.errors) || json.errors.length === 0) {
          throw new Error('GraphQLSpecificationViolationError', {
            cause: json,
          });
        }
        throw new Error('GraphQLError', {
          cause: json.errors,
        });
      }
      return json;
    }
    throw new Error('NetworkError', {
      cause: json,
    });
  });
  return promise;
}

export function useIsographEnviroment(){
    return  useMemo(
    () =>
      createIsographEnvironment(
        createIsographStore(),
        makeNetworkRequest,
        null,
        typeof window != 'undefined' ? console.log : null,
      ),
    [],
  );
}
