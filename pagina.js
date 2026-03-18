const mioForm = document.querySelector('form')                   //Trovo il mio form
    mioForm.addEventListener('submit',(e)=>{                     //Inizio la funzione per aggiungere un evento (submit è il tipo, e una specie di parametro)
    e.preventDefault()                                           //Dico alla funzione di non ricaricare la pagina quando clicco il button
    const miaLista = document.querySelector('main')              //Individuo dove "appenderò" gli elementi
    const task = document.querySelector('input').value           //Prendo ciò che verra scritto nell'input
    console.log(task)                                            
    const list = document.createElement('p')                     //Creo elemento di nome list di tipo paragrafo
    list.classList.add('lista')                                  //Aggiungo una classe a quell'elemento
    list.innerHTML=                                              //Creo il conetnuto del nuovo elemento, in questo caso una struttura HTML,//poteva essere anche solo u testo .innerText
        `<span>${task}</span>
        <button class='btn-dlt'>
        <ion-icon name="trash-outline">
        </ion-icon></button>`
    miaLista.appendChild(list)                                   //Vado ad "appendere" la mia lista dove avevo programmato
    mioForm.reset()                                              //Reset in modo che l'input sia libero
    const buttonDelete = list.querySelector('.btn-dlt')          //Vado a prendere il bottone appena creato.Invece di document. ho usato list(nome del mio elemento)in modo che ogni bottone sia slegato dall'altro
    buttonDelete.addEventListener('click', ()=>{                 //Creo una funzione affinchè la lista/frase creata venga rimossa al click del bottone
    list.remove()                                                
    })
    const taskCompleted = list.querySelector('span')             //Vado a selezionare il testo tra gli span
    taskCompleted.addEventListener('click', ()=>{                //Creo una funzione in modo che al mio click sulla frase venga messa o tolta una classe per far sbarrare la frase
        taskCompleted.classList.toggle('completed')
    })
    })



  



