// JavaScript
var imgZoomElements = document.querySelectorAll('.img-zoom');

imgZoomElements.forEach(function(element) {
  element.addEventListener('mouseenter', function() {
    element.style.transform = 'scale(1.1)';
  });

  element.addEventListener('mouseleave', function() {
    element.style.transform = 'scale(1.0)';
  });
});



// Agregar un nuevo evento para mostrar/ocultar elementos al hacer clic
var showHideButton = document.getElementById('show-hide-button');
var elementToToggle = document.getElementById('element-to-toggle');

if (showHideButton !== null && elementToToggle !== null) {
  showHideButton.addEventListener('click', function() {
    if (elementToToggle.style.display === 'none') {
      elementToToggle.style.display = 'block';
    } else {
      elementToToggle.style.display = 'none';
    }
  });
}

// Agregar evento para mostrar u ocultar descripciones al hacer clic en "Leer más"
var readMoreButtons = document.querySelectorAll('.read-more-button');

readMoreButtons.forEach(function(button) {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        var description = button.nextElementSibling;
        if (description.classList.contains('hidden')) {
            description.classList.remove('hidden');
            button.textContent = 'Leer menos';
        } else {
            description.classList.add('hidden');
            button.textContent = 'Leer más';
        }
    });
});

var menuButton = document.getElementById('menu-button');
var menu = document.getElementById('menu');

// Agregar evento para mostrar/ocultar el menú al hacer clic en el botón
if (menuButton !== null && menu !== null) {
    menuButton.addEventListener('click', function() {
        if (menu.style.display === 'block') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        }
    });
}


var destinos = document.querySelectorAll('.card');

// Función para mostrar solo los destinos de una categoría
function filterDestinations(category) {
    destinos.forEach(function (destino) {
        // Verificar si el destino tiene la clase de la categoría seleccionada
        if (destino.classList.contains(category)) {
            destino.style.display = 'block'; // Mostrar el destino
        } else {
            destino.style.display = 'none'; // Ocultar el destino
        }
    });
}

// Función para mostrar todos los destinos
function showAllDestinations() {
    destinos.forEach(function (destino) {
        destino.style.display = 'block'; // Mostrar todos los destinos
    });
}

// Función para filtrar destinos por categoría y tipo
function filterDestinations(category, type) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        const cardType = card.getAttribute('data-type');

        const showCard = (category === 'all' || cardCategory === category) && (type === 'all' || cardType === type);
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Función para mostrar todos los destinos
function showAllDestinations() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.display = 'block';
    });
}


function filterDestinations(category) {
    // Código existente para filtrar por categoría
    
    // Añade la lógica de búsqueda
    var searchInput = document.getElementById('search').value.toLowerCase();

    // Filtra los destinos según la búsqueda
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        var destinationName = cards[i].querySelector('h3').innerText.toLowerCase();
        var destinationData = cards[i].getAttribute('data-destination');
        if ((destinationName.includes(searchInput) || destinationData.includes(searchInput)) && (category === 'all' || destinationData === category)) {
            cards[i].style.display = 'block';
        } else {
            cards[i].style.display = 'none';
        }
    }
}

function filterDestinationsBySearch() {
    // Obtener el valor de búsqueda
    var searchTerm = document.getElementById("search").value.toLowerCase();

    // Obtener todos los destinos
    var destinations = document.querySelectorAll(".card.img-zoom");

    // Iterar sobre los destinos
    destinations.forEach(function(destination) {
        // Obtener el nombre del destino
        var destinationName = destination.querySelector("h3").innerText.toLowerCase();

        // Verificar si el destino coincide con la búsqueda
        var matchesSearch = destinationName.includes(searchTerm);

        // Mostrar u ocultar el destino según la coincidencia
        destination.style.display = matchesSearch ? "block" : "none";

        // Hacer scroll al destino si es una coincidencia
        if (matchesSearch) {
            destination.scrollIntoView({ behavior: "smooth" });
        }
    });
}
function filterDestinos() {
    var category = document.getElementById("category").value;
    var type = document.getElementById("type").value;

    var cards = document.querySelectorAll(".card");

    cards.forEach(function(card) {
        var cardCategory = card.getAttribute("data-category");
        var cardType = card.getAttribute("data-type");

        if ((category === "all" || cardCategory === category) && (type === "all" || cardType === type)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
