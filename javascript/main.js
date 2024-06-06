"use strict";

document.getElementById("fetch-btn").addEventListener("click", async () => {
    const swapiData = await getSwapiData();
    console.log(swapiData);
});

/**
 * 
 * Gets data from the SWAPI API
 * 
 * @param 
 * @returns 
 */
const getSwapiData = async () => {
    // Gets data from SWAPI
    console.log("Getting data from SWAPI");
    const response = await fetch("https://swapi.dev/api/people/1");
    const data = await response.json();
    return data;
    // for (let key in data) {
    //     console.log(`${key}: ${data[key]}`);
    // };
};