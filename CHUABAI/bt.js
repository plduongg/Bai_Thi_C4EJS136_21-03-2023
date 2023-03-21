// btap 4

const array = [1, 2, 7, 9, 10, 12, 20, 8];
const newArr = [];

// lọc ra 1 mảng mới có tên là newArr chỉ chứa các phần 
// tử là số chẵn từ mảng đã cho. Thực hiện chức năng này dưới dạng function

function bt4(array){
    for(let i=0 ; i < array.length ; i++){
        if(array[i]%2===0){
            newArr.push(array[i])
        }
    }
}

bt4(array)
console.log(newArr)

array[1] = 100
console.log(array)


let chieucao = prompt("vui long nhap chieu cao", "");
let cannang = prompt("vui long nhap can nang", "");

console.log(chieucao)
console.log(cannang)
const dvm = chieucao/100
const BMI = cannang/(dvm*dvm)

if(BMI > 25){
    console.log("Béo")
}else if(18 <= BMI && BMI <=25){
    console.log("Trung binh")
}else {
    console.log("Gầy")
}
console.log(BMI)
document.write('pld-2004')

const danhsachlop = [
    {
        name: "A",
        diem: 6
    },
    {
        name: "B",
        diem: 7
    },
    {
        name: "C",
        diem: 8
    },
    {
        name: "D",
        diem: 9
    },
    {
        name: "E",
        diem: 10
    },
]

for(let i=0 ; i < danhsachlop.length ; i++){
    document.write(`<h2>${danhsachlop[i].name} - ${danhsachlop[i].diem} <br></br> </h2>`)
}