/*
Given a search tree and a target, return the path through the tree to the target as an array of node values.
               A
              / \
             B   C
            / \ / \
           D  E F  G
          /
         H
 */

const unsortedTree = {
  value: 'A',
  left: {
    value: 'B',
    left: {
      value: 'D',
      left: {
        value: 'H',
        left: null,
        right: null
      },
      right: null
    },
    right: {
      value: 'E',
      left: null,
      right: null
    }
  },
  right: {
    value: 'C',
    left: {
      value: 'F',
      left: null,
      right: null
    },
    right: {
      value: 'G',
      left: null,
      right: null
    }
  }
};

function findPath(tree, target) {
  let path = [];
  if (tree.value === target) {
    path.push(tree.value);
  } else {
    if (tree.left) {
      let left = findPath(tree.left, target);
      if (left.length) {
        path.push(tree.value);
        path.push(...left);
      }
    }
    if (tree.right) {
      let right = findPath(tree.right, target);
      if (right.length) {
        path.push(tree.value);
        path.push(...right);
      }
    }
  }
  return path;
}

console.log(findPath(unsortedTree, 'F'));
console.log(findPath(unsortedTree, 'A'));
console.log(findPath(unsortedTree, 'H'));
