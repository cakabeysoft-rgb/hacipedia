var menuButton = document.querySelector(".menu-toggle");
var siteNav = document.querySelector("#site-nav");
var menuModal = document.querySelector("#menu-modal");
var closeMenuButtons = document.querySelectorAll("[data-close-menu]");

function closeMenu() {
  if (!menuModal || !menuButton) return;
  menuModal.classList.remove("is-open");
  menuModal.setAttribute("aria-hidden", "true");
  menuButton.setAttribute("aria-expanded", "false");
  syncModalLock();
}

function toggleMenu() {
  if (!menuModal || !menuButton) return;
  var isOpen = menuModal.classList.toggle("is-open");
  menuModal.setAttribute("aria-hidden", String(!isOpen));
  menuButton.setAttribute("aria-expanded", String(isOpen));
  syncModalLock();
}

if (menuButton && menuModal) {
  menuButton.addEventListener("click", toggleMenu);
}

var searchInput = document.querySelector("#q");

if (searchInput) {
  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      searchInput.value = "";
      searchInput.blur();
    }
  });
}

var searchModal = document.querySelector("#search-modal");
var searchTrigger = document.querySelector(".header-search-trigger");
var modalSearchInput = document.querySelector("#modal-search-input");
var searchSuggestions = document.querySelector("#search-suggestions");
var closeSearchButtons = document.querySelectorAll("[data-close-search]");
var settingsModal = document.querySelector("#settings-modal");
var settingsTrigger = document.querySelector("#settings-trigger");
var closeSettingsButtons = document.querySelectorAll("[data-close-settings]");
var themeToggle = document.querySelector("#theme-toggle");
var themeIcon = document.querySelector("#theme-icon");
var notificationToggle = document.querySelector("#notification-toggle");
var notificationStatus = document.querySelector("#notification-status");
var fontSizeButtons = document.querySelectorAll("[data-font-size]");
var headerMusicTrigger = document.querySelector("#header-music-trigger");

function syncModalLock() {
  var hasOpenSearch = searchModal && searchModal.classList.contains("is-open");
  var hasOpenSettings = settingsModal && settingsModal.classList.contains("is-open");
  var hasOpenMenu = menuModal && menuModal.classList.contains("is-open");
  document.body.classList.toggle("modal-open", Boolean(hasOpenSearch || hasOpenSettings || hasOpenMenu));
}

var searchableItems = [
  { title: "Hac Nedir?", category: "Hac Rehberi", url: "hac-rehberi.html" },
  { title: "Hac Kimlere Farzdır?", category: "Hac Rehberi", url: "hac-kimlere-farzdir.html" },
  { title: "Hac Çeşitleri", category: "Hac Rehberi", url: "hac-cesitleri.html" },
  { title: "Hac Öncesi Hazırlık", category: "Hac Rehberi", url: "hac-oncesi-hazirlik.html" },
  { title: "Evrak ve Kayıt Süreci", category: "Hac Rehberi", url: "hac-evrak-kayit.html" },
  { title: "İhram", category: "Hac Rehberi", url: "ihram.html" },
  { title: "Mikat", category: "Hac Rehberi", url: "mikat.html" },
  { title: "Tavaf", category: "Hac Rehberi", url: "tavaf.html" },
  { title: "Sa'y", category: "Hac Rehberi", url: "say.html" },
  { title: "Arafat", category: "Hac Rehberi", url: "arafat.html" },
  { title: "Müzdelife", category: "Hac Rehberi", url: "muzdelife.html" },
  { title: "Mina ve Şeytan Taşlama", category: "Hac Rehberi", url: "mina-seytan-taslama.html" },
  { title: "Kurban", category: "Hac Rehberi", url: "kurban.html" },
  { title: "Tıraş / İhramdan Çıkış", category: "Hac Rehberi", url: "tiras-ihramdan-cikis.html" },
  { title: "Veda Tavafı", category: "Hac Rehberi", url: "veda-tavafi.html" },
  { title: "Hac Sonrası", category: "Hac Rehberi", url: "hac-sonrasi.html" },
  { title: "İhram nasıl giyilir?", category: "Hac Rehberi", url: "ihram-nasil-giyilir.html" },
  { title: "Tavaf nasıl yapılır?", category: "Umre Rehberi", url: "tavaf-nasil-yapilir.html" },
  { title: "Mikat noktaları nelerdir?", category: "Bilgi Merkezi", url: "mikat-noktalari.html" },
  { title: "Umrede tıraş ne zaman olunur?", category: "Soru & Cevap", url: "soru/umrede-tiras-ne-zaman-olunur.html" },
  { title: "Riyal hesaplayıcı", category: "Araçlar", url: "doviz.html" },
  { title: "Hac ve umre ihtiyaç listesi", category: "Araçlar", url: "ihtiyac-listesi.html" },
  { title: "Arapça pratik sözlük", category: "Sözlük", url: "arapca-sozluk.html" }
];

