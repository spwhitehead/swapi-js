document.getElementById("fetch-btn").addEventListener("click", async () => {
    const swapiData = await getAllSwapiCharacters();
    console.log(swapiData);

    displayCharacters(swapiData); // Pass the array of characters to displayCharacters
    // Play audio
    const audio = document.getElementById('audio');
    audio.play();
});


const getAllSwapiCharacters = async () => {
    let allCharacters = [];
    let nextPage = "https://swapi.dev/api/people/";

    // Fetch all pages until there are no more pages left
    while (nextPage) {
        const response = await fetch(nextPage);
        const data = await response.json();
        allCharacters = [...allCharacters, ...data.results];
        nextPage = data.next; // The URL of the next page, or null if no more pages
    }

    return allCharacters;
};

const displayCharacters = async (characters) => {
    const outputBox = document.getElementById("output");
    outputBox.innerHTML = ""; // Clear previous content
    // Add the characters
    for (let i = 0; i < characters.length; i++) {
      const characterElement = document.createElement("div");
      characterElement.classList.add("character", "fade-in");
      characterElement.innerHTML = `
              <h2>${characters[i].name}</h2>
              <p>Height: ${characters[i].height}</p>
              <p>Mass: ${characters[i].mass}</p>
              <p>Hair Color: ${characters[i].hair_color}</p>
              <p>Skin Color: ${characters[i].skin_color}</p>
              <p>Eye Color: ${characters[i].eye_color}</p>
              <p>Birth Year: ${characters[i].birth_year}</p>
              <p>Gender: ${characters[i].gender}</p>
          `;
      outputBox.appendChild(characterElement);
    }
    // Start scrolling after all characters are displayed
    const scrollSpeed = 25; // Adjust scrolling speed as needed
    const scrollIncrement = 1; // Adjust scroll increment as needed
    let scrollPosition = -10;
    // Function to handle scrolling
    function scrollContent() {
      // Increment the scroll position
      scrollPosition += scrollIncrement;
      outputBox.scrollTop = scrollPosition;
      // Check if the content has scrolled to the top
      if (scrollPosition >= outputBox.scrollHeight - outputBox.clientHeight) {
        // Move content back to the beginning
        scrollPosition = 0;
        outputBox.scrollTop = 0;
      }
      // Repeat the scrolling
      setTimeout(scrollContent, scrollSpeed);
    }
    // Start scrolling
    scrollContent();
  };