import "@testing-library/jest-dom";
import {getTimeAsString} from "../utils/getDate";

test("return the correct string", () => {
  expect(getTimeAsString(2, 5)).toEqual("02:05");
});

const testData = [
  [ 2, 5, "02:05"],
  [ 12, 0, "12:00"],
  [ 8, 45, "08:45"],
  [ 13,15, "13:15"],
];

test.each(testData)("return correct time Strings", (inputH, inputM, expectStr) =>{
  expect(getTimeAsString(inputH, inputM)).toBe(expectStr);
  }
);