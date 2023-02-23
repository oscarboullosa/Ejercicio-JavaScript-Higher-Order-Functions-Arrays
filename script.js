const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Eight", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Nine", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Ten", category: "Retail", start: 1981, end: 1989 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//forEach
// companies.forEach(function (company) {
//   console.log(company.name);
// }); //Devuelve el nombre de todas las compañías
// PARA COMENTARLO TODO CTRL+K CTRL+C

//filter

// const canDrink=ages.filter(age => age>=21);
// console.log(canDrink); //Devuelve las edades mayores o iguales a 21

// const retailCompanies=companies.filter(company=>company.category==="Retail");
// console.log(retailCompanies); //Devuelve todas las compañías cuya categoría sea Retail

// const eightiesCompanies=companies.filter(company => (company.start>=1980 && company.start <=1990));
// console.log(eightiesCompanies); //Devuelve las compañías creadas entre los 80 y los 90

// const lastedTenYears=companies.filter(company =>(company.end - company.start>=10));
// console.log(lastedTenYears); //Devuelve las compañías que duraron 10 años o más

//MAP
// const companyNames=companies.map(company => company.name);
// console.log(companyNames); //Devuelve un array con los nombres de las compañias

// const testMap=companies.map(company => `${company.name} [${company.start}-${company.end}]`);
// console.log(testMap);
// //De esta forma me devuelve Company One [1981-2003] etc

// const agesSquare=ages.map(age => Math.sqrt(age));
// console.log(agesSquare); //Devuelve un array con las raíces de las edades

// const agesTimeTwo=ages.map(age=> age*2);
// console.log(agesTimeTwo); //Devuelve un array con todas las edades multiplicadas por dos

// const ageMap = ages
//     .map((age) => Math.sqrt(age))
//     .map((age) => age * 2);
// console.log(ageMap); //Devuelve un array con las raíces de las edades multiplicadas por 2

//SORT

// const sortedCompanies = companies.sort((a,b)=> (a.start>b.start ? 1 : -1));
// console.log(sortedCompanies); //Ordena por fecha de comienzo

// const sortAges=ages.sort();
// console.log(sortAges); //Si hago esto SOLO se me ordena la primera cifra del numero (41 menor que 5)

// const sortAges=ages.sort((a,b)=> a-b);
// console.log(sortAges); //Ordena por edades de menor a mayor

//REDUCE

// let ageSum=0;
// for(let i=0;i<ages.length;i++){
//     ageSum+=ages[i];
// }
// console.log(ageSum); //Suma de manera ineficiente todas la edades 

// const ageSum=ages.reduce((total,age)=>total+age,0); //OJO CON EL 0. Significa en qué valor empiezo la suma (total=0) al inicio
// console.log(ageSum); //Suma de manera eficiente todas las edades

// const totalYearsCompanies=companies.reduce((total,age)=>total+(age.end-age.start),0);
// console.log(totalYearsCompanies); //Devuelve los años que duraron todas las compañías

//COMBINACION
const combined=ages
    .map(age=>age*2)
    .filter(age=>age>=40)
    .sort((a,b)=> a-b)
    .reduce((total,age)=>total+age,0);

console.log(combined);