const users = [
  {
    userName: "Nguyễn Văn A",
    gender: 0,
    dateOfBirth: "23/12/2023",
  },
  {
    userName: "Nguyễn Văn B",
    gender: 1,
    dateOfBirth: "23/12/2023",
  },
  {
    userName: "Nguyễn Văn C",
    gender: 2,
    dateOfBirth: "23/12/2023",
  },
  {
    userName: "Nguyễn Văn D",
    gender: 2,
    dateOfBirth: "23/12/2023",
  },
];

// Lấy ra phần tử tbody
const tbody = document.querySelector("#tbody");

// Gắn dữ liệu từ mảng vào ben trong từng <tr>
const trHtmls = users.map((user, index) => {
  return `
    <tr>
        <td>${index + 1}</td>
        <td>${user.userName}</td>
        <td>${
          user.gender === 0 ? "Nam" : user.gender === 1 ? "Nữ" : "Khác"
        }</td>
        <td>${user.dateOfBirth}</td>
    </tr>
    `;
});

// Chuyển đổi mảng thành chuỗi
const trHtml = trHtmls.join("");

tbody.innerHTML = trHtml;
