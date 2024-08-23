document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form");
  const productName = document.querySelector(".name");
  const review = document.querySelector(".review");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const productNameValue = productName.value.trim();
    const reviewValue = review.value.trim();

    if (productNameValue && reviewValue) {
      const reviews = JSON.parse(localStorage.getItem("productReviews")) || {};
      if (!reviews[productNameValue]) {
        reviews[productNameValue] = [];
      }
      reviews[productNameValue].push(reviewValue);

      localStorage.setItem("productReviews", JSON.stringify(reviews));
      form.reset();
    }
  });
});
