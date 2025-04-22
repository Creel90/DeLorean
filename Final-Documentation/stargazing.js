const Moon = {
  phase: function (year, month, day) {
    let c = e = jd = b = 0;

    if (month < 3) {
      year--;
      month += 12;
    }

    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09;
    jd /= 29.5305882;
    b = parseInt(jd);
    jd -= b;
    b = Math.round(jd * 8);

    if (b >= 8) b = 0;

    switch (b) {
      case 0: return 'New Moon 🌑';
      case 1: return 'Waxing Crescent 🌒';
      case 2: return 'First Quarter 🌓';
      case 3: return 'Waxing Gibbous 🌔';
      case 4: return 'Full Moon 🌕';
      case 5: return 'Waning Gibbous 🌖';
      case 6: return 'Last Quarter 🌗';
      case 7: return 'Waning Crescent 🌘';
    }
  }
};

function showMoon() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const phase = Moon.phase(year, month, day);
  document.getElementById("moon-phase").textContent = `Tonight's moon phase: ${phase}`;
}
