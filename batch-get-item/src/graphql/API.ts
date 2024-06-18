/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type PhoneNumber = {
  __typename: "PhoneNumber",
  createdAt: string,
  phoneNumber: string,
  updatedAt: string,
  user?: User | null,
  userId: string,
};

export type User = {
  __typename: "User",
  birthdate: string,
  createdAt: string,
  firstName: string,
  id: string,
  lastName: string,
  phoneNumber?: PhoneNumber | null,
  profileImage?: string | null,
  profileImageBlurhash?: string | null,
  pushToken?: string | null,
  searchTerm: string,
  updatedAt: string,
  username: string,
};

export type ModelPhoneNumberFilterInput = {
  and?: Array< ModelPhoneNumberFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPhoneNumberFilterInput | null,
  or?: Array< ModelPhoneNumberFilterInput | null > | null,
  phoneNumber?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelPhoneNumberConnection = {
  __typename: "ModelPhoneNumberConnection",
  items:  Array<PhoneNumber | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  and?: Array< ModelUserFilterInput | null > | null,
  birthdate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserFilterInput | null,
  or?: Array< ModelUserFilterInput | null > | null,
  profileImage?: ModelStringInput | null,
  profileImageBlurhash?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  searchTerm?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelIDKeyConditionInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
};

export type ModelPhoneNumberConditionInput = {
  and?: Array< ModelPhoneNumberConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelPhoneNumberConditionInput | null,
  or?: Array< ModelPhoneNumberConditionInput | null > | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreatePhoneNumberInput = {
  phoneNumber: string,
  userId: string,
};

export type ModelUserConditionInput = {
  and?: Array< ModelUserConditionInput | null > | null,
  birthdate?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  not?: ModelUserConditionInput | null,
  or?: Array< ModelUserConditionInput | null > | null,
  profileImage?: ModelStringInput | null,
  profileImageBlurhash?: ModelStringInput | null,
  pushToken?: ModelStringInput | null,
  searchTerm?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  username?: ModelStringInput | null,
};

export type CreateUserInput = {
  birthdate: string,
  firstName: string,
  id?: string | null,
  lastName: string,
  profileImage?: string | null,
  profileImageBlurhash?: string | null,
  pushToken?: string | null,
  searchTerm: string,
  username: string,
};

export type DeletePhoneNumberInput = {
  phoneNumber: string,
};

export type DeleteUserInput = {
  id: string,
};

export type UpdatePhoneNumberInput = {
  phoneNumber: string,
  userId?: string | null,
};

export type UpdateUserInput = {
  birthdate?: string | null,
  firstName?: string | null,
  id: string,
  lastName?: string | null,
  profileImage?: string | null,
  profileImageBlurhash?: string | null,
  pushToken?: string | null,
  searchTerm?: string | null,
  username?: string | null,
};

export type ModelSubscriptionPhoneNumberFilterInput = {
  and?: Array< ModelSubscriptionPhoneNumberFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPhoneNumberFilterInput | null > | null,
  phoneNumber?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  birthdate?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  firstName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  lastName?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  profileImage?: ModelSubscriptionStringInput | null,
  profileImageBlurhash?: ModelSubscriptionStringInput | null,
  pushToken?: ModelSubscriptionStringInput | null,
  searchTerm?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  username?: ModelSubscriptionStringInput | null,
};

export type CheckBatchOfPhoneNumbersForActiveUsersQueryVariables = {
  phoneNumbers?: Array< string | null > | null,
};

export type CheckBatchOfPhoneNumbersForActiveUsersQuery = {
  checkBatchOfPhoneNumbersForActiveUsers?:  Array< {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null > | null,
};

export type GetPhoneNumberQueryVariables = {
  phoneNumber: string,
};

export type GetPhoneNumberQuery = {
  getPhoneNumber?:  {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber?:  {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null,
    profileImage?: string | null,
    profileImageBlurhash?: string | null,
    pushToken?: string | null,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type ListPhoneNumbersQueryVariables = {
  filter?: ModelPhoneNumberFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  phoneNumber?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListPhoneNumbersQuery = {
  listPhoneNumbers?:  {
    __typename: "ModelPhoneNumberConnection",
    items:  Array< {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUsersBySearchTermQueryVariables = {
  filter?: ModelUserFilterInput | null,
  id?: ModelIDKeyConditionInput | null,
  limit?: number | null,
  nextToken?: string | null,
  searchTerm: string,
  sortDirection?: ModelSortDirection | null,
};

export type ListUsersBySearchTermQuery = {
  listUsersBySearchTerm?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreatePhoneNumberMutationVariables = {
  condition?: ModelPhoneNumberConditionInput | null,
  input: CreatePhoneNumberInput,
};

export type CreatePhoneNumberMutation = {
  createPhoneNumber?:  {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type CreateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber?:  {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null,
    profileImage?: string | null,
    profileImageBlurhash?: string | null,
    pushToken?: string | null,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type DeletePhoneNumberMutationVariables = {
  condition?: ModelPhoneNumberConditionInput | null,
  input: DeletePhoneNumberInput,
};

export type DeletePhoneNumberMutation = {
  deletePhoneNumber?:  {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber?:  {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null,
    profileImage?: string | null,
    profileImageBlurhash?: string | null,
    pushToken?: string | null,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type UpdatePhoneNumberMutationVariables = {
  condition?: ModelPhoneNumberConditionInput | null,
  input: UpdatePhoneNumberInput,
};

export type UpdatePhoneNumberMutation = {
  updatePhoneNumber?:  {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  condition?: ModelUserConditionInput | null,
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber?:  {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null,
    profileImage?: string | null,
    profileImageBlurhash?: string | null,
    pushToken?: string | null,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnCreatePhoneNumberSubscriptionVariables = {
  filter?: ModelSubscriptionPhoneNumberFilterInput | null,
};

export type OnCreatePhoneNumberSubscription = {
  onCreatePhoneNumber?:  {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber?:  {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null,
    profileImage?: string | null,
    profileImageBlurhash?: string | null,
    pushToken?: string | null,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnDeletePhoneNumberSubscriptionVariables = {
  filter?: ModelSubscriptionPhoneNumberFilterInput | null,
};

export type OnDeletePhoneNumberSubscription = {
  onDeletePhoneNumber?:  {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber?:  {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null,
    profileImage?: string | null,
    profileImageBlurhash?: string | null,
    pushToken?: string | null,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};

export type OnUpdatePhoneNumberSubscriptionVariables = {
  filter?: ModelSubscriptionPhoneNumberFilterInput | null,
};

export type OnUpdatePhoneNumberSubscription = {
  onUpdatePhoneNumber?:  {
    __typename: "PhoneNumber",
    createdAt: string,
    phoneNumber: string,
    updatedAt: string,
    user?:  {
      __typename: "User",
      birthdate: string,
      createdAt: string,
      firstName: string,
      id: string,
      lastName: string,
      profileImage?: string | null,
      profileImageBlurhash?: string | null,
      pushToken?: string | null,
      searchTerm: string,
      updatedAt: string,
      username: string,
    } | null,
    userId: string,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    birthdate: string,
    createdAt: string,
    firstName: string,
    id: string,
    lastName: string,
    phoneNumber?:  {
      __typename: "PhoneNumber",
      createdAt: string,
      phoneNumber: string,
      updatedAt: string,
      userId: string,
    } | null,
    profileImage?: string | null,
    profileImageBlurhash?: string | null,
    pushToken?: string | null,
    searchTerm: string,
    updatedAt: string,
    username: string,
  } | null,
};
