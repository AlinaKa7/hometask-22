
// const combinedArray = monday.concat(tuesday);

// function minutesToHours(array) {
//     return array.map(function (item) {
//         item[1] = item[1] / 60; 
//         return item  
//     }); 
// }

// function filterHours(array) { //цей не спрацьовує
//   return array.filter(function (item) {
//     return item[1] > 2;   
//   }); 
// }

// function addPrice(array) {
//     return array.map(function (item) {
//       item.push(item[1] * amount);   
//       return item;  
//     }); 
//   }

// function renderTable(array) {
//   return array.map(function (item) {
//     return `
//       <table>
//         <tr>
//         <td>Task name: ${item[0]}</td>
//         <td>Task duration: ${item[1]} hours</td>
//         <td>Task amount: $${item[2]}</td>
//         </tr>
//       </table>
//   `}).join('');
// }

// //підкажіть, будь ласка, як це можна зробити простіше
// function doAll(combinedArray) {
//   let result = minutesToHours(combinedArray);
//   let result2 = filterHours(combinedArray);
//   let result3 = addPrice(combinedArray);
//   let result4 = renderTable(combinedArray);
//   return result && result2 && result3 && result4;
// }

// document.write(doAll(combinedArray));