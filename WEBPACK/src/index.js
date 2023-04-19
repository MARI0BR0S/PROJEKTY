import { message, messageDOM } from "./tools/message";

import info from "./data/title.txt"; // zapis jest prawidłowy , ale webpack potrzebuje loadera do przeczytania tego pliku
// wykorzystamy raw-loader
import "./sass/index.scss";
import "./components/footer";
import "./images/mouse.jpg";
import addImage from "./tools/image";
import Creator from "./tools/creator";
message(info);
messageDOM(info);
addImage("h1");
const element1 = new Creator();
element1.addBgc("green");
const element2 = new Creator();
element2.addBgc("blue");
const element3 = new Creator();
element3.addBgc();
element3.showColor();
let promise = new Promise(function (resolve, reject) {
  resolve("ok");
});
