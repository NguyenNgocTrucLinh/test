let arr = ["ax", "mof", "4", "63", "42", "3", "10", "[", "23", "adidas", ")", "ABC"];

SortArray = (array) => {
    let arrayNumber = [], arrayString = [], arraySpecial = [],a;
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        //lấy kí tự đầu, chuyển sang giá trị trong bảng ASCII
        index = array[i].charCodeAt(0); 
        //chia làm 3 mảng number,string, special
        if (index > 47 && index < 58) {
            arrayNumber.push(parseInt(array[i]));  //khoảng number trong bảng Ký tự ASCII
        } else
            if ((index > 64 && index < 91) || (index > 96 && index < 123)) {
                arrayString.push(array[i]); //khoảng string trong bảng Ký tự ASCII
            } else {
                //do ký tự đặc biệt không thể dùng hàm sort so sánh, nên so sánh theo mảng chứa thứ tự trong bảng ASCII
                arraySpecial.push(index);
            }
    }

    array=[];
    //khi hàm sort() so sánh hai giá trị, nó sẽ gửi giá trị tới hàm so sánh và sắp xếp theo giá trị kết quả trả về 
    arrayNumber.sort(function (a, b) { return (a - b) });
    for (let i = 0; i < arrayNumber.length; i++) {
        array.push(arrayNumber[i].toString())  
    }
   
    //nối mảng number, string
    arrayString.sort();
    array = array.concat(arrayString);

    //sắp xếp mảng ký tự đặc biệt
    arraySpecial.sort(function (a, b) { return (a - b) })
    for (let i = 0; i < arraySpecial.length; i++) {
        // chuyển về mảng kí tự đặc biệt và thêm vào array
        array.push(String.fromCharCode(arraySpecial[i]))
    }

   console.log(array);
}

SortArray(arr);

//Độ phức tạp: O(n)
//How to run: Open Terminal --> node sortArray.js








