
// const arrayRes = await sql`SELECT first_name, last_name, user_name, lat, lng, is_charity FROM users WHERE id = ${idToMatch}`
// const arrayRes = await sql`SELECT title, description, category, tag, charity_only, lat, lng FROM claimables WHERE id = ${idToMatch}`


const getTests = (sql) => {

  const testUsers = async () => {

    const idToMatch = 1
    console.log(`\nTESTING USERS table for id = ${idToMatch}`)
    const arrayRes = await sql`SELECT * FROM users AS u WHERE u.id = ${idToMatch}`
    const res = arrayRes[0]
    const { first_name, last_name, user_name } = res
    const toMatch = {
        id: 1,
        first_name: 'Melanie',
        last_name: 'Smith',
        user_name: 'chillGirlGuy',
        is_charity: true
      }

    if ( first_name === toMatch.first_name && last_name === toMatch.last_name && user_name === toMatch.user_name ) {
      console.log('ALL USERS VALUES MATCH')
      console.log(`USERS res for id = ${idToMatch}`, res)
    }
    else {
      console.log('USERS VALUE MATCH ERROR res', res, '\ntoMatch ', toMatch )
    }

  }



  const testClaimables = async () => {

    const idToMatch = 2
    console.log(`\nTESTING CLAIMABLES table for id = ${idToMatch}`)
    const arrayRes = await sql`SELECT * FROM claimables AS c WHERE c.id = ${idToMatch}`
    const res = arrayRes[0]
    if (res) {
      const { title, description, category, tag } = res
      const toMatch = {
          id: idToMatch,
          title: 'chinos',
          description: 'even cooler',
          category: 'shoes',
          tag: 'charity',
          charity_only: true
        }

      if ( title === toMatch.title && description === toMatch.description && category === toMatch.category && tag === toMatch.tag ) {
        console.log('ALL CLAIMABLES VALUES MATCH')
        console.log(`CLAIMABLES res for id = ${idToMatch}`, res)
      }
      else {
        console.log('CLAIMABLES VALUE MATCH ERROR res', res, '\ntoMatch ', toMatch )
      }
    }
    else {
      console.log('NO RES FOR CLAIMABLES')
    }

  }

  return {
    users: testUsers,
    claimables: testClaimables
  }
}

module.exports = { getTests }