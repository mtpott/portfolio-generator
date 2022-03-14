//var commandLineArgs = process.argv;
//console.log(commandLineArgs);


const profileDataArgs = process.argv.slice(2, process.argv.length);
//console.log(profileDataArgs);

//print each command line argument one at a time when the function
//printProfileData is executed
const printProfileData = profileDataArr => {
    profileDataArr.forEach(profileItem => console.log(profileItem));
};

printProfileData(profileDataArgs);
