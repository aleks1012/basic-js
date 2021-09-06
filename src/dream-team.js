import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
  return false;
 }
 const arr = [];
  for (const item of members) {
    if (typeof(item) === 'string') {
      if (item[0] === ' ') {
        let i = 1;
        while (item[i] === ' ') {
          i+= 1;
        }
        const letter = item[i].toUpperCase();
        arr.push(letter);
      }
      const letter = item[0].toUpperCase();
        arr.push(letter);
    }
  }
  if (arr.length === 0) {
    return false;
  }
  const sortedArr = arr.sort();
  /*if (arr.sort()[0] === ' ') {
    return arr.sort().shift.join('');
  }*/
  return sortedArr.join('').trim();
}
