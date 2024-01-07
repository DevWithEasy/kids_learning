/**
 * @param data alphbetsArray
 * @param items data of array item
 */

const getArabicList = (data, items) => {
    const resultArray = [];

    for (let i = 0; i < data.length; i += items) {
        const subarray = data.slice(i, i + items).reverse();
        resultArray.push(subarray);
    }
    return resultArray;
}

export default getArabicList