TODO:markdown形式のreadmeに置き換えたいです

ts開発、環境構築メモ

※node.js入ってる前提



■新規プロジェクト作る（package.jsonができるはず）
$ npm init -y

■typescriptのインストール
$ npm install --save-dev typescript 

■ts-nodeのインストール
$ npm install --save-dev ts-node

■ts-node-devのインストール
$ npm install --save-dev ts-node-dev

■tsconfig.jsonの作成
$ npx tsc --init

↓

とはいえ、細かい設定自分でやるの面倒なので、↓この辺からもらってきて上書きする（とりあえず、フロントエンドの場合のほう）
tsconfig.jsonを設定する | TypeScript入門『サバイバルTypeScript』
https://typescriptbook.jp/reference/tsconfig/tsconfig.json-settings


■おまじないでnpm install叩く（たぶん意味ない）
$ npm install

■/srcフォルダ作っとく
$ mkdir src


■/src/index.tsを以下の内容で作る

内容
-----------------------------------
const hoge: string = "ほげ";
console.log(hoge);
-----------------------------------


■デバッグ用にlaunch.json作る
VSCodeの機能からとりあえずひな形を作る


■デバッグ用にtasks.json作る
VSCodeの機能からとりあえずひな形を作る
メニュー 「ターミナル」 > 「既定のビルドタスクの構成」>「tsc: ビルド - tsconfig.json」 


■launch.jsonとtasks.jsonでタスクの名前が違うかもしれないので（"build"⇔"ビルド"）、
  どちらかに名前合わせとく


■デバッグ実行すると「ほげ」が出力されたり、/distフォルダにjsファイルが出来たりするはず


■AtCoder的には適当に開いてるファイルの検証がしたくなる気がするので、それ用のデバッグ設定を作る
・launch.jsonの設定項目をコピペして、
"program": "${workspaceFolder}/src/index.ts",
↓
"program": "${file}",
に書き換え（名前も変えとく）
NOTE:最初に開いてたやつが"program": "${file}",ならもうそれ使えばOK

■/srcに/TEST000フォルダ作って、その中にTEST000.ts作る

内容
-----------------------------------
const Main = (input: string) => {
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
`.trim(),
  `
4
5 6 8 10
`.trim(),
  `
6
382253568 723152896 37802240 379425024 404894720 471526144
`.trim(),
];

testCaseList.forEach((testCase, idx) => {
  console.log(`テストケース ${idx + 1}個目`);
  Main(testCase);
});
-----------------------------------
※ テスト用の複数行入力例の書き方キモいので要検討



■デバッグ用の構成をコンボボックスで切り替えて、TEST000.ts開いた状態でF5押してうまく動けばとりあえず環境構築完了