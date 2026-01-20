import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addNumber = (event) => {
    event.preventDefault()
    setPersons(persons.concat({name: newName}))
    setNewName('')
    console.log('button clicked', event.target)
  }

  return (
    <>
      <h2>Phonebook</h2>
      <form onSubmit = {addNumber}>
        <div>
          name: 
        <input
          value={newName}
          onChange={(event) => setNewName(event.target.value)}
        />
        </div>
        <div>
          <button type ="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>{persons.map((p) => (<div key={p.name}>{p.name}</div>))}</div>
      </>
  )
}

export default App