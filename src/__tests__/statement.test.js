const statement = require("../statement");
const invoice = require("../data/invoices");
const plays = require("../data/plays");

test("statement from invoice & plays", () => {
  expect(statement(invoice[0], plays)).toBe(
    `Statement for BigCo
Hamlet: $650.00 (55 seats)
As You Like It: $580.00 (35 seats)
Otello: $500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`
  );
});

test("should throw error for wrong play type", () => {
  expect(statement(invoice[1], plays)).toThrow();
});
