const buttonRefs = document.querySelectorAll("button");
console.log(buttonRefs);
const infoListRef = document.querySelector("#info");

async function getStarData(e){
    try{
        const starType = e.target.dataset.startype;
        const apiCall = await fetch(`https://api.codebox.net/starclass/parse/${starType}`);
        const starJson = await apiCall.json();
        const starData = starJson.data;

        infoListRef.innerHTML = `
        <h2 style="color:rgb(
            ${starData.colour.r}, 
            ${starData.colour.g}, 
            ${starData.colour.b}
        ")>Spectral Type ${starType}</h2>
        <li>Mass: ${starData.mass}</li>
        <li>Relative Luminosity: ${starData.luminosityRelative}</li>
        <li>Relative Radius: ${starData.radiusRelative}</li>
        <li>Temperature: ${starData.temperature}</li>
        <li>Color Index: ${starData.colourIndexBv}</li>
        <li>Absolute Magnitude: ${starData.absoluteMagnitude}</li>
        <li>Bolometric Correction: ${starData.bolometricCorrection}</li>
        <li>Bolometric Magnitude: ${starData.bolometricMagnitude}</li>
        `;
    }
    catch(err) {
        console.warn(err);
    }
};

for (let i = 0; i < buttonRefs.length; i++){
    buttonRefs[i].onclick = getStarData;
}

