// event la nhung su kien co tren man hinh ung dung
// Cach 1: Khai bao su kien o ben the mo cua html
const handleClick = () => {
  console.log(Math.random());
};

// Cach 2: Lay phan html ma can bat su kien, sau day gan su kien cho phan tu day
// const btnAdd = document.getElementById("addEmployee");
const btnAdd = document.querySelector("#addEmployee");
btnAdd.addEventListener("click", () => {
  console.log("Add employee");
});

// Su kien input
const emailInput = document.querySelector("#email");
// emailInput.addEventListener("input", (event) => {
//   console.log(event.target.value);
// });

emailInput.addEventListener("change", (event) => {
  console.log(event.target.value);
});

// Lay gia tri dang input radio
const genderInputs = document.querySelectorAll("input[name=gender]");
genderInputs.forEach((input) => {
  if (input.checked) {
    console.log(input.value);
  }
});

// Lay gia tri trong select option

const countries = document.querySelector("#country");
countries.addEventListener("change", (event) => {
  console.log(event.target.value);
});

// Lay gia tri tu input type date
const dateInput = document.querySelector("#dateOfBirth");
dateInput.addEventListener("change", (e) => {
  console.log(e.target.value);
});

// Lay ra phan tu h3
const heading = document.querySelector("#heading");
heading.style.color = "red";
heading.style.backgroundColor = "green";
heading.style.fontSize = "25px";
heading.style.border = "2px solid #333";
// => Hay ap dung trong truong hop it CSS

// Cach 2: Su dung classList
const btnSubmit = document.querySelector("#Submit");
// Them class vao trong phan tu
btnSubmit.classList.add("btn");
btnSubmit.classList.add("btn-primary");

// Xoa class khoi element
// btnSubmit.classList.remove("btn");
// btnSubmit.classList.remove("btn-primary");

// Kiem tra trong phan tu co class can tim khong
const isExits = btnSubmit.classList.contains("btn");

// Lay phan tu checkbox
const checkboxElement = document.querySelector("#checkboxElement");
const container = document.querySelector(".container");
checkboxElement.addEventListener("change", (e) => {
  if (e.target.checked) {
    container.classList.add("dark");
  } else {
    container.classList.remove("dark");
  }
});

const btnBackToTop = document.querySelector("#back-to-top");

// Các sự kiện liên quan đến màn hình khi lăn chuột
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    btnBackToTop.style.display = "block";
  } else {
    btnBackToTop.style.display = "none";
  }
});

// Khi click vào trong button thì quay về đầu trang
btnBackToTop.addEventListener("click", () => {
  // Quay về đầu trang
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Các sự kiện liên quan đến bàn phím
// keydown được kích hoạt khi chúng ta nhấn và giữ phím
// keyup được kích họa khi chúng ta nhấn(lúc nảy sự kiện vẫn chưa được kích hoạt) và thả phím ra
window.addEventListener("keydown", (e) => {
  // e.key: trả về tên phím
  // e.which: trả về mã số của phím đó
  console.log("Tên phím: ", e.code);
  console.log("Mã code : ", e.which);
  if (e.code === "Escape" && e.which === 27) {
    console.log("Đóng form");
  }

  if (e.code === "KeyR" && e.which === 82) {
    console.log("Mở form");
  }
});
