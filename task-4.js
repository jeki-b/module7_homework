function ElectrAppliance(name){
    this.name = name
}

ElectrAppliance.prototype.switchOnOf = function (OnOff){
    if(OnOff === true){
        console.log("Прибор включен");
    }else console.log("Прибор выключен");
}

ElectrAppliance.prototype.countPower = function(power) {
    console.log(`Потребляемая мощность ${power} ватт`)
}

function TableLamp(name, color) {
    this.name = name;
    this.color = color;
}

TableLamp.prototype = new ElectrAppliance();


function SewingMachines(name, model, color) {
    this.name = name,
    this.model = model,
    this.color = color
}

SewingMachines.prototype = new ElectrAppliance();

SewingMachines.prototype.getPrice = function(price){
    console.log(`Стоимость ${price} тенге`);
}

const overlock = new SewingMachines("Overlock","Janome","white");
const NightLight = new TableLamp("IKEA","white");

overlock.countPower(220);
NightLight.switchOnOf(true);
overlock.getPrice(200000);