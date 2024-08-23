document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".list");
    const reviews = JSON.parse(localStorage.getItem("productReviews"));
  
    if (reviews) {
      Object.keys(reviews).forEach((product) => {
        const li = document.createElement("li");
        li.textContent = `${product}: ${reviews[product].join(", ")}`;
        list.appendChild(li);
        const buttonDel = document.createElement("button");
        buttonDel.textContent = "X";
        li.appendChild(buttonDel);
        buttonDel.addEventListener("click", () => {
            list.removeChild(li);
            delete reviews[product];
            localStorage.setItem("productReviews", JSON.stringify(reviews));
        })
      });
    }
  });