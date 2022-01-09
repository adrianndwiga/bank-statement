import { Transaction } from './types'

const transaction = {
  description: 'some description',
  date: new Date('17/01/2022'),
  amount: 100.90
}

function getTransaction (): Transaction {
  return transaction
}
// eslint-disable-next-line no-console
console.log({ transaction: getTransaction() })
