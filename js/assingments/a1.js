var address = { 
    street: "Rua dos pinheiros", 
    number: 1293, 
    neigbourhood: "Centro", 
    city: "São Paulo", 
    province: "SP" 
};

function formatAddress(address) {
    var str = ''
    str = `The user lives in ${address.city} / ${address.province}, in the neighbourhood ${address.neigbourhood}, street ${address.street} number ${address.number}.`;
    return str;
}

console.log(formatAddress(address));

/**
 * Prints all even numbers in the interval x and y.
 * @param { Small number } x 
 * @param { Large number } y 
 */
function evenNumbers(x, y) {
    for(var i = x + 1; i < y; i++) {
        if(i % 2 === 0 )
            console.log(i);
    }
}

evenNumbers(32, 321);

/**
 * Check if the array skills has the desired skill
 * 
 * @param { List of skills } skills 
 * @param { Skill to check } skillToCheck 
 */
function hasSkill(skills, skillToCheck) {
    // using indexOf() could have been an option!
    var result = false;
    for(skill of skills) {
        if (skill.toLowerCase() === skillToCheck.toLowerCase())
            result = true;
    }
    return result;
}

var skills = ["JavaScript", "ReactJS", "React Native"];
console.log(hasSkill(skills, "JavaScript"));

function expertise(years) {
    var result = '';
    if(years >= 0 && years <= 1) {
        result = 'Beginner';
    } else if(years > 1 && years <= 3) {
        result = 'Intermediate';
    } else if(years > 3 && years <= 6) {
        result = 'Advanced';
    } else {
        result = 'Jedi Master';
    }

    return result;
}

var yearsOfStudy = 7;
console.log(expertise(yearsOfStudy));


var users = [ 
    { name: "Diego", skills: ["Javascript", "ReactJS", "Redux"] },  
    { name: "Gabriel", skills: ["VueJS", "Ruby on Rails", "Elixir"] }
];

function formatSkills(users) {
    for (user of users) {
        var str = `${user.name} has the following skills: ${user.skills.join(', ')}`;
        console.log(str);
    }
}

formatSkills(users);

