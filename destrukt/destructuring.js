// 1. feladat
let car = ['Ford', 'Mustang', 2022, 'blue'];
let [brand, model, year, color] = car;

console.log(brand);
console.log(model);
console.log(year);
console.log(color);

// kérdés: 
// 1. bármilyen tipusút
// 2. igen

// 2. feladat
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
};

let {bookTitle = book.title, bookAuthor = book.author, publicationYear, language} = book;

console.log(bookTitle);
console.log(bookAuthor);
console.log(publicationYear);
console.log(language);

// kérdés: 
// 1. több tagból álló stringet nem
// 2. nem

// 3. feladat
let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};

function printStudentInfo({name, age, grade, subjects}){
    console.log(`Név: ${name}, Életkor: ${age}, Jegy: ${grade}, Tantárgyak: ${subjects}`)
}

printStudentInfo(student)
