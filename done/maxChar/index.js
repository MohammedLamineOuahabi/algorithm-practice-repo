// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  // let arr = str.split('');
  // let len = arr.length;
  // let maxCounter = 0;
  // let maxPosition = 0;
  // for (let i = 0; i < len; i++) {
  //   k = 0;
  //   for (let j = 0; j < len; j++) {
  //     if (arr[i] == arr[j]) k++;
  //   }
  //   if (k > maxCounter) {
  //     maxCounter = k;
  //     maxPosition = i;
  //   }
  // }
  // return arr[maxPosition];
  //******************************************** */
  // More efficient way
  let arr = str.split('');
  let len = arr.length;
  let maxCounter = 0;
  let maxPosition = 0;
  let maxArr = {};
  for (let i = 0; i < len; i++) {
    k = 0;
    maxArr[arr[i]] = maxArr[arr[i]] + 1 || 1;

    if (maxArr[arr[i]] > maxCounter) {
      maxCounter = maxArr[arr[i]];
      maxPosition = i;
    }
  }
  return arr[maxPosition];
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup('bdd');
const { assert } = chai;

describe('Max Character', () => {
  it('maxChar() finds the most frequently used character', () => {
    assert.equal(maxChar('a'), 'a');
    assert.equal(maxChar('test'), 't');
    assert.equal(maxChar('I loveeeeee noodles'), 'e');
    assert.equal(maxChar('1337'), '3');
  });
});

mocha.run();