function lowerTr(value) {
  return value.toLocaleLowerCase("tr");
}

function renderSearchResults(query) {
  if (!searchSuggestions) return;

  var normalizedQuery = lowerTr((query || "").trim());
  var html = "";
  var resultCount = 0;

  searchableItems.forEach(function (item) {
    var haystack = lowerTr(item.title + " " + item.category);
    if (resultCount >= 5 || (normalizedQuery && haystack.indexOf(normalizedQuery) === -1)) {
      return;
    }

    html += '<a class="search-result" href="' + item.url + '" target="_blank" rel="noopener">';
    html += "<strong>" + item.title + "</strong>";
    html += "<span>" + item.category + "</span>";
    html += "</a>";
    resultCount += 1;
  });

  if (!html) {
    html = '<p class="search-empty">Sonuç bulunamadı. Farklı bir kelime deneyin.</p>';
  }

  searchSuggestions.innerHTML = html;
}

function openSearch() {
  if (!searchModal || !modalSearchInput) return;
  searchModal.classList.add("is-open");
  searchModal.setAttribute("aria-hidden", "false");
  syncModalLock();
  renderSearchResults("");
  window.setTimeout(function () {
    modalSearchInput.focus();
  }, 40);
}

function closeSearch() {
  if (!searchModal) return;
  searchModal.classList.remove("is-open");
  searchModal.setAttribute("aria-hidden", "true");
  syncModalLock();
}

if (searchTrigger && searchModal) {
  searchTrigger.addEventListener("click", openSearch);
}

if (modalSearchInput) {
  modalSearchInput.addEventListener("input", function () {
    renderSearchResults(modalSearchInput.value);
  });

  modalSearchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && modalSearchInput.value.trim()) {
      window.location.href = "arama.html?q=" + encodeURIComponent(modalSearchInput.value.trim());
    }
  });
}

Array.prototype.forEach.call(closeSearchButtons, function (button) {
  button.addEventListener("click", closeSearch);
});

Array.prototype.forEach.call(closeMenuButtons, function (button) {
  button.addEventListener("click", closeMenu);
});

function openSettings() {
  if (!settingsModal) return;
  settingsModal.classList.add("is-open");
  settingsModal.setAttribute("aria-hidden", "false");
  syncModalLock();
}

function closeSettings() {
  if (!settingsModal) return;
  settingsModal.classList.remove("is-open");
  settingsModal.setAttribute("aria-hidden", "true");
  syncModalLock();
}

if (settingsTrigger && settingsModal) {
  settingsTrigger.addEventListener("click", openSettings);
}

Array.prototype.forEach.call(closeSettingsButtons, function (button) {
  button.addEventListener("click", closeSettings);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeSearch();
    closeSettings();
    closeMenu();
  }
});

var talbiyahAudio = document.querySelector("#talbiyah-audio");

function setMusicState(isPlaying) {
  if (!headerMusicTrigger) return;
  headerMusicTrigger.setAttribute("aria-pressed", String(isPlaying));
  headerMusicTrigger.setAttribute("aria-label", isPlaying ? "Lebbeyk sesini durdur" : "Lebbeyk dinle");
}

function stopTalbiyahAudio() {
  if (!talbiyahAudio) return;
  talbiyahAudio.pause();
  talbiyahAudio.currentTime = 0;
  setMusicState(false);
}

function playTalbiyahAudio() {
  if (!talbiyahAudio) return;

  var playRequest = talbiyahAudio.play();
  setMusicState(true);

  if (playRequest && typeof playRequest.catch === "function") {
    playRequest.catch(function () {
      setMusicState(false);
    });
  }
}

if (talbiyahAudio) {
  talbiyahAudio.addEventListener("ended", function () {
    setMusicState(false);
  });

  talbiyahAudio.addEventListener("pause", function () {
    if (talbiyahAudio.currentTime === 0 || talbiyahAudio.ended) {
      setMusicState(false);
    }
  });
}

