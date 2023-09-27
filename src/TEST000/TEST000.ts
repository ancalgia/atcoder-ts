export const Main = (input: string) => {
  const hoge = input.trim().split("\n");
  let piyo = hoge[1].split(" ").map((x) => Number(x));

  let count = 0;
  while (piyo.every((x) => x % 2 === 0)) {
    piyo = piyo.map((x) => x / 2);
    count++;
  }

  console.log(count);
};
// // 本番
// Main(require("fs").readFileSync("/dev/stdin", "utf8"));

// テストケース
const testCaseList = [
  `
3
8 12 40
`,
  `
4
5 6 8 10
`,
  `
6
382253568 723152896 37802240 379425024 404894720 471526144
`,
];

testCaseList.forEach((testCase, idx) => {
  console.log(`テストケース ${idx + 1}個目`);
  Main(testCase.trim());
});
