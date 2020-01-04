const createRow = function(
  /*{
    [must haves]:
    title: string,
    vehicleDescription: string,
    dateRegister: Date,
    supervisor: {
      firstName: string,
      lastName: string,
      phoneNumber: string
    }
    ...
  }*/
  data) {
  const { title, vehicleDescription, dateRegister, supervisor } = data;
  const row, header, subHeader, supervisorData;
  row = document.createElement("div");
  row.classList.add('order-item-row');
  header = document.createElement("p");
  header.innerHTML = `<i>${title}</i> ${dateRegister}`
  header.classList.add('header-l');
  subHeader = document.createElement("p");
  subHeader.innerHTML = `${vehicleDescription}`;
  subHeader.classList.add('header-m');
  supervisorData = document.createElement("div");
  supervisorData.classList.add('supervisor-data');
  supervisorData.innerHTML = `<p>${supervisor.firstName} ${supervisor.lastName}</p>`;
  supervisorData.innerHTML += `<p>${supervisor.phoneNumber}</p>`;
  
  row.appendChild(header);
  row.appendChild(subHeader);
  row.appendChild(supervisorData);
  return row;
};

module.exports = {
  createOrderRow : createRow
};