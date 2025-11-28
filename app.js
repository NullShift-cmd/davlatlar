const malumotOlish = async () => {
    try {
        const loader = document.getElementById('loader')
        const api = 'https://restcountries.com/v3.1/all?fields=name,flags'
        const malumot = await fetch(api)

        if (!malumot.ok) {
            throw new Error(`Serverda hatolik bo'ldi`)
        }

        const malumotRespons = await malumot.json()

        if (malumotRespons) {
            var h1 = document.getElementById('h1')
            h1.classList.remove('d-none')
            loader.classList.add('d-none')
            const a = malumotRespons

            const main = document.getElementById('main')

            malumotRespons.forEach((n) => {
                const div = document.createElement('div')
                const img = document.createElement('img')
                const div2 = document.createElement('div')
                const p = document.createElement('h3')
                const p2 = document.createElement('p')
                p2.textContent = n.name.official
                img.src = n.flags.png
                img.classList.add('mx-auto')
                //img.width = 100 + 'px' ustozga ko'rsatishga
                div.classList.add('col-3')
                div.classList.add('mt-5')
                div.classList.add('bgcha')
                div.classList.add('card')
                div.classList.add('d-flex')
                div.classList.add('align-items-center')
                div.classList.add('justify-content-center')
                p.textContent = n.name.common
                div.appendChild(div2)
                div2.appendChild(img)
                div2.appendChild(p)
                div2.appendChild(p2)                
                main.appendChild(div)

            })

            console.log(a)
        }
    } catch (error) {
        console.error(`Xatolik: ` + error)
        const err = document.getElementById('error')
        err.classList.remove('d-none')
        h1.classList.add('d-none')
    }
}

malumotOlish()