if (headerMusicTrigger) {
  headerMusicTrigger.addEventListener("click", function () {
    if (headerMusicTrigger.getAttribute("aria-pressed") === "true") {
      stopTalbiyahAudio();
      return;
    }

    playTalbiyahAudio();
  });
}

function applyFontSize(size) {
  var nextSize = size || "medium";
  document.documentElement.setAttribute("data-font-size", nextSize);
  document.body.setAttribute("data-font-size", nextSize);
  window.localStorage.setItem("hacipedia-font-size", nextSize);

  Array.prototype.forEach.call(fontSizeButtons, function (button) {
    button.classList.toggle("is-active", button.getAttribute("data-font-size") === nextSize);
  });
}

function applyTheme(theme) {
  var nextTheme = theme === "dark" ? "dark" : "light";
  document.body.setAttribute("data-theme", nextTheme);
  window.localStorage.setItem("hacipedia-theme", nextTheme);

  if (themeToggle) {
    var isDark = nextTheme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Gece modunu kapat" : "Gece modunu aç");
  }

  if (themeIcon) {
    themeIcon.setAttribute("src", nextTheme === "dark" ? "assets/icons/sun.svg" : "assets/icons/moon.svg");
  }
}

applyFontSize(window.localStorage.getItem("hacipedia-font-size") || "medium");
applyTheme(window.localStorage.getItem("hacipedia-theme") || "light");

Array.prototype.forEach.call(fontSizeButtons, function (button) {
  button.addEventListener("click", function () {
    applyFontSize(button.getAttribute("data-font-size"));
  });
});

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    var isDark = document.body.getAttribute("data-theme") === "dark";
    applyTheme(isDark ? "light" : "dark");
  });
}

function setNotificationUi(state) {
  if (!notificationToggle || !notificationStatus) return;

  var isOn = state === "granted";
  notificationToggle.setAttribute("aria-pressed", String(isOn));
  notificationToggle.setAttribute("aria-label", isOn ? "Bildirimleri kapat" : "Bildirimleri aç");

  notificationStatus.classList.toggle("is-on", isOn);
  notificationStatus.classList.toggle("is-blocked", state === "denied" || state === "unsupported");

  if (state === "granted") {
    notificationStatus.textContent = "Açık";
  } else if (state === "denied") {
    notificationStatus.textContent = "Tarayıcıdan engelli";
  } else if (state === "unsupported") {
    notificationStatus.textContent = "Desteklenmiyor";
  } else {
    notificationStatus.textContent = "Kapalı";
  }
}

function showHacipediaNotification(title, body) {
  if (!("Notification" in window) || Notification.permission !== "granted") return;

  new Notification(title, {
    body: body,
    icon: "assets/icons/bell.svg",
    tag: "hacipedia-update"
  });
}

function syncNotificationPreference() {
  if (!notificationToggle) return;

  if (!("Notification" in window)) {
    setNotificationUi("unsupported");
    return;
  }

  if (Notification.permission === "granted" && window.localStorage.getItem("hacipedia-notifications") === "on") {
    setNotificationUi("granted");
    return;
  }

  setNotificationUi(Notification.permission === "denied" ? "denied" : "default");
}

syncNotificationPreference();

if (notificationToggle) {
  notificationToggle.addEventListener("click", function () {
    if (!("Notification" in window)) {
      setNotificationUi("unsupported");
      return;
    }

    if (notificationToggle.getAttribute("aria-pressed") === "true") {
      window.localStorage.setItem("hacipedia-notifications", "off");
      setNotificationUi("default");
      return;
    }

    var permissionRequest = Notification.requestPermission();

    if (!permissionRequest || typeof permissionRequest.then !== "function") {
      return;
    }

    permissionRequest.then(function (permission) {
      if (permission === "granted") {
        window.localStorage.setItem("hacipedia-notifications", "on");
        setNotificationUi("granted");
        showHacipediaNotification("Hacipedia bildirimleri açık", "Yeni rehber, blog ve hazırlık notlarını buradan duyuracağız.");
      } else {
        window.localStorage.setItem("hacipedia-notifications", "off");
        setNotificationUi(permission);
      }
    });
  });
}

