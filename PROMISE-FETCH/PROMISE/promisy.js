function doSomeWork() {
  return new Promise((resolve) => resolve("Work done!"));
}
function doSomeHardWork() {
  return new Promise((resolve, reject) =>
    reject(`I don't want to work today!`)
  );
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function fakeApi(param) {
  // return new Promise( resolve =>setTimeout())
}
