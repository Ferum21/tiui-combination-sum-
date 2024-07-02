/**
 * @param {number[]} candidates - candidate numbers we're picking from.
 * @param {number} remainingSum - remaining sum after adding candidates to currentCombination.
 * @param {number[][]} finalCombinations - resulting list of combinations.
 * @param {number[]} currentCombination - currently explored candidates.
 * @param {number} startFrom - index of the candidate to start further exploration from.
 * @return {number[][]}
 */

const combinationSumRecursive = (candidates, remainingSum, currentCombination, finalCombinations, startFrom) => {
  //If the remainingSum equals 0, it means that a solution was found.
  if (remainingSum == 0) {
    //Add a copy to the final solutions array and return it.
    finalCombinations.push(currentCombination.slice())
    return finalCombinations
  }

  for (let i = startFrom; i < candidates.length; i++) {
    //If the candidate number its greater than the remaining sum, it means that it isnt a valid candidate, move on to the next iteration.
    if (remainingSum < candidates[i]) {
      continue
    }
    //Add the current candidate number to the current solution array.
    currentCombination.push(candidates[i])
    //Then, callback the recursive function with the modified values of the remaining sum, final combinations, current combination and the start point of search.
    combinationSumRecursive(candidates, remainingSum - candidates[i], currentCombination, finalCombinations, i)
    //Remove the last candidate number of the current solution array in order to try all the different paths available.
    currentCombination.pop()
  }
}

/**
 * Backtracking algorithm of finding all possible combination for specific sum.
 *
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = (candidates, target) => {
  let finalCombinations = []
  combinationSumRecursive(candidates, target, [], finalCombinations, 0);
  return finalCombinations
}

module.exports = combinationSum;