/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

function permutations(array) {
  if (array.length <= 1) {
    return [array];
  }

  const [first, ...rest] = array;
  const perms = permutations(rest);
  const result = [];

  perms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      const copy = [...perm];
      copy.splice(i, 0, first);
      result.push(copy);
    }
  });

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
