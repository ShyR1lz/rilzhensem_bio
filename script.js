/*
  WEBSITE RESMI SHYRILZ — EDIT LINK DI BAGIAN CONFIG DI BAWAH.
  Pastikan semua URL memakai https:// dan merupakan tautan akun milikmu.
*/
const CONFIG = {
  CREATOR_NAME: "ShyRilz",
  MINECRAFT_IGN: "ShyRilz",
  YOUTUBE_URL: "https://www.youtube.com/@Rilzhensem",
  INSTAGRAM_URL: "", // Belum tersedia
  DISCORD_URL: "", // Belum tersedia
  SOCIALBUZZ_URL: "https://sociabuzz.com/rilzmc1/tribe",
  SAWERIA_URL: "https://saweria.co/rilzhensem"
  BUSINESS_EMAIL: "business@example.com", // GANTI dengan email bisnis kamu
  AVATAR_IMAGE: "" // Opsional: isi URL gambar avatar Minecraft kamu
};

document.title = `${CONFIG.CREATOR_NAME} — Minecraft Creator`;
document.querySelector("#profile-name").textContent = CONFIG.CREATOR_NAME;
document.querySelector("#minecraft-ign").textContent = CONFIG.MINECRAFT_IGN;
document.querySelector("#year").textContent = new Date().getFullYear();

const emailLink = document.querySelector("#business-email-link");
const emailLabel = document.querySelector("#business-email-label");
if (emailLink && emailLabel) {
  emailLink.href = `mailto:${CONFIG.BUSINESS_EMAIL}`;
  emailLabel.textContent = CONFIG.BUSINESS_EMAIL;
}

const links = {
  "#youtube-hero": CONFIG.YOUTUBE_URL,
  "#youtube-link": CONFIG.YOUTUBE_URL,
  "#instagram-link": CONFIG.INSTAGRAM_URL,
  "#discord-link": CONFIG.DISCORD_URL,
  "#socialbuzz-link": CONFIG.SOCIALBUZZ_URL,
  "#saweria-link": CONFIG.SAWERIA_URL
};
for (const [selector, url] of Object.entries(links)) {
  const element = document.querySelector(selector);
  if (!element) continue;
  if (url) {
    element.href = url;
  } else {
    element.href = "#";
    element.classList.add("link-unavailable");
    element.setAttribute("aria-disabled", "true");
    element.removeAttribute("target");
    element.addEventListener("click", event => event.preventDefault());
    const subtitle = element.querySelector("small");
    if (subtitle) subtitle.textContent = "Belum tersedia";
  }
}

// Kalau kamu punya gambar skin/avatar, masukkan URL-nya ke AVATAR_IMAGE.
// Untuk file lokal, taruh gambar di folder assets lalu isi misalnya "assets/avatar.png".
if (CONFIG.AVATAR_IMAGE.trim()) {
  const avatar = document.querySelector("#avatar-placeholder");
  avatar.innerHTML = `<img src="${CONFIG.AVATAR_IMAGE}" alt="Avatar Minecraft ${CONFIG.CREATOR_NAME}"><small>${CONFIG.MINECRAFT_IGN}</small>`;
  avatar.querySelector("img").style.cssText = "width:100%;height:100%;object-fit:cover;image-rendering:pixelated";
}

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#nav-menu");
menuButton.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Tutup menu" : "Buka menu");
});
menu.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
