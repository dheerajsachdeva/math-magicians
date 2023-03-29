import operate from "../logic/operate";

describe("Check the result of operate", () => {
  test("5 + 5 = 10", () => {
    const object = {
      numberOne: 5,
      numberTwo: 5,
      operation: "+",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("10");
  });

  test("5 * 5 = 25", () => {
    const object = {
      numberOne: 5,
      numberTwo: 5,
      operation: "x",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("25");
  });

  test("5 % 2 = 1", () => {
    const object = {
      numberOne: 5,
      numberTwo: 2,
      operation: "%",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("1");
  });

  test("5 - 5 = 0", () => {
    const object = {
      numberOne: 5,
      numberTwo: 5,
      operation: "-",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("0");
  });
  test("10 ÷ 5 = 2", () => {
    const object = {
      numberOne: 10,
      numberTwo: 5,
      operation: "÷",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("2");
  });

  test("10 - 5 = 5", () => {
    const object = {
      numberOne: 10,
      numberTwo: 5,
      operation: "-",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("5");
  });

  test("25 + 5 = 30", () => {
    const object = {
      numberOne: 25,
      numberTwo: 5,
      operation: "+",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("30");
  });

  test("10 % 3 = 1", () => {
    const object = {
      numberOne: 10,
      numberTwo: 3,
      operation: "%",
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation
    );
    expect(result).toBe("1");
  });
});
