document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  console.log(input.value);
});

// const heading = document.body.querySelector("h1");
// heading.innerHTML = deCrypted;
// let text = heading.innerText;
// if (text.length <= 30) heading.classList.add("heading-1");
// else heading.classList.remove("heading-1");
