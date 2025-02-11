import type {ComponentReaderArtifact, ExtractSecondParam, ReaderAst } from '@isograph/react';
import { User__UserDetails__param } from './param_type';
import { UserDetailsIso as resolver } from '../../../routes/$user/-components/user/UserDetailsIso';

const readerAst: ReaderAst<User__UserDetails__param> = [
  {
    kind: "Scalar",
    fieldName: "id",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "name",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "login",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "email",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "bio",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "avatarUrl",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "company",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "twitterUsername",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "createdAt",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "isFollowingViewer",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "viewerIsFollowing",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "isViewer",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "location",
    alias: null,
    arguments: null,
  },
  {
    kind: "Scalar",
    fieldName: "url",
    alias: null,
    arguments: null,
  },
];

const artifact: ComponentReaderArtifact<
  User__UserDetails__param,
  ExtractSecondParam<typeof resolver>
> = {
  kind: "ComponentReaderArtifact",
  componentName: "User.UserDetails",
  resolver,
  readerAst,
  hasUpdatable: false,
};

export default artifact;
