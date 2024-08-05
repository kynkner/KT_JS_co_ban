//Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
// Ví dụ:
function getStringHasMaxLength(arr){
    let max = Math.max(...arr.map(str => str.length));
    return arr.filter(str => str.length === max);
}


console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))
// Kết quả: ['aba', 'vcd'].
//-------------------------------------------------------------------------------

// Bài 2. Cho mảng users như sau:
users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
function userAgeAndisStatus(users){
    return users.filter(user => user.age > 25 && user.isStatus);
}
console.log(userAgeAndisStatus(users));
// Kết quả
// {"name": "Bùi Công Sơn", "age": 30, "isStatus": true}
//----------------------------------------------------------------------------------------
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần
function userAgeAscending(users){
    return users.slice().sort((a, b) => a.age - b.age);
}
console.log(userAgeAscending(users));
// Kết quả
// [
//     {"name": "Phạm Văn Dũng", "age": 20, "isStatus": false},
//     {"name": "Nguyễn Thu Hằng", "age": 27, "isStatus": false},
//     {"name": "Bùi Công Sơn", "age": 30, "isStatus": true}
//]
//------------------------------------------------------------------------------------------------------------------------------
//  Bài 3. Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
function getCountElement(arr){
    const count = {};
    arr.forEach(str => {
        if(count[str]){
            count[str]++;
        }else{
            count[str] = 1;
        }
    });
    return count;
}

console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));
// Kết quả
// {one: 3, two : 1, three : 2
// }