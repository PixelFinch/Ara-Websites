describe('CycleApp', function() {
  var user


  beforeEach(function() {
    theUser = new User()
  })


  describe('Empty user', function() {
    beforeEach(function() {
      theUser = new User()
    })
    
    it('should have a userID property', function() {
      expect(theUser.hasOwnProperty('userID')).toBeTruthy()
    })

    it('should have a username property', function() {
      expect(theUser.hasOwnProperty('username')).toBeTruthy()
    })

    it('should have a password property', function() {
      expect(theUser.hasOwnProperty('password')).toBeTruthy()
    })

    it('should have a totalKM property', function() {
      expect(theUser.hasOwnProperty('totalKM')).toBeTruthy()
    })

    it('should have a totalKM of 0', function() {
      const count = theUser.totalKM
      expect(count).toBe(0)
    })
    
    it('should have an .allGoals property', function() {
      expect(theUser.hasOwnProperty('allGoals')).toBeTruthy()
    })
    
    it('should have an array for the .allGoals ', function() {
      expect(Array.isArray(theUser.allGoals)).toBeTruthy()
    })
    
    it('should have nothing in the allGoals array', function() {
      const arraySize = theUser.allGoals.length 
      expect(arraySize).toBe(0)
    })

    it('should have an .allTrips property', function() {
      expect(theUser.hasOwnProperty('allTrips')).toBeTruthy()
    })
    
    it('should have an array for the .allTrips ', function() {
      expect(Array.isArray(theUser.allTrips)).toBeTruthy()
    })
    
    it('should have nothing in the allTrips array', function() {
      const arraySize = theUser.allTrips.length 
      expect(arraySize).toBe(0)
    })

  })

  describe('a user with 1 goal', function() {
    beforeEach(function() {
      theUser.addGoal(1, 'New Goal', 'duration', 30.00, 'Goal new note')
    })

    it('should have one entry in the allGoals array', function() {
      const arrayLength = theUser.allGoals.length 
      expect(arrayLength).toBe(1)
    })

    it('should have a Goal object in the allGoals array', function() {
      const aGoal = theUser.allGoals[0] 
      expect(aGoal instanceof Goal).toBeTruthy()
    })    
    
    describe('The goal named New Goal targeting duration of 30.00', function() {
      var aGoal
      beforeEach(function() {
        aGoal = theUser.allGoals[0] 
      })
      it('should have a .goalID property', function() {
        expect(aGoal.hasOwnProperty('goalID')).toBeTruthy()
      })      
      it('should have a .goalName property', function() {
        expect(aGoal.hasOwnProperty('goalName')).toBeTruthy()
      })       
      it('should have a .statistic property', function() {
        expect(aGoal.hasOwnProperty('statistic')).toBeTruthy()
      })  
      it('should have a .statisticTarget property', function() {
        expect(aGoal.hasOwnProperty('statisticTarget')).toBeTruthy()
      })  
      it('should have a .notes property', function() {
        expect(aGoal.hasOwnProperty('notes')).toBeTruthy()
      })  
      it('should have a .goalID of 1', function() {
        var theValue = aGoal.goalID
        expect(theValue).toBe(1)
      })      
      it('should have a .goalName of New Goal', function() {
        var theValue = aGoal.goalName
        expect(theValue).toBe('New Goal')
      })       
      it('should have a .statistic of duration', function() {
        var theValue = aGoal.statistic
        expect(theValue).toBe('duration')
      })   
      it('should have a .statisticTarget of 30.00', function() {
        var theValue = aGoal.statisticTarget
        expect(theValue).toBe(30.00)
      })   
      it('should have a .notes of Goal new note', function() {
        var theValue = aGoal.notes
        expect(theValue).toBe('Goal new note')
      })   

      
    })
    
  })

  describe('a user with 1 trip', function() {
    beforeEach(function() {
      theUser.addTrip(1, 'New Trip', 'Cashmere')
    })

    it('should have one entry in the allTrips array', function() {
      const arrayLength = theUser.allTrips.length 
      expect(arrayLength).toBe(1)
    })

    it('should have a Trip object in the allTrips array', function() {
      const aTrip = theUser.allTrips[0] 
      expect(aTrip instanceof Trip).toBeTruthy()
    })    
    
    describe('The trip named New Trip with a start of Cashmere', function() {
      var aTrip
      beforeEach(function() {
        aTrip = theUser.allTrips[0] 
      })
      it('should have a .tripID property', function() {
        expect(aTrip.hasOwnProperty('tripID')).toBeTruthy()
      })      
      it('should have a .tripName property', function() {
        expect(aTrip.hasOwnProperty('tripName')).toBeTruthy()
      })       
      it('should have a .start property', function() {
        expect(aTrip.hasOwnProperty('start')).toBeTruthy()
      })  
      it('should have a .end property', function() {
        expect(aTrip.hasOwnProperty('end')).toBeTruthy()
      })  
      it('should have a .duration property', function() {
        expect(aTrip.hasOwnProperty('duration')).toBeTruthy()
      })  
      it('should have a .distance property', function() {
        expect(aTrip.hasOwnProperty('distance')).toBeTruthy()
      })  
      it('should have a .calories property', function() {
        expect(aTrip.hasOwnProperty('calories')).toBeTruthy()
      })  
      it('should have a .completed property', function() {
        expect(aTrip.hasOwnProperty('completed')).toBeTruthy()
      })  
      it('should have a .tripID of 1', function() {
        var theValue = aTrip.tripID
        expect(theValue).toBe(1)
      })      
      it('should have a .tripName of New Trip', function() {
        var theValue = aTrip.tripName
        expect(theValue).toBe('New Trip')
      })       
      it('should have a .start of Cashmere', function() {
        var theValue = aTrip.start
        expect(theValue).toBe('Cashmere')
      })   
      it('should have a .end of undefined', function() {
        var theValue = aTrip.statisticTarget
        expect(theValue).toBe(undefined)
      })   
      it('should have a .duration of 0', function() {
        var theValue = aTrip.duration
        expect(theValue).toBe(0)
      }) 
      it('should have a .distance of 0', function() {
        var theValue = aTrip.distance
        expect(theValue).toBe(0)
      }) 
      it('should have a .calories of 0', function() {
        var theValue = aTrip.calories
        expect(theValue).toBe(0)
      }) 
      it('should have a .completed of false', function() {
        var theValue = aTrip.completed
        expect(theValue).toBe(false)
      }) 

      
    })
    
  })

  describe('a user with 3 Goals', function() {
    beforeEach(function() {
      theUser.addGoal(1, 'Goal 1', 'duration', 10.00, 'Hi')
      theUser.addGoal(2, 'Goal 2', 'distance', 100.00, 'Hello')
      theUser.addGoal(3, 'Goal 3', 'calories', 50.00, 'Hey there')
    })

    it('should have a goal count of 3', function() {
      const arrayLength = theUser.allGoals.length 
      expect(arrayLength).toBe(3)
    })
  })

  describe('a user with 3 Trips', function() {
    beforeEach(function() {
      theUser.addTrip(1, 'Trip 1', 'Cashmere')
      theUser.addTrip(2, 'Trip 2', 'Sydenham')
      theUser.addTrip(3, 'Trip 3', 'CBD')
      selectedTrip = 'Trip 2'
    })
    it('should have a trip count of 3', function() {
      const arrayLength = theUser.allTrips.length 
      expect(arrayLength).toBe(3)
    })
    it('should return index of trip from a trips name of Trip 2', function() {
      searchTerm = "Trip 2"
      var result = theUser.findTrip(searchTerm);
      console.log(result)
      expect(result.tripID).toBe(2);
    })
  })

  describe('a user with 1 goal deletes goal', function() {
    beforeEach(function() {
      theUser.addGoal(1, 'New Goal', 'duration', 30.00, 'Goal new note')
      selectedGoal = 1
      theUser.deleteGoal(selectedGoal)
    })
    it('should have a goal count of 0', function() {
      const arrayLength = theUser.allGoals.length 
      expect(arrayLength).toBe(0)
    })
  })

  describe('a user with 1 trip deletes trip', function() {
    beforeEach(function() {
      theUser.addTrip(1, 'New Trip', 'Cashmere')
      selectedTrip = 1
      theUser.deleteTrip(selectedTrip)
    })
    it('should have a trip count of 0', function() {
      const arrayLength = theUser.allTrips.length 
      expect(arrayLength).toBe(0)
    })
  })

})
