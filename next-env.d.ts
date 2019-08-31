/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "lodash" {
  function xor(arr1: [number?], arr2: [number?]): [number?];
  function intersection(arr1: [number?], arr2: [number?]): [number?];
}
declare module "react-toastify" {
  function ToastContainer(value: any): any;
  var toast: any;
}
