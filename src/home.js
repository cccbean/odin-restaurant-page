const createHeader = () => {
  const headerDiv = document.createElement("div")
  headerDiv.classList.add("header");
  
  const logoDiv = document.createElement("div");
  logoDiv.classList.add("logo");
  const logoImg = document.createElement("img");
  logoImg.src = "./bean_logo.svg";
  logoDiv.appendChild(logoImg);
  const h1 = document.createElement("h1");
  h1.textContent = "Pink Bean";
  logoDiv.appendChild(h1);
  headerDiv.appendChild(logoDiv);

  const ul = document.createElement("ul");
  const homeLi = document.createElement("li");
  const homeBtn = document.createElement("button");
  homeBtn.id = "home";
  homeBtn.textContent = "Home";
  homeLi.appendChild(homeBtn);
  const aboutLi = document.createElement("li");
  const aboutBtn = document.createElement("button");
  aboutBtn.id = "about";
  aboutBtn.textContent = "About"
  aboutLi.appendChild(aboutBtn);
  const menuLi = document.createElement("li");
  const menuBtn = document.createElement("button");
  menuBtn.id = "menu";
  menuBtn.textContent = "Menu"
  menuLi.appendChild(menuBtn);
  ul.append(homeLi, aboutLi, menuLi);
  headerDiv.appendChild(ul);

  const contentDiv = document.querySelector("#content");
  contentDiv.prepend(headerDiv);
};


const createHome = () => {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  const imgEle = document.createElement("img");
  imgEle.src = "./pink_bean_canned.png";
  const paraDiv1 = document.createElement("div");
  paraDiv1.classList.add("para");
  const h21 = document.createElement("h2");
  h21.textContent = "Hi";
  const p1 = document.createElement("p");
  p1.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, deleniti aperiam beatae facere qui quaerat culpa nesciunt dignissimos reiciendis sunt ullam? Voluptas iure vero nostrum? Minima ratione eveniet repellat expedita.";
  paraDiv1.append(h21, p1);
  const paraDiv2 = document.createElement("div");
  paraDiv2.classList.add("para");
  const h22 = document.createElement("h2");
  h22.textContent = "Sup";
  const p2 = document.createElement("p");
  p2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptatum voluptatem doloribus, earum non sint voluptate quia odio excepturi voluptas soluta sapiente magnam repellat iusto quisquam hic commodi porro saepe!";
  paraDiv2.append(h22, p2);
  containerDiv.append(imgEle, paraDiv1, paraDiv2);

  const pageDiv = document.querySelector(".page");
  pageDiv.appendChild(containerDiv);
}

export {
  createHeader,
  createHome
}

