class ElectricalAppliance {
    constructor(name) {
      this.powerType = 'electricity';
      this.name = name;
    }
    
    turnOn() {
    console.log("Electrical appliance was TURNED ON.");
    }
    
    turnOff() {
    console.log("Electrical appliance was TURNED OFF.");
    }
    
    getName() {
    console.log("This electrical appliance is called " + this.name);
    }
  }
  
  //Lamp
  
  class Lamp extends ElectricalAppliance {
    constructor(name, powerConsumption, lightColor) {
      super(name);
      this.powerConsumption = powerConsumption;
      this.lightColor = lightColor;
    }
    
    getLightColor() {
      console.log('The light color of this lamp is ' + this.lightColor);
    }
  }
  
  //PC or Personal Computer
  
  class PC extends ElectricalAppliance {
    constructor(name, powerConsumption, computerType) {
      super(name);
      this.powerConsumption = powerConsumption;
      this.computerType = computerType;
    }
    
    getComputerType() {
      console.log('Computer type - ' + this.computerType);
    }
  }
  
  //Lamp checking
  
  const lamp1 = new Lamp('LAMP1', 120, 'BLUE');
  lamp1.turnOn();
  lamp1.getName();
  lamp1.getLightColor();
  
  //PC checking
  
  const pc1 = new PC('PC1', 10000, 'MONOBLOCK');
  pc1.turnOff();
  pc1.getName();
  pc1.getComputerType();