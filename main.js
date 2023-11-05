const text = ["Muhammad", "Daffa", "Nugraha"];
const container = document.getElementById("animated-text");

function animateText(words) {
  let index = 0;

  function animate() {
    if (index < words.length) {
      const currentWord = words[index];
      const span = document.createElement("span");
      span.textContent = currentWord;
      span.style.animationDelay = `${1 + index}s`; // Setiap kata muncul dengan jeda 1 detik
      container.appendChild(span);
      index++;
      setTimeout(animate, 1000); // Animasikan kata berikutnya setelah 1 detik
    }
  }

  animate();
}