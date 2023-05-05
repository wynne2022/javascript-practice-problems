// 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

function reverse(input) {
    if (input >= 0) {
        var sign = 1;
    } else {
        var sign = -1;
        input *= -1;
    }
    var result = 0;
    while (input > 0) {
        result *= 10;
        remain = input % 10;
        input = (input - remain) / 10;
        result += remain;
    }
    return sign * result;
}

console.log("------problem 1------");
console.log(reverse(0));
console.log(reverse(1));
console.log(reverse(1122));
console.log(reverse(12345));
console.log(reverse(-1));
console.log(reverse(-1122));
console.log(reverse(-12345));

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(input) {
    var len = input.length;
    for (let i = 0; i < len / 2; i++) {
        if (input[i] != input[len - 1 - i])
            return false;
    }
    return true;
}

console.log("------problem 2------");
console.log(isPalindrome(""));  //true
console.log(isPalindrome("a")); //true
console.log(isPalindrome("aba"));   //true
console.log(isPalindrome("aabb"));  //false
console.log(isPalindrome("abba"));  //true
console.log(isPalindrome("abc"));   //false

// 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

function combinations(input) {
    const result = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i; j < input.length; j++) {
            result.push(input.slice(i, j + 1));
        }
    }
    return result;
}

console.log("------problem 3------");
console.log(combinations("dog"));
console.log(combinations(""));
console.log(combinations("d"));
console.log(combinations("abcd"));

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

function reorder(input) {
    return input.split("").sort().join("");
}

console.log("------problem 4------");
console.log(reorder("webmaster"));
console.log(reorder("abaaaaa"));
console.log(reorder(""));
console.log(reorder("aaa"));

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string
// in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function capitalize(input) {
    const words = input.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

console.log("------problem 5------");
console.log(capitalize("the quick brown fox"));
console.log(capitalize(""));
console.log(capitalize("the"));

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function findLongestWord(input) {
    words = input.split(" ");
    return words.sort((a, b) => b.length - a.length)[0];    // break tire according to original order
}

console.log("------problem 6------");
console.log(findLongestWord("Web Development Tutorial"));
console.log(findLongestWord(""));
console.log(findLongestWord("bbb aaa ccc"));

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function countVowels(input) {
    const matched = input.match(/[aeiou]/gi);
    if (matched == null)
        return 0;
    return matched.length;
}

console.log("------problem 7------");
console.log(countVowels("The quick brown fox"));    //5
console.log(countVowels("hello world"));    //3
console.log(countVowels(""));   //0

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and
// itself.

function checkPrime(input) {
    if (input <= 1)
        return false;
    var maxPossible = Math.sqrt(input);
    for (let i = 2; i <= maxPossible; i++) {
        if (input % i === 0)
            return false;
    }
    return true;
}

console.log("------problem 8------");
console.log(checkPrime(1)); // false
console.log(checkPrime(2)); // true
console.log(checkPrime(3)); // true
console.log(checkPrime(523));   // true
console.log(checkPrime(18));    // false

// 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(input) {
    return typeof input;
}

console.log("------problem 9------");
console.log(getType(0));           // number
console.log(getType("js"));      // string
console.log(getType(true));         // boolean
console.log(getType(undefined));   // undefined
console.log(getType(null));         // object
console.log(getType([]));           // object
console.log(getType({}));           // object
console.log(getType(checkPrime)); // function

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function getIdentityMatrix(input) {
    return Array.from({length: input}, (_, i) => {
        return Array.from({length: input}, (_, j) => i === j ? 1 : 0);
      });
}

console.log("------problem 10------");
console.log(getIdentityMatrix(0));
console.log(getIdentityMatrix(1));
console.log(getIdentityMatrix(5));

// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second
// greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function findSeconds(input) {
    if (input.length < 2)
        return null;
    var minimum = Math.min(...input);
    var maximum = Math.max(...input);
    var secondMinimum = Math.min(...input.filter(n => n != minimum));
    var secondMaximum = Math.max(...input.filter(n => n != maximum));
    return [secondMinimum, secondMaximum];
}

console.log("------problem 11------");
console.log(findSeconds([1,2,3,4,5]));
console.log(findSeconds([1]));
console.log(findSeconds([]));
console.log(findSeconds([1,4,3,5,2]));

// 12. Write a JavaScript function which says whether a number is perfect.
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper
// positive divisors, that is, the sum of its positive divisors excluding the number itself (also known as its aliquot sum).
// Equivalently, a perfect number is a number that is half the sum of all of its positive divisors (including itself).
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently,
// the number 6 is equal to half the sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1
// + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function checkPerfectNumber(input) {
    if (input <= 0)
        return false;
    var maxCandidate = Math.sqrt(input);
    var sum = 0;
    if (maxCandidate * maxCandidate === input) {
        sum += maxCandidate
    }
    for (let i = 1; i < maxCandidate; i++) {
        if (input % i == 0) {
            sum += i;
            sum += (input / i);
        }
    }
    sum = sum / 2;
    if (sum === input)
        return true;
    return false;
}

