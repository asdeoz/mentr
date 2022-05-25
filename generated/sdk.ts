import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new document in the collection of 'Skill' */
  createSkill: Skill;
  /** Create a new document in the collection of 'SkillTag' */
  createSkillTag: SkillTag;
  /** Create a new document in the collection of 'User' */
  createUser: User;
  /** Delete an existing document in the collection of 'Skill' */
  deleteSkill?: Maybe<Skill>;
  /** Delete an existing document in the collection of 'SkillTag' */
  deleteSkillTag?: Maybe<SkillTag>;
  /** Delete an existing document in the collection of 'User' */
  deleteUser?: Maybe<User>;
  /** Partially updates an existing document in the collection of 'Skill'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateSkill?: Maybe<Skill>;
  /** Partially updates an existing document in the collection of 'SkillTag'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateSkillTag?: Maybe<SkillTag>;
  /** Partially updates an existing document in the collection of 'User'. It only modifies the values that are specified in the arguments. During execution, it verifies that required fields are not set to 'null'. */
  partialUpdateUser?: Maybe<User>;
  /** Update an existing document in the collection of 'Skill' */
  updateSkill?: Maybe<Skill>;
  /** Update an existing document in the collection of 'SkillTag' */
  updateSkillTag?: Maybe<SkillTag>;
  /** Update an existing document in the collection of 'User' */
  updateUser?: Maybe<User>;
};


export type MutationCreateSkillArgs = {
  data: SkillInput;
};


export type MutationCreateSkillTagArgs = {
  data: SkillTagInput;
};


export type MutationCreateUserArgs = {
  data: UserInput;
};


export type MutationDeleteSkillArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteSkillTagArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationPartialUpdateSkillArgs = {
  data: PartialUpdateSkillInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateSkillTagArgs = {
  data: PartialUpdateSkillTagInput;
  id: Scalars['ID'];
};


export type MutationPartialUpdateUserArgs = {
  data: PartialUpdateUserInput;
  id: Scalars['ID'];
};


export type MutationUpdateSkillArgs = {
  data: SkillInput;
  id: Scalars['ID'];
};


export type MutationUpdateSkillTagArgs = {
  data: SkillTagInput;
  id: Scalars['ID'];
};


export type MutationUpdateUserArgs = {
  data: UserInput;
  id: Scalars['ID'];
};

/** 'Skill' input values */
export type PartialUpdateSkillInput = {
  details?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<SkillTagIdsRelation>;
  title?: InputMaybe<Scalars['String']>;
};

/** 'SkillTag' input values */
export type PartialUpdateSkillTagInput = {
  skill?: InputMaybe<SkillTagSkillRelation>;
  title?: InputMaybe<Scalars['String']>;
};

/** 'User' input values */
export type PartialUpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['ID']>;
  firstName?: InputMaybe<Scalars['String']>;
  isAvailableToMentor?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  numberOfMenteesCanCoach?: InputMaybe<Scalars['Int']>;
  piProfileType?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<PartialUpdateUserSkillsInput>>>;
};

/** 'UserSkills' input values */
export type PartialUpdateUserSkillsInput = {
  proficiency?: InputMaybe<Scalars['Int']>;
  skill?: InputMaybe<Scalars['ID']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Skill' by its id. */
  findSkillByID?: Maybe<Skill>;
  /** Find a document from the collection of 'SkillTag' by its id. */
  findSkillTagByID?: Maybe<SkillTag>;
  /** Find a document from the collection of 'User' by its id. */
  findUserByID?: Maybe<User>;
  getAllSkillTags: SkillTagPage;
  getAllSkills: SkillPage;
  getAllUsers: UserPage;
};


export type QueryFindSkillByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindSkillTagByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindUserByIdArgs = {
  id: Scalars['ID'];
};


export type QueryGetAllSkillTagsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllSkillsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};


export type QueryGetAllUsersArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

export type Skill = {
  __typename?: 'Skill';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  details?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  tagIds: SkillTagPage;
  title: Scalars['String'];
};


export type SkillTagIdsArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** 'Skill' input values */
export type SkillInput = {
  details?: InputMaybe<Scalars['String']>;
  icon?: InputMaybe<Scalars['String']>;
  tagIds?: InputMaybe<SkillTagIdsRelation>;
  title: Scalars['String'];
};

/** The pagination object for elements of type 'Skill'. */
export type SkillPage = {
  __typename?: 'SkillPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'Skill' in this page. */
  data: Array<Maybe<Skill>>;
};

export type SkillTag = {
  __typename?: 'SkillTag';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  skill: SkillPage;
  title: Scalars['String'];
};


