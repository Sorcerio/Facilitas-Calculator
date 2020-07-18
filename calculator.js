/*
    Facilitas Calculator
    Calculator Control
    Handles operations of the calculator.
*/

/// Imports

/// Variables

/// Functions
// Builds a section with the specified title and items
// title -> The title of the section
// items -> A dictionary of the items to show and what they add to the input
//  ex: {displayText: 'Text to add to input'}
function buildSection(title, items) {
    // Create the main div container
    var mainContainer = document.createElement('div');

    // Create a p element
    var titleElement = document.createElement('p');
    titleElement.innerHTML = title;

    // Add the p element to the main container
    mainContainer.appendChild(titleElement);

    // Create the options container
    var optionsContainer = document.createElement('ul');

    // Loop through the provided items
    for(const item of Object.keys(items)) {
        // Create a list element
        var optionElement = document.createElement('li');
        optionElement.innerHTML = item;

        // TODO: Add click listener to add to the current input

        // Add to the options container
        optionsContainer.appendChild(optionElement);
    }

    // Add to the main div container
    mainContainer.appendChild(optionsContainer);

    // Add the main container to the page
    document.getElementById('choiceItems').appendChild(mainContainer);
}

// Creates a new calculation input
function createNewInput() {
    // Create the input container element
    var container = document.createElement('li');

    // Create the hide span
    var spanHide = document.createElement('span');
    spanHide.classList.add('hide');

    // Add the hide span
    container.appendChild(spanHide);

    // Create the text input
    var textInput = document.createElement('input');
    textInput.setAttribute('type', 'text');
    textInput.setAttribute('value', '');
    textInput.setAttribute('placeholder', '...');

    // Add input listener
    textInput.addEventListener('input', resizeInputWithThis);

    // Add the input to the container
    container.appendChild(textInput);

    // Create the output span
    var spanOutput = document.createElement('span');
    spanOutput.innerHTML = 'No Input';
    spanOutput.classList.add('output');
    spanOutput.classList.add('err');

    // Add the output span
    container.appendChild(spanOutput);

    // Add the input to the page
    document.getElementById('equations').appendChild(container);

    // Resize to fit the starting size
    resizeInput(textInput);
}

// Calls the resize with 'this' as a target
function resizeInputWithThis() {
    // Call the other function
    resizeInput(this);
}

// Calls the resize with the provided target
function resizeInput(target) {
    console.log(target, target.previousElementSibling);
}

/// Setup Function
// Function that sets up the calculator
function setup() {
    // Populate the sections
    buildSection('Trigonometry', {
        sin: 'optionA',
        cos: 'optionB',
        tan: 'optionC',
        sec: 'optionD',
        csc: 'optionE',
        cot: 'optionF',
    });

    // TODO: Add click events to the numpad grid buttons to add to the current input

    // Create a new equation input
    createNewInput();

    // TODO: Begin watching the input to calculate per change

    // TODO: Add listeners to Enter Grid Button and Enter Key to finish current input
        // TODO: Move old input up to a stagnant display (with a click listener to copy result?)
        // TODO: Create new input (as above)
}

// Setup the calculator
setup();