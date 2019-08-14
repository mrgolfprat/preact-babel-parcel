import { h, } from 'preact'
import { useState } from 'preact/hooks'

export default function Page() {
    const [count, setCount] = useState(0)
    return (
        <div>
            count: {count}
            <button onClick={() => setCount(count + 1)} >++</button>
        </div>
    )
}
