const ItemList = require('./ui/item-list');
const { createOrderRow } = require('./ui/order-list-item');
const DataService = require('./service');

const list = new ItemList({
  selector: '#orders-list',
  createRow: createOrderRow,
  title: 'Orders list',
});
list.create();

const service = new DataService();

const onOrdersLoaded = function(response) {
  const { orders } = response;
  list.clearRows();
  orders.forEach(function(order) {
    list.addRow(order);
  });
};

const onOrdersLoadError = function(response) {};

const loadBtn = document.getElementById('load-list');
loadBtn.addEventListener('click', function() {
  service.paggingSupport.getOrders(
    {
      page: 1,
      itemsOnPage: 5,
      archivedToo: true,
    },
    onOrdersLoaded,
    onOrdersLoadError,
  );
});
