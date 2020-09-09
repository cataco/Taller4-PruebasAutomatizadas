describe('Wikipedia under monkeys', function () {
    it.skip('visits wikipedia and survives monkeys', function () {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        cy.wait(1000);
        randomClick(10);
    });

    it('visits wikipedia and survives monkeys random events', function () {
        cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada');
        cy.wait(1000);
        randomEvent(10);
    });

})
function randomEvent(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };
    var randomeEventId = getRandomInt(1, 5);
    console.log("EVENT");
    console.log(randomeEventId);
    var monkeysLeft = monkeysLeft;
    if (monkeysLeft > 0) {
        switch (randomeEventId) {
            case 1: // click on random link
                cy.get('a').then($links => {
                    var randomLink = $links.get(getRandomInt(0, $links.length));
                    if (!Cypress.dom.isHidden(randomLink)) {
                        console.log("MONKEYYY 1");
                        cy.wrap(randomLink).click({ force: true });
                        monkeysLeft = monkeysLeft - 1;
                    }
                    cy.wait(500);
                    randomEvent(monkeysLeft);
                });
                break;
            case 2: // type in random field
                cy.get('input').then($inputs => {
                    var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
                    if (!Cypress.dom.isHidden(randomInput)) {
                        cy.wrap(randomInput).type("Moneky Test", { force: true });
                        monkeysLeft = monkeysLeft - 1;
                    }
                    cy.wait(500);
                    randomEvent(monkeysLeft);
                });
                break;
            case 3: // click on random button
                cy.get('.mw-ui-button').then($buttons => {
                    var randomButton = $buttons.get(getRandomInt(0, $buttons.length));
                    if (!Cypress.dom.isHidden(randomButton)) {
                        console.log("MONKEYYY 4");
                        cy.wrap(randomButton).click({ force: true });
                        monkeysLeft = monkeysLeft - 1;
                    }
                    cy.wait(500);
                    randomEvent(monkeysLeft);
                });
                break;
            case 4: // click on random option
                cy.get('div[role="option"]').then($options => {
                    var randomOption = $inputs.get(getRandomInt(0, $options.length));
                    if (!Cypress.dom.isHidden(randomOption)) {
                        console.log("MONKEYYY 3");
                        cy.wrap(randomOption).type("Moneky Test", { force: true });
                        monkeysLeft = monkeysLeft - 1;
                    }
                    cy.wait(1000);
                    randomEvent(monkeysLeft);
                });
                break;
        }
    }
}

function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if (monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if (!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({ force: true });
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(500);
            randomClick(monkeysLeft);
        });
    }
}