export type SkillTagSkillArgs = {
  _cursor?: InputMaybe<Scalars['String']>;
  _size?: InputMaybe<Scalars['Int']>;
};

/** Allow manipulating the relationship between the types 'Skill' and 'SkillTag'. */
export type SkillTagIdsRelation = {
  /** Connect one or more documents of type 'SkillTag' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'SkillTag' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<SkillTagInput>>>;
  /** Disconnect the given documents of type 'SkillTag' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

/** 'SkillTag' input values */
export type SkillTagInput = {
  skill?: InputMaybe<SkillTagSkillRelation>;
  title: Scalars['String'];
};

/** The pagination object for elements of type 'SkillTag'. */
export type SkillTagPage = {
  __typename?: 'SkillTagPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'SkillTag' in this page. */
  data: Array<Maybe<SkillTag>>;
};

/** Allow manipulating the relationship between the types 'SkillTag' and 'Skill'. */
export type SkillTagSkillRelation = {
  /** Connect one or more documents of type 'Skill' with the current document using their IDs. */
  connect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  /** Create one or more documents of type 'Skill' and associate them with the current document. */
  create?: InputMaybe<Array<InputMaybe<SkillInput>>>;
  /** Disconnect the given documents of type 'Skill' from the current document using their IDs. */
  disconnect?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type User = {
  __typename?: 'User';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  isAvailableToMentor?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  numberOfMenteesCanCoach?: Maybe<Scalars['Int']>;
  piProfileType?: Maybe<Scalars['String']>;
  skills?: Maybe<Array<Maybe<UserSkills>>>;
};

/** 'User' input values */
export type UserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['ID'];
  firstName?: InputMaybe<Scalars['String']>;
  isAvailableToMentor?: InputMaybe<Scalars['Boolean']>;
  lastName?: InputMaybe<Scalars['String']>;
  numberOfMenteesCanCoach?: InputMaybe<Scalars['Int']>;
  piProfileType?: InputMaybe<Scalars['String']>;
  skills?: InputMaybe<Array<InputMaybe<UserSkillsInput>>>;
};

/** The pagination object for elements of type 'User'. */
export type UserPage = {
  __typename?: 'UserPage';
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
  /** The elements of type 'User' in this page. */
  data: Array<Maybe<User>>;
};

export type UserSkills = {
  __typename?: 'UserSkills';
  proficiency: Scalars['Int'];
  skill: Skill;
};

/** 'UserSkills' input values */
export type UserSkillsInput = {
  proficiency: Scalars['Int'];
  skill: Scalars['ID'];
};

/** Allow manipulating the relationship between the types 'UserSkills' and 'Skill' using the field 'UserSkills.skill'. */
export type UserSkillsSkillRelation = {
  /** Connect a document of type 'Skill' with the current document using its ID. */
  connect?: InputMaybe<Scalars['ID']>;
  /** Create a document of type 'Skill' and associate it with the current document. */
  create?: InputMaybe<SkillInput>;
};

export type CreateUserMutationVariables = Exact<{
  input: UserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null, isAvailableToMentor?: boolean | null, piProfileType?: string | null, numberOfMenteesCanCoach?: number | null, skills?: Array<{ __typename?: 'UserSkills', proficiency: number, skill: { __typename?: 'Skill', title: string, details?: string | null, icon?: string | null } } | null> | null } };

export type FindUserQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type FindUserQuery = { __typename?: 'Query', findUserByID?: { __typename?: 'User', firstName?: string | null, lastName?: string | null, email: string, avatar?: string | null, isAvailableToMentor?: boolean | null, piProfileType?: string | null, numberOfMenteesCanCoach?: number | null, skills?: Array<{ __typename?: 'UserSkills', proficiency: number, skill: { __typename?: 'Skill', title: string, details?: string | null, icon?: string | null } } | null> | null } | null };


export const CreateUserDocument = gql`
    mutation createUser($input: UserInput!) {
  createUser(data: $input) {
    firstName
    lastName
    email
    avatar
    skills {
      skill {
        title
        details
        icon
      }
      proficiency
    }
    isAvailableToMentor
    piProfileType
    numberOfMenteesCanCoach
  }
}
    `;
export const FindUserDocument = gql`
    query findUser($id: ID!) {
  findUserByID(id: $id) {
    firstName
    lastName
    email
    avatar
    skills {
      skill {
        title
        details
        icon
      }
      proficiency
    }
    isAvailableToMentor
    piProfileType
    numberOfMenteesCanCoach
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateUserMutation>(CreateUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createUser', 'mutation');
    },
    findUser(variables: FindUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<FindUserQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<FindUserQuery>(FindUserDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'findUser', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;