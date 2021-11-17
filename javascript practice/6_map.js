const instructors = [
    { name: 'Quincy', speciality: 'Quantam Mechanics' },
    { name: 'Kenn', speciality: 'Norse Mythology' },
    { name: 'Carolyn', speciaclity: 'Kung Fu' },
    { name: 'Paul', speciality: 'Entomology' },
];

let instructor_names = [];

instructors.forEach(instructor => {
    instructor_names.push(instructor.name);
});

console.log(instructor_names);

const instructorNames = instructors.map(instructor => instructor.name);
console.log(instructorNames);

let kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];
console.log(kvArray);

let reformattedArray = kvArray.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value;
    console.log(rObj);
});