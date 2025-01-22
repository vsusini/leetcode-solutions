function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array for efficient binary search
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    const totalLeft = Math.floor((m + n + 1) / 2);

    let left = 0;
    let right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2);
        const j = totalLeft - i;

        const nums1LeftMax = i > 0 ? nums1[i - 1] : -Infinity;
        const nums1RightMin = i < m ? nums1[i] : Infinity;
        const nums2LeftMax = j > 0 ? nums2[j - 1] : -Infinity;
        const nums2RightMin = j < n ? nums2[j] : Infinity;

        if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            if ((m + n) % 2 === 0) {
                return (
                    (Math.max(nums1LeftMax, nums2LeftMax) +
                        Math.min(nums1RightMin, nums2RightMin)) /
                    2
                );
            } else {
                return Math.max(nums1LeftMax, nums2LeftMax);
            }
        } else if (nums1LeftMax > nums2RightMin) {
            right = i - 1;
        } else {
            left = i + 1;
        }
    }

    throw new Error("Input arrays are not sorted");
}