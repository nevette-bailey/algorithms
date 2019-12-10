//make an array for each region with all of the parent regions, pushing them in from smallest to largest including the original region
//iterate through the array for one region to see if the other includes it? if it does, return the region.

//attempt with parent/children
function findSmallestRegion(regions, region1, region2) {
  const map = new Map();
  for (let i = 0; i < regions.length; i++) {
    if (Array.isArray(regions[i])) {
      map.set(regions[i][0], []);
      for (let j = 1; j < regions[i].length; j++) {
        map.set(regions[i][0], [...map.get(regions[i][0]), regions[i][j]]);
      }
    }
  }

  function getParent(region, map) {
    let parents = [];
    for (const [key, value] of map.entries()) {
      if (value.includes(region)) {
        parents.push(key);
        parents.push(...getParent(key, map));
      }
    }
    return parents;
  }

  let region1Parents = [];
  let region2Parents = [];
  let matchingRegion = '';

  region1Parents.push(region1);
  region1Parents.push(...getParent(region1, map));

  region2Parents.push(region2);
  region2Parents.push(...getParent(region2, map));

  for (let i = 0; i < region1Parents.length; i++) {
    if (region2Parents.includes(region1Parents[i])) {
      matchingRegion = region1Parents[i];
      break;
    }
  }

  return matchingRegion;
}

const regions = [
  ['Earth', 'North America', 'South America'],
  ['North America', 'United States', 'Canada'],
  ['United States', 'New York', 'Boston'],
  ['Canada', 'Ontario', 'Quebec'],
  ['South America', 'Brazil']
];

console.log(
  'North America?',
  findSmallestRegion(regions, 'Quebec', 'New York')
);
console.log(
  'North America?',
  findSmallestRegion(regions, 'Canada', 'New York')
);
console.log('Earth?', findSmallestRegion(regions, 'South America', 'New York'));
console.log(
  'United States?',
  findSmallestRegion(regions, 'Boston', 'New York')
);

// initial attempt - naive solution, doesn't work for regions on different levels
// function findSmallestRegion(regions, region1, region2) {
//   let map = new Map();
//   for (let i = 0; i < regions.length; i++) {
//     if (Array.isArray(regions[i])) {
//       map.set(regions[i][0], []);
//       for (let j = 1; j < regions[i].length; j++) {
//         map.set(regions[i][0], [...map.get(regions[i][0]), regions[i][j]]);
//       }
//     }
//   }

//   let firstRegion = region1;
//   let secondRegion = region2;
//   function iterate() {
//     map.forEach((value, key) => {
//       if (value.includes(firstRegion)) {
//         firstRegion = key;
//       }
//       if (value.includes(secondRegion)) {
//         secondRegion = key;
//       }
//     });
//   }
//   while (firstRegion !== secondRegion) {
//     // let first = map.get(firstRegion);
//     // console.log('first', first);
//     if (map.get(firstRegion) && map.get(firstRegion).includes(secondRegion)) {
//       return firstRegion;
//     } else if (
//       map.get(secondRegion) &&
//       map.get(secondRegion).includes(firstRegion)
//     ) {
//       return secondRegion;
//     } else {
//       iterate();
//     }
//   }
//   return firstRegion;
// }
