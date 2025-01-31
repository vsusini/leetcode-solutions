// O(n log n)
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    strs.sort();

    let first = strs[0];
    let last = strs[strs.length-1];

    let i = 0;
    while (i < first.length && first[i] === last[i]){
        i++;
    }

    return first.substring(0,i);
};

// O(n) or O(n*m)
function longestCommonPrefixImproved(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}