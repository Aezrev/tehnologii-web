function getPlanesOverRomaniaThen() {
    const url = 'https://opensky-network.org/api/states/all?lamin=43.6&lomin=20.2&lamax=48.3&lomax=29.7'

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP error ' + response.status)
            }
            return response.json()
        })
        .then(data => {
            console.log('Avioane deasupra Romaniei:')
            data.states.forEach(plane => {
                console.log(`${plane[1]?.trim() || 'N/A'} (${plane[2]})`)
            })
        })
        .catch(err => console.error('Eroare:', err))
}

getPlanesOverRomaniaThen()
