const { hash } = window.location;
const deCrypted = atob(hash.replace("#", " "));

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#link-form").classList.remove("hide");
  const input = document.querySelector("#message-input");
  const encrypted = btoa(input.value);
  // console.log(encrypted);
  const linkInput = document.querySelector("#link-input");
  linkInput.value = `${window.location}#${encrypted}`;
  linkInput.select();
  // console.log(linkInput);
});

if (deCrypted) {
  document.querySelector("#message-form").classList.add("hide");
  document.querySelector("#message-show").classList.remove("hide");
  const heading = document.body.querySelector("h1");
  heading.innerHTML = deCrypted;
  let text = heading.innerText;
  if (text.length <= 20) heading.classList.add("heading-1");
  else heading.classList.remove("heading-1");
}
