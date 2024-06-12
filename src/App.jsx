import { useState } from 'react'
import './App.css'
import User from './User'

export function App() {
  let [arr, setArr] = useState(
    [
      {
          "name": "Алексей Иванов",
          "department": "Маркетинг",
          "position": "Менеджер по маркетингу"
      },
      {
          "name": "Ольга Петрова",
          "department": "Маркетинг",
          "position": "Аналитик по маркетингу"
      },
      {
          "name": "Ирина Сидорова",
          "department": "Финансы",
          "position": "Финансовый аналитик"
      },
      {
          "name": "Максим Кузнецов",
          "department": "ИТ",
          "position": "Разработчик программного обеспечения"
      },
      {
          "name": "Наталья Смирнова",
          "department": "Человеческие ресурсы",
          "position": "HR-менеджер"
      },
      {
          "name": "Дмитрий Васильев",
          "department": "Финансы",
          "position": "Бухгалтер"
      },
      {
          "name": "Екатерина Михайлова",
          "department": "ИТ",
          "position": "Системный администратор"
      },
      {
          "name": "Андрей Попов",
          "department": "Маркетинг",
          "position": "Специалист по рекламе"
      },
      {
          "name": "Татьяна Ковалёва",
          "department": "Финансы",
          "position": "Контролёр"
      },
      {
          "name": "Сергей Новиков",
          "department": "ИТ",
          "position": "Аналитик данных"
      },
      {
          "name": "Марина Федорова",
          "department": "Человеческие ресурсы",
          "position": "Рекрутер"
      },
      {
          "name": "Виктор Захаров",
          "department": "Маркетинг",
          "position": "Менеджер по контенту"
      },
      {
          "name": "Анна Баранова",
          "department": "ИТ",
          "position": "Разработчик мобильных приложений"
      },
      {
          "name": "Игорь Соловьев",
          "department": "Человеческие ресурсы",
          "position": "Специалист по обучению"
      },
      {
          "name": "Юлия Лебедева",
          "department": "Финансы",
          "position": "Финансовый консультант"
      },
      {
          "name": "Владимир Борисов",
          "department": "Маркетинг",
          "position": "PR-специалист"
      },
      {
          "name": "Елена Воробьёва",
          "department": "Человеческие ресурсы",
          "position": "Специалист по компенсациям и льготам"
      },
      {
          "name": "Александр Герасимов",
          "department": "ИТ",
          "position": "Инженер по безопасности"
      },
      {
          "name": "Светлана Чернова",
          "department": "Маркетинг",
          "position": "Менеджер по продукту"
      },
      {
          "name": "Роман Григорьев",
          "department": "Финансы",
          "position": "Риск-менеджер"
      }
   
  ])

  let [obj, setObj] = useState({ name: '', username: '', email: '' })
  let [search, setSearch] = useState('')
  let[select, setSelect] = useState('')

  const deleteUser = (id) => {
    let newArr = [...arr]
    newArr.splice(id, 1)
    setArr(newArr)
  }

  const handleInputs = (ev) => {
    if (ev.target.name === 'name') {
      setObj({ ...obj, name: ev.target.value })
    } else if (ev.target.name === 'username') {
      setObj({ ...obj, username: ev.target.value })
    } else if (ev.target.name === 'email') {
      setObj({ ...obj, email: ev.target.value })
    }
  }

  
  const handleAdding = (ev) => {
    ev.preventDefault()
    let newArr = [...arr]
    console.log(obj)
    newArr.push(obj)
    setArr(newArr)
  }
  let departments=[...new Set([...arr.map(user=>user.department)])];

  return (
    <div>
      
    <input type="text" placeholder="Seach" onChange={(ev)=> setSearch(ev.target.value)} />
    
    <select name="DepartmentSelect"  onChange={(ev)=>setSelect(ev.target.value)}>
      {
        departments.map(dep=>(
        <option key={dep} value={dep}>{dep}</option>
        ))
      }
    </select>

      <form onSubmit={handleAdding}>
        
        <input name='name' type="text" onChange={handleInputs} />
        <input name='username' onChange={handleInputs} type="text" />
        <input name='email' onChange={handleInputs} type="email" />
        <button>ADD</button>
      </form>
      <ul>
        {
          arr.filter((item) => item.department.includes(select)).filter((item) => item.name.startsWith(search)).map((item, index) =>
            <User
              index={index}
              deleteUser={deleteUser}
              key={item.name}
              {...item} />)
        }
      </ul>
    </div>
  )
}

