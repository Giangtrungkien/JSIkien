import { checkAccount } from "./control.js";
export const getSpotify = async (query) => {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${query}%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bc593fa811msh25694d891e54b17p1da2c1jsnd7b4ddd79288",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    if (result) {
      const data = result.tracks.items;
      let html = `<h1 class="h1" style="color: aliceblue">You may like these</h1>
      <div class="content-item">`;
      for (let i = 0; i < data.length; i++) {
        let id = data[i].data.id;
        html += `
        <iframe style="border-radius:12px"
                                src="https://open.spotify.com/embed/track/${id}?utm_source=generator"
                                width="100%" height="152" frameBorder="0" allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"></iframe>`;
      }
      html += `</div> `;
      console.log(html);
      document.querySelector("#content").innerHTML += html;
      // playMusic();
    }
  } catch (error) {
    console.error(error);
  }
};

document.querySelector("#inputSearch").addEventListener("input", () => {
  getAPI(document.querySelector("#inputSearch").value);
});

export const loadRecentSearch = () => {
  document.querySelector("#content").innerHTML = `
  <h1 class="h1" style="color: white">Recent search</h1>
              <div class="content-item">
                <iframe
                  style="border-radius: 12px"
                  src="https://open.spotify.com/embed/track/2jfzLcfM2UDOvTcUMXMVPy?utm_source=generator"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen;  picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style="border-radius: 12px"
                  src="https://open.spotify.com/embed/track/4ZOCzRRThD32cGu8aeqOBb?utm_source=generator"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style="border-radius: 12px"
                  src="https://open.spotify.com/embed/track/5yrPkBvOBvqfSjDhoRzDlO?utm_source=generator"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style="border-radius: 12px"
                  src="https://open.spotify.com/embed/track/11hcyWq7qSwBE3bvv5Ialn?utm_source=generator"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style="border-radius: 12px"
                  src="https://open.spotify.com/embed/track/3kxFvcB92qQg9wl52CQ7aV?utm_source=generator"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style="border-radius: 12px"
                  src="https://open.spotify.com/embed/track/28bxbqNcAuNxYDZYet6eZ7?utm_source=generator"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <iframe
                  style="border-radius: 12px"
                  src="https://open.spotify.com/embed/track/64qXPpH0c7GkJOQcUj79Ia?utm_source=generator"
                  width="100%"
                  height="152"
                  frameborder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
                <img src="" alt="" />
              </div>`;
};
// loadFormLogin();

// const playMusic = () => {
//   document.querySelector("#content-list").innerHTML += `
//   <iframe
//                 class="Playmusic"
//                 style="border-radius: 12px"
//                 src="https://open.spotify.com/embed/track/3kxFvcB92qQg9wl52CQ7aV?utm_source=generator"
//                 width="100%"
//                 height="152"
//                 frameborder="0"
//                 allowfullscreen=""
//                 allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
//                 loading="lazy"
//               ></iframe>`;
// };
loadRecentSearch();
getSpotify("son tung");
// const loadSearch = (inputValue) => {
//   document.querySelector("#content").innerHTML = `
//   <div class="top">
//   <div class="top-restult">
//     <h1>Top result</h1>
//     <div class="wrapper-top-result">
//       <img src="./img/daylight.png" alt="" />
//       <h2>Day light</h2>
//       <p>Artist</p>
//     </div>
//   </div>
//   <div class="top-songs">
//     <h1>Songs</h1>
//     <div class="wrapper-top-songs">
//       <iframe
//         style="border-radius: 12px"
//         src="https://open.spotify.com/embed/track/2jfzLcfM2UDOvTcUMXMVPy?utm_source=generator"
//         width="100%"
//         height="152"
//         frameborder="0"
//         allowfullscreen=""
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen;  picture-in-picture"
//         loading="lazy"
//       ></iframe>
//       <iframe
//         style="border-radius: 12px"
//         src="https://open.spotify.com/embed/track/2jfzLcfM2UDOvTcUMXMVPy?utm_source=generator"
//         width="100%"
//         height="152"
//         frameborder="0"
//         allowfullscreen=""
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen;  picture-in-picture"
//         loading="lazy"
//       ></iframe>
//       <iframe
//         style="border-radius: 12px"
//         src="https://open.spotify.com/embed/track/2jfzLcfM2UDOvTcUMXMVPy?utm_source=generator"
//         width="100%"
//         height="152"
//         frameborder="0"
//         allowfullscreen=""
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen;  picture-in-picture"
//         loading="lazy"
//       ></iframe>
//       <iframe
//         style="border-radius: 12px"
//         src="https://open.spotify.com/embed/track/2jfzLcfM2UDOvTcUMXMVPy?utm_source=generator"
//         width="100%"
//         height="152"
//         frameborder="0"
//         allowfullscreen=""
//         allow="autoplay; clipboard-write; encrypted-media; fullscreen;  picture-in-picture"
//         loading="lazy"
//       ></iframe>
//     </div>
//   </div>
// </div>
// <h1>Artists</h1>
// <div class="Artist">
//   <div class="wrapper-artists">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-artists">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-artists">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-artists">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-artists">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
// </div>
// <br />
// <h1>Albums</h1>
// <div class="Albums">
//   <div class="wrapper-albums">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-albums">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-albums">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-albums">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   <div class="wrapper-albums">
//     <img src="./img/daylight.png" alt="" />
//     <h2>Day light</h2>
//     <p>Artist</p>
//   </div>
//   `;
// };
// loadSearch();
checkAccount();
const home = document.querySelector("#HOME");
home.addEventListener("click", () => {
  loadRecentSearch();
  getSpotify("son tung");
});

