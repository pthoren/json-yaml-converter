import fs from "fs";
import path from "path";
import { jsonToYaml, yamlToJson } from "../src/index";

describe('JSON to YAML conversion', () => {
  const inputFilepath = path.join(__dirname, 'input.json');
  const outputFilepath = path.join(__dirname, 'output.yaml');
  const roundTripFilepath = path.join(__dirname, 'roundtrip.json');

  function cleanup() {
    if (fs.existsSync(outputFilepath)) {
      fs.unlinkSync(outputFilepath);
    }
    if (fs.existsSync(roundTripFilepath)) {
      fs.unlinkSync(roundTripFilepath);
    }
  }

  beforeAll(cleanup);
  afterAll(cleanup);

  test('should roundtrip convert JSON to YAML and back', () => {
    jsonToYaml(inputFilepath, outputFilepath);
    yamlToJson(outputFilepath, roundTripFilepath);

    const expectedJsonFromFile = fs.readFileSync(inputFilepath, 'utf8');
    const actualJsonFromFile = fs.readFileSync(roundTripFilepath, 'utf8');
    expect(actualJsonFromFile).toEqual(expectedJsonFromFile);
  });
});
