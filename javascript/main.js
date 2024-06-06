document.getElementById("fetch-btn").addEventListener("click", async () => {
    const button = document.getElementById('fetch-btn');
    const swapiData = await getSwapiData();
    console.log(swapiData);

    // Toggle lightsaber effect
    if (button.classList.contains('lightsaber-activate')) {
        button.classList.remove('lightsaber-activate');
        button.classList.add('lightsaber-deactivate');
        button.textContent = 'Activate Lightsaber';
    } else {
        button.classList.remove('lightsaber-deactivate');
        button.classList.add('lightsaber-activate');
        button.textContent = 'Deactivate Lightsaber';
    }
});

/**
 * Gets data from the SWAPI API
 *
 * @returns {Object} Data from SWAPI
 */
const getSwapiData = async () => {
    // Gets data from SWAPI
    console.log("Getting data from SWAPI");
    const response = await fetch("https://swapi.dev/api/people/1");
    const data = await response.json();
    return data;
};

const displayCharacters = (characters) => {
    const outputBox = document.getElementById('output');
    outputBox.innerHTML = ''; // Clear previous content

    characters.forEach(character => {
        const characterElement = document.createElement('div');
        characterElement.classList.add('character');
        characterElement.innerHTML = `
            <h2>${character.name}</h2>
            <p>Height: ${character.height}</p>
            <p>Mass: ${character.mass}</p>
            <p>Hair Color: ${character.hair_color}</p>
            <p>Skin Color: ${character.skin_color}</p>
            <p>Eye Color: ${character.eye_color}</p>
            <p>Birth Year: ${character.birth_year}</p>
            <p>Gender: ${character.gender}</p>
        `;
        outputBox.appendChild(characterElement);
    });
};