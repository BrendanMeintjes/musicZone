import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@domain.com',
    password: bcrypt.hashSync('admin1234', 10),
    isAdmin: true,
  },
  {
    name: 'Peter Pettigrew',
    email: 'scabbers@domain.com',
    password: bcrypt.hashSync('scabbers1234', 10),
  },
  {
    name: 'Colin Robinson',
    password: bcrypt.hashSync('colin1234', 10),
    password: xxxx,
  },
]

export default users
