/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(array) {
    let testEmployee = {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
};
return testEmployee
};
// creates array of arrays for all punched in employees
function createEmployeeRecords (arrArr) {
    const catalog = arrArr.map(array => createEmployeeRecord(array))
    return catalog
}
//fills time in event
function createTimeInEvent(date) {
    const time = date.split(' ')
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(time[1]),
        date: time[0],  
    })
    return this
}
//fills time out event
function createTimeOutEvent(date) {
    const time = date.split(' ')
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(time[1]),
        date: time[0],  
    })
    return this
}

// returns hours worked
function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(time => date == time.date)
    const timeOut = this.timeOutEvents.find(time => date == time.date)
    const totalHrs = (timeOut.hour - timeIn.hour) / 100
    return totalHrs
}

function wagesEarnedOnDate(payDate) {
    const payRate = this.payPerHour
    const hrsWorked = hoursWorkedOnDate.call(this, payDate)
    // console.log(hrsWorked)
    const totalWages = payRate * hrsWorked
    return totalWages
}

// Also confused nvm
// all good
function allWagesFor() {
    // console.log(this)
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    // console.log(eligibleDates)
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
// finds employee by name re-used function from my intro_context_lab
function findEmployeeByFirstName(array, firstName) {
    firstName = array.find(x => x.firstName)
    return firstName
}
//accumulates all dates and pay rates
function calculatePayroll (record){
    // console.log(record)    
    return record.reduce(function(acc, val) {
        return acc + allWagesFor.apply(val)
    }, 0)
}