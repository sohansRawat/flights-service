function addRowLocksOnFlights(flightId){
    return `SELECT * from Flights WHERE Flights.id=${flightId} FOR UPDATE `
}

module.exports={
    addRowLocksOnFlights,
}