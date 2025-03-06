import { ReactElement, useEffect } from 'react'
import Header from './layout/Header'

function App(): ReactElement {
    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            const data = await fetch('http://localhost:3000/orders')
            console.log(await data.json())
        }
        fetchData()
    }, [])
    return (
        <>
            <Header />
        </>
    )
}

export default App
