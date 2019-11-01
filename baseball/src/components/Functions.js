export const addOneFunction = (cb, currentCount) => {
    cb(currentCount + 1)
}

export const resetFunction = (cb, currentCount) => {
    cb(currentCount * 0)
}