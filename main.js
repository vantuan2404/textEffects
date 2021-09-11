let innerText = document.querySelector(".text");
let innerTextTwo = document.querySelector(".text-two");

const textBackgroundOne = "VT";
const textBackgroundTwo = "FE";

const textBlotter = (name) => {
  return new Blotter.Text(name, {
    family: "Monument",
    size: 120,
    fill: "white",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 100,
    paddingBottom: 100,
  });
};

const textOne = textBlotter(textBackgroundOne);
const textTwo = textBlotter(textBackgroundTwo);

// using material LiquidDistortMaterial()
let materialLiquid = new Blotter.LiquidDistortMaterial();
materialLiquid.uniforms.uVolatility.value = 0.3;
materialLiquid.uniforms.uSpeed.value = 0.7;
materialLiquid.uniforms.uSeed.value = 2;

let materialFiles = new Blotter.FliesMaterial();
materialFiles.uniforms.uPointCellWidth.value = 0.012;
materialFiles.uniforms.uPointRadius.value = 0.85;
materialFiles.uniforms.uDodge.value = 0;
materialFiles.uniforms.uDodgePosition.value = 0.5;
materialFiles.uniforms.uDodgeSpread.value = 0.5;
materialFiles.uniforms.uSpeed.value = 2;

const blotter = (material, text) => {
  return new Blotter(material, {
    texts: text,
  });
};

let scopeOne = blotter(materialLiquid, textOne).forText(textOne);
scopeOne.appendTo(innerText);
let scopeTwo = blotter(materialFiles, textTwo).forText(textTwo);
scopeTwo.appendTo(innerTextTwo);
