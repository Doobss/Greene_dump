const { sql } = require('./connect')
const genRand = require('./generator')
const { getTests } = require('./tests')

const DBname = 'blue_ocean_dev'

const test = getTests(sql)

const randGenNums = true;
const baseUserGen = 1000
const baseClaimbleGen = 5000
const baseClaimedGen  = 5000

// Create a seedable randValue generator so we can all have equivelant DB values or our own.
const originalRand = Math.random
function mulberry32(a) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

const delay = (time = 500) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(true)
    }, time)
  })
}


let numRuns = 0
let numUsers = 0
let numClaimables = 0
let numClaimed = 0


const runHydration = async (numUserGen, numClaimbleGen, numClaimedGen, randGen = randGenNums, print = true) => {


  print && console.log(`HYDRATING DB ${DBname} \nRandom INSERT values set to ${randGen}`)


  numUserGen = randGen ? Math.ceil(Math.random() * baseUserGen) - 1 : numUserGen || (baseUserGen - 1);
  numClaimbleGen = randGen ? Math.ceil(Math.random() * baseClaimbleGen) - 1 : numClaimbleGen || (baseClaimbleGen - 1);
  numClaimedGen = randGen ? Math.ceil(Math.random() * baseClaimedGen) - 1 : numClaimedGen || (baseClaimedGen -1);

  print && console.log(`Generating ${numUserGen} users, ${numClaimbleGen} claimables, and ${numClaimedGen} claimed items`)

  numUsers += numUserGen
  numClaimables += numClaimbleGen
  numClaimed += numClaimedGen

  const users = []
  while (numUserGen--) {
    users.push(genRand.user(numClaimables, numClaimed))
  }

  await sql`INSERT INTO users ${ sql(users) }`
  print && console.log(`INSERTED ${users.length} random users into the USERS table`)


  const claimables = []
  while (numClaimbleGen--) {
    claimables.push(genRand.claim(numClaimables))
  }

  await sql`INSERT INTO claimables ${ sql(claimables) }`
  print && console.log(`INSERTED ${claimables.length} random claimables into the CLAIMABLES table`)



  const claimed = []
  while (numClaimedGen--) {
    claimed.push(genRand.claim(numClaimed))
  }

  await sql`INSERT INTO claimed ${ sql(claimed) }`
  print && console.log(`INSERTED ${claimed.length} random claimed into the CLAIMED table`)

  print && console.log(`HYDRATING DB ${DBname} COMPLETE`)
  print && await test.users()
  print && await test.claimables()
  // await delay()

}





const hydrate = async (runs = 1) => {
  let vals = await countAll()
  console.log(vals)
  numUsers += vals[0]
  numClaimables += vals[1]
  numClaimed += vals[2]
  const seed = 12345 + vals[0]
  const totalRuns = runs
  Math.random = mulberry32(seed)
  console.log(`SETTING Math.random to ${'mulberry32'} algo and seeded with value: ${seed}`)
  console.log(`\nRunning ${runs} runs of hydration\n`)
  while(runs--) {
    await runHydration( null, null, null, randGenNums, !(!!runs))
  }

  vals = await countAll()
  console.log(`\nFINISHED ${totalRuns} runs of hydration`)
  console.log(`${vals[0]} USERS Total \n${vals[1]} CLAIMABLES Total \n${vals[2]} CLAIMED Total`)
  Math.random = originalRand
  console.log('\nRESET Math.random')
}


const countAll = async () => {
  const numDocs = await Promise.all([
    sql`SELECT count(id) FROM users`,
    sql`SELECT count(id) FROM claimables`,
    sql`SELECT count(id) FROM claimed`,
  ])
  return numDocs.map(res => parseInt(res[0].count))
}

hydrate(process.env.RUNS || 5)
//  export RUNS=10 node hydrate.js
module.exports = { runHydration, hydrate }






function swap(head) {

  function runSwap(node0) {
    var node1 = node0.next
    var value0 = node0.value;
    var value1 = node1 ? node1.value : null;
    if (value1) {
      node0.value = value1
      node1.value = value0
      if (node1.next) {
        runSwap(node1.next)
      }
    }
  }
  runSwap(head)
  return head
}





function Node(value, next=null) {
  this.value = value
  this.next = next
}

var HEAD = new Node(1)
HEAD.next = new Node(2)
HEAD.next.next = new Node(3)
HEAD.next.next.next = new Node(4)
HEAD.next.next.next.next = new Node(5)

var tHEAD = swap(JSON.parse(JSON.stringify(HEAD)))


