const marketing = document.querySelector(".marketing");

if(marketing){
let counter = 0;
let delay = 5000;

const data = [
  { title: "Product 1", where: "Novosibirsk" },
  { title: "Product 2", where: "Saratov" },
  { title: "Product 3", where: "NewYork" },
];

const closeMarketing = () => {
  marketing.classList.remove("marketing--visible");
};

const changeMarketingInfo = () => {
  marketing.classList.remove("marketing--visible");

  setTimeout(()=>{
    marketing.classList.add("marketing--visible");
  }, delay-4000)
  const strTitle = `${data[counter].title}`;
  const strWhere = `15 minutes ago from ${data[counter].where}`;
  marketing.querySelector(".marketing__title").textContent = strTitle;
  marketing.querySelector(".marketing__when-from").textContent = strWhere;
  counter++;

  if (counter === data.length) {
    counter = 0;
  }
};

const marketingInterval = setInterval(() => {
  changeMarketingInfo();
}, delay);

changeMarketingInfo();

marketing.addEventListener("click", (e) => {
  if (e.target.classList.contains("marketing__close")) {
    closeMarketing();
    clearInterval(marketingInterval)
  }
});
}


