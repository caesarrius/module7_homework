const pet  = {
    animal : 'cat',
    color : 'black'
};

function checkProp(str = 'animal', pet) {
    if (str in pet) {
        console.log('true')
    } else {
        console.log('false')
    }
}

checkProp('animal', pet);
