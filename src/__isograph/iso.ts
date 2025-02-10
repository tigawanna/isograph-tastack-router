import type { IsographEntrypoint } from '@isograph/react';
import { type Mutation__FollowUser__param } from './Mutation/FollowUser/param_type';
import { type Mutation__UnfollowUser__param } from './Mutation/UnfollowUser/param_type';
import { type Query__Viewer__param } from './Query/Viewer/param_type';
import entrypoint_Mutation__FollowUser from '../__isograph/Mutation/FollowUser/entrypoint';
import entrypoint_Mutation__UnfollowUser from '../__isograph/Mutation/UnfollowUser/entrypoint';
import entrypoint_Query__Viewer from '../__isograph/Query/Viewer/entrypoint';

// This is the type given to regular client fields.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes one parameter
// of type TParam.
type IdentityWithParam<TParam extends object> = <TClientFieldReturn>(
  clientField: (param: TParam) => TClientFieldReturn
) => (param: TParam) => TClientFieldReturn;

// This is the type given it to client fields with @component.
// This means that the type of the exported iso literal is exactly
// the type of the passed-in function, which takes two parameters.
// The first has type TParam, and the second has type TComponentProps.
//
// TComponentProps becomes the types of the props you must pass
// whenever the @component field is rendered.
type IdentityWithParamComponent<TParam extends object> = <
  TClientFieldReturn,
  TComponentProps = Record<PropertyKey, never>,
>(
  clientComponentField: (data: TParam, componentProps: TComponentProps) => TClientFieldReturn
) => (data: TParam, componentProps: TComponentProps) => TClientFieldReturn;

type WhitespaceCharacter = ' ' | '\t' | '\n';
type Whitespace<In> = In extends `${WhitespaceCharacter}${infer In}`
  ? Whitespace<In>
  : In;

// This is a recursive TypeScript type that matches strings that
// start with whitespace, followed by TString. So e.g. if we have
// ```
// export function iso<T>(
//   isographLiteralText: T & MatchesWhitespaceAndString<'field Query.foo', T>
// ): Bar;
// ```
// then, when you call
// ```
// const x = iso(`
//   field Query.foo ...
// `);
// ```
// then the type of `x` will be `Bar`, both in VSCode and when running
// tsc. This is how we achieve type safety — you can only use fields
// that you have explicitly selected.
type MatchesWhitespaceAndString<
  TString extends string,
  T
> = Whitespace<T> extends `${TString}${string}` ? T : never;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Mutation.FollowUser', T>
): IdentityWithParam<Mutation__FollowUser__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Mutation.UnfollowUser', T>
): IdentityWithParam<Mutation__UnfollowUser__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'field Query.Viewer', T>
): IdentityWithParamComponent<Query__Viewer__param>;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Mutation.FollowUser', T>
): typeof entrypoint_Mutation__FollowUser;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Mutation.UnfollowUser', T>
): typeof entrypoint_Mutation__UnfollowUser;

export function iso<T>(
  param: T & MatchesWhitespaceAndString<'entrypoint Query.Viewer', T>
): typeof entrypoint_Query__Viewer;

export function iso(_isographLiteralText: string):
  | IdentityWithParam<any>
  | IdentityWithParamComponent<any>
  | IsographEntrypoint<any, any, any>
{
  throw new Error('iso: Unexpected invocation at runtime. Either the Babel transform ' +
      'was not set up, or it failed to identify this call site. Make sure it ' +
      'is being used verbatim as `iso`. If you cannot use the babel transform, ' + 
      'set options.no_babel_transform to true in your Isograph config. ');
}