import { render, fireEvent } from "@testing-library/vue";
import App from "../App.vue";

describe("Write a program that prints one line for each number from 1 to 100", () => {
  let list;
  beforeEach(() => {
    const { container } = render(App);
    list = container.querySelectorAll("li");
  });

  it("Tiene 100 elementos", async () => {
    expect(list.length).toBe(100);
  });
  it("La lista empieza en 1", async () => {
    expect(list[0].innerHTML).toBe("1");
  });
  it("La lista termina en Buzz", async () => {
    expect(list[99].innerHTML).toBe("Buzz");
  });
  it.skip("contar todos los numeros", () => {
    for (let i = 1; i < list.length; i++) {
      expect(list[i - 1].innerHTML).toBe(i.toString());
    }
  });
});
describe("For multiples of three print Fizz instead of the number", () => {
  for (let i = 2; i < 100; i = i + 3) {
    it(`Posición ${i + 1} debería poner Fizz`, () => {
      const { container } = render(App);
      const list = container.querySelectorAll("li");
      expect(list[i].innerHTML).toContain("Fizz");
    });
  }
});

describe("For multiples of five print Buzz instead of the number", () => {
  for (let i = 4; i < 100; i = i + 5) {
    it(`Posición ${i + 1} debería poner Buzz`, () => {
      const { container } = render(App);
      const list = container.querySelectorAll("li");
      expect(list[i].innerHTML).toContain("Buzz");
    });
  }
});
describe("For multiples of fifteen print FizzBuzz instead of the number", () => {
  for (let i = 14; i < 100; i = i + 15) {
    it(`Posición ${i + 1} debería poner FizzBuzz`, () => {
      const { container } = render(App);
      const list = container.querySelectorAll("li");
      expect(list[i].innerHTML).toBe("FizzBuzz");
    });
  }
});
