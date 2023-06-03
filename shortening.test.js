
const shortening = require("./index");

describe("shortening", () => {
    
    it("should return correct shortened value and unit for 10000", () => {
        expect(shortening(10000)).toEqual({value: 10, valueUnit: "K"});
    });
  
    it("should return correct shortened value and unit for 100000000", () => {
        expect(shortening(100000000)).toEqual({value: 100, valueUnit: "M"});
    });

    it("should convert the value to the desired unit if a valid desiredValueUnit is given", () => {
        expect(shortening(123, "K")).toEqual({ value: 0.123, valueUnit: "K" });
    });
    
    it("should return the given value and valueUnit as-is if an invalid desiredValueUnit is passed", () => {
        expect(shortening(1234, "not a real unit")).toEqual({ value: 1234, valueUnit: "not a real unit" });
    });
    
    it("should automatically select the largest valueUnit if the desiredValueUnit is undefined or null", () => {
        expect(shortening(999999999)).toEqual({ value: 999.999999, valueUnit: "M" });
    });
    
    it("should return the given value and valueUnit as-is if the value is invalid", () => {
        expect(shortening(undefined, "K")).toEqual({ value: undefined, valueUnit: "K" });
    });
    
    it("should automatically select no units and return the value as-is if the value is invalid and desiredValueUnit is undefined or null", () => {
        expect(shortening(undefined)).toEqual({ value: undefined, valueUnit: "" });
    });

  });

  