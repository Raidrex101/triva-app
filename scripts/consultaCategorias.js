export async function showCategories() {
    const select = document.querySelector("#selectCategories")
    
    try {
        const response = await fetch(`https://opentdb.com/api_category.php`)
        const data = await response.json()

        const insertar = document.createElement("select")
        for (let index = 0; index <= 23; index++) {

            let dataId = data.trivia_categories[index].id
            let dataName = data.trivia_categories[index].name

            let option = document.createElement('option')
            option.value = dataId;
            option.textContent = dataName;

            select.appendChild(option)
        }

    } catch {
        console.log(console.error());
    }
}