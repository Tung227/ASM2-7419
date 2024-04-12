var img = [];
var songuyen = 2;
function loading() {
  for (let i = 1; i <= 4; i++) {
    img[i] = "./images/banner" + i + ".png";
  }
  var anh = document.getElementById("slidershow")
  anh.src = img[1];
  setInterval(sau,3000);
}
function truoc() {
  var anh = document.getElementById("slidershow")
  anh.src = img[songuyen];
  document.querySelector(".text").innerHTML = songuyen+" / 4";
  if (songuyen == 1) {
    songuyen = img.length;
  }
  songuyen--
  console.log(songuyen)
}
function sau() {
  var anh = document.getElementById("slidershow");
  if (songuyen == img.length) {
    songuyen = 1;
  }
  anh.src = img[songuyen];
  document.querySelector(".text").innerHTML = songuyen+" / 4";
  songuyen++
 
}

function bam(so) {
  songuyen=so;
  var anh = document.getElementById("slidershow");
  document.querySelector(".text").innerHTML = so+" / 4";
  anh.src = img[so];
}
function viewCart() {
  // Chuyển hướng đến trang bán hàng
  window.location.href = './html/banhang.html';
}
