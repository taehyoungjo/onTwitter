let page = document.getElementById("buttonDiv");
const bool = [true, false];
function constructOptions(bool) {
  for (let item of bool) {
    let button = document.createElement("button");
    button.classList.add("btn");
    button.classList.add("btn-dark");
    button.innerHTML = item ? "People you follow" : "From anyone";
    button.addEventListener("click", function () {
      chrome.storage.sync.set({ follows: item }, function () {});
    });
    page.appendChild(button);
  }
}
constructOptions(bool);
