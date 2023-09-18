const checkbox = document.querySelector("#checkbox");
const html = document.querySelector("html");

checkbox.addEventListener("click", function () {
  checkbox.checked ? html.classList.remove("dark") : html.classList.add("dark");
});

const myImg = document.getElementsByClassName("myImg");
const myModel = document.getElementsByClassName("myModel");
const close = document.getElementsByClassName("close");

for (let i = 0; i < myImg.length && myModel.length; i++) {
  myImg[i].onclick = function () {
    myModel[i].classList.remove("hidden");
  };
}

for (let a = 0; a < close.length && myModel.length; a++) {
  close[a].onclick = function () {
    myModel[a].classList.add("hidden");
  };
}

const nav = document.getElementById("hamburger-nav");
const button = document.getElementById("hamburger-button");
const div = button.getElementsByTagName("div");

button.addEventListener("click", function () {
  if (nav.classList.contains("invisible")) {
    nav.classList.remove("invisible");
  } else {
    nav.classList.add("invisible");
  }
});

const kontak = document.getElementById("kontak");
const cls = document.getElementById("kontak-close");

cls.onclick = function () {
  kontak.classList.add("invisible");
};

const psn = document.getElementById("hayuk");
psn.onclick = function () {
  kontak.classList.remove("invisible");
};

function SendMail() {
  const params = {
    from_name: document.getElementById("name").value,
    message: document.getElementById("pesan").value,
    email_id: document.getElementById("email").value,
  };
  emailjs.send("service_zietteu", "template_9ew3bfp", params, "QxagvoVPJOD5twlNs").then(
    function (response) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message succes",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}

document.getElementById("pc").addEventListener("click", function (event) {
  event.preventDefault(); // Menghentikan pengiriman form default
  kontak.classList.add("invisible");
  SendMail(); // Menjalankan fungsi SendMail()
});

//
// GSAP
// Animasi GSAP untuk teks loading
gsap.registerPlugin(TextPlugin);

let languages = ["English", "Spanish", "French", "German", "Italian", "Dutch", "Portuguese", "Russian", "Chinese", "Japanese"];
let greetings = ["Hello", "Hola", "Bonjour", "Hallo", "Ciao", "Hallo", "Olá", "Привет", "你好", "こんにちは"];
let tl = gsap.timeline();

let text = document.querySelector(".loading-text");
let section2 = document.querySelector(".section-2"); // Dapatkan elemen section 2
let section3 = document.querySelector(".section-3"); // Dapatkan elemen section 3
let footer = document.querySelector("footer"); // Dapatkan elemen footer
let delay = 0.25;

languages.forEach((languages, i) => {
  tl.add(() => (text.innerText = `${greetings[i]}, ${languages}`), i * delay);
});

// Jalankan animasi loading saat halaman dimuat
window.addEventListener("load", () => {
  tl.play(); // Mulai animasi
  setTimeout(() => {
    text.style.display = "none"; // Sembunyikan elemen loading setelah selesai
    section2.style.display = "block"; // Tampilkan section 2
    section3.style.display = "block"; // Tampilkan section 3
    footer.style.display = "block"; // Tampilkan footer
  }, (languages.length - 1) * delay * 1000); // Sembunyikan setelah animasi selesai
});
