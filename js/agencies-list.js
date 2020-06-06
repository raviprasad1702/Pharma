const searchBox = document.querySelector("#searchBox");
const autoCompleteList = document.querySelector(".autocomplete-list");

const agencyListSearch = async (searchText) => {
  const res = await fetch("../a-list.json");
  const agencyListItems = await res.json();

  let matches = agencyListItems.filter((item) => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return item.name.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    autoCompleteList.innerHTML = "";
  }

  // console.log(matches)

  outputList(matches);
};

//Html output as autocomplete

const outputList = (matches) => {
  if (matches.length > 0) {
    const html = matches
      .map(
        (match) => `
        <div> <a> ${match.name}</a></div>
    `
      )
      .join("");

    autoCompleteList.innerHTML = html;
  }
};

searchBox.addEventListener("input", () => agencyListSearch(searchBox.value));
