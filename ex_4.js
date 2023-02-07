function ElectricalAppliance(name) {
    this.name = 'Electrical Appliance',
    this.size = 'optimal'
}

ElectricalAppliance.prototype.getPowerOn = function(name,power) {
    if(powerSum !== 0 && (powerSum >= 80 && powerSum > 54)) {
        console.log("You can't turn on appliance twice");
    } else {
       console.log(`${name} is on`);
        powerSum += power;
        console.log(`Now power is ${powerSum} watts`);
    }
    
}

ElectricalAppliance.prototype.getPowerOff = function(name,power) {
    if(powerSum === 0 || ( powerSum <= 80 && powerSum < 54)) {
        console.log("You can't turn off appliance, it's already turned off");
    } else {
       console.log(`${name} is off`);
        powerSum -= power;
        console.log(`Now power is ${powerSum} watts`) 
    }
}

function DeskAppliance (name,power) {
    this.name = 'Desk Appliance',
    this.location = 'desk'
}

DeskAppliance.prototype = new ElectricalAppliance();

const deskLamp = new DeskAppliance('Desk Lamp', 54);
const computer = new DeskAppliance('Computer', 80);

let powerSum = 0;



deskLamp.getPowerOff('Desk Lamp', 54);


computer.getPowerOff('Computer', 80);
deskLamp.getPowerOn('Desk Lamp', 54);
computer.getPowerOn('Computer', 80);

