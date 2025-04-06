const scriptURL = "https://script.google.com/macros/s/AKfycbxTeVECeNZVQJ1u79sI9ZGRIr0otvJQeGjOJEZqA__Hjqt6GhEev4kHpEFEFI4LOhQf/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      document.getElementById("msg").innerHTML = `<p>Your message has been recorded</p>`;
      form.reset();
    })
    .catch((error) => {
      document.getElementById("msg").innerHTML = `<p style="color:red;">There was an error!</p>`;
      console.error("Error!", error.message);
    });
});
