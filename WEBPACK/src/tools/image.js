import $ from "jquery";
import photo from "../images/photo.jpg";
export default (tag) => {
  // const img = document.createElement("img");
  // img.src = photo;
  // document.querySelector(tag).appendChild(img);
  $(tag).append(`<img src=${photo}>`);
};
