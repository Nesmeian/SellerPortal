import { useEffect } from 'react'

function App() {
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const data = await fetch('http://localhost:3000/orders')
            console.log(await data.json())
        }
        fetchData()
    }, [])
    return <>HELLO WORLD</>
}

export default App
