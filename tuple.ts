let x: [string, number];

x = ["hello", 39];

// x = [10, "Mark"];  - 에러 발생

const person: [string, number] = ["Makr", 39];

// 구조 분해 할당
const [first, second] = person;