const getAPI = async (inputValue) => {
  const url = `https://spotify23.p.rapidapi.com/search/?q=${inputValue}&type=multi&offset=0&limit=10&numberOfTopResults=5`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "bc593fa811msh25694d891e54b17p1da2c1jsnd7b4ddd79288",
      "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    const resultTopResult = result.topResults;
    const image =
      resultTopResult.items[0].data.visuals.avatarImage.sources[0].url;
    const nameTopResult = resultTopResult.items[0].data.profile.name;
    const resultSong = result.tracks.items;
    const resultArtist = result.artists.items;
    const resultAlbum = result.albums.items;
    console.log(resultSong);
    let html = `
    <div class="top">
    <div class="top-restult">
      <h1>Top result</h1>
      <div class="wrapper-top-result">
        <img src=${image} alt="" />
        <h2>${nameTopResult}</h2>
        <p>Artist</p>
      </div>
    </div>
    <div class="top-songs">
      <h1>Songs</h1>
      <div class="wrapper-top-songs">
    `;
    for (let i = 0; i < 4; i++) {
      let idSong = resultSong[i].data.id;
      html += `
      <iframe
      style="border-radius: 12px"
      src="https://open.spotify.com/embed/track/${idSong}?utm_source=generator"
      width="100%"
      height="152"
      frameborder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen;  picture-in-picture"
      loading="lazy"
    ></iframe>
      `;
    }

    html += `
    </div>
    </div>
  </div>
  <h1>Artists</h1>
  <div class="Artist">
    `;
    console.log(html);

    for (let i = 0; i < 5; i++) {
      let imageArtist = resultArtist[i].data.visuals.avatarImage
        ? resultArtist[i].data.visuals.avatarImage.sources[0].url
        : `./img/avatardfefault.png`;
      console.log(imageArtist);
      let nameArtist = resultArtist[i].data.profile.name;
      html += `
      <div class="wrapper-artists">
    <img src=${imageArtist} alt="" />
    <h2>${nameArtist}</h2>
    <p>Artist</p>
  </div>
      `;
    }

    html += `
    </div>
<br />
<h1>Albums</h1>
<div class="Albums">`;
    for (let i = 0; i < 5; i++) {
      let imageAlbums = resultAlbum[i].data.coverArt.sources[0].url;
      let nameAlbums = resultAlbum[i].data.name;
      html += `
  <div class="wrapper-albums">
    <img src=${imageAlbums} alt="" />
    <h2>${nameAlbums}</h2>
    <p>Artist</p>
  </div> 
  `;
    }
    console.log(html);
    document.querySelector("#content").innerHTML = html;
  } catch (error) {
    console.error(error);
  }
};
