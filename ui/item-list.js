const ItemList = function(/*
  options : { selector: string, 
    createRow: function [returns: Element], 
    title?: string
   }*/options ) {

  const listElement;
  if(! options.selector) {
    console.error(`Items list needs selector parameter passed within options...`);
    return null;
  }
  if(! options.createRow) {
    console.error(`createRow function must be overrided...`);
    return null;
  }

  const selector = options.selector,
  title = options.title;
   
  this.create = function(options) {
    const parent = document.querySelector(selector);
    if(parent){
      const itemList, listHeader;
      itemList = document.createElement("div");
      listHeader = document.createElement("p");
      listHeader.innerHTML =  `<p>${options.title || 'Items List'}</p>`;
      itemList.appendChild(listHeader);
      itemList.className = "item-list container";     
      parent.appendChild(itemList);
      listElement = itemList;
    }
    else {
      console.error(`element pointed by selector ${selector} does not exists...`);
    }
  }

  //to override
  const createRow = function (data) {
    return null;
  }

  this.clearRows = function () {
    const rowsSelector = `${selector} .item-row`;
    const rows = document.querySelector(rowsSelector);
    rows.forEach(function(row) {
      row.remove();
    });
  }

  this.addRow = function (data) {
    const rowHtml = this.createRow(data);
    if(!rowHtml || !rowHtml instanceof Element){
      console.warn('createRow function is not overrided, wrong or returns no valid html, item-list does not know how row is supposed to look...');
      rowHtml = document.createElement("div");
    }
    rowHtml.classList.add('item-row');
    listElement.appendChild(rowHtml);
  }
};
