
export const topics = [
  { name: "Array", priority: 0.98 },
  { name: "Hash Table", priority: 0.95 },
  { name: "String", priority: 0.93 },
  { name: "Dynamic Programming", priority: 0.92 },
  { name: "Binary Search", priority: 0.90 },
  { name: "Binary Tree", priority: 0.88 },
  { name: "Linked List", priority: 0.85 },
  { name: "Stack", priority: 0.82 },
  { name: "Graph", priority: 0.80 },
  { name: "Heap", priority: 0.78 },
  { name: "Binary Search Tree", priority: 0.75 },
  { name: "Recursion", priority: 0.72 },
  { name: "Matrix", priority: 0.70 },
  { name: "Queue", priority: 0.68 },
  { name: "Math", priority: 0.65 },
  { name: "Trie", priority: 0.62 },
  { name: "Binary", priority: 0.55 }
];

export const difficulties = [
    {
        level: 'easy',
        labelColor: 'rgb(16 185 129)',
        priority: 0.35,
        idealTime: 25
    },
    {
        level: 'medium', 
        labelColor: 'rgb(234 179 8)',
        priority: 0.50,
        idealTime: 35
    },
    {
        level: 'hard',
        labelColor: 'rgb(239 68 68)',
        priority: 0.15,
        idealTime: 55
    },
]


