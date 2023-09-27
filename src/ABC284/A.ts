export const Main = (input: string) => {
  const [_, ...planList] = input.trim().split("\n");

  const parsedPlanList = planList.map((x) => x.split(" ").map((y) => Number(y)));

  let currTime = 0;
  let currX = 0;
  let currY = 0;

  for (let plan of parsedPlanList) {
    const moveTime = Math.abs(plan[0] - currTime);
    const moveX = Math.abs(plan[1] - currX);
    const moveY = Math.abs(plan[2] - currY);

    const isOkDistance = moveTime >= moveX + moveY;
    if (!isOkDistance) {
      console.log("No");
      return;
    }

    const isOkPosition = (moveTime + moveX + moveY) % 2 === 0;

    if (!isOkPosition) {
      console.log("No");
      return;
    }
    currTime = plan[0];
    currX = plan[1];
    currY = plan[2];
  }

  console.log("Yes");
};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
