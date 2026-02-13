function get(jsonString) {
  try {
    const parseData = JSON.parse(jsonString);
    return parseData;
  } catch (error) {
    console.log("An error occurred");
    return null;
  }
}

const validJSON = '{"name": "John", "age": 30}';
const invalidJSON = '{"name": "John", "age": 30,}';

const result = get(validJSON);
console.log(result.name);

const result1 = get(invalidJSON);
console.log(result1);
