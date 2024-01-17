import { add } from "./add";

// 1+2を計算
const three = add(1, 2);

// HTMLに計算結果を表示
const p = document.createElement('p');
p.innerText = `Hello, world! ${three}`;
document.body.appendChild(p);
