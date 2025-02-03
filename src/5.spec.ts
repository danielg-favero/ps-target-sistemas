import { inverteString } from "./5";

test("Deverá inverter uma string", () => {
  expect(inverteString("amor")).toBe("roma");
  expect(inverteString("arara")).toBe("arara");
  expect(inverteString("")).toBe("");
});
