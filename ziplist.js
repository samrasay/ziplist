/**
 * Created ziplist.
 * Created by samrasay on 2/6/17.
 */

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList (list1, list2) {
  const newList = [];
  for (let i = 0; i < list1.length; i++) {
    newList.push(list1[i], list2[i]);
  }

  return newList;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(list1, list2));