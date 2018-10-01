function areaBetween(height, i, j) {
    return Math.min(height[i], height[j]) * (j - i)
}

function maxAreaFromBegin(height, index, current_max_area) {
    for (let i = 0; i < index - current_max_area / height[index]; i++) {
        if (height[i] >= height[index]) return areaBetween(height, i, index);
        current_max_area = Math.max(current_max_area, areaBetween(height, i, index))
    }
    return current_max_area
}

const maxArea = function (height) {
    let current_max_area = 0;
    for (let i = 1; i < height.length; i++) {
        current_max_area = maxAreaFromBegin(height, i, current_max_area)
    }
    return current_max_area;
};
