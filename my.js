1.	//ფუნქციის საშულებით გამოიტანეთ ყველა რიცხვის ჯამი: არგუმენტად გადაეცით ეს მასივი:
//10, 50, 6, 7, 8, 11, 6, 3, 9

function fnc(...arr){
    let sum=0

    for(let item of arr){ 
        sum+=item }
    return sum
}
let resultfnc=fnc(10, 50, 6, 7, 8, 11, 6, 3, 9)
console.log(resultfnc);

//ფუნქციამ უნდა დააბრუნოს სახელი და გვარი ადგილის გამოტოვებით (მაგ: 
//'giorgi saakadze') თუ isloggedin არის true და false თუ isloggedin 
//ფროფერთი არის false;

	let user = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  
  function userInfo(user){
    if(user.isloggedin){ 
        return `${user.firstname} ${user.lastname}`}
        {return false}

  }

  let resultUserInfo=userInfo(user)
  console.log(resultUserInfo);
  
  //3.	შექმენით ფუნქცია რომელსაც გადაეცემა ერთი პარამეტრი. ეს პარამეტრი უნდა იყოს 
  //რიცხვების მასივი და ფუნქციამ უნდა დააბრუნოს ამ რიცხვებიდან მაქსიმალური:

  function fnc2(...arr1){
    let maxvalue=0
    for(let item of arr1)
        if(item>=maxvalue){
            maxvalue=item
        }{
            return maxvalue
        }
  }

  let resultfnc2=fnc2(5,9,56,76,3)
  console.log(resultfnc2);
  

  function fnc3(...arr2){
    for(let item of arr2)
        {
        return Math.max(...arr2)
        }
  }

  let resultfnc3=fnc3(5,9,56,76,3)
  console.log(resultfnc3);

  //4.	დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიიღებს ერთ რიცხვს და 
  //გამოთვლის გადაცემული მნიშვნელობა კენტია თუ ლუწი; თუ ლუწია 
  //დააბრუნოს - this number is even‘; თუ კენტია დააბრუნოს - this number is odd‘

  function numberFnc(number){
    if (number%2===0){ 
        return `this number is even`
    }
    { return `this number is odd`}
  }

  let resultNumber4=numberFnc(15)
  console.log(resultNumber4);


  //5.	მოცემულია მასივი:
// for ციკლის საშუალებით მიიღეთ reverse ვერისია, ანუ 5,4,3,2,1

let array = [1,2,3,4,5]; 
let arrayNew=[]

for(let index=array.length-1;index<=0;index--){
console.log(array[index]);

}

  //6.	ფუნქციის საშუალებით გამოთვალეთ იუსერის ასაკი 
  //( არგუმენტად გადაეცით ნებისმიერი რიცხვი) და დაამატეთ შემდეგი პირობა, 
  //თუ გადაცემული ასაკი მეტია 18- ზე დააბრუნეთ - სრულლოვანი, 
  //თუ ნაკელებია  დააბრუნეთ არასწულწლოვანი. 
//ეს ამოცანა დაწერეთ arrow function-ით და if ის პირობა ჩაწერეთ ახალი სინტაქსით;

function fncAge(age){
    if(age>18){
        return ` სრულლოვანი`
    }
    { return `არასწულწლოვანი`}
}

let resultAge=fncAge(33)
console.log(resultAge);


let fncAge1=(age1)=>{
    if(age1>18){return ` სრულლოვანი`}{ `არასწულწლოვანი`}
}

let resultAge1=fncAge1(33)
console.log(resultAge);

//7.	მოცემულია მასივი
//let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - 
//მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let item4 of array2){
    if (item4===5)
       
    break     
}
console.log(`არის`);

//8.	მოცემულია მასივი
//გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)

let array5 = [1, 2, 3, 7, 6, 9];
for(let i=0;i<array5.length;i++){
    if(array5[i]===7 )
        {continue} 
    console.log(array5[i]);
}



let array6 = [1, 2, 3, 7, 6, 9];
for (let item of array6) {
  if (item === 7) {
    continue;
  }
  console.log(item);
}

