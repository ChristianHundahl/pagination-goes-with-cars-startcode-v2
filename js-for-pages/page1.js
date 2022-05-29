export let text="Not initialized" //When module is exported, they become immutable = cannot be changed

//alert("I was evaluated") //Singleton, always evaluates exactly once when module exported

export function setupHandler() {
    document.getElementById("btn").onclick = () => {
        text = document.getElementById("text").value
    }
}