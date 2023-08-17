//given information
let employee = {
    name: ['Biff', 'Henderson'],
    employeeNumber: 30573,
    department: 'Repossesions',
    interests: ['the Mob', 'fast cars', 'baseball'],
    active: true
};

// joining the first and last name to have a full name
let fullName = employee.name.join(' ');
// showing all the hobbies of the employee by using the join function
let hobbies = employee.interests.join(', ');
// assigning a variable to the paragraph
let sentenceFormEmpDetailsPara = document.getElementById('sentenceFormEmpDetails');
// Making a sentence
sentenceFormEmpDetailsPara.textContent = `${fullName} having Employee Number: ${employee.employeeNumber} works in the department of ${employee.department}. His interest are in ${hobbies}. Nowadays, he is ${employee.active ? 'active' : 'not active'}.`;