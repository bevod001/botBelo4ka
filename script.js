//https://api.telegram.org/bot6060090441:AAHw3e9A5ibwvtToqSeknoCMG0ig_yFsHrI/getUpdates

//https://api.telegram.org/bot6060090441:AAHw3e9A5ibwvtToqSeknoCMG0ig_yFsHrI/sendMessage?chat_id=-1001473077578&text=Hello

//https://api.telegram.org/bot6060090441:AAHw3e9A5ibwvtToqSeknoCMG0ig_yFsHrI/getUpdates

document.querySelector("button").onclick = function () {
  let message = document.querySelector(".message").value;

  let token = ":AAHw3e9A5ibwvtToqSeknoCMG0ig_yFsHrI";

  let url =
    "https://api.telegram.org/bot6060090441" +
    token +
    "/sendMessage?chat_id=-1001473077578&text=";

  let xhttp = new XMLHttpRequest();

  xhttp.open("GET", url + message, true);
  xhttp.send();
};
