/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 const createEmployeeRecord = array => {
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: [],
        func : () => this

};
// return this.array
return testEmployee
};

const createEmployeeRecords = arrArr => {
    const catalog = arrArr.map(array => createEmployeeRecord(array))
    return catalog
}

const createTimeInEvent = (employeeRecord) => {
    const time = employeeRecord.split(' ')
    let newEvent = {
        type: 'TimeIn',
        hour: parseInt(time[1]),
        date: time[0]
    }
    // employeeRecord.timeInEvents.push(newEvent)
    console.log(employeeRecord)
}









// Also confused 
const allWagesFor = () => {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// finds employee by name re-used function from my intro_context_lab
const findEmployeeByFirstName = (array, firstName) => {
    firstName = array.find(x => x.firstName)
    return firstName
}