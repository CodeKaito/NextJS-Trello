import formatTodoForAi from "./formatTodoForAi";

const fetchSuggestion = async (board: Board)  => {
    const todos = formatTodoForAi(board);

    const res = await fetch("/api/generateSummary", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ todos }),
    })

    const data = await res.json();
    
    return [data.todos.todo, data.todos.inprogress, data.todos.done ];
}

export default fetchSuggestion;