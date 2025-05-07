const dropdownRef = document.querySelector("#stars");

let currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
let starData = [{}];
if (currentUser.stars) {
  starData = currentUser.stars;
}

let currentStar = {
  name: "New Star",
  type: "none",
  currPage: -1,
  index: starData[0].name ? starData.length : 0,
};

function updateDropdown() {
    dropdownRef.innerHTML = `<option value="default">New Star</option>`;
  if (starData[0].name) {
    for (let i = 0; i < starData.length; i++) {
      dropdownRef.innerHTML += `<option value="${i}">${starData[i].name}</option>`;
    }
    dropdownRef.value = currentStar.index;
  }
}
updateDropdown();

const pages = [
  {
    /*0*/
    title: "Red Dwarf",
    description:
      "is born as a Red Dwarf, which are the smallest main sequence stars in the universe. They're also the coolest, but they live the longest. Advance to the next stage of life with the button below.",
    image: "https://theplanets.org/123/2021/05/red-dwarf-star.png",
    options: {
      opt1: 3,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*1*/
    title: "Low-Mass Star",
    description:
      "is born as a Low-Mass Star, which have an average temperature and life expectancy. Our own Sun is considered to be this as well! Advance to the next stage of life with the button below.",
    image:
      "https://science.nasa.gov/wp-content/uploads/2023/06/sun-h1180-jpg.webp?w=1920",
    options: {
      opt1: 3,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*2*/
    title: "Massive Star",
    description:
      "is born as a Massive Star, an extremely large and hot star that burns through its energy relatively quickly. However, it only gets bigger from here...advance to the next stage of life with the button below.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEXwUQlm6_3exnCvqQDIhFrfvcEhnw2Dqxig&s",
    options: {
      opt1: 6,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*3*/
    title: "Red Giant",
    description:
      "becomes a Red Giant after burning through its initial stores of energy, which causes it to collapse in on itself. However, the pressures excite new energy within the core, causing it to bloat to this massive form. Advance to the next stage of life with the button below.",
    image: "https://theplanets.org/123/2021/05/red-giant-star.png",
    options: {
      opt1: 4,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*4*/
    title: "White Dwarf",
    description:
      "will eventually expand outward enough to leave behind what is known as a Planetary Nebula, and also a White Dwarf at its center which is a remnant of its original core. Advance to the next stage of life with the button below",
    image:
      "https://cdn.mos.cms.futurecdn.net/v2/t:0,l:855,cw:2199,ch:2199,q:80,w:2199/DWKzCqjuCtirYCu8qH5ZU7.jpg",
    options: {
      opt1: 5,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*5*/
    title: "Brown Dwarf",
    description:
      'ends its life as a Brown Dwarf, which is the "dead" remains of its core that has now burnt through all its energy. Eventually, it will fade out into nothingness as all of its mass disipates.',
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/e0/Artist%E2%80%99s_conception_of_a_brown_dwarf_like_2MASSJ22282889-431026.jpg",
    options: {
      opt1: -1,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*6*/
    title: "Red Supergiant",
    description:
      "has now become a Red Supergiant, an even more massive star that is similar to a Red Giant but more unstable. It will eventually collapse in on itself once again, but will not be able to maintain its form and it will instead become something extraordinary. Advance to the next stage of life with the button below.",
    image: "https://astrobites.org/wp-content/uploads/2020/02/eso1726b.jpg",
    options: {
      opt1: 7,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*7*/
    title: "Supernova",
    description:
      "has exploded into a galactic spectacle known as a Supernova. These are extremely bright and stand out in the night sky, and their matter will radiate outwards into the rest of the galaxy. Something else remains though...choose from below what lies at the former center of the star.",
    image:
      "https://static.scientificamerican.com/dam/m/59f5e9ef8694b020/original/sa0225Mosk01.jpg?m=1737147782.961",
    options: {
      opt1: 8,
      opt2: 9,
      opt3: -1,
    },
  },
  {
    /*8*/
    title: "Black Hole",
    description:
      "is now a Black Hole, a singularity in which nothing can escape, not even light. It eats all matter surrounding it and periodically expells it in what is known as a gamma ray burst, and it will continue to do so until Hawking radiation reduces it to nothing within several billion years.",
    image:
      "https://static.scientificamerican.com/dam/m/3f49fda9f1ae2e59/original/supermassive-black-hole.jpg?m=1743602085.884",
    options: {
      opt1: -1,
      opt2: -1,
      opt3: -1,
    },
  },
  {
    /*9*/
    title: "Neutron Star",
    description:
      "has become what is known as a Neutron Star, and no longer generates heat but instead consists of almost entirely neutrons, as the name implies. This happens because each individual atom of the former core has become so compressed under its own weight. If this star is rotating at a sufficent speed, it is instead a pulsar that constantly emmits electromagnetic radiation.",
    image:
      "https://www.physik.tu-darmstadt.de/media/fachbereich_physik/aktuelles/artikel/What_is_a_neutron_star_870x0.jpg",
    options: {
      opt1: -1,
      opt2: -1,
      opt3: -1,
    },
  },
];

const titleRef = document.querySelector("#title");
const descRef = document.querySelector("#desc");
const imgRef = document.querySelector("#image");
const nameInputRef = document.querySelector("#nameInput");

const opt1Ref = document.querySelector("#opt1");
const opt2Ref = document.querySelector("#opt2");
const opt3Ref = document.querySelector("#opt3");
const allOpts = [opt1Ref, opt2Ref, opt3Ref];

const delButtonRef = document.querySelector("#delButton");

dropdownRef.onchange = function () {
  if (dropdownRef.value == "default") {
    currentStar = {
      name: "New Star",
      type: "none",
      currPage: -1,
      index: starData[0].name ? starData.length : 0,
    };
  } else {
    currentStar = starData[Number.parseInt(dropdownRef.value)];
  }
  updatePage(currentStar.currPage);
};

function updatePage(pageNum) {
  if (pageNum == -1) {
    titleRef.innerText = "Birth";
    descRef.innerText = `Inside of nebulas, stars are born when enough matter coalesces into a
        singular point. Your new star is being formed right now! What will you
        name it, and how large will it be?`;
    imgRef.src =
      "https://cdn.britannica.com/61/234061-050-6D985ED2/Carina-Nebula-Cosmic-Cliffs-NGC-3324-James-Webb-Space-Telescope-NIRCam.jpg";

    opt1Ref.dataset.pagenav = "0";
    opt1Ref.innerText = "Small Star";
    opt1Ref.style.display = "block";

    opt2Ref.dataset.pagenav = "1";
    opt2Ref.innerText = "Medium Star";
    opt2Ref.style.display = "block";

    opt3Ref.dataset.pagenav = "2";
    opt3Ref.innerText = "Large Star";
    opt3Ref.style.display = "block";

    nameInputRef.style.display = "block";
  } else {
    const newPage = pages[pageNum];

    titleRef.innerText = newPage.title;
    descRef.innerText = currentStar.name + " " + newPage.description;
    imgRef.src = newPage.image;

    opt1Ref.dataset.pagenav = newPage.options.opt1;
    opt2Ref.dataset.pagenav = newPage.options.opt2;
    opt3Ref.dataset.pagenav = newPage.options.opt3;

    for (let i = 0; i < allOpts.length; i++) {
      let nextPage = allOpts[i].dataset.pagenav;
      if (nextPage == -1) {
        allOpts[i].style.display = "none";
      } else {
        allOpts[i].style.display = "block";
        allOpts[i].innerText = pages[nextPage].title;
      }
    }

    nameInputRef.value = "";
    nameInputRef.style.display = "none";
  }
}

function navPages(e) {
  const nav = e.target.dataset.pagenav;
  const newPage = pages[nav];

  currentStar.type = newPage.title;

  //If we are on the starting (birth) page then we need to append currentStar to starData
  if (currentStar.currPage == -1) {
    currentStar.currPage = nav;
    if (!starData[0].name) {
      starData[0] = currentStar;
    } else {
      starData.push(currentStar);
    }
  }

  currentStar.currPage = nav;

  //save the current starData IF the user is logged in ONLY
  starData[currentStar.index] = currentStar;
  if (!currentUser.username) {
    alert(
      "You are not logged in and thus your star will NOT save! Make sure that you log in if you want to save your stars."
    );
  } else {
    currentUser.stars = starData;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  updateDropdown();
  updatePage(nav);
}

function updateName(e) {
  currentStar.name = e.target.value;
}

function deleteStar(index) {
  starData.splice(index,1);
  for (let i = index; i < starData.length; i++) {
    starData[i].index = starData[i].index - 1;
  }

  if(starData.length < 1) starData = [{}];

  if (currentUser.username) {
    currentUser.stars = starData;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }

  dropdownRef.value = "default";
  currentStar = {
    name: "New Star",
    type: "none",
    currPage: -1,
    index: starData[0].name ? starData.length : 0,
  };
  console.log(starData);
  updateDropdown();
  updatePage(-1);
}

nameInputRef.onchange = updateName;

delButtonRef.onclick = function () {
  if (currentStar.currPage >= 0) {
    if (confirm("Are you sure you want to delete this star?"))
        console.log(starData);      
        deleteStar(currentStar.index);
  } else {
    alert("No star to delete.");
  }
};

for (let i = 0; i < allOpts.length; i++) {
  allOpts[i].onclick = navPages;
  allOpts[i].style.display = "block";
}
