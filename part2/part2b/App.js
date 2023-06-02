import { useState } from 'react'

const Filter = ({searchQuery, handleSearch}) => {
  return(
  <div>
    filter shown with <input value = {searchQuery} onChange = {handleSearch} />
  </div>
  )
}

const PersonForm = ({newName, handleNewName, newNumber, handleNewNumber, addPerson}) => {
  return(
    <form onSubmit = {addPerson}>
        <div>
          name: <input value = {newName} onChange = {handleNewName} />
        </div>
        <div>
          number : <input value = {newNumber} onChange = {handleNewNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

const Persons = ({filteredPersons}) => {
  return(
    <div>
    {filteredPersons.map(person => <p key = {person.name}>{person.name} {person.number}</p>)}
    </div>
  )
  }


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : '123456',
      id : 1
    },
    { name: 'Ada Lovelace',
      number: '39-44-5323523',
      id : 2}
  ]
  ) 
  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const Names = persons.map(person => person.name)
  const Numbers = persons.map(person => person.number)

  console.log(Names)
  const addPerson = (event) => {
    event.preventDefault()

    const newPerson = {
      name : newName,
      number : newNumber,
    }
    if(Names.includes(newName)){
      alert(newName + ' is already added to phonebook')
    }
    else if(Numbers.includes(newNumber)){
      alert(newNumber + ' is already added to phonebook')
    } 
    else{
    setPersons(persons.concat(newPerson))

    }
    setNewName('')
    setNewNumber('')
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) =>{
    setSearchQuery(event.target.value)
  }

  const filteredPersons = persons.filter(
    person => person.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchQuery = {searchQuery} handleSearch={handleSearch}></Filter>
      <h2>add a new</h2>
      <PersonForm newName = {newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} addPerson={addPerson}></PersonForm>
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons}></Persons>
    </div>
  )
}

export default App