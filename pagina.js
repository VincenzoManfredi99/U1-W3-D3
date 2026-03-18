const mioForm = document.querySelector('form')
    mioForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const miaLista = document.querySelector('main')
    const task = document.querySelector('input').value
    console.log(task)
    const list = document.createElement('p')
    list.innerHTML= 
        `<span>${task}</span>
        <button class='btn-dlt'><ion-icon name="trash-outline"></ion-icon></button>`
    miaLista.appendChild(list)
    mioForm.reset()
    const buttonDelete = document.getElementsByClassName('btn-dlt')
    buttonDelete.addEventListener('click', ()=>{
        list.remove()
    })
    })

  



