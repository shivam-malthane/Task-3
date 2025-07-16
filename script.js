const requests = [
  { item: 'Paracetamol', quantity: 150, status: 'Pending' },
  { item: 'Thermometer', quantity: 60, status: 'Approved' },
  { item: 'Bandages', quantity: 300, status: 'Delivered' },
];

const stock = [
  { item: 'Syringes', stock: 500 },
  { item: 'Painkillers', stock: 200 },
  { item: 'Antiseptic Lotion', stock: 80 },
];

function populateTable(data, tableId, fields) {
  const table = document.getElementById(tableId);
  table.innerHTML = '';

  data.forEach((row, index) => {
    const tr = document.createElement('tr');

    fields.forEach(field => {
      const td = document.createElement('td');
      td.contentEditable = true;
      td.textContent = row[field];
      td.dataset.index = index;
      td.dataset.field = field;
      tr.appendChild(td);
    });

    table.appendChild(tr);
  });
}

populateTable(requests, 'request-table', ['item', 'quantity', 'status']);
populateTable(stock, 'stock-table', ['item', 'stock']);
