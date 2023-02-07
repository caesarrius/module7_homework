const myPet = {
    animal : 'cat',
    color : 'black',
    age : 11
}

const anotherPet = Object.create(myPet);
anotherPet.ownColor = 'white';

function showProps(anotherPet) {
    for(let key in anotherPet){
        if(anotherPet.hasOwnProperty(key) || 
            anotherPet.hasOwnProperty[key]) {
            console.log((key), ':' , anotherPet[key]);
        }
    }
}
showProps(anotherPet);