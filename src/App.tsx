import { useState } from 'react'
import { Card, CardContent, CardDescription,CardFooter,CardHeader,CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'


function App() {
  
  const [tasks, setTasks] = useState<string[]>([])
  const [task, setTask] = useState('');

  const handleAddTask = () => {
    if (task) {
      setTasks([...tasks, task])
      setTask('')
    }
  }

  const handleRemoveTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index)
    setTasks(newTasks)
  }

  return (
    <main className='xl:grid xl:grid-cols-2'>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Tarefas</CardTitle>
            <CardDescription>Faça a gestão de suas tarefas de forma simples.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <Input onChange={e=> setTask(e.target.value)}  value={task} placeholder='Digite a tarefa' />
            <Button onClick={handleAddTask}>Adicionar</Button>
          </CardContent>
        </Card>
      </div>

      <div className=''>
        {
          tasks.length > 0 ? (
            <Card>
          <CardHeader>
            <CardTitle>Lista de Tarefas</CardTitle>
          </CardHeader>

          <CardContent className='space-y-2'>
            {tasks.map((task, index) => (
              <div key={index} className='flex justify-between items-center'>
                <span>{task}</span>
                <Button onClick={() => handleRemoveTask(index)}>Remover</Button>
              </div>
            ))}
          </CardContent>
        </Card>
          ): <></>
        }
      </div>
    </main>
  )
}

export default App
