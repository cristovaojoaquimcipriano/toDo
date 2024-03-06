import { useState } from 'react'
import { Card, CardContent, CardDescription,CardFooter,CardHeader,CardTitle } from './components/ui/card'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { log } from 'console'


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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key)
    if (e.key === 'Enter') {
      handleAddTask()
    }
  }

  return (
    <main className='xl:grid xl:grid-cols-2 bg-slate-900 w-full h-[100vh]'>
      <div className='self-end'>
        <Card>
          <CardHeader>
            <CardTitle>Tarefas</CardTitle>
            <CardDescription>Faça a gestão de suas tarefas de forma simples.</CardDescription>
          </CardHeader>
          <CardContent className='space-y-2'>
            <Input onKeyDown={handleKeyPress} onChange={e=> setTask(e.target.value)}  value={task} placeholder='Digite a tarefa' />
            <Button onClick={handleAddTask}>Adicionar</Button>
          </CardContent>
        </Card>
      </div>

      <div className="bg-slate-700" >
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
                <Button onClick={() => handleRemoveTask(index)}>Rejmover</Button>
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