export const initProblemList = [
  // ===== ARRAY (45 problems) =====
  // Easy (15)
  { name: "Two Sum", difficulty: "easy", topic: "Array", timeTaken: 25, source: "https://leetcode.com/problems/two-sum/" },
  { name: "Best Time to Buy and Sell Stock", difficulty: "easy", topic: "Array", timeTaken: 30, source: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/" },
  { name: "Contains Duplicate", difficulty: "easy", topic: "Array", timeTaken: 20, source: "https://leetcode.com/problems/contains-duplicate/" },
  { name: "Remove Duplicates from Sorted Array", difficulty: "easy", topic: "Array", timeTaken: 25, source: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/" },
  { name: "Move Zeroes", difficulty: "easy", topic: "Array", timeTaken: 25, source: "https://leetcode.com/problems/move-zeroes/" },
  { name: "Plus One", difficulty: "easy", topic: "Array", timeTaken: 20, source: "https://leetcode.com/problems/plus-one/" },
  { name: "Single Number", difficulty: "easy", topic: "Array", timeTaken: 25, source: "https://leetcode.com/problems/single-number/" },
  { name: "Intersection of Two Arrays II", difficulty: "easy", topic: "Array", timeTaken: 30, source: "https://leetcode.com/problems/intersection-of-two-arrays-ii/" },
  { name: "Valid Sudoku", difficulty: "easy", topic: "Array", timeTaken: 35, source: "https://leetcode.com/problems/valid-sudoku/" },
  { name: "Rotate Array", difficulty: "easy", topic: "Array", timeTaken: 30, source: "https://leetcode.com/problems/rotate-array/" },
  { name: "Find All Numbers Disappeared in an Array", difficulty: "easy", topic: "Array", timeTaken: 30, source: "https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/" },
  { name: "Max Consecutive Ones", difficulty: "easy", topic: "Array", timeTaken: 25, source: "https://leetcode.com/problems/max-consecutive-ones/" },
  { name: "Reshape the Matrix", difficulty: "easy", topic: "Array", timeTaken: 30, source: "https://leetcode.com/problems/reshape-the-matrix/" },
  { name: "Pascal's Triangle", difficulty: "easy", topic: "Array", timeTaken: 30, source: "https://leetcode.com/problems/pascals-triangle/" },
  { name: "Missing Number", difficulty: "easy", topic: "Array", timeTaken: 25, source: "https://leetcode.com/problems/missing-number/" },

  // Medium (20)
  { name: "Product of Array Except Self", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/product-of-array-except-self/" },
  { name: "Maximum Subarray", difficulty: "medium", topic: "Array", timeTaken: 40, source: "https://leetcode.com/problems/maximum-subarray/" },
  { name: "Maximum Product Subarray", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/maximum-product-subarray/" },
  { name: "Find Minimum in Rotated Sorted Array", difficulty: "medium", topic: "Array", timeTaken: 40, source: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/" },
  { name: "Search in Rotated Sorted Array", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/search-in-rotated-sorted-array/" },
  { name: "3Sum", difficulty: "medium", topic: "Array", timeTaken: 50, source: "https://leetcode.com/problems/3sum/" },
  { name: "Container With Most Water", difficulty: "medium", topic: "Array", timeTaken: 40, source: "https://leetcode.com/problems/container-with-most-water/" },
  { name: "Merge Intervals", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/merge-intervals/" },
  { name: "Insert Interval", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/insert-interval/" },
  { name: "Non-overlapping Intervals", difficulty: "medium", topic: "Array", timeTaken: 40, source: "https://leetcode.com/problems/non-overlapping-intervals/" },
  { name: "4Sum", difficulty: "medium", topic: "Array", timeTaken: 55, source: "https://leetcode.com/problems/4sum/" },
  { name: "Jump Game", difficulty: "medium", topic: "Array", timeTaken: 40, source: "https://leetcode.com/problems/jump-game/" },
  { name: "Jump Game II", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/jump-game-ii/" },
  { name: "Find the Duplicate Number", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/find-the-duplicate-number/" },
  { name: "Subarray Sum Equals K", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/subarray-sum-equals-k/" },
  { name: "Next Permutation", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/next-permutation/" },
  { name: "Spiral Matrix", difficulty: "medium", topic: "Array", timeTaken: 45, source: "https://leetcode.com/problems/spiral-matrix/" },
  { name: "Set Matrix Zeroes", difficulty: "medium", topic: "Array", timeTaken: 40, source: "https://leetcode.com/problems/set-matrix-zeroes/" },
  { name: "Rotate Image", difficulty: "medium", topic: "Array", timeTaken: 40, source: "https://leetcode.com/problems/rotate-image/" },
  { name: "Word Search", difficulty: "medium", topic: "Array", timeTaken: 50, source: "https://leetcode.com/problems/word-search/" },

  // Hard (10)
  { name: "Trapping Rain Water", difficulty: "hard", topic: "Array", timeTaken: 65, source: "https://leetcode.com/problems/trapping-rain-water/" },
  { name: "Median of Two Sorted Arrays", difficulty: "hard", topic: "Array", timeTaken: 80, source: "https://leetcode.com/problems/median-of-two-sorted-arrays/" },
  { name: "First Missing Positive", difficulty: "hard", topic: "Array", timeTaken: 65, source: "https://leetcode.com/problems/first-missing-positive/" },
  { name: "Sliding Window Maximum", difficulty: "hard", topic: "Array", timeTaken: 65, source: "https://leetcode.com/problems/sliding-window-maximum/" },
  { name: "Minimum Window Substring", difficulty: "hard", topic: "Array", timeTaken: 70, source: "https://leetcode.com/problems/minimum-window-substring/" },
  { name: "Largest Rectangle in Histogram", difficulty: "hard", topic: "Array", timeTaken: 70, source: "https://leetcode.com/problems/largest-rectangle-in-histogram/" },
  { name: "Maximal Rectangle", difficulty: "hard", topic: "Array", timeTaken: 75, source: "https://leetcode.com/problems/maximal-rectangle/" },
  { name: "Count of Smaller Numbers After Self", difficulty: "hard", topic: "Array", timeTaken: 75, source: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/" },
  { name: "Candy", difficulty: "hard", topic: "Array", timeTaken: 65, source: "https://leetcode.com/problems/candy/" },
  { name: "N-Queens", difficulty: "hard", topic: "Array", timeTaken: 80, source: "https://leetcode.com/problems/n-queens/" },

  // ===== STRING (30 problems) =====
  // Easy (10)
  { name: "Valid Palindrome", difficulty: "easy", topic: "String", timeTaken: 25, source: "https://leetcode.com/problems/valid-palindrome/" },
  { name: "Valid Anagram", difficulty: "easy", topic: "String", timeTaken: 20, source: "https://leetcode.com/problems/valid-anagram/" },
  { name: "First Unique Character in a String", difficulty: "easy", topic: "String", timeTaken: 25, source: "https://leetcode.com/problems/first-unique-character-in-a-string/" },
  { name: "Reverse String", difficulty: "easy", topic: "String", timeTaken: 20, source: "https://leetcode.com/problems/reverse-string/" },
  { name: "Reverse Integer", difficulty: "easy", topic: "String", timeTaken: 30, source: "https://leetcode.com/problems/reverse-integer/" },
  { name: "Implement strStr()", difficulty: "easy", topic: "String", timeTaken: 30, source: "https://leetcode.com/problems/implement-strstr/" },
  { name: "Longest Common Prefix", difficulty: "easy", topic: "String", timeTaken: 30, source: "https://leetcode.com/problems/longest-common-prefix/" },
  { name: "Valid Parentheses", difficulty: "easy", topic: "String", timeTaken: 25, source: "https://leetcode.com/problems/valid-parentheses/" },
  { name: "Roman to Integer", difficulty: "easy", topic: "String", timeTaken: 30, source: "https://leetcode.com/problems/roman-to-integer/" },
  { name: "Count and Say", difficulty: "easy", topic: "String", timeTaken: 35, source: "https://leetcode.com/problems/count-and-say/" },

  // Medium (15)
  { name: "Longest Substring Without Repeating Characters", difficulty: "medium", topic: "String", timeTaken: 45, source: "https://leetcode.com/problems/longest-substring-without-repeating-characters/" },
  { name: "Longest Palindromic Substring", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/longest-palindromic-substring/" },
  { name: "Palindromic Substrings", difficulty: "medium", topic: "String", timeTaken: 45, source: "https://leetcode.com/problems/palindromic-substrings/" },
  { name: "String to Integer (atoi)", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/string-to-integer-atoi/" },
  { name: "Longest Repeating Character Replacement", difficulty: "medium", topic: "String", timeTaken: 55, source: "https://leetcode.com/problems/longest-repeating-character-replacement/" },
  { name: "Group Anagrams", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/group-anagrams/" },
  { name: "Generate Parentheses", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/generate-parentheses/" },
  { name: "Simplify Path", difficulty: "medium", topic: "String", timeTaken: 45, source: "https://leetcode.com/problems/simplify-path/" },
  { name: "Letter Combinations of a Phone Number", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/" },
  { name: "Word Break", difficulty: "medium", topic: "String", timeTaken: 55, source: "https://leetcode.com/problems/word-break/" },
  { name: "Decode String", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/decode-string/" },
  { name: "Find All Anagrams in a String", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/find-all-anagrams-in-a-string/" },
  { name: "Permutation in String", difficulty: "medium", topic: "String", timeTaken: 50, source: "https://leetcode.com/problems/permutation-in-string/" },
  { name: "Basic Calculator II", difficulty: "medium", topic: "String", timeTaken: 55, source: "https://leetcode.com/problems/basic-calculator-ii/" },
  { name: "Integer to Roman", difficulty: "medium", topic: "String", timeTaken: 45, source: "https://leetcode.com/problems/integer-to-roman/" },

  // Hard (5)
  { name: "Edit Distance", difficulty: "hard", topic: "String", timeTaken: 75, source: "https://leetcode.com/problems/edit-distance/" },
  { name: "Regular Expression Matching", difficulty: "hard", topic: "String", timeTaken: 80, source: "https://leetcode.com/problems/regular-expression-matching/" },
  { name: "Wildcard Matching", difficulty: "hard", topic: "String", timeTaken: 75, source: "https://leetcode.com/problems/wildcard-matching/" },
  { name: "Text Justification", difficulty: "hard", topic: "String", timeTaken: 65, source: "https://leetcode.com/problems/text-justification/" },

  // ===== LINKED LIST (25 problems) =====
  // Easy (10)
  { name: "Reverse Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 25, source: "https://leetcode.com/problems/reverse-linked-list/" },
  { name: "Merge Two Sorted Lists", difficulty: "easy", topic: "Linked List", timeTaken: 30, source: "https://leetcode.com/problems/merge-two-sorted-lists/" },
  { name: "Linked List Cycle", difficulty: "easy", topic: "Linked List", timeTaken: 25, source: "https://leetcode.com/problems/linked-list-cycle/" },
  { name: "Palindrome Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 30, source: "https://leetcode.com/problems/palindrome-linked-list/" },
  { name: "Remove Linked List Elements", difficulty: "easy", topic: "Linked List", timeTaken: 25, source: "https://leetcode.com/problems/remove-linked-list-elements/" },
  { name: "Middle of the Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 25, source: "https://leetcode.com/problems/middle-of-the-linked-list/" },
  { name: "Convert Binary Number in a Linked List to Integer", difficulty: "easy", topic: "Linked List", timeTaken: 20, source: "https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/" },
  { name: "Intersection of Two Linked Lists", difficulty: "easy", topic: "Linked List", timeTaken: 30, source: "https://leetcode.com/problems/intersection-of-two-linked-lists/" },
  { name: "Delete Node in a Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 20, source: "https://leetcode.com/problems/delete-node-in-a-linked-list/" },
  { name: "Design Linked List", difficulty: "easy", topic: "Linked List", timeTaken: 35, source: "https://leetcode.com/problems/design-linked-list/" },

  // Medium (10)
  { name: "Remove Nth Node From End of List", difficulty: "medium", topic: "Linked List", timeTaken: 40, source: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/" },
  { name: "Copy List with Random Pointer", difficulty: "medium", topic: "Linked List", timeTaken: 45, source: "https://leetcode.com/problems/copy-list-with-random-pointer/" },
  { name: "Add Two Numbers", difficulty: "medium", topic: "Linked List", timeTaken: 45, source: "https://leetcode.com/problems/add-two-numbers/" },
  { name: "Sort List", difficulty: "medium", topic: "Linked List", timeTaken: 50, source: "https://leetcode.com/problems/sort-list/" },
  { name: "Reorder List", difficulty: "medium", topic: "Linked List", timeTaken: 45, source: "https://leetcode.com/problems/reorder-list/" },
  { name: "Flatten a Multilevel Doubly Linked List", difficulty: "medium", topic: "Linked List", timeTaken: 50, source: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/" },
  { name: "LRU Cache", difficulty: "medium", topic: "Linked List", timeTaken: 50, source: "https://leetcode.com/problems/lru-cache/" },
  { name: "Swap Nodes in Pairs", difficulty: "medium", topic: "Linked List", timeTaken: 40, source: "https://leetcode.com/problems/swap-nodes-in-pairs/" },
  { name: "Odd Even Linked List", difficulty: "medium", topic: "Linked List", timeTaken: 40, source: "https://leetcode.com/problems/odd-even-linked-list/" },
  { name: "Partition List", difficulty: "medium", topic: "Linked List", timeTaken: 45, source: "https://leetcode.com/problems/partition-list/" },

  // Hard (5)
  { name: "Merge k Sorted Lists", difficulty: "hard", topic: "Linked List", timeTaken: 65, source: "https://leetcode.com/problems/merge-k-sorted-lists/" },
  { name: "Reverse Nodes in k-Group", difficulty: "hard", topic: "Linked List", timeTaken: 70, source: "https://leetcode.com/problems/reverse-nodes-in-k-group/" },
  { name: "LFU Cache", difficulty: "hard", topic: "Linked List", timeTaken: 75, source: "https://leetcode.com/problems/lfu-cache/" },
  { name: "All O`one Data Structure", difficulty: "hard", topic: "Linked List", timeTaken: 70, source: "https://leetcode.com/problems/all-oone-data-structure/" },
  { name: "Design Skiplist", difficulty: "hard", topic: "Linked List", timeTaken: 80, source: "https://leetcode.com/problems/design-skiplist/" },

  // ===== BINARY TREE (35 problems) =====
  // Easy (12)
  { name: "Maximum Depth of Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 25, source: "https://leetcode.com/problems/maximum-depth-of-binary-tree/" },
  { name: "Same Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 25, source: "https://leetcode.com/problems/same-tree/" },
  { name: "Invert Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 25, source: "https://leetcode.com/problems/invert-binary-tree/" },
  { name: "Symmetric Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 30, source: "https://leetcode.com/problems/symmetric-tree/" },
  { name: "Path Sum", difficulty: "easy", topic: "Binary Tree", timeTaken: 30, source: "https://leetcode.com/problems/path-sum/" },
  { name: "Binary Tree Inorder Traversal", difficulty: "easy", topic: "Binary Tree", timeTaken: 30, source: "https://leetcode.com/problems/binary-tree-inorder-traversal/" },
  { name: "Binary Tree Preorder Traversal", difficulty: "easy", topic: "Binary Tree", timeTaken: 30, source: "https://leetcode.com/problems/binary-tree-preorder-traversal/" },
  { name: "Binary Tree Postorder Traversal", difficulty: "easy", topic: "Binary Tree", timeTaken: 30, source: "https://leetcode.com/problems/binary-tree-postorder-traversal/" },
  { name: "Convert Sorted Array to Binary Search Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 35, source: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/" },
  { name: "Balanced Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 30, source: "https://leetcode.com/problems/balanced-binary-tree/" },
  { name: "Minimum Depth of Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 30, source: "https://leetcode.com/problems/minimum-depth-of-binary-tree/" },
  { name: "Diameter of Binary Tree", difficulty: "easy", topic: "Binary Tree", timeTaken: 35, source: "https://leetcode.com/problems/diameter-of-binary-tree/" },

  // Medium (15)
  { name: "Binary Tree Level Order Traversal", difficulty: "medium", topic: "Binary Tree", timeTaken: 40, source: "https://leetcode.com/problems/binary-tree-level-order-traversal/" },
  { name: "Validate Binary Search Tree", difficulty: "medium", topic: "Binary Tree", timeTaken: 45, source: "https://leetcode.com/problems/validate-binary-search-tree/" },
  { name: "Kth Smallest Element in a BST", difficulty: "medium", topic: "Binary Tree", timeTaken: 40, source: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/" },
  { name: "Construct Binary Tree from Preorder and Inorder Traversal", difficulty: "medium", topic: "Binary Tree", timeTaken: 50, source: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/" },
  { name: "Construct Binary Tree from Inorder and Postorder Traversal", difficulty: "medium", topic: "Binary Tree", timeTaken: 50, source: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/" },
  { name: "Lowest Common Ancestor of a Binary Tree", difficulty: "medium", topic: "Binary Tree", timeTaken: 45, source: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/" },
  { name: "Binary Tree Right Side View", difficulty: "medium", topic: "Binary Tree", timeTaken: 40, source: "https://leetcode.com/problems/binary-tree-right-side-view/" },
  { name: "Count Complete Tree Nodes", difficulty: "medium", topic: "Binary Tree", timeTaken: 45, source: "https://leetcode.com/problems/count-complete-tree-nodes/" },
  { name: "Serialize and Deserialize Binary Tree", difficulty: "medium", topic: "Binary Tree", timeTaken: 55, source: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/" },
  { name: "Flatten Binary Tree to Linked List", difficulty: "medium", topic: "Binary Tree", timeTaken: 45, source: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/" },
  { name: "Populating Next Right Pointers in Each Node", difficulty: "medium", topic: "Binary Tree", timeTaken: 45, source: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node/" },
  { name: "Sum Root to Leaf Numbers", difficulty: "medium", topic: "Binary Tree", timeTaken: 40, source: "https://leetcode.com/problems/sum-root-to-leaf-numbers/" },
  { name: "House Robber III", difficulty: "medium", topic: "Binary Tree", timeTaken: 50, source: "https://leetcode.com/problems/house-robber-iii/" },
  { name: "Path Sum III", difficulty: "medium", topic: "Binary Tree", timeTaken: 45, source: "https://leetcode.com/problems/path-sum-iii/" },
  { name: "Find Largest Value in Each Tree Row", difficulty: "medium", topic: "Binary Tree", timeTaken: 40, source: "https://leetcode.com/problems/find-largest-value-in-each-tree-row/" },

  // Hard (8)
  { name: "Binary Tree Maximum Path Sum", difficulty: "hard", topic: "Binary Tree", timeTaken: 65, source: "https://leetcode.com/problems/binary-tree-maximum-path-sum/" },
  { name: "Serialize and Deserialize BST", difficulty: "hard", topic: "Binary Tree", timeTaken: 50, source: "https://leetcode.com/problems/serialize-and-deserialize-bst/" },
  { name: "Recover Binary Search Tree", difficulty: "hard", topic: "Binary Tree", timeTaken: 55, source: "https://leetcode.com/problems/recover-binary-search-tree/" },
  { name: "Vertical Order Traversal of a Binary Tree", difficulty: "hard", topic: "Binary Tree", timeTaken: 60, source: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/" },
  { name: "Binary Tree Cameras", difficulty: "hard", topic: "Binary Tree", timeTaken: 65, source: "https://leetcode.com/problems/binary-tree-cameras/" },
  { name: "Sum of Distances in Tree", difficulty: "hard", topic: "Binary Tree", timeTaken: 70, source: "https://leetcode.com/problems/sum-of-distances-in-tree/" },
  { name: "Number of Ways to Reorder Array to Get Same BST", difficulty: "hard", topic: "Binary Tree", timeTaken: 75, source: "https://leetcode.com/problems/number-of-ways-to-reorder-array-to-get-same-bst/" },
  { name: "Step-By-Step Directions From a Binary Tree Node to Another", difficulty: "hard", topic: "Binary Tree", timeTaken: 60, source: "https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/" },

  // ===== DYNAMIC PROGRAMMING (35 problems) =====
  // Easy (10)
  { name: "Climbing Stairs", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 25, source: "https://leetcode.com/problems/climbing-stairs/" },
  { name: "House Robber", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 35, source: "https://leetcode.com/problems/house-robber/" },
  { name: "Divisor Game", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 25, source: "https://leetcode.com/problems/divisor-game/" },
  { name: "Fibonacci Number", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 20, source: "https://leetcode.com/problems/fibonacci-number/" },
  { name: "N-th Tribonacci Number", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 25, source: "https://leetcode.com/problems/n-th-tribonacci-number/" },
  { name: "Min Cost Climbing Stairs", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 30, source: "https://leetcode.com/problems/min-cost-climbing-stairs/" },
  { name: "Counting Bits", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 35, source: "https://leetcode.com/problems/counting-bits/" },
  { name: "Is Subsequence", difficulty: "easy", topic: "Dynamic Programming", timeTaken: 30, source: "https://leetcode.com/problems/is-subsequence/" },

  // Medium (15)
  { name: "Coin Change", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 50, source: "https://leetcode.com/problems/coin-change/" },
  { name: "Longest Increasing Subsequence", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45, source: "https://leetcode.com/problems/longest-increasing-subsequence/" },
  { name: "Unique Paths", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 40, source: "https://leetcode.com/problems/unique-paths/" },
  { name: "Longest Common Subsequence", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45, source: "https://leetcode.com/problems/longest-common-subsequence/" },
  { name: "Partition Equal Subset Sum", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 50, source: "https://leetcode.com/problems/partition-equal-subset-sum/" },
  { name: "Target Sum", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 55, source: "https://leetcode.com/problems/target-sum/" },
  { name: "Decode Ways", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45, source: "https://leetcode.com/problems/decode-ways/" },
  { name: "Perfect Squares", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45, source: "https://leetcode.com/problems/perfect-squares/" },
  { name: "Coin Change II", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 50, source: "https://leetcode.com/problems/coin-change-ii/" },
  { name: "Unique Paths II", difficulty: "medium", topic: "Dynamic Programming", timeTaken: 45, source: "https://leetcode.com/problems/unique-paths-ii/" },

  // Hard (10)
  { name: "Best Time to Buy and Sell Stock III", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 65, source: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/" },
  { name: "Best Time to Buy and Sell Stock IV", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 70, source: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/" },
  { name: "Maximum Profit in Job Scheduling", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 75, source: "https://leetcode.com/problems/maximum-profit-in-job-scheduling/" },
  { name: "Russian Doll Envelopes", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 70, source: "https://leetcode.com/problems/russian-doll-envelopes/" },
  { name: "Dungeon Game", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 75, source: "https://leetcode.com/problems/dungeon-game/" },
  { name: "Burst Balloons", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 80, source: "https://leetcode.com/problems/burst-balloons/" },
  { name: "Palindrome Partitioning II", difficulty: "hard", topic: "Dynamic Programming", timeTaken: 70, source: "https://leetcode.com/problems/palindrome-partitioning-ii/" },

  // ===== GRAPH (30 problems) =====
  // Easy (8)
  { name: "Number of Islands", difficulty: "easy", topic: "Graph", timeTaken: 40, source: "https://leetcode.com/problems/number-of-islands/" },
  { name: "Flood Fill", difficulty: "easy", topic: "Graph", timeTaken: 30, source: "https://leetcode.com/problems/flood-fill/" },
  { name: "Find the Town Judge", difficulty: "easy", topic: "Graph", timeTaken: 30, source: "https://leetcode.com/problems/find-the-town-judge/" },
  { name: "Find Center of Star Graph", difficulty: "easy", topic: "Graph", timeTaken: 25, source: "https://leetcode.com/problems/find-center-of-star-graph/" },
  { name: "Island Perimeter", difficulty: "easy", topic: "Graph", timeTaken: 35, source: "https://leetcode.com/problems/island-perimeter/" },
  { name: "Max Area of Island", difficulty: "easy", topic: "Graph", timeTaken: 40, source: "https://leetcode.com/problems/max-area-of-island/" },
  { name: "Employee Importance", difficulty: "easy", topic: "Graph", timeTaken: 35, source: "https://leetcode.com/problems/employee-importance/" },
  { name: "Keys and Rooms", difficulty: "easy", topic: "Graph", timeTaken: 40, source: "https://leetcode.com/problems/keys-and-rooms/" },

  // Medium (15)
  { name: "Clone Graph", difficulty: "medium", topic: "Graph", timeTaken: 45, source: "https://leetcode.com/problems/clone-graph/" },
  { name: "Course Schedule", difficulty: "medium", topic: "Graph", timeTaken: 50, source: "https://leetcode.com/problems/course-schedule/" },
  { name: "Pacific Atlantic Water Flow", difficulty: "medium", topic: "Graph", timeTaken: 55, source: "https://leetcode.com/problems/pacific-atlantic-water-flow/" },
  { name: "Word Ladder", difficulty: "medium", topic: "Graph", timeTaken: 60, source: "https://leetcode.com/problems/word-ladder/" },
  { name: "Graph Valid Tree", difficulty: "medium", topic: "Graph", timeTaken: 45, source: "https://leetcode.com/problems/graph-valid-tree/" },
  { name: "Number of Connected Components in an Undirected Graph", difficulty: "medium", topic: "Graph", timeTaken: 45, source: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/" },
  { name: "Course Schedule II", difficulty: "medium", topic: "Graph", timeTaken: 50, source: "https://leetcode.com/problems/course-schedule-ii/" },
  { name: "Alien Dictionary", difficulty: "medium", topic: "Graph", timeTaken: 60, source: "https://leetcode.com/problems/alien-dictionary/" },
  { name: "Cheapest Flights Within K Stops", difficulty: "medium", topic: "Graph", timeTaken: 55, source: "https://leetcode.com/problems/cheapest-flights-within-k-stops/" },
  { name: "Network Delay Time", difficulty: "medium", topic: "Graph", timeTaken: 50, source: "https://leetcode.com/problems/network-delay-time/" },
  { name: "Shortest Path in Binary Matrix", difficulty: "medium", topic: "Graph", timeTaken: 50, source: "https://leetcode.com/problems/shortest-path-in-binary-matrix/" },
  { name: "Rotting Oranges", difficulty: "medium", topic: "Graph", timeTaken: 45, source: "https://leetcode.com/problems/rotting-oranges/" },
  { name: "Walls and Gates", difficulty: "medium", topic: "Graph", timeTaken: 50, source: "https://leetcode.com/problems/walls-and-gates/" },
  { name: "Surrounded Regions", difficulty: "medium", topic: "Graph", timeTaken: 55, source: "https://leetcode.com/problems/surrounded-regions/" },
  { name: "Redundant Connection", difficulty: "medium", topic: "Graph", timeTaken: 45, source: "https://leetcode.com/problems/redundant-connection/" },

  // Hard (7)
  { name: "Word Ladder II", difficulty: "hard", topic: "Graph", timeTaken: 70, source: "https://leetcode.com/problems/word-ladder-ii/" },
  { name: "Reconstruct Itinerary", difficulty: "hard", topic: "Graph", timeTaken: 65, source: "https://leetcode.com/problems/reconstruct-itinerary/" },
  { name: "Minimum Height Trees", difficulty: "hard", topic: "Graph", timeTaken: 60, source: "https://leetcode.com/problems/minimum-height-trees/" },
  { name: "Critical Connections in a Network", difficulty: "hard", topic: "Graph", timeTaken: 70, source: "https://leetcode.com/problems/critical-connections-in-a-network/" },
  { name: "Swim in Rising Water", difficulty: "hard", topic: "Graph", timeTaken: 65, source: "https://leetcode.com/problems/swim-in-rising-water/" },
  { name: "Sliding Puzzle", difficulty: "hard", topic: "Graph", timeTaken: 60, source: "https://leetcode.com/problems/sliding-puzzle/" },
  { name: "Shortest Path to Get All Keys", difficulty: "hard", topic: "Graph", timeTaken: 75, source: "https://leetcode.com/problems/shortest-path-to-get-all-keys/" },

  // ===== BINARY SEARCH (20 problems) =====
  // Easy (6)
  { name: "Binary Search", difficulty: "easy", topic: "Binary Search", timeTaken: 25, source: "https://leetcode.com/problems/binary-search/" },
  { name: "First Bad Version", difficulty: "easy", topic: "Binary Search", timeTaken: 30, source: "https://leetcode.com/problems/first-bad-version/" },
  { name: "Search Insert Position", difficulty: "easy", topic: "Binary Search", timeTaken: 25, source: "https://leetcode.com/problems/search-insert-position/" },
  { name: "Sqrt(x)", difficulty: "easy", topic: "Binary Search", timeTaken: 30, source: "https://leetcode.com/problems/sqrtx/" },
  { name: "Arranging Coins", difficulty: "easy", topic: "Binary Search", timeTaken: 30, source: "https://leetcode.com/problems/arranging-coins/" },
  { name: "Valid Perfect Square", difficulty: "easy", topic: "Binary Search", timeTaken: 25, source: "https://leetcode.com/problems/valid-perfect-square/" },

  // Medium (10)
  { name: "Search a 2D Matrix", difficulty: "medium", topic: "Binary Search", timeTaken: 40, source: "https://leetcode.com/problems/search-a-2d-matrix/" },
  { name: "Find First and Last Position of Element in Sorted Array", difficulty: "medium", topic: "Binary Search", timeTaken: 45, source: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/" },
  { name: "Capacity To Ship Packages Within D Days", difficulty: "medium", topic: "Binary Search", timeTaken: 50, source: "https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/" },
  { name: "Split Array Largest Sum", difficulty: "medium", topic: "Binary Search", timeTaken: 55, source: "https://leetcode.com/problems/split-array-largest-sum/" },
  { name: "Koko Eating Bananas", difficulty: "medium", topic: "Binary Search", timeTaken: 45, source: "https://leetcode.com/problems/koko-eating-bananas/" },
  { name: "Find Peak Element", difficulty: "medium", topic: "Binary Search", timeTaken: 40, source: "https://leetcode.com/problems/find-peak-element/" },
  { name: "Search in Rotated Sorted Array II", difficulty: "medium", topic: "Binary Search", timeTaken: 45, source: "https://leetcode.com/problems/search-in-rotated-sorted-array-ii/" },
  { name: "Time Based Key-Value Store", difficulty: "medium", topic: "Binary Search", timeTaken: 45, source: "https://leetcode.com/problems/time-based-key-value-store/" },

  // Hard (4)
  { name: "Find Minimum in Rotated Sorted Array II", difficulty: "hard", topic: "Binary Search", timeTaken: 50, source: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/" },
  { name: "Max Sum of Rectangle No Larger Than K", difficulty: "hard", topic: "Binary Search", timeTaken: 75, source: "https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k/" },

  // ===== HEAP (15 problems) =====
  // Easy (4)
  { name: "Kth Largest Element in a Stream", difficulty: "easy", topic: "Heap", timeTaken: 30, source: "https://leetcode.com/problems/kth-largest-element-in-a-stream/" },
  { name: "Last Stone Weight", difficulty: "easy", topic: "Heap", timeTaken: 30, source: "https://leetcode.com/problems/last-stone-weight/" },
  { name: "The K Weakest Rows in a Matrix", difficulty: "easy", topic: "Heap", timeTaken: 35, source: "https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/" },
  { name: "Maximum Product of Two Elements in an Array", difficulty: "easy", topic: "Heap", timeTaken: 25, source: "https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/" },

  // Medium (8)
  { name: "Kth Largest Element in an Array", difficulty: "medium", topic: "Heap", timeTaken: 40, source: "https://leetcode.com/problems/kth-largest-element-in-an-array/" },
  { name: "Top K Frequent Elements", difficulty: "medium", topic: "Heap", timeTaken: 45, source: "https://leetcode.com/problems/top-k-frequent-elements/" },
  { name: "Sort Characters By Frequency", difficulty: "medium", topic: "Heap", timeTaken: 40, source: "https://leetcode.com/problems/sort-characters-by-frequency/" },
  { name: "K Closest Points to Origin", difficulty: "medium", topic: "Heap", timeTaken: 45, source: "https://leetcode.com/problems/k-closest-points-to-origin/" },
  { name: "Reorganize String", difficulty: "medium", topic: "Heap", timeTaken: 50, source: "https://leetcode.com/problems/reorganize-string/" },
  { name: "Task Scheduler", difficulty: "medium", topic: "Heap", timeTaken: 50, source: "https://leetcode.com/problems/task-scheduler/" },
  { name: "Find K Pairs with Smallest Sums", difficulty: "medium", topic: "Heap", timeTaken: 55, source: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/" },
  { name: "Kth Smallest Element in a Sorted Matrix", difficulty: "medium", topic: "Heap", timeTaken: 50, source: "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/" },

  // Hard (3)
  { name: "Find Median from Data Stream", difficulty: "hard", topic: "Heap", timeTaken: 55, source: "https://leetcode.com/problems/find-median-from-data-stream/" },
  { name: "Sliding Window Median", difficulty: "hard", topic: "Heap", timeTaken: 60, source: "https://leetcode.com/problems/sliding-window-median/" },
  { name: "IPO", difficulty: "hard", topic: "Heap", timeTaken: 65, source: "https://leetcode.com/problems/ipo/" },

  // ===== STACK (20 problems) =====
  // Easy (6)
  { name: "Min Stack", difficulty: "easy", topic: "Stack", timeTaken: 30, source: "https://leetcode.com/problems/min-stack/" },
  { name: "Implement Queue using Stacks", difficulty: "easy", topic: "Stack", timeTaken: 30, source: "https://leetcode.com/problems/implement-queue-using-stacks/" },
  { name: "Next Greater Element I", difficulty: "easy", topic: "Stack", timeTaken: 35, source: "https://leetcode.com/problems/next-greater-element-i/" },
  { name: "Backspace String Compare", difficulty: "easy", topic: "Stack", timeTaken: 30, source: "https://leetcode.com/problems/backspace-string-compare/" },
  { name: "Remove All Adjacent Duplicates In String", difficulty: "easy", topic: "Stack", timeTaken: 30, source: "https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/" },

  // Medium (10)
  { name: "Evaluate Reverse Polish Notation", difficulty: "medium", topic: "Stack", timeTaken: 40, source: "https://leetcode.com/problems/evaluate-reverse-polish-notation/" },
  { name: "Daily Temperatures", difficulty: "medium", topic: "Stack", timeTaken: 45, source: "https://leetcode.com/problems/daily-temperatures/" },
  { name: "Asteroid Collision", difficulty: "medium", topic: "Stack", timeTaken: 45, source: "https://leetcode.com/problems/asteroid-collision/" },
  { name: "Remove K Digits", difficulty: "medium", topic: "Stack", timeTaken: 50, source: "https://leetcode.com/problems/remove-k-digits/" },
  { name: "132 Pattern", difficulty: "medium", topic: "Stack", timeTaken: 50, source: "https://leetcode.com/problems/132-pattern/" },
  { name: "Next Greater Element II", difficulty: "medium", topic: "Stack", timeTaken: 45, source: "https://leetcode.com/problems/next-greater-element-ii/" },
  { name: "Validate Stack Sequences", difficulty: "medium", topic: "Stack", timeTaken: 40, source: "https://leetcode.com/problems/validate-stack-sequences/" },
  { name: "Minimum Remove to Make Valid Parentheses", difficulty: "medium", topic: "Stack", timeTaken: 45, source: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/" },
  { name: "Basic Calculator", difficulty: "medium", topic: "Stack", timeTaken: 55, source: "https://leetcode.com/problems/basic-calculator/" },

  // Hard (4)
  { name: "Basic Calculator III", difficulty: "hard", topic: "Stack", timeTaken: 80, source: "https://leetcode.com/problems/basic-calculator-iii/" },
  { name: "Longest Valid Parentheses", difficulty: "hard", topic: "Stack", timeTaken: 65, source: "https://leetcode.com/problems/longest-valid-parentheses/" },

  // ===== HASH TABLE (25 problems) =====
  // Easy (8)
  { name: "Intersection of Two Arrays", difficulty: "easy", topic: "Hash Table", timeTaken: 30, source: "https://leetcode.com/problems/intersection-of-two-arrays/" },
  { name: "Happy Number", difficulty: "easy", topic: "Hash Table", timeTaken: 30, source: "https://leetcode.com/problems/happy-number/" },
  { name: "Isomorphic Strings", difficulty: "easy", topic: "Hash Table", timeTaken: 30, source: "https://leetcode.com/problems/isomorphic-strings/" },
  { name: "Word Pattern", difficulty: "easy", topic: "Hash Table", timeTaken: 30, source: "https://leetcode.com/problems/word-pattern/" },

  // Medium (12)
  { name: "Longest Consecutive Sequence", difficulty: "medium", topic: "Hash Table", timeTaken: 45, source: "https://leetcode.com/problems/longest-consecutive-sequence/" },
  { name: "Insert Delete GetRandom O(1)", difficulty: "medium", topic: "Hash Table", timeTaken: 45, source: "https://leetcode.com/problems/insert-delete-getrandom-o1/" },
  { name: "Design Underground System", difficulty: "medium", topic: "Hash Table", timeTaken: 50, source: "https://leetcode.com/problems/design-underground-system/" },
  { name: "Find Duplicate File in System", difficulty: "medium", topic: "Hash Table", timeTaken: 45, source: "https://leetcode.com/problems/find-duplicate-file-in-system/" },
  { name: "Brick Wall", difficulty: "medium", topic: "Hash Table", timeTaken: 40, source: "https://leetcode.com/problems/brick-wall/" },
  { name: "Contiguous Array", difficulty: "medium", topic: "Hash Table", timeTaken: 45, source: "https://leetcode.com/problems/contiguous-array/" },
  { name: "Find All Duplicates in an Array", difficulty: "medium", topic: "Hash Table", timeTaken: 40, source: "https://leetcode.com/problems/find-all-duplicates-in-an-array/" },
  { name: "Encode and Decode TinyURL", difficulty: "medium", topic: "Hash Table", timeTaken: 40, source: "https://leetcode.com/problems/encode-and-decode-tinyurl/" },

  // Hard (5)
  { name: "Sudoku Solver", difficulty: "hard", topic: "Hash Table", timeTaken: 80, source: "https://leetcode.com/problems/sudoku-solver/" },
  { name: "Word Squares", difficulty: "hard", topic: "Hash Table", timeTaken: 75, source: "https://leetcode.com/problems/word-squares/" },

  // ===== BINARY SEARCH TREE (10 problems) =====
  // Easy (4)
  { name: "Search in a Binary Search Tree", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 25, source: "https://leetcode.com/problems/search-in-a-binary-search-tree/" },
  { name: "Insert into a Binary Search Tree", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 30, source: "https://leetcode.com/problems/insert-into-a-binary-search-tree/" },
  { name: "Delete Node in a BST", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 35, source: "https://leetcode.com/problems/delete-node-in-a-bst/" },
  { name: "Lowest Common Ancestor of a Binary Search Tree", difficulty: "easy", topic: "Binary Search Tree", timeTaken: 30, source: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/" },

  // Medium (4)
  { name: "Binary Search Tree Iterator", difficulty: "medium", topic: "Binary Search Tree", timeTaken: 45, source: "https://leetcode.com/problems/binary-search-tree-iterator/" },

  // ===== RECURSION (10 problems) =====
  // Easy (4)
  { name: "Swap Nodes in Pairs", difficulty: "easy", topic: "Recursion", timeTaken: 25, source: "https://leetcode.com/problems/swap-nodes-in-pairs/" },

  // Medium (4)
  { name: "Permutations", difficulty: "medium", topic: "Recursion", timeTaken: 45, source: "https://leetcode.com/problems/permutations/" },
  { name: "Subsets", difficulty: "medium", topic: "Recursion", timeTaken: 40, source: "https://leetcode.com/problems/subsets/" },
  { name: "Combination Sum", difficulty: "medium", topic: "Recursion", timeTaken: 45, source: "https://leetcode.com/problems/combination-sum/" },

  // ===== MATRIX (10 problems) =====
  // Easy (4)
  { name: "Toeplitz Matrix", difficulty: "easy", topic: "Matrix", timeTaken: 25, source: "https://leetcode.com/problems/toeplitz-matrix/" },
  { name: "Transpose Matrix", difficulty: "easy", topic: "Matrix", timeTaken: 25, source: "https://leetcode.com/problems/transpose-matrix/" },
  { name: "Matrix Diagonal Sum", difficulty: "easy", topic: "Matrix", timeTaken: 30, source: "https://leetcode.com/problems/matrix-diagonal-sum/" },

  // Hard (2)
  { name: "Game of Life", difficulty: "hard", topic: "Matrix", timeTaken: 55, source: "https://leetcode.com/problems/game-of-life/" },

  // ===== QUEUE (8 problems) =====
  // Easy (3)
  { name: "Implement Stack using Queues", difficulty: "easy", topic: "Queue", timeTaken: 25, source: "https://leetcode.com/problems/implement-stack-using-queues/" },
  { name: "Number of Recent Calls", difficulty: "easy", topic: "Queue", timeTaken: 20, source: "https://leetcode.com/problems/number-of-recent-calls/" },
  { name: "Moving Average from Data Stream", difficulty: "easy", topic: "Queue", timeTaken: 25, source: "https://leetcode.com/problems/moving-average-from-data-stream/" },

  // Medium (3)
  { name: "Open the Lock", difficulty: "medium", topic: "Queue", timeTaken: 45, source: "https://leetcode.com/problems/open-the-lock/" },
  { name: "Design Circular Queue", difficulty: "medium", topic: "Queue", timeTaken: 40, source: "https://leetcode.com/problems/design-circular-queue/" },

  // Hard (2)
  { name: "First Unique Number", difficulty: "hard", topic: "Queue", timeTaken: 55, source: "https://leetcode.com/problems/first-unique-number/" },

  // ===== MATH (10 problems) =====
  // Easy (4)
  { name: "Fizz Buzz", difficulty: "easy", topic: "Math", timeTaken: 20, source: "https://leetcode.com/problems/fizz-buzz/" },
  { name: "Count Primes", difficulty: "easy", topic: "Math", timeTaken: 30, source: "https://leetcode.com/problems/count-primes/" },
  { name: "Power of Three", difficulty: "easy", topic: "Math", timeTaken: 25, source: "https://leetcode.com/problems/power-of-three/" },

  // Medium (4)
  { name: "Factorial Trailing Zeroes", difficulty: "medium", topic: "Math", timeTaken: 30, source: "https://leetcode.com/problems/factorial-trailing-zeroes/" },
  { name: "Excel Sheet Column Number", difficulty: "medium", topic: "Math", timeTaken: 25, source: "https://leetcode.com/problems/excel-sheet-column-number/" },
  { name: "Pow(x, n)", difficulty: "medium", topic: "Math", timeTaken: 40, source: "https://leetcode.com/problems/powx-n/" },

  // Hard (2)
  { name: "Max Points on a Line", difficulty: "hard", topic: "Math", timeTaken: 65, source: "https://leetcode.com/problems/max-points-on-a-line/" },

  // ===== TRIE (8 problems) =====
  // Easy (2)
  { name: "Implement Trie (Prefix Tree)", difficulty: "easy", topic: "Trie", timeTaken: 35, source: "https://leetcode.com/problems/implement-trie-prefix-tree/" },

  // Medium (4)
  { name: "Add and Search Word", difficulty: "medium", topic: "Trie", timeTaken: 45, source: "https://leetcode.com/problems/add-and-search-word-data-structure-design/" },
  { name: "Word Search II", difficulty: "medium", topic: "Trie", timeTaken: 55, source: "https://leetcode.com/problems/word-search-ii/" },
  { name: "Replace Words", difficulty: "medium", topic: "Trie", timeTaken: 40, source: "https://leetcode.com/problems/replace-words/" },
  { name: "Map Sum Pairs", difficulty: "medium", topic: "Trie", timeTaken: 45, source: "https://leetcode.com/problems/map-sum-pairs/" },

  // Hard (2)
  { name: "Concatenated Words", difficulty: "hard", topic: "Trie", timeTaken: 70, source: "https://leetcode.com/problems/concatenated-words/" },
  { name: "Palindrome Pairs", difficulty: "hard", topic: "Trie", timeTaken: 75, source: "https://leetcode.com/problems/palindrome-pairs/" },

  // ===== BINARY (8 problems) =====
  // Easy (3)
  { name: "Number of 1 Bits", difficulty: "easy", topic: "Binary", timeTaken: 25, source: "https://leetcode.com/problems/number-of-1-bits/" },
  { name: "Reverse Bits", difficulty: "easy", topic: "Binary", timeTaken: 30, source: "https://leetcode.com/problems/reverse-bits/" },

  // Medium (3)
  { name: "Sum of Two Integers", difficulty: "medium", topic: "Binary", timeTaken: 40, source: "https://leetcode.com/problems/sum-of-two-integers/" },

  // Hard (2)
  { name: "Divide Two Integers", difficulty: "hard", topic: "Binary", timeTaken: 55, source: "https://leetcode.com/problems/divide-two-integers/" },
  { name: "Maximum Product of Word Lengths", difficulty: "hard", topic: "Binary", timeTaken: 60, source: "https://leetcode.com/problems/maximum-product-of-word-lengths/" }
];

const getProblemList = () => {
    try {
        const stored = localStorage.getItem('problemList');
        if (stored === null) {
            // Initialize with default problems
            const initializedList = initProblemList.map(problem => ({
                ...problem,
                isCompleted: problem.isCompleted || false // Ensure isCompleted property exists
            }));
            localStorage.setItem('problemList', JSON.stringify(initializedList));
            return initializedList;
        }
        return JSON.parse(stored); // Convert string back to array
    } catch (error) {
        console.error('Error loading problem list:', error);
        // Fallback to initial list
        return initProblemList.map(problem => ({
            ...problem,
            isCompleted: problem.isCompleted || false
        }));
    }
}

export const problemList = getProblemList();
console.log(problemList)

const topicPriority = new Map();
topics.forEach(topic => topicPriority.set(topic.name, topic.priority));

const difficultyPriority = new Map();
difficulties.forEach(difficulty => difficultyPriority.set(difficulty.level, difficulty.priority));

const difficultyIdealTime = new Map();
difficulties.forEach(difficulty => difficultyIdealTime.set(difficulty.level, difficulty.idealTime));

problemList.forEach(problem => {
    const idealTime = difficultyIdealTime.get(problem.difficulty);
    const timeEfficiency = Math.max(0, 1 - Math.abs(problem.timeTaken - idealTime) / (idealTime * 0.8));
    
    problem.weight = topicPriority.get(problem.topic) * 
                    difficultyPriority.get(problem.difficulty) * 
                    timeEfficiency;
});

export const generateProblemChosenList = (weekCount, hoursPerWeek, difficultiesChosen, topicsChosen) => {
const totalTime = weekCount * hoursPerWeek * 60;

// Calculate time budget for each difficulty based on priority weights
const totalPriority = difficultiesChosen.reduce((sum, diff) => sum + diff.priority, 0);
const timeBudget = {};

difficultiesChosen.forEach(diff => {
    timeBudget[diff.level] = totalTime * (diff.priority / totalPriority);
});

const resultingList = [];

// Process each difficulty separately
difficultiesChosen.forEach(diff => {
    const level = diff.level;
    const budget = timeBudget[level];
    
    // Filter problems for this difficulty and chosen topics
    const difficultyProblems = problemList.filter(problem => 
        problem.difficulty === level && 
        topicsChosen.some(t => t.name === problem.topic)
    );
    
    // Sort by weight (highest first)
    difficultyProblems.sort((a, b) => b.weight - a.weight);
    
    let accumulatedTime = 0;
    
    // Select problems until budget is filled
    for (const problem of difficultyProblems) {
        if (accumulatedTime + problem.timeTaken <= budget) {
            resultingList.push(problem);
            accumulatedTime += problem.timeTaken;
        } else {
            break;
        }
    }
});

return resultingList;
};

export const generateWeeklyProblemSets = (problemChosenList, weekCount, hoursPerWeek) => {
if (weekCount * hoursPerWeek === 0) return [];

const weeklyMinutes = hoursPerWeek * 60;
const weeklyProblemSets = [];

// Sort problems: first by difficulty (easy -> medium -> hard), then by weight (highest first)
const sortedProblems = [...problemChosenList].sort((a, b) => {
    // Primary: Difficulty order (easy first, then medium, then hard)
    const difficultyOrder = { easy: 0, medium: 1, hard: 2 };
    const difficultyDiff = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    
    if (difficultyDiff !== 0) return difficultyDiff;
    
    // Secondary: Weight (highest first within same difficulty)
    return b.weight - a.weight;
});

// Initialize empty arrays for each week
for (let i = 0; i < weekCount; i++) {
    weeklyProblemSets.push([]);
}

// Distribute ALL problems across weeks
let currentWeek = 0;
let weekTimeUsed = 0;

for (const problem of sortedProblems) {
    // If current week is full, move to next week
    if (weekTimeUsed + problem.timeTaken > weeklyMinutes && currentWeek < weekCount - 1) {
        currentWeek++;
        weekTimeUsed = 0;
    }
    
    // Add problem to current week
    weeklyProblemSets[currentWeek].push(problem);
    weekTimeUsed += problem.timeTaken;
}

return weeklyProblemSets;
};

export const getLabelColorFromDifficulty = new Map();
difficulties.forEach(difficulty => getLabelColorFromDifficulty.set(difficulty.level, difficulty.labelColor));

export const getProblemCompletedCount = (problemList) => {
let problemCompletedCount = 0;

for (const problem of problemList) {
    if (problem.isCompleted) problemCompletedCount++;
    
}                              

return problemCompletedCount;
}