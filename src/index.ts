import * as fs from 'fs';
import * as yaml from 'js-yaml';

/**
 * Converts a json file on a yaml file.
 * String values containing newlines (\n) will be converted to multi-line strings.
 *
 * @param inputFilepath input path to the json file
 * @param outputFilepath output path to the resulting yaml file
 */
export function jsonToYaml(inputFilepath: string, outputFilepath: string) {
  const jsonData = fs.readFileSync(inputFilepath, 'utf8');
  const parsedJsonData = JSON.parse(jsonData);
  const yamlData = yaml.dump(parsedJsonData);
  fs.writeFileSync(outputFilepath, yamlData, 'utf8');
}

/**
 * Converts a yaml file to a json file.
 *
 * @param inputFilepath input path to the yaml file
 * @param outputFilepath output path to the resulting json file
 */
export function yamlToJson(inputFilepath: string, outputFilepath: string) {
  const yamlContent = fs.readFileSync(inputFilepath, 'utf8');
  const data = yaml.load(yamlContent);
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync(outputFilepath, jsonData, 'utf8');
}