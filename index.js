const faqLists = document.querySelectorAll(".faq-list");

faqLists.forEach(item => {
  const question = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");
  const arrow = item.querySelector(".arrow");

    question.addEventListener("click", () => {faqLists.forEach(other => {
        if (other !== item) {
            other.querySelector(".faq-answer").classList.remove("open");
            other.querySelector(".arrow").classList.remove("arrow-rotated");
        }});
        answer.classList.toggle("open");
        arrow.classList.toggle("arrow-rotated");
    });

});