function theBeatlesPlay(musicians, instruments) {
  var theBand =[]
  for (var i = 0; i < musicians.length; i++) {
    theBand = [...theBand, musicians[i]+' plays '+instruments[i]]
  }
  return theBand
}

function johnLennonFacts(facts) {
  var newFacts = []
  var n = 0
  while (facts.length > n) {
    newFacts.push(facts[n]+'!!!')
    n++
  }
  return newFacts
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.unshift('I love the Beatles!')
    n++
  } while (n < 15);
  return array
}
