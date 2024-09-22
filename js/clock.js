const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const month = String(date.getMonth() + 1);
  const day = String(date.getDate());
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${month}월 ${day}일\n${hours}시 ${minutes}분`;
  console.log("1");
}

getClock();
setInterval(getClock, 1000);
