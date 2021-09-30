//We have an array of cities. Assign each city in different individual variable. hint ['LA', 'new york', 'karachi','islamabad']

// const arr = ['LA', 'new york', 'karachi', 'islamabad']
// let [city1, city2, city3, city4] = arr
// alert(city1)
// alert(city2)
// alert(city3)
// alert(city4)
// =======================================================================================================

//We have a student object. Assign each property in different and individual variable in JS {name:'Marry',age:20,rollNo:2}

// let obj = {
//     name: 'Marry',
//     age: 20,
//     rollNo: 2
// }

// let{name,age,rollNo} = obj
// alert(name)
// alert(age)
// alert(rollNo)
// =======================================================================================================


//A function is taking 5 arguments and You have to pass it through an array.
//let arr = [1,2,3,4,5]

// let arr = [1,2,3,4,5]

// function myFoo(a,b,c,d,e)
// {
//     alert(a)
//     alert(b)
//     alert(c)
//     alert(d)
//     alert(e)
// }

// myFoo(arr[0],arr[1],arr[2],arr[3],arr[4])
// =======================================================================================================


//Given an array of firstname and an array of last name. First check both array size is equal or not, if equal then make third new array which has first last name concat value
//let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
//let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
//['maryam khan', 'hira ayub', 'faiza aziz', 'aisha yasin']

// let firstNames = ['maryam', 'hira', 'faiza', 'aisha']
// let lastNames = ['khan', 'ayub', 'aziz', 'yasin']
// let newArr=[]
// if (firstNames.length == lastNames.length) {
//     for (i = 0; i < firstNames.length; i++) {
//          newArr[i] = firstNames[i] + " " + lastNames[i]
//     }
// }
// else {
//     alert("The length of the arrays are not equal")
// }

// alert(newArr[0])
// alert(newArr[1])
// alert(newArr[2])
// alert(newArr[3])

// =======================================================================================================

//Create an arrow function that takes array as an input and make each element double and then return an array 

// let myFunction = () => {
//     let num=[]
//     for(i=0;i<4;i++){
//         num[i]= +prompt("Enter number " + (i+1))
//         num[i]= num[i]*2
//     }
//     return num;
// }

// let ans=[]
// ans=myFunction()
// alert(ans)

// =======================================================================================================

//Create an arrow function that takes a number and return square of a number

// let square = (a)=> a*a

// alert(square(8))

// =======================================================================================================


/*question: `var authenticated=true;
var allowed = authenticated ? (alert('you r allowed')) : (alert('you are not allowed))
which alert will run
*/

// This alert will run
//  (alert('you r allowed')) 


// =======================================================================================================


/*
question: ` What is the value of canDrive
        var age = 12;
        var canDrive = age > 18 ? 'yes' : 'no';
        `,
        answers: ['12', '18', 'yes', 'no'],
        which is correct answer
        */

// 'no' will be the value of canDrive


// =======================================================================================================
        
/*
question: `const dog='snickers'
        logdog(dog);
        function logdog(dog){
            console.log(dog)
        }
         function go(){
             const dog='sunny';
             logdog(dog)
         }`,
        answers: ['snickers sunny','sunny snickers','snickers snickers','sunny sunny'] */


        // snickers will be the output

// =======================================================================================================


//let text = `He's often called "Johnny"`;
// console.log(text)// write the answer here

//output
// He's often called "Johnny"

// =======================================================================================================

/*function welcomeMsg(name = "Everyone") {
    let msg = "Welcome " + name
    console.log(msg)
}
// welcomeMsg("Faiza")
// welcomeMsg()
I have called funtion twice , share the answer what is printed each time
*/

//output
// Welcome Faiza
// Welcome Everyone

// =======================================================================================================

//make a promise that resolves after 5 sec. Use setTimeOut for resolve.

// let myPromise = new Promise((resolve)=>{
//     setTimeout(()=>{
//         resolve("Promise resolved")
//     },5000)
// })

// myPromise
//     .then(res=>console.log(res))

// =======================================================================================================
