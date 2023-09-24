let { rgbToHexColor } = require("./RGBtoHEXV1");
let { expect } = require("chai");

// •	Take three integer numbers, representing the red, green, and blue values of RGB color, each within the range [0…255]
// •	Return the same color in hexadecimal format as a string (e.g. '#FF9EAA')
// •	Return undefined if any of the input parameters are of an invalid type or not in the expected range

describe("RGBtoHEXColor", () => {
  it("convert to black color", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("convert to white color", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("convert to blue color #30759C", () => {
    expect(rgbToHexColor(48, 117, 156)).to.equal("#30759C");
  });

  it("return undefined for missing parameters", () => {
    expect(rgbToHexColor(0, 0)).to.be.undefined;
    expect(rgbToHexColor(0)).to.be.undefined;
    expect(rgbToHexColor()).to.be.undefined;
  });

  it("return undefined if one  of the parameterers is < 0 ", () => {
    expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
  });

  it("return undefined for if one of the  parameters is > 255", () => {
    expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
  });

  it("return undefined for floating point numbers", () => {
    expect(rgbToHexColor(1.1, 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 1.1, 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, 1.1)).to.be.undefined;
  });

  it("return undefined for string parameters - invalid type", () => {
    expect(rgbToHexColor("0", 0, 0)).to.be.undefined;
    expect(rgbToHexColor(0, "0", 0)).to.be.undefined;
    expect(rgbToHexColor(0, 0, "0")).to.be.undefined;
  });
  
});
