document.addEventListener("DOMContentLoaded", () => {
  const dataElement = document.getElementById("data");

  fetch("http://localhost:8000/api/data") // Updated URL
    .then((response) => response.json())
    .then((data) => {
      dataElement.textContent = `Data from Backend: ${data.data}`;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      dataElement.textContent = "Error fetching data from the backend.";
    });
});
