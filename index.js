const wrapper = document.querySelector(".playerWrapper");

const playerInfoArray = [
  {
    name: "Ahn Jung Hwan",
    birth: "1976.01.27",
    nation: "Korea",
    position: "FW",
    imgurl: "./images/players/ahn.jpg",
    youtube: "https://www.youtube.com/embed/c4BftThiTMM?autoplay=1",
  },
  {
    name: "Steven Gerrard",
    birth: "1980.05.30",
    nation: "England",
    position: "MF",
    imgurl: "./images/players/gerrard.jpg",
    youtube:
      "https://www.youtube.com/embed/4PcYYuHeRrY?autoplay=1" /*자동재생*/,
  },

  {
    name: "David Beckham",
    birth: "1975.05.02",
    nation: "England",
    position: "MF",
    imgurl: "./images/players/beckham.jpg",
    youtube: "https://www.youtube.com/embed/lICWLTRwIwU?autoplay=1",
  },
  {
    name: "Wayne Rooney",
    birth: "1985.10.24",
    nation: "England",
    position: "FW",
    imgurl: "./images/players/rooney.jpg",
    youtube: "https://www.youtube.com/embed/KR7xBdnt2Y0?autoplay=1",
  },
  {
    name: "Park Ji-sung",
    birth: "1981.03.30",
    nation: "Korea",
    position: "MF",
    imgurl: "./images/players/park.jpg",
    youtube: "https://www.youtube.com/embed/M8mlxx8vRnw?autoplay=1",
  },
  {
    name: "Ronaldo",
    birth: "1976.09.18",
    nation: "Brazil",
    position: "FW",
    imgurl: "./images/players/ronaldo.jpg",
    youtube: "https://www.youtube.com/embed/eb7w1oqDILQ?autoplay=1",
  },
  {
    name: "Ronaldinho",
    birth: "1980.03.21",
    nation: "Brazil",
    position: "MF",
    imgurl: "./images/players/ronaldingho.jpg",
    youtube: "https://www.youtube.com/embed/GotnSpb_zME?autoplay=1",
  },
  {
    name: "Pelé",
    birth: "1940.10.23",
    nation: "Brazil",
    position: "FW",
    imgurl: "./images/players/pele.jpg",
    youtube: "https://www.youtube.com/embed/Md7PP-N0f4g?autoplay=1",
  },

  {
    name: "Son Heung-Min",
    birth: "1982.07.08",
    nation: "Korea",
    position: "FW",
    imgurl: "./images/players/son.jpg",
    youtube: "https://www.youtube.com/embed/WmigCsRtA7Y?autoplay=1",
  },
];

const logoArray = {
  England: "./images/logo/england.png",
  Korea: "./images/logo/korea.png",
  Brazil: "./images/logo/Brazil.png",
};

const backGroundArray = {
  England: "./images/background/englandBack.jpg",
  Korea: "./images/background/koreaBack.jpg",
  Brazil: "./images/background/brazilBack.jpg",
};

const items = Array.from({ length: 9 }, (_, index) => {
  const item = document.createElement("div");
  item.classList.add("item");

  const playerImg = document.createElement("img");
  playerImg.src = playerInfoArray[index].imgurl;
  const playerInfo = document.createElement("div");
  playerInfo.classList.add("playerInfo");

  const info = playerInfoArray[index];
  for (const key in info) {
    if (key !== "imgurl" && key !== "youtube") {
      const infoDiv = document.createElement("div");
      infoDiv.innerText = `${key}: ${info[key]}`;
      playerInfo.appendChild(infoDiv);
    }
  }

  item.appendChild(playerImg);
  item.appendChild(playerInfo);

  item.addEventListener("click", () => {
    const youtubeFrame = document.querySelector(".videoWrapper iframe");
    youtubeFrame.src = playerInfoArray[index].youtube;

    const iframe = document.querySelector("iframe");
    const svg = document.querySelector("svg");
    iframe.classList.remove("hidden");
    svg.classList.add("hidden");

    const logo = document.querySelector(".logo img");
    const logoName = playerInfoArray[index].nation;
    logo.src = logoArray[logoName];

    const playerName = document.querySelector("#playerName");
    playerName.textContent = playerInfoArray[index].name;

    const clickHere = document.querySelector(".clickHere");
    clickHere.classList.add("hidden");

    const teamLogoWrapper = document.querySelector(".teamLogoWrapper");
    teamLogoWrapper.classList.remove("hidden");

    const background = document.querySelector(".wrapper");
    const backgroundName = playerInfoArray[index].nation;
    background.style.backgroundImage = `url(${backGroundArray[backgroundName]})`;
  });

  return item;
});

items.map((item) => {
  wrapper.appendChild(item);
});