var dailyContents = [
  {
    verse: '"Rabbena atina fid-dunya haseneten ve fil-ahireti haseneten ve kina azaben-nar."',
    verseSource: "Bakara Suresi 2/201",
    hadith: '"Ameller ancak niyetlere göredir."',
    hadithSource: "Buhari, Bedu'l-vahy 1"
  },
  {
    verse: '"Şüphesiz güçlükle beraber bir kolaylık vardır."',
    verseSource: "İnşirah Suresi 94/6",
    hadith: '"Kolaylaştırın, zorlaştırmayın; müjdeleyin, nefret ettirmeyin."',
    hadithSource: "Buhari, İlim 11"
  },
  {
    verse: '"Allah sabredenlerle beraberdir."',
    verseSource: "Bakara Suresi 2/153",
    hadith: '"Temizlik imanın yarısıdır."',
    hadithSource: "Müslim, Taharet 1"
  },
  {
    verse: '"Beni anın ki ben de sizi anayım."',
    verseSource: "Bakara Suresi 2/152",
    hadith: '"Müslüman, elinden ve dilinden insanların güvende olduğu kimsedir."',
    hadithSource: "Tirmizi, İman 12"
  },
  {
    verse: "\"Kim Allah'a tevekkül ederse, O kendisine yeter.\"",
    verseSource: "Talak Suresi 65/3",
    hadith: '"Allah, yapılan işi güzel yapanı sever."',
    hadithSource: "Beyhaki, Şuabu'l-iman"
  }
];

var verseText = document.querySelector("#daily-verse-text");
var verseSource = document.querySelector("#daily-verse-source");
var hadithText = document.querySelector("#daily-hadith-text");
var hadithSource = document.querySelector("#daily-hadith-source");

if (verseText && verseSource && hadithText && hadithSource) {
  var now = new Date();
  var startOfYear = new Date(now.getFullYear(), 0, 0);
  var dayOfYear = Math.floor((now - startOfYear) / 86400000);
  var content = dailyContents[dayOfYear % dailyContents.length];

  verseText.textContent = content.verse;
  verseSource.textContent = content.verseSource;
  hadithText.textContent = content.hadith;
  hadithSource.textContent = content.hadithSource;
}

var guideVideos = {
  ihram: {
    title: "İhram Hazırlığı",
    label: "İhram",
    description: "İhrama girmeden önce niyet, kıyafet, temizlik ve yasaklar konusunda bilmeniz gereken temel noktalar."
  },
  tavaf: {
    title: "Tavaf Nasıl Yapılır?",
    label: "Tavaf",
    description: "Kabe etrafında yedi şavtın sakin, düzenli ve kalabalığa dikkat ederek nasıl tamamlandığını öğrenin."
  },
  say: {
    title: "Sa'y Rehberi",
    label: "Sa'y",
    description: "Safa ile Merve arasındaki yedi yürüyüşün sırası, niyeti ve pratik dikkat noktaları."
  },
  arafat: {
    title: "Arafat Vakfesi",
    label: "Arafat",
    description: "Arefe günü Arafat'ta bulunmanın önemi, dua zamanı ve kafile düzeninde dikkat edilecekler."
  },
  mina: {
    title: "Mina ve Şeytan Taşlama",
    label: "Mina",
    description: "Müzdelife sonrası Mina süreci, şeytan taşlama günleri ve yoğunlukta güvenli hareket etme notları."
  }
};

var guideVideoButtons = document.querySelectorAll("[data-guide-video]");
var guideVideoTitle = document.querySelector("#video-title");
var guideVideoDescription = document.querySelector("#video-description");
var guideVideoLabel = document.querySelector("#video-label");

Array.prototype.forEach.call(guideVideoButtons, function (button) {
  button.addEventListener("click", function () {
    var key = button.getAttribute("data-guide-video");
    var video = guideVideos[key];
    if (!video || !guideVideoTitle || !guideVideoDescription || !guideVideoLabel) return;

    guideVideoTitle.textContent = video.title;
    guideVideoDescription.textContent = video.description;
    guideVideoLabel.textContent = video.label;

    Array.prototype.forEach.call(guideVideoButtons, function (item) {
      item.classList.toggle("is-active", item === button);
    });
  });
});

var printGuideButtons = document.querySelectorAll("[data-print-guide]");

Array.prototype.forEach.call(printGuideButtons, function (button) {
  button.addEventListener("click", function () {
    window.print();
  });
});
