/* globals localStorage */

// Defult values
const STORAGE_KEY = 'cycleApp'

// User constructor
class User {
    constructor (newUserID, newUsername, newPassword) {
      this.userID = newUserID
      this.username = newUsername
      this.password = newPassword
      this.totalKM = 0
      this.allGoals = []
      this.goalCount = 0
      this.allTrips = []
      this.tripCount = 0
    }

    addTrip(newTripID, newTripName, newStart) {
      let newTrip = new Trip(newTripID, newTripName, newStart)
      this.allTrips.push(newTrip)
      this.tripCount += 1
    }

    addGoal(newGoalID, newGoalName, newStatistic, newStatisticTarget, newNotes) {
      let newGoal = new Goal(newGoalID, newGoalName, newStatistic, newStatisticTarget, newNotes)
      this.allGoals.push(newGoal)
      this.goalCount += 1
    }

    deleteTrip(selectedTrip) {
        const index = this.allTrips.findIndex(Trip => Trip.tripID === selectedTrip)
        this.allTrips.splice(index, 1)
        this.goalCount -= 1
    }

    deleteGoal(selectedGoal) {
        const index = this.allGoals.findIndex(Goal => Goal.goalID === selectedGoal)
        this.allGoals.splice(index, 1)
        this.goalCount -= 1
    }

    tripCompleted(selectedTrip) {
        selectedTrip.finished = true  
    }

    goalCompleted(selectedGoal) {
        selectedGoal.finished = true  
    }

    findTrip(selectedTrip) {
        return this.allTrips.find((Trip) => Trip.tripName === selectedTrip)
    }

    toString () {
      let result = `You have ${this.tripCount} trips.${View.NEWLINE()}`
      for (let aTrip of this.allTrips) {
        result += View.TAB() + aTrip + View.NEWLINE()
      }
      result += `You have ${this.goalCount} goals.${View.NEWLINE()}`
      for (let aGoal of this.allGoals) {
        result += View.TAB() + aGoal + View.NEWLINE()
      }
      return result
    }

  }

// Trip constructor
class Trip {
  constructor (newTripID, newTripName, newStart) {
    this.tripID = newTripID
    this.tripName = newTripName
    this.start = newStart
    this.end = ''
    this.duration = 0
    this.distance = 0
    this.calories = 0
    this.completed = false
  }

  toString () {
    let result = `${this.tripName} | ${this.start} | ${this.end} | ${this.duration} | ${this.distance} | ${this.calories}`
    return result
  }
}

// Goal constructor
class Goal {
    constructor (newGoalID, newGoalName, newStatistic, newStatisticTarget, newNotes) {
      this.goalID = newGoalID
      this.goalName = newGoalName
      this.statistic = newStatistic
      this.statisticTarget = newStatisticTarget
      this.notes = newNotes
      this.completed = false
    }

    toString () {
      let result = `${this.goalName} | I want ${this.statistic} to be at ${this.statisticTarget} | | ${this.notes}`
      return result
    }
  }

//userOne.createTrip()

// Construct a trip from user input
//  addTrip (newName, newStartingLocation, newComment) {
//    newName = newName.trim()
//	newStartingLocation = newStartingLocation.trim()
//	newComment = newComment.trim()
//    if (!newName) {
//      return
//    }
//}

  // Load trips from localStorage
//  load () {
//    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
//  }

  //  Save trips to localStorage
//  save () {
//    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.allMyTrips))
//  }
	
  // Fetch all trips from Cycling Trips
//  getAllTrips () {
 //   return this.allMyTrips
//  }

  // Filter ongoing trips
 // getOngoingTrips () {
//    return this.allMyTrips.filter(Trip => !Trip.finished)
 // }

  // Filter finished trips
 // getFinishedTrips () {
//    return this.allMyTrips.filter(function (Trip) {
 //     return Trip.finished
 //   })
//  }

//    const newId = this.allMyTrips.length + 1
//    const aNewTrip = new Trip(newId, newName)
//    this.allMyTrips.push(aNewTrip)
//  }

  // Get total of remaining trips
//  remainingTrips () {
//    return this.getOngoingTrips().length
//  }

  // Get if there is no ongoing trips
//  getIfFinished () {
//    return this.remainingTrips() === 0
//  }

  // Set allMyTrips to finished
//  setAllFinished () {
//    this.allMyTrips.forEach(function (Trip) {
//      Trip.finished = true
 //   })
//  }

  // Delete trip
//  removeTrip (selectedTripName) {
 //   const index = this.allMyTrips.findIndex(Trip => Trip.name === selectedTripName)
//    this.allMyTrips.splice(index, 1)
//  }

  // Delete all finished trips
//  removeFinished () {
//    this.allMyTrips = this.getOngoingTrips ()
//  }

  // Edit trip
//  startEditing (Trip) {
	// Trip backup in case of cancel
//    this.beforeEditBackup = Trip.name
 //   this.editedTrip = Trip
//  }

 // finishedEditing (Trip) {
    // Feature Number 10 Validation
//    if (!Trip) {
 //     return
//    }
//    this.editedTrip = null
//    Trip.name = Trip.name.trim()
 //   if (!Trip.name) {
//      this.removeTrip(Trip)
 //   }
 // }

  // Restore from backup
//  cancelEditing (Trip) {
//    this.editedTrip = null
//    Trip.name = this.beforeEditBackup
//  }

  // Feature Number 12 Ordering
 // sortTrips () {
 //   this.allMyTrips.sort(function (a, b) {
 //     if (a.name < b.name) {
 //       return -1
 //     }
 //     if (a.name > b.name) {
//        return 1
 //     }
 //     // a must be equal to b
 //     return 0
//    })
 // }

  // Feature Number 13 Search for trip
//  findTrip (searchName) {
//    return this.allMyTrips.find((Trip) => Trip.name === searchName)
//  }
//}
