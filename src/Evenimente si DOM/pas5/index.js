const apiUrl = 'http://localhost:8000/api/'

async function get(url) {
    return (await axios.get(url)).data
}

async function post(url, body) {
    return (await axios.post(url, JSON.stringify(body), {
        headers: { 'Content-Type': 'application/json' }
    })).data
}

async function loadTable() {
    let data = await get(apiUrl + "getList")
    let tableDiv = document.getElementById('tableData')

    if (!data || !tableDiv) return

    let myHtmlCode = []
    myHtmlCode.push("<table id='myTable' border='1' cellpadding='5'>")
    myHtmlCode.push('<thead><tr><th>ID</th><th>Nume</th><th>Varsta</th></tr></thead><tbody>')

    for (let item of data)
        myHtmlCode.push(`<tr><td>${item.id}</td><td>${item.name}</td><td>${item.age}</td></tr>`)

    myHtmlCode.push('</tbody></table>')
    tableDiv.innerHTML = myHtmlCode.join("")
}

async function sendData() {
    let name = document.getElementById('inputName').value
    let age = document.getElementById('inputAge').value

    if (!name || !age) {
        alert('Introduceti numele și varsta!')
        return
    }

    await post(apiUrl + "postList", { name: name, age: age })
    await loadTable()

    document.getElementById('inputName').value = ''
    document.getElementById('inputAge').value = ''
}

async function getById() {
    let id = document.getElementById('inputId').value
    let resultDiv = document.getElementById('resultData')

    if (!id) {
        alert('Introduceti un ID!')
        return
    }

    try {
        let person = await get(apiUrl + "getItem/" + id)
        resultDiv.innerHTML = `
            <p><strong>Rezultat:</strong></p>
            <p>ID: ${person.id}</p>
            <p>Nume: ${person.name}</p>
            <p>Vârstă: ${person.age}</p>
        `
    } catch (err) {
        resultDiv.innerHTML = `<p style="color:red;">Persoana cu ID-ul ${id} nu a fost gasita.</p>`
    }
}

loadTable()
