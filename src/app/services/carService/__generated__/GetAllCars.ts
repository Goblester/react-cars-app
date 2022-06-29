/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetAllCars
// ====================================================

export interface GetAllCars_cars {
  __typename: "Car";
  id: string;
  name: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnailUrl: string;
  mileage: string;
  gas: string;
  gearType: string;
}

export interface GetAllCars {
  cars: GetAllCars_cars[];
}
