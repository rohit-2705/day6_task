class UberCalculator {
    constructor(baseFare, costPerKilometer, ) {
      this.baseFare = baseFare;
      this.costPerKilometer = costPerKilometer;
     
    }
  
    calculatePrice(distance) {
      const distanceCost = distance * this.costPerKilometer;
     
      const totalPrice = this.baseFare + distanceCost;
  
      return totalPrice;
    }
  }
  
  const uberXCalculator = new UberCalculator(5, 1.5,);
  
  const distance = 10; 
  
  const totalPrice = uberXCalculator.calculatePrice(distance);
  
  console.log(`UberX Price: $${totalPrice.toFixed(2)}`);