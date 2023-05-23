const elements = [
  {
    number: 1,
    symbol: "H",
    name: "Hydrogen",
    weight: "1.008",
    period: 1,
    group: 1,
  },
  {
    number: 2,
    symbol: "He",
    name: "Helium",
    weight: "4.026",
    period: 1,
    group: 18,
  },
  {
    number: 3,
    symbol: "Li",
    name: "Lithium",
    weight: "6.94",
    period: 2,
    group: 1,
  },
  {
    number: 4,
    symbol: "Be",
    name: "Berylium",
    weight: "9.0122",
    period: 2,
    group: 2,
  },
  {
    number: 5,
    symbol: "B",
    name: "Boron",
    weight: "10.81",
    period: 2,
    group: 3,
  },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    weight: "12.011",
    period: 2,
    group: 4,
  },
];
function createTable() {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (var i = 1; i <= 7; i++) {
    const row = document.createElement("tr");
    for (var j = 1; j <= 18; j++) {
      const cell = document.createElement("td");
      const element = elements.find((e) => e.period === i && e.group === j);
      if (element) {
        cell.textContent = element.symbol;
      } else{
        cell.textContent = '';
        cell.style.border = 'none';
      }
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }
  return table;
}
window.onload = function () {
  const table = createTable();
  document.body.appendChild(table);
};
