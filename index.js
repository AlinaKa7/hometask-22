const amount = 100;
const monday = [
  ['Write a tutorial',180],
  ['Some web development',120]
];
const tuesday = [
  ['Keep writing that tutorial',240],
  ['Some more web development',360],
  ['A whole lot of nothing',240]
];

const combinedArray = monday.concat(tuesday);

function minutesToHours(array) {
    return array.map(function (item) {
        item[1] = item[1] / 60; 
        return item  
    }); 
}

function filterHours(array) {
  return array.filter(function (item) {
    return item[1] > 2;   
  }); 
}

function addPrice(array) {
    return array.map(function (item) {
      item.push(item[1] * amount);   
      return item;  
    }); 
  }

function renderTable(array) {
  return array.map(function (item) {
    return `
      <table>
        <tr>
        <td>Task name: ${item[0]}</td>
        <td>Task duration: ${item[1]} hours</td>
        <td>Task amount: $${item[2]}</td>
        </tr>
      </table>
  `}).join('');
}

let resultOne = minutesToHours(combinedArray);
let resultTwo = filterHours(resultOne);
let resultThree = addPrice(resultTwo);
let resultFour = renderTable(resultThree);

document.write(resultFour);