const createAbout = () => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  const imgEle = document.createElement("img");
  imgEle.src = "./family_photo.avf";
  const paraDiv1 = document.createElement("div");
  paraDiv1.classList.add("para");
  const h21 = document.createElement("h2");
  h21.textContent = "Me";
  const p1 = document.createElement("p");
  p1.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deleniti aperiam beatae facere qui quaerat culpa nesciunt dignissimos reiciendis sunt ullam? Voluptas iure vero nostrum? Minima ratione eveniet repellat expedita.";
  paraDiv1.append(h21, p1);
  const paraDiv2 = document.createElement("div");
  paraDiv2.classList.add("para");
  const h22 = document.createElement("h2");
  h22.textContent = "You";
  const p2 = document.createElement("p");
  p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum voluptatem doloribus, earum non sint voluptate quia odio excepturi voluptas soluta sapiente magnam repellat iusto quisquam hic commodi porro saepe!";
  paraDiv2.append(h22, p2);
  containerDiv.append(imgEle, paraDiv1, paraDiv2);

  const pageDiv = document.querySelector(".page");
  pageDiv.appendChild(containerDiv);
};

export {
  createAbout
};