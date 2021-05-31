const selectModal = document.querySelector(".modal-overlay")

const Modal = {
  open() {
    selectModal.classList.add('active')    
  },
  close() {
    selectModal.classList.remove('active')
  }
}

const transactions = [
  {
    id: 1,
    description: 'Luz',
    amount: -50000,
    date: '16/05/2021'    
  },
  {
    id: 2,
    description: 'Desenvolvimento de website',
    amount: 500000,
    date: '23/05/2021'    
  },
  {
    id: 3,
    description: 'Internet',
    amount: -20000,
    date: '26/05/2021'    
  }  
]

const Transaction = {
  incomes() {

  },
  expenses() {

  },
  total() {

  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),
  addTransaction(transaction, index) {
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)

  },
  innerHTMLTransaction(transaction) {

     const html = `
      <td class="description">${transaction.description}</td>
      <td class="expense">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
        <img src="./assets/minus.svg" alt="Remover transação">
      </td>
    `

    return html
  }
}

DOM.addTransaction(transactions)