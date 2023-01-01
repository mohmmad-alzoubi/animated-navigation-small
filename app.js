const icons = document.querySelector(".icons");
const lis = document.querySelectorAll("ul li");
const navigation = document.querySelector(".navigation");

icons.addEventListener("click", () => {
  [...icons.children].forEach((child) => {
    child.classList.toggle("active");
  });
  lis.forEach((li) => {
    li.classList.toggle("active");
  });
  navigation.classList.toggle("active");
});
