/**
 * Creates an element.
 * @param {string} element - Tag Name
 * @param {string} [className] - CSS class name
 * @param {string} [textContent] - Optional content
 * @returns {Element}
 */
export function block (element = "div", className,  textContent) {
    let el = document.createElement(element || "div");
    if (className) el.className = className;
    if (textContent) el.textContent = textContent;
    return el;
}

export function insertAfter (elem, refElem) {
    return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

export function prepend (element, container) {
    if (container.firstChild) {
        container.insertBefore(element, container.firstChild);
    } else {
        container.appendChild(element);
    }
}

export function clearSelection () {
    if (window.getSelection)
        window.getSelection().removeAllRanges();
    else if (document.selection)
        document.selection.empty();
}