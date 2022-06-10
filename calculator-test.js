
it('should calculate the monthly payment correctly', function () {
  expect(calculateMonthlyPayment({ amount: 4750, years: 5, rate: 6.5 })).toEqual('92.94');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ amount: 1200, years: 1, rate: 1 })).toEqual('100.54');
});

/// etc
