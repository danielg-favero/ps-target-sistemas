import { func } from "./1";

test("Dado um `indice`, deverá retornar a soma dos `n` primeiros números até o índice", () => {
  expect(func(13)).toBe(78);
});
