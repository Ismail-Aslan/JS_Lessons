
const countries = document.querySelector('.countries');
countries.style.opacity = 1;

const renderCountry = (data, className = '') => {
  const countriesSection = document.querySelector('.countries');
  const html = `
  <div class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span><i class="fas fa-lg fa-landmark"></i></span>${
        data.capital
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-users"></i></span>${(
        +data.population / 1_000_000
      ).toFixed(1)}M People</p>
      <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
        data.languages[0].name
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
        data.currencies[0].name
      }</p>
    </div>
  </div>`;

  // / ${data.nativeName}
  countriesSection.insertAdjacentHTML('beforeend', html);
  countriesSection.style.opacity = 1;
};



const getCountryData = (countryName) => {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error('something went wrong!');
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData[0]);
      renderCountry(countryData[0]);
    })
    .catch((error) => console.log(error.message));
};

const getCountryByCode = (countryCode) => {
  fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error('something went wrong!');
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData);
      renderCountry(countryData, 'neighbour');
    })
    .catch((error) => console.log(error.message));
};

const getCountryAndNeighbours = (countryName) => {
  fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
    .then((response) => {
      console.log(response);
      if (!response.ok) throw new Error('something went wrong!');
      return response.json();
    })
    .then((countryData) => {
      console.log(countryData[0]);
      const theCountry = countryData[0];
      renderCountry(theCountry);
      return countryData[0].borders;
    })
    .then((neighbours) => {
      if (neighbours.length) {
        console.log('neighbours :>> ', ...neighbours);
        neighbours.forEach((country) => {
          getCountryByCode(country);
        });
      }
    })
    .catch((error) => console.log(error.message));
};

// getCountryData('italy');
// getCountryData('Usa');
// getCountryData('turkey');
// getCountryData('spain');
// getCountryByCode('tur');
// getCountryAndNeighbours('germany');
// getCountryAndNeighbours('usa');

// async function getNe() {

// }
const f = async () => {
  let response = await fetch(`https://restcountries.eu/rest/v2/name/turkey`);
  console.log(response);
};
f();

const getCountryNeighbourDataAsync = async (country) => {
  try {
    let response = await fetch(
      `https://restcountries.eu/rest/v2/name/${country}`
    );
    console.log(response);

    if (!response.ok)
      throw new Error(`something went wrong (${response.status})`);

    let data = await response.json();

    renderCountry(data[0]);
    // list all neighbours if any
    const neighbours = data[0].borders;
    if (neighbours.length) {
      console.log('neighbours :>> ', ...neighbours);
      neighbours.forEach((neighbour) => {
        getCountryByCode(neighbour);
      });
    }
    response = await fetch(
      `https://restcountries.eu/rest/v2/alpha/${neighbour}`
    );
  } catch (err) {
    console.log(err.message);
  }
};

getCountryNeighbourDataAsync('Bulgaria');