console.log("------problem 12------");
console.log(checkPerfectNumber(6)); // true
console.log(checkPerfectNumber(28));    // true
console.log(checkPerfectNumber(496));   // true
console.log(checkPerfectNumber(8128));  // true
console.log(checkPerfectNumber(11));    // false
console.log(checkPerfectNumber(12));    // false
console.log(checkPerfectNumber(16));    // false
console.log(checkPerfectNumber(-1));    // false

// 13. Write a JavaScript function to compute the factors of a positive integer.

function getFactors(input) {
    const factors = [];
    var maxCandidate = Math.sqrt(input);
    for (let i = 1; i < maxCandidate; i++) {
        if (input % i == 0) {
            factors.push(i);
            factors.push(input / i);
        }
    }
    if (maxCandidate * maxCandidate === input) {
        factors.push(maxCandidate);
    }
    return factors;
}

console.log("------problem 13------");
console.log(getFactors(1));
console.log(getFactors(2));
console.log(getFactors(4));
console.log(getFactors(6));
console.log(getFactors(8));

// 14. Write a JavaScript function to convert an amount to coins.
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1

function convertAmount(amount, coins) {
    const dp = Array.from({length: amount + 1}, (_, i) => null);
    dp[0] = [];
    for (let i = 0; i < coins.length; i++) {
        dp[coins[i]] = [coins[i]];
    }
    for (let i = 1; i <= amount; i++) {
        if (dp[i] !== null)
            continue
        let min = null;
        for (let j = 0; j < coins.length; j++) {
            if (coins[j] < i) {
                let current = dp[i - coins[j]].concat(coins[j]);
                if (min === null || current.length < min.length)
                    min = current;
            }
        }
        dp[i] = min;
    }
    return dp[amount];

}

console.log("------problem 14------");
console.log(convertAmount(46, [25, 10, 5, 2, 1]));  // 1, 10, 10, 25
console.log(convertAmount(24, [25, 10, 5, 2, 1]));  // 2, 2, 10, 10
console.log(convertAmount(15, [1, 5, 10, 12, 25]));  // 10, 5

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n
// from the user and display the result

function exponential(b, n) {
    if (n === 0)
        return 1;
    else if (n === 1)
        return b;
    else if (n % 2 === 0) {
        let half = exponential(b, n / 2);
        return half * half;
    }
    else {
        let half = exponential(b, (n - 1) / 2);
        return half * half * b;
    }
}

console.log("------problem 15------");
console.log(exponential(0, 5));
console.log(exponential(2, 10));
console.log(exponential(2, 5));

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function extractUniqueChars(input) {
    const hash = {};
    var unique = "";
    for (let i = 0; i < input.length; i++) {
        if (!hash[input[i]]) {
            unique += input[i];
            hash[input[i]] = true;
        }
    }
    return unique;
}

console.log("------problem 16------");
console.log(extractUniqueChars("thequickbrownfoxjumpsoverthelazydog"));
console.log(extractUniqueChars(""));
console.log(extractUniqueChars("aaabbbccc"));
console.log(extractUniqueChars("t"));

// 17. Write a JavaScript function to get the number of occurrences of each letter in specified string.

function getOccurence(input) {
    const hash = {};
    for (let i = 0; i < input.length; i++) {
        if (!hash[input[i]])
            hash[input[i]] = 0;
        hash[input[i]] += 1;
    }
    return hash;
}

console.log("------problem 17------");
console.log(getOccurence("thequickbrownfoxjumpsoverthelazydog"));
console.log(getOccurence(""));
console.log(getOccurence("aaabbbccc"));
console.log(getOccurence("t"));

// 18. Write a function for searching JavaScript arrays with a binary search.
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value.

