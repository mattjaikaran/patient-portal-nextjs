// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// sample data. to be moved
const userMary = {
  firstName: 'Mary',
  lastName: 'Salters',
  address: {
    address1: '123 Broadway',
    address2: 'Suite 19F',
    city: 'New York',
    state: 'NY',
    zip: 10010
  },
  healthProvider: 'Medicare For All',
  healthBreakdown: {
    smoker: false,
    medicalHistory: [
      { 
        type: 'major',
        procedure: 'open heart surgery'
      },
      {
        type: 'major',
        procedure: 'hip replacement'
      }
    ]
  }
}

const userJohn = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    address1: '1239 Henry St',
    address2: 'Apt 1L',
    city: 'New York',
    state: 'NY',
    zip: 10006
  },
  healthProvider: 'Regular Insurance',
  healthBreakdown: {
    smoker: true,
    medicalHistory: [
      { 
        type: 'minor',
        procedure: 'cyst removal'
      }
    ]
  }
}


export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ user: userMary }))
}
