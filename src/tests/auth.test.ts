import { describe, expect, test } from "vitest";

// const person = {
//   isActive: true,
//   age: 32,
// };

const person = undefined;

describe("person", () => {
  test("person is defined", () => {
    expect(person).toBeDefined();
  });

  test("is active", () => {
    expect(person.isActive).toBeTruthy();
  });
});
