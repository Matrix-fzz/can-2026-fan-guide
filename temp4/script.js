
document.addEventListener('DOMContentLoaded', () => {
    const cityData = {
        'Agadir': {
            image: 'https://images.unsplash.com/photo-1597157639073-690243a3a292?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWdhZGlyfGVufDB8fDB8fHww',
            teams: ['Nigeria', 'South Africa', 'Benin', 'Botswana'],
            stadium: 'Stade Adrar', stadium_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Stade_d%27Agadir_-_Vue_int%C3%A9rieure.jpg/1280px-Stade_d%27Agadir_-_Vue_int%C3%A9rieure.jpg',
            hotels: [ { name: 'Hotel Riu Tikida Dunas', description: 'All-inclusive resort with beachfront access.' }, { name: 'Sofitel Agadir Thalassa Sea & Spa', description: 'Luxury hotel with a private beach and thalassotherapy center.' } ],
            restaurants: [ { name: 'Le Mauresque', description: 'Offers creative Moroccan dishes in a beautiful setting.' }, { name: 'Pure Passion', description: 'Fine dining with views of the marina.' } ],
            transportation: [ { type: 'Buses', info: 'Operated by ALSA, covering the city and surrounding areas.' }, { type: 'Petit Taxis', info: 'Orange taxis for city trips, metered.' }, { type: 'Grand Taxis', info: 'Shared taxis for longer distances, fixed fares.' } ]
        },
        'Casablanca': {
            image: 'https://images.unsplash.com/photo-1558801733-56d19a36831b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FzYWJsYW5jYXxlbnwwfHwwfHx8MA%3D%3D',
            teams: ['Morocco', 'Gabon', 'Comoros', 'Lesotho'],
            stadium: 'Stade Mohammed V', stadium_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Stade_Mohamed_V%2C_Casablanca.jpg/1920px-Stade_Mohamed_V%2C_Casablanca.jpg',
            hotels: [ { name: 'Four Seasons Hotel Casablanca', description: 'Luxury hotel with ocean views and direct access to the beach.' }, { name: 'Barceló Anfa Casablanca', description: 'Modern hotel in the city center with a rooftop pool.' } ],
            restaurants: [ { name: 'Rick\'s Café', description: 'Famous restaurant designed to recreate the bar from the movie "Casablanca".' }, { name: 'La Sqala', description: 'Historic fortress restaurant serving traditional Moroccan food.' } ],
            transportation: [ { type: 'Tramway', info: 'A modern tram system with two lines serving key areas.' }, { type: 'Petit Taxis', info: 'Red taxis for city trips, make sure the meter is on.' }, { type: 'Buses', info: 'An extensive network, though can be crowded.' } ]
        },
        'Fez': {
            image: 'https://images.unsplash.com/photo-1588509376912-8898f0695197?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmV6fGVufDB8fDB8fHww',
            teams: ['Algeria', 'Equatorial Guinea', 'Togo', 'Ethiopia'],
            stadium: 'Fez Stadium', stadium_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Stade_de_F%C3%A8s_vu_des_tribunes.jpg/1280px-Stade_de_F%C3%A8s_vu_des_tribunes.jpg',
            hotels: [ { name: 'Riad Fes - Relais & Châteaux', description: 'Luxurious riad in the heart of the medina with traditional architecture.' }, { name: 'Hotel Sahrai', description: 'A contemporary hotel with panoramic views of the medina.' } ],
            restaurants: [ { name: 'Café Clock', description: 'A cultural hub known for its camel burger and cooking classes.' }, { name: 'The Ruined Garden', description: 'A beautiful garden restaurant serving traditional Moroccan cuisine.' } ],
            transportation: [ { type: 'Buses', info: 'Local buses connect the new city (Ville Nouvelle) with the old city (Fes el-Bali).' }, { type: 'Petit Taxis', info: 'Red taxis are common for getting around the city.' }, { type: 'On Foot', info: 'The best way to explore the narrow streets of the Medina.' } ]
        },
        'Marrakesh': {
            image: 'https://images.unsplash.com/photo-1559922199-31c53b29a27c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFycmFrZXNofGVufDB8fDB8fHww',
            teams: ['Senegal', 'DR Congo', 'Sudan', 'Somalia'],
            stadium: 'Marrakesh Stadium', stadium_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Grand_Stade_de_Marrakech_2013-12-21.jpg/1920px-Grand_Stade_de_Marrakech_2013-12-21.jpg',
            hotels: [ { name: 'La Mamounia', description: 'A world-renowned luxury palace hotel with beautiful gardens.' }, { name: 'Riad Kniza', description: 'An intimate and luxurious riad in the medina.' } ],
            restaurants: [ { name: 'Nomad', description: 'Modern Moroccan cuisine with a rooftop terrace overlooking the Spice Square.' }, { name: 'Le Foundouk', description: 'Chic restaurant offering Moroccan and international dishes.' } ],
            transportation: [ { type: 'Petit Taxis', info: 'Beige taxis for in-city travel. Always ask for the meter.' }, { type: 'Horse-drawn Carriages (Calèches)', info: 'A scenic way to see the city\'s landmarks.' }, { type: 'Buses', info: 'An efficient network, including an airport express bus.' } ]
        },
        'Rabat': {
            image: 'https://images.unsplash.com/photo-1620712711319-f79a951c1175?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFiYXR8ZW58MHx8MHx8fDA%3D',
            teams: ['Egypt', 'Cameroon', 'Zimbabwe', 'Namibia'],
            stadium: 'Prince Moulay Abdellah Stadium', stadium_image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Stade_Moulay_Abdellah_en_2014.jpg/1920px-Stade_Moulay_Abdellah_en_2014.jpg',
            hotels: [ { name: 'The View Hotel', description: 'A modern hotel with panoramic views of the city.' }, { name: 'Riad Kalaa', description: 'A restored riad in the medina with a pool and spa.' } ],
            restaurants: [ { name: 'Dinarjat', description: 'Traditional Moroccan fine dining in an old palace.' }, { name: 'Le Dhow', description: 'A restaurant and lounge on a boat on the Bouregreg River.' } ],
            transportation: [ { type: 'Tramway', info: 'Two lines connecting Rabat and its sister city, Salé.' }, { type: 'Petit Taxis', info: 'Blue taxis for getting around Rabat.' }, { type: 'Buses', info: 'A comprehensive bus network operated by ALSA.' } ]
        },
        'Tangier': {
            image: 'https://images.unsplash.com/photo-1590423612502-39c4a8ddb16e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&id=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFuZ2llcnxlbnwwfHwwfHx8MA%3D%3D',
            teams: ['Tunisia', 'Mali', 'Zambia', 'Chad'],
            stadium: 'Ibn Batouta Stadium', stadium_image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Stade_Ibn_Batouta_-_Tangier.jpg',
            hotels: [ { name: 'Hilton Tangier City Center & Residences', description: 'Modern hotel connected to a shopping mall and near the train station.' }, { name: 'El Minzah Hotel', description: 'Historic 5-star hotel with views of the bay.' } ],
            restaurants: [ { name: 'Le Salon Bleu', description: 'Charming restaurant in the Kasbah with sea views.' }, { name: 'Restaurant Le Saveur du Poisson', description: 'Famous for its fixed-menu fish dinners.' } ],
            transportation: [ { type: 'Petit Taxis', info: 'Light blue taxis for city trips.' }, { type: 'Buses', info: 'The main public transport, operated by Alsa.' }, { type: 'On Foot', info: 'Many of the attractions in the Medina and Kasbah are best explored on foot.' } ]
        }
    };

    const slider = document.querySelector('.slider');
    const citiesSection = document.getElementById('cities-section');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // --- Slider ---
    let slideIndex = 0;
    const slides = Object.values(cityData).map(data => `
        <div class="slide">
            <img src="${data.stadium_image}" alt="${data.stadium}">
            <div class="slide-details">
                <h3>${data.stadium}</h3>
                <p>Featuring Teams like ${data.teams[0]} & ${data.teams[1]}</p>
            </div>
        </div>
    `).join('');
    slider.innerHTML = slides;
    const allSlides = document.querySelectorAll('.slide');
    
    document.querySelector('.next').addEventListener('click', () => {
        slideIndex = (slideIndex + 1) % allSlides.length;
        updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', () => {
        slideIndex = (slideIndex - 1 + allSlides.length) % allSlides.length;
        updateSlider();
    });

    function updateSlider() {
        slider.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    // --- City Card Creation ---
    function createCityCard(city, data) {
        const card = document.createElement('div');
        card.className = 'city-card';
        card.innerHTML = `
            <div class="card-header">
                <img src="${data.image}" alt="${city}">
                <h3>${city}</h3>
            </div>
            <div class="card-body">
                <nav class="info-tabs">
                    <button class="tab-btn active" data-tab="hotels"><i class="fas fa-hotel"></i> Hotels</button>
                    <button class="tab-btn" data-tab="restaurants"><i class="fas fa-utensils"></i> Restaurants</button>
                    <button class="tab-btn" data-tab="transport"><i class="fas fa-bus"></i> Transport</button>
                </nav>
                <div id="hotels" class="tab-content active">
                    ${data.hotels.map(h => `<div class="info-item"><i class="fas fa-bed"></i><div class="item-details"><h5>${h.name}</h5><p>${h.description}</p></div></div>`).join('')}
                </div>
                <div id="restaurants" class="tab-content">
                    ${data.restaurants.map(r => `<div class="info-item"><i class="fas fa-concierge-bell"></i><div class="item-details"><h5>${r.name}</h5><p>${r.description}</p></div></div>`).join('')}
                </div>
                <div id="transport" class="tab-content">
                    ${data.transportation.map(t => `<div class="info-item"><i class="fas fa-route"></i><div class="item-details"><h5>${t.type}</h5><p>${t.info}</p></div></div>`).join('')}
                </div>
            </div>
        `;

        // Tab functionality
        const tabButtons = card.querySelectorAll('.tab-btn');
        const tabContents = card.querySelectorAll('.tab-content');
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                tabContents.forEach(content => {
                    content.classList.remove('active');
                    if (content.id === button.dataset.tab) {
                        content.classList.add('active');
                    }
                });
            });
        });

        return card;
    }

    // --- Display Logic ---
    function displayCities(filter = '') {
        citiesSection.innerHTML = '';
        const query = filter.trim().toLowerCase();
        let hasResults = false;

        Object.entries(cityData).forEach(([city, data]) => {
            const teams = data.teams.map(t => t.toLowerCase());
            if (city.toLowerCase().includes(query) || teams.some(t => t.includes(query))) {
                citiesSection.appendChild(createCityCard(city, data));
                hasResults = true;
            }
        });

        if (!hasResults) {
            citiesSection.innerHTML = `<p>No results found for "${filter}". Showing all cities instead.</p>`;
            displayCities(); // show all if no results
        }
    }

    // Initial display of all cities (default results)
    displayCities();

    // Search event
    searchButton.addEventListener('click', () => {
        displayCities(searchInput.value);
    });
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            displayCities(searchInput.value);
        } else if (searchInput.value.trim() === '') {
            displayCities(); // reset to default if search is cleared
        }
    });
});