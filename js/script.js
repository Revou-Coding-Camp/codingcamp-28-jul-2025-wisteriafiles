// Sambutan nama (Hi [Nama])
document.addEventListener("DOMContentLoaded", () => {
  const welcomeText = document.getElementById("welcome-text");

  let userName = prompt("Masukkan nama Anda:");
  if (!userName || userName.trim() === "") {
    userName = "Pengunjung";
  }

  welcomeText.textContent = `Hi ${userName}, Welcome To Website`;
});

// Form validation & output
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const output = document.getElementById("formOutput");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const message = document.getElementById("messageText").value.trim();

    // Validasi sederhana
    if (name === "" || birthdate === "" || message === "") {
      alert("Semua field harus diisi.");
      return;
    }

    const currentTime = new Date().toLocaleString();

    output.textContent = 
`Current Time : ${currentTime}
Nama          : ${name}
Tanggal Lahir : ${birthdate}
Jenis Kelamin : ${gender}
Pesan         : ${message}`;
  });
});
