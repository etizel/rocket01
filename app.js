const  sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
    {
        title: "Formulário Animado com JS puro e CSS Animation | Mayk Brito",
        duration: "57 min",
        thumb: "https://i.ytimg.com/vi/GykTLqODQuU/hqdefault.jpg",
        video_id: "GykTLqODQuU"
      },
      {
        title: "Desvendando o CSS Grid na prática | Mayk Brito",
        duration: "36 min",
        thumb: "https://i.ytimg.com/vi/HN1UjzRSdBk/hqdefault.jpg",
        video_id: "HN1UjzRSdBk"
      },
      {
        title: "Array: Higher Order Functions | Mayk Brito",
        duration: "54 min",
        thumb: "https://i.ytimg.com/vi/rAzHvYnQ8DY/hqdefault.jpg",
        video_id: "rAzHvYnQ8DY"
      },
      {
        title: "O que é API? REST e RESTful? | Mayk Brito",
        duration: "33 min",
        thumb: "https://i.ytimg.com/vi/ghTrp1x_1As/hqdefault.jpg",
        video_id: "ghTrp1x_1As"
      },
      {
        title: "Desvendando a variável this no Javascript | Mayk Brito",
        duration: "48 min",
        thumb: "https://i.ytimg.com/vi/GSqR2i-Pq6o/hqdefault.jpg",
        video_id: "GSqR2i-Pq6o"
      },
      {
        title:
          "Como usar Git e Github na prática: Guia para iniciantes | Mayk Brito",
        duration: "33 min",
        thumb: "https://i.ytimg.com/vi/2alg7MQ6_sI/hqdefault.jpg",
        video_id: "2alg7MQ6_sI"
      }
];


videos.map(videos => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector("title").innerHTML = video.title;
  cardClone.querySelector(".info > p.tet--medium").innerHTML = 
    video.duration;
    sectionCards.appendChild(cardClone); 
});


card.remove();

// modal actions 
const modalOverlay = document.querySelector(".modal-overlay");
const modal1 = document.querySelector(".modal"); 
const cards = [...document.querySelector(".cards .card")];


card.forEach(card => {
  card.addEventListner("click", () => {
    modal1.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modalOverlay.classList.remove("active");
  modalOverlay.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflolw = "initial";
})
















