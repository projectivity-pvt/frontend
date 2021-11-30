/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type BusinessEmployee = {
  __typename: "BusinessEmployee",
  employeeName?: string | null,
  employeePhoneNumber?: string | null,
  employeeLevel?: string | null,
  businessName?: string | null,
  businessAddress?: string | null,
};

export type UpdateBusinessDetailsMutationVariables = {
  businessName: string,
  businessAddress: string,
};

export type UpdateBusinessDetailsMutation = {
  updateBusinessDetails?: string | null,
};

export type GetEmployeeDetailsQuery = {
  getEmployeeDetails?:  {
    __typename: "BusinessEmployee",
    employeeName?: string | null,
    employeePhoneNumber?: string | null,
    employeeLevel?: string | null,
    businessName?: string | null,
    businessAddress?: string | null,
  } | null,
};

export type TestQuery = {
  test?: string | null,
};
