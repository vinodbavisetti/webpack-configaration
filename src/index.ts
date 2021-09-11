import { Subject } from "rxjs";
import { func } from "./subfile";
import "./index.scss";

let subject = new Subject();

subject.subscribe(func);

document.querySelector("button").addEventListener("click", (e) => {
  let p = document.querySelector("p");
  let y = p.offsetTop;
  document.documentElement.scrollBy({ left: 0, top: y, behavior: "smooth" });
  // p.scrollBy({ left: 0, top: y, behavior: "smooth" });
  subject.next(p);
});
