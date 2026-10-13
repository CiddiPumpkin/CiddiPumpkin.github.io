// Translations are trusted static copy; only these strings can become markup.
(() => {
  'use strict';
  const copy = {
  "copyright": {"ko": "© 2026 Kepler · 케플러", "en": "© 2026 Kepler"},
  "title": {
    "ko": "Kepler — 일상에 작은 여유를.",
    "en": "Kepler — A little space for everyday life."
  },
  "description": {
    "ko": "Kepler는 일상에 작은 여유를 만드는 독립 앱 스튜디오입니다. Plander와 출시 예정인 Sudoku: Cosmos, Nonogram: Cosmos를 만나보세요.",
    "en": "Kepler is an independent app studio making a little space for everyday life. Discover Plander and the upcoming Sudoku: Cosmos and Nonogram: Cosmos."
  },
  "ogDescription": {
    "ko": "일상을 정리하고, 생각에 잠시 여유를. Plander와 Cosmos 시리즈를 만드는 독립 앱 스튜디오.",
    "en": "Organize your day. Give your mind a little room. The independent studio behind Plander and the Cosmos series."
  },
  "skip": {
    "ko": "본문으로 이동",
    "en": "Skip to content"
  },
  "home": {
    "ko": "Kepler 홈",
    "en": "Kepler home"
  },
  "nav": {
    "ko": "주 메뉴",
    "en": "Main navigation"
  },
  "intro": {
    "ko": "하루를 정리하고, 생각에 잠시 여유를.<br>케플러는 일상에 자연스럽게 스며드는 앱을 만듭니다.",
    "en": "Organize your day. Give your mind a little room.<br>We make apps that feel at home in everyday life."
  },
  "ourApps": {
    "ko": "우리의 앱 <span aria-hidden=\"true\">↓</span>",
    "en": "Explore our apps <span aria-hidden=\"true\">↓</span>"
  },
  "appsTitle": {
    "ko": "작은 앱, 더 넓은 일상.",
    "en": "Small apps. More room for life."
  },
  "released": {
    "ko": "<i></i>iOS 출시",
    "en": "<i></i>Available on iOS"
  },
  "icon": {
    "ko": "Plander 앱 아이콘",
    "en": "Plander app icon"
  },
  "planderHeadline": {
    "ko": "오늘의 계획을,<br>나만의 리듬으로.",
    "en": "Plan your day.<br>Find your rhythm."
  },
  "planderDescription": {
    "ko": "한눈에 들어오는 캘린더로 일정을 살펴보고,<br class=\"desktop-break\"> 색상으로 구분해 하루를 차분하게 정리하세요.",
    "en": "See your schedule at a glance.<br class=\"desktop-break\"> Bring a little order to your day with color-coded plans."
  },
  "download": {
    "ko": "App Store에서 다운로드",
    "en": "Download on the App Store"
  },
  "android": {
    "ko": "Android 버전은 준비 중입니다.",
    "en": "Coming to Android."
  },
  "privacy": {
    "ko": "개인정보처리방침 <span aria-hidden=\"true\">↗</span>",
    "en": "Privacy policy <span aria-hidden=\"true\">↗</span>"
  },
  "screenshot": {
    "ko": "Plander의 실제 iOS 화면. 월간 캘린더에 색상별 일정이 표시되고 아래에 선택한 날의 일정 목록이 이어집니다.",
    "en": "Plander on iOS: a monthly calendar with color-coded events and a list of plans for the selected day below."
  },
  "next": {
    "ko": "다음으로 만날, 작은 몰입.",
    "en": "A little focus, coming next."
  },
  "sudoku": {
    "ko": "숫자 사이에서 찾는 잠깐의 몰입.<br>새로운 스도쿠 경험을 준비하고 있습니다.",
    "en": "Find a moment of focus between the numbers.<br>A new Sudoku experience is on its way."
  },
  "coming": {
    "ko": "iOS · Android 출시 예정",
    "en": "Coming to iOS & Android"
  },
  "nonogram": {
    "ko": "한 칸씩 채워가는 발견의 즐거움.<br>새로운 노노그램 경험을 준비하고 있습니다.",
    "en": "The joy of discovery, one square at a time.<br>A new Nonogram experience is on its way."
  },
  "futurePrivacy": {
    "ko": "개인정보처리방침은 출시 시 공개됩니다.",
    "en": "Privacy policy will be available at launch."
  },
  "studioTitle": {
    "ko": "일상의 작은 순간을<br>조금 더 좋게.",
    "en": "Making everyday moments<br>a little better."
  },
  "studioDescription": {
    "ko": "잘 정돈된 하루, 퍼즐 하나에 집중하는 시간.<br>케플러는 익숙한 순간을 더 편안하고 즐겁게 만드는<br class=\"desktop-break\"> 독립 앱 스튜디오입니다.",
    "en": "A well-planned day. A quiet moment with a puzzle.<br>Kepler is an independent app studio making familiar moments<br class=\"desktop-break\"> a little more comfortable and enjoyable."
  },
  "contactTitle": {
    "ko": "더 나은 앱은,<br>당신의 이야기에서.",
    "en": "Better apps begin<br>with your story."
  },
  "contactDescription": {
    "ko": "앱 사용 중 궁금한 점이나 제안이 있나요?<br>사용 중인 앱 이름과 함께 메일을 보내주세요.",
    "en": "Have a question or an idea to share?<br>Send us a message and let us know which app you’re using."
  },
  "top": {
    "ko": "Kepler 맨 위로",
    "en": "Kepler back to top"
  },
  "footerPrivacy": {
    "ko": "Plander 개인정보처리방침",
    "en": "Plander privacy policy"
  },
  "languageLabel": {
    "ko": "언어 선택",
    "en": "Select language"
  }
};
  const storageKey = 'kepler.language';
  const select = document.getElementById('language');
  const control = document.querySelector('.language-control');
  if (!select || !control) return;

  function applyLanguage(language) {
    const locale = language === 'en' ? 'en' : 'ko';
    document.documentElement.lang = locale;
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const entry = copy[element.dataset.i18n];
      if (entry) element.innerHTML = entry[locale];
    });
    ['content', 'aria-label', 'alt'].forEach(attribute => {
      document.querySelectorAll(`[data-i18n-${attribute}]`).forEach(element => {
        const entry = copy[element.getAttribute(`data-i18n-${attribute}`)];
        if (entry) element.setAttribute(attribute, entry[locale]);
      });
    });
    select.value = locale;
  }

  let preferred = 'ko';
  try { preferred = localStorage.getItem(storageKey) || 'ko'; } catch (_) { /* Storage can be unavailable. */ }
  applyLanguage(preferred);
  select.addEventListener('change', () => {
    applyLanguage(select.value);
    try { localStorage.setItem(storageKey, select.value); } catch (_) { /* Switching still works for this visit. */ }
  });
  control.hidden = false;
})();
