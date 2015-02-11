describe("coinCounter", function() {
  it("will return the correct number of quarters", function() {
    expect(coinCounter(75)).to.eql([3, 0, 0, 0]);
  });

  it("will return the number of dimes and quarters", function() {
    expect(coinCounter(45)).to.eql([1, 2, 0, 0]);
  });

  it("will return the number of dimes, recognizing no quarters are needed", function() {
    expect(coinCounter(20)).to.eql([0, 2, 0, 0]);
  });

  it("will return the number of quarters, dimes and nickels", function() {
    expect(coinCounter(90)).to.eql([3, 1, 1, 0]);
  });

  it("will return the numbers for all coins", function() {
    expect(coinCounter(72)).to.eql([2, 2, 0, 2]);
  });
});
