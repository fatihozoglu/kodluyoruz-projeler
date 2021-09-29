
//My unoptimized insertion sort algorithm
function insertionSort(arr) {
    let newArr = [...arr];
    for(let i = 0; i < newArr.length; i++) {
        let min = Math.min(...newArr.slice(i));
        let index = newArr.indexOf(min);
        let temp = newArr[i];
        newArr[i] = Number(newArr.slice(index, index + 1).join());
        newArr[index] = temp;
        console.log(newArr);
    }
    return newArr;
}

//ANSWERS

//1.1.
//  [2, 27, 16, 22, 18, 6]
//  [2, 6, 16, 22, 18, 27]
//  Final return value : [2, 6, 16, 18, 22, 27]

//1.2.Big(O) Notation : O(n^2)

//1.3.Best Case : Array is already sorted O(n)
//    Worst Case : Array is sorted starting with the biggest number to smallest O(n^2)
//    Avarage Case : We dont need to run through all elments for sorting smallest and biggest numbers are equally spreaded in the array O(n^2)

//1.4.Dizi sıralandıktan sonra 18 sayısı ortada olduğundan avarage case kapsamında değerlendirilebilir.

//2.1.
//  [2, 3, 5, 8, 7, 9, 4, 15, 6]
//  [2, 3, 4, 8, 7, 9, 5, 15, 6]
//  [2, 3, 4, 5, 7, 9, 8, 15, 6]
//  [2, 3, 4, 5, 6, 9, 8, 15, 7]
//  [2, 3, 4, 5, 6, 7, 8, 15, 9]
//  [2, 3, 4, 5, 6, 7, 8, 9, 15]
//Final return value : [2, 3, 4, 5, 6, 7, 8, 9, 15]

//2.2.Big(O) Notation : O(n^2)

//2.3.Best Case : Array is already sorted O(n)
//    Worst Case : Array is sorted starting with the biggest number to smallest O(n^2)
//    Avarage Case : We dont need to run through all elments for sorting smallest and biggest numbers are equally spreaded in the array O(n^2)