import './App.css';
import { db } from './firebase-config';
import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"

function App() {

  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  const [users, setUsers] = useState([])
  const usersRef = collection(db, "users")

  const createUser = async () => {
    await addDoc(usersRef, {name: newName, age: Number(newAge)})
  }
  
const updateUser = async (id, age) => {

  const userDoc = doc(db, "users", id)
  const newFields = {age: age + 1}
  await updateDoc(userDoc , newFields)
}

const deleteUser = async (id) => {
  const userDoc = doc(db, "users", id)
  await deleteDoc(userDoc)
}

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersRef)
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getUsers()
  }, [])

  return (
    <div className="App">

      <input placeholder='Nome...' onChange={(event) => {setNewName(event.target.value)}}/>
      <input placeholder='Idade...' onChange={(event) => {setNewAge(event.target.value)}}/>

      <button onClick={createUser}>Adicionar Usuario</button>

       {users.map((users) => { 
        return(
        <div> 
          {" "}
          <h1>Nome: {users.name}</h1>
          <h1>Idade: {users.age}</h1>
          <button onClick={() => {updateUser(users.id, users.age)}}>Aumentar Idade</button>
          <button onClick={() => {deleteUser(users.id)}}>Deletar Usuario</button>
        </div>
        )
      })}
    </div>
  );
}

export default App;