function binarySearch(nums, target) {
    var left = 0;
    var right = nums.length - 1;
    while (left <= right) {
        mid = Math.floor((left + right) / 2);
        if (nums[mid] == target)
            return mid;
        if (nums[left] == target)
            return left;
        if (nums[right] == target)
            return right;
        if (nums[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return null;
}

console.log("------problem 18------");
console.log(binarySearch([1,2,3,4,5], 5));
console.log(binarySearch([1,2,3,4,5], 6));
console.log(binarySearch([1,2,3,4,5], 3));
console.log(binarySearch([1,2,3,4,5], 0));
console.log(binarySearch([], 5));

// 19. Write a JavaScript function that returns array elements larger than a number.

function getLargers(nums, target) {
    return nums.filter((e) => e > target);
}

console.log("------problem 19------");
console.log(getLargers([1,2,3,4,5], 5));
console.log(getLargers([1,2,3,4,5], 6));
console.log(getLargers([1,2,3,4,5], 3));
console.log(getLargers([1,2,3,4,5], 0));
console.log(getLargers([], 5));

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.
// Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateID(charlist, length) {
    var result = "";
    for (let i = 0; i < length; i++) {
        result += charlist[Math.floor(charlist.length * Math.random())];
    }
    return result;
}

console.log("------problem 20------");
console.log(generateID("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 10));
console.log(generateID("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", 5));

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.
// Sample array : [1, 2, 3] and subset length is 2
// Expected output : [[2, 1], [3, 1], [3, 2]]

function getSubsets(nums, length) {
    const result = [];
    const combinations = [];

    function generator(start, index) {
        if (index === length) {
            result.push(combinations.slice());
            return;
        }
        for (let i = start; i <= nums.length - (length - index); i++) {
            combinations[index] = nums[i];
            generator(i + 1, index + 1);
        }
    }
    generator(0, 0);
    return result;
}

console.log("------problem 21------");
console.log(getSubsets([1,2,3,4,5], 2));
console.log(getSubsets([1,2,3,4,5], 3));

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.
// Sample arguments : 'microsoft.com', 'o'
// Expected output : 3

function countTargetLetter(input, target) {
    return input.split("").reduce((count, curr) => {
        if (curr === target)
            return count + 1;
        else
            return count;
    }, 0);
}

console.log("------problem 22------");
console.log(countTargetLetter("microsoft.com", "o"));

// 23. Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'

function findFirstNotRepeat(input) {
    const counter = input.split("").reduce((count, curr) => {
        count[curr] = (count[curr] || 0) + 1;
        return count;
    }, {});
    var result = input.split("").find((c) => counter[c] === 1);
    return result;
}

console.log("------problem 23------");
console.log(findFirstNotRepeat("abacddbec"));
console.log(findFirstNotRepeat("abcdef"));
console.log(findFirstNotRepeat("abcdefabcdef"));

// 24. Write a JavaScript function to apply Bubble Sort algorithm.
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that
// works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if
// they are in the wrong order".
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1]

function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] < nums[j + 1]) {
                var temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}

console.log("------problem 24------");
nums = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
console.log(nums);
bubbleSort(nums);
console.log(nums);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as
// output.
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"])
// Expected output : "United States of America"

function findLongestName (names) {
    var target = "";
    names.forEach((name) => {
        if (name.replace(" ", "").length > target.length)
            target = name; 
    });
    return target;
}

console.log("------problem 25------");
console.log(findLongestName(["Australia", "Germany", "United States of America"]));
console.log(findLongestName(["abcd", "a b c"]));

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters.

function longestSubstr(input) {
    const hash = {};
    var max = -1;
    var maxStart = 0;
    var start = 0;
    for (let i = 0; i < input.length; i++) {
        if (hash[input[i]] != undefined && hash[input[i]] >= start) {
            if (i - start> max) {
                max = i - start;
                maxStart = start;
            }
            start = hash[input[i]] + 1;
            hash[input[i]] = i;
        }
        else {
            hash[input[i]] = i;
        }
    }
    if (max == -1)
        max = input.length;
    return input.substr(maxStart, max);
}

console.log("------problem 26------");
console.log(longestSubstr("abcdabcdefabc"));
console.log(longestSubstr("abcdefghi"));
console.log(longestSubstr(""));
console.log(longestSubstr("abababbaabbaabbaababab"));
console.log(longestSubstr("abcdasbdkhkasdw"));

// 27. Write a JavaScript function that returns the longest palindrome in a given string.
// Note: According to Wikipedia "In computer science, the longest palindromic substring or longest symmetric factor
// problem is the problem of finding a maximum-length contiguous substring of a given string that is also a palindrome. For
// example, the longest palindromic substring of "bananas" is "anana". The longest palindromic substring is not guaranteed
// to be unique; for example, in the string "abracadabra", there is no palindromic substring with length greater than three,
// but there are two palindromic substrings with length three, namely, "aca" and "ada".
// In some applications it may be necessary to return all maximal palindromic substrings (that is, all substrings that are
// themselves palindromes and cannot be extended to larger palindromic substrings) rather than returning only one
// substring or returning the maximum length of a palindromic substring.

function longestPalindrome(input) {
    function expand(str, left, right) {
        while (left >= 0 && right < str.length && str[left] == str[right]) {
            left--;
            right++;
        }
        return right - left - 1;   
    }
    if (input.length <= 1)
        return input;
    var start = 0;
    var maxLength = 0;
    for (let i = 0; i < input.length; i++) {
        var len1 = expand(input, i, i);
        var len2 = expand(input, i, i + 1);
        if (len1 >= len2 && len1 > maxLength) {
            start = i - (len1 - 1) / 2;
            maxLength = len1;
        }
        else if (len2 > len1 && len2 > maxLength) {
            start = i - len2 / 2 + 1;
            maxLength = len2
        }
    }
    return input.substr(start, maxLength);
}

console.log("------problem 27------");
console.log(longestPalindrome("banana"));
console.log(longestPalindrome("abc"));
console.log(longestPalindrome(""));
console.log(longestPalindrome("zxcabbaqwe"));

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter.

function calculate(a, b, operation) {
    return operation(a, b);
}

console.log("------problem 28------");
console.log(calculate(1,2,(x, y) => {
    return x + y;
}));
console.log(calculate(1,2,(x, y) => {
    return x - y;
}));
console.log(calculate(1,2,(x, y) => {
    return x * y;
}));

// 29. Write a JavaScript function to get the function name.

function getName(func) {
    return func.name;
}
function multiply(a, b) {
    return a * b;
}

console.log("------problem 29------");
console.log(getName(multiply));