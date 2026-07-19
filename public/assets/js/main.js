const menuButton = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");

if (menuButton && siteNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

const searchInput = document.querySelector("#q");

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchInput.blur();
    }
  });
}

const dailyContents = [
  {
    verse: '"Rabbena atina fid-dunya haseneten ve fil-ahireti haseneten ve kina azaben-nar."',
    verseSource: "Bakara Suresi 2/201",
    hadith: '"Ameller ancak niyetlere göredir."',
    hadithSource: "Buhari, Bedu'l-vahy 1",
  },
  {
    verse: '"Şüphesiz güçlükle beraber bir kolaylık vardır."',
    verseSource: "İnşirah Suresi 94/6",
    hadith: '"Kolaylaştırın, zorlaştırmayın; müjdeleyin, nefret ettirmeyin."',
    hadithSource: "Buhari, İlim 11",
  },
  {
    verse: '"Allah sabredenlerle beraberdir."',
    verseSource: "Bakara Suresi 2/153",
    hadith: '"Temizlik imanın yarısıdır."',
    hadithSource: "Müslim, Taharet 1",
  },
  {
    verse: '"Beni anın ki ben de sizi anayım."',
    verseSource: "Bakara Suresi 2/152",
    hadith: '"Müslüman, elinden ve dilinden insanların güvende olduğu kimsedir."',
    hadithSource: "Tirmizi, İman 12",
  },
  {
    verse: '"Kim Allah'a tevekkül ederse, O kendisine yeter."',
    verseSource: "Talak Suresi 65/3",
    hadith: '"Allah, yapılan işi güzel yapanı sever."',
    hadithSource: "Beyhaki, Şuabü'l-iman",
  },
];

const verseText = document.querySelector("#daily-verse-text");
const verseSource = document.querySelector("#daily-verse-source");
const hadithText = document.querySelector("#daily-hadith-text");
const hadithSource = document.querySelector("#daily-hadith-source");

if (verseText && verseSource && hadithText && hadithSource) {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  const content = dailyContents[dayOfYear % dailyContents.length];

  verseText.textContent = content.verse;
  verseSource.textContent = content.verseSource;
  hadithText.textContent = content.hadith;
  hadithSource.textContent = content.hadithSource;
}
