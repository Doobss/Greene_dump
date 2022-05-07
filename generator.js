

const randInt = (max, type = 'floor') => {
  if (type === 'floor') {
    return Math.floor(Math.random() * max)
  }
  if (type === 'ceil') {
    return Math.ceil(Math.random() * max)
  }
  if (type === 'round') {
    return Math.round(Math.random() * max)
  }
  return Math.random() * max
}

// USERS table
// firstName TEXT NOT NULL,
const firstNames = ['Tim', 'Sam', 'Reyna', 'Gary', 'Melanie', 'Hal', 'Old English Aristocrat', 'Simi', 'Jenna', 'Serena']
// lastName TEXT NOT NULL,
const lastNames = ['Smith', 'Sampson', 'Shmo', 'Teller', 'Frank', 'Grump', 'Glurp', 'Christianson?']
// userName TEXT NOT NULL,
const userNameFrags = ['cool', 'Guy', 'Girl', 'chill', '3', '5', '2', '6', 'take', 'my', 'clothes', 'shits', 'lol']
const lats = [31, 47]
const lngs = [-69, -120]

const userLengths = {
  firstNamesL: firstNames.length,
  lastNamesL: lastNames.length,
  userNameFragsL: userNameFrags.length,
}



const genRandFromRange = (range) => {
  const dif = range[1] - range[0]
  return range[0] + (dif * Math.random())
}


const genRandUserName = (maxNumberOfFrags = 5) => {
  const { userNameFragsL } = userLengths
  let numOfFrags = randInt(maxNumberOfFrags, 'ceil')
  let newUserName = ''
  while (numOfFrags--) {
    newUserName += userNameFrags[( randInt(userNameFragsL) )]
  }
  return newUserName
}

const maxInterests = 5;
const genRandInterests = (numClaimables) => {
  let numInterests = randInt(maxInterests, 'ceil')
  let newInterests = []
  while (numInterests--) {
    newInterests.push( randInt(numClaimables, 'round') )
  }
  return newInterests
}

const genRandUser = (numClaimables, numClaimed) => {
  const { firstNamesL, lastNamesL, userNameFragsL, locationsL, } = userLengths
  return {
    first_name: firstNames[( randInt(firstNamesL) )],
    last_name: lastNames[( randInt(lastNamesL) )],
    user_name: genRandUserName(),
    lat: genRandFromRange(lats),
    lng: genRandFromRange(lngs),
    is_charity: !(!!randInt(5, 'round')),
    claimed: [],
    interested: genRandInterests(numClaimables),
  }
}

module.exports.user = genRandUser




// CLAIMABLES table
// title TEXT NOT NULL,
const titles = ['this probably doenst match', 'chinos', 'My old things', 'LIKE NEW']
// description TEXT NOT NULL,
const descriptions = ['even cooler', 'super cool', 'Just need to get rid of', 'Regifted ughhh']
// category TEXT NOT NULL,
const categorys = ['toy', 'shoes', 'Pants', 'Shirt', 'Jumpa', 'Undies o_o', 'Jacket']
// tag TEXT NOT NULL,
const tags = ['charity', 'individual']

const claimableLengths = {
  titlesL: titles.length,
  descriptionsL: descriptions.length,
  categorysL: categorys.length,
  tagsL: tags.length,
}



const genRandClaim = (numClaim) => {
  const { titlesL, descriptionsL, categorysL, tagsL, locationsL, } = claimableLengths
  return {
    title: titles[( randInt(titlesL) )],
    description: descriptions[( randInt(descriptionsL) )],
    category: categorys[( randInt(categorysL) )],
    tag: tags[( randInt(tagsL) )],
    charity_only: !!randInt(1, 'round'),
    lat: genRandFromRange(lats),
    lng: genRandFromRange(lngs),
  }
}

module.exports.claim = genRandClaim



