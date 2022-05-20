//1*:
//Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
//Пример: const checkAge = function(age) {
//Ваши преобразования
//}
//Вывести в консоль результат работы функции с возрастами 17, 18, 61
//
//2*:
//Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
//
//3**:
//Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
//
//4***:
//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке

const checkAge = function(age) { 
if (typeof age != 'number' && age != '2') {
    console.log('Error');
    if (age == '2') {
        checkAge(2);
    }
} else if (age < 17) {
    console.log("You don’t have access cause your age is " + age + " It’s less then 17");
} else if (age >= 17 && age <= 18) {
    console.log('Welcome!');
} else if (age > 18 && age <= 61) {
    console.log('Keep calm and look Culture channel');
} else {
    console.log('Technical work');
}
}
checkAge('2');

let agePromt = prompt('Enter your name');
checkAge(agePromt);
