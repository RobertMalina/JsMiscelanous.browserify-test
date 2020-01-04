const ItemList = function(
  /*
  options : { selector: string, 
    createRow: function [returns: Element], 
    title?: string
   }*/ options,
) {
  let listElement;

  //to override
  let createRow = function(data) {
    return null;
  };

  if (!options.selector) {
    console.error(
      `Items list needs selector parameter passed within options...`,
    );
    return null;
  }
  if (!options.createRow) {
    console.error(`createRow function must be overrided...`);
    return null;
  }

  createRow = options.createRow;

  const selector = options.selector,
    title = options.title || 'Items List';

  this.create = function(options) {
    const parent = document.querySelector(selector);
    if (parent) {
      const itemList = document.createElement('div');

      const listHeader = document.createElement('p');
      listHeader.innerHTML = `<p>${title}</p>`;
      itemList.appendChild(listHeader);
      itemList.className = 'item-list container';

      const rowsContainer = document.createElement('div');
      rowsContainer.classList.add('rows-container');
      itemList.appendChild(rowsContainer);

      parent.appendChild(itemList);
      listElement = itemList;
    } else {
      console.error(
        `element pointed by selector ${selector} does not exists...`,
      );
    }
  };

  this.clearRows = function() {
    const rowsSelector = `${selector} .item-row`;
    const rows = document.querySelectorAll(rowsSelector);
    rows.forEach(row => {
      row.remove();
    });
  };

  this.addRow = function(data) {
    const rowHtml = createRow(data);
    if (!rowHtml || !rowHtml instanceof Element) {
      console.warn(
        'createRow function is not overrided, wrong or returns no valid html, item-list does not know how row is supposed to look...',
      );
      rowHtml = document.createElement('div');
    }
    rowHtml.classList.add('item-row');
    listElement.appendChild(rowHtml);
  };
};

module.exports = ItemList;
