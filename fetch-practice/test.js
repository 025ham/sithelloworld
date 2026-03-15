async function loadTodos() {
    try {
        const response = await fetch("http://localhost:3000/todos")

        if (!response.ok) {
            throw new Error(`wrong url ${response.status}`)
        }

        const actualData = await response.json()
        console.log(actualData)

    } catch (err) {
        console.error("crash", err.message)
    }
}

loadTodos()