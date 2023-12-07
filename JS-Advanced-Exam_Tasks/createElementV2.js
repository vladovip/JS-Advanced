function createElement(tagName, textContent, attributes, children = []) {

    // Създаваме елемент от подадения тип.
            const element = document.createElement(tagName);
    
    // Създаваме речник (обект) с възможните атрибути. Използваме arrow функции, за да предадем стойността на атрибута, ако има такава. При нужда, може да се добавят нови ентрита в речника.
            const PARAMS = {
                class: (value) => element.classList.add(value),
                id: (value) => (element.id = value),
                onclick: (value) => element.addEventListener('click', value),
                disabled: () => element.setAttribute('disabled', ''),
                src: (value) => element.setAttribute('src', value),
            };
    
    // Проверяваме дали има подаден textContent, ако има го сетваме на елемента.
            if (textContent) {
                element.textContent = textContent;
            }
    
    // Проверяваме дали има подадени атрибути (подават се като обект). Ако има, преобразуваме обекта в масив от масиви, обхождаме го и повикваме съответната функция от речника, за да сетне атрибута.
            if (attributes) {
                Object.entries(attributes).forEach(([param, value]) => PARAMS[param](value));
            }
    
    // Проверяваме дали има подадени деца (подават се като масив), (Нестнато създаване на елементи, виж примера долу). Ако няма, връщаме елемента.
            if (children.length == 0) {
                return element;
            }
    
    // Ако има подадени деца, обхождаме масива и всяко дете, добавяме към елемента.
            children.forEach((c) => element.appendChild(c));
    
            return element;
        }
    
    // Пример за използване:
    const divContainer = createElement('div', null, { class: 'container', onclick: onRepair }, 
            [
                createElement('h2', `Product type for repair: ${productType}`),
                createElement('h3', `Client information: ${clientName}, ${clientPhone}`),
                createElement('h4', `Description of the problem: ${description}`),
                createElement('button', 'Start repair', { class: 'start-btn' }),
                createElement('button', 'Finish repair', { class: 'finish-btn', disabled: true }),
            ]
    );