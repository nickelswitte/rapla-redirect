function copyToClipboard(copyText) {
  return () => {
    navigator.clipboard.writeText(copyText).catch(() => {
      console.log("Looks like your browser does not support clipboard copying.");
    })
  }
}

function addClipboardHandlers() {
  const linkElementList = [...document.querySelectorAll("div.card:not(.unavailable) > .card-body > input")]

  linkElementList.forEach(linkElement => {
    if (linkElement.value) linkElement.addEventListener("click", copyToClipboard(linkElement.value))
  })
}

addClipboardHandlers();