const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList (list1, list2){
  let array = [];
  for (let i = 0; i < list1.length; i++) {
    array.push(list1[i]);
    array.push(list2[i]);
  }
  return array;
}
console.log(zipList(listA, listB));

function zipListTheSimpleWay (list1, list2){
  let string = _.zip(list1, list2);
  return _.flatten(string);
}
console.log(zipListTheSimpleWay(listA, listB));