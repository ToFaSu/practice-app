
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { useState } from 'react'

export default function App() {

  const [todos, setTodos] = useState([])
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('active');
  const [err, setErr] = useState('')
  const save = ()=>{

    let todo = {
      title,
      description,
    }

    if(title === '' & description === ''){
      setErr('Please Enter Title And Description ')
      return
    }
    else if(title === 'title' || description === ''){
      setErr('Please Enter description')
      return
    }
    else if(title === '' || description === 'description'){
      setErr('Please Enter Title')
      return
    }
    setTodos([...todos, todo])

    setTitle('')
    setDescription('')
    setErr('')

  }
  const handleChange = (event) => {
    setStatus(event.target.value);
  };

  return (

    <>
      {
        todos.map((todo, idx)=><div style={{backgroundColor: '#ddd', padding: '12px', width: '50%',borderRadius: '5px',}} key={idx}>

          <h3> TITLE: <p>{todo.title}</p></h3>
          <h3> DESCRIPTION: <p>{todo.description}</p></h3>

        </div>
        )
      }
      <p style={{color:'red'}} >{err}</p>
      <input type="text" onChange={(event)=>setTitle(event.target.value)} value={title} name='title' placeholder='Enter A Title' />
      <input type="text" onChange={(event)=>setDescription(event.target.value)} value={description} name='description' placeholder='Enter A Description' />

      <select value={status} onChange={handleChange} style={{ backgroundColor: status === 'active' ? 'green' : 'red' }}>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>

      <button onClick={save}> Save </button>

    </>

  )

}

