
document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.querySelector("#form-status");
      status.textContent = "Thank you. This demonstration form is ready for connection to a department email service.";
      form.reset();
    });
  }
});
