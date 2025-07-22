if (localStorage.getItem("isLoggedIn") !== "true") {
  window.location.href = "index.html";
}

document.querySelector(".logout-btn").addEventListener("click", () => {
  localStorage.removeItem("isLoggedIn");
  window.location.href = "index.html";
});
