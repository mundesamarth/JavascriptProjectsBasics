'useStrict'

const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')

const opemModal = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const closeModal = function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}



for (let i = 0; i < btnShowModal.length; i++)
btnShowModal[i].addEventListener('click', opemModal)
btnCloseModal.addEventListener('click', closeModal) 
overlay.addEventListener('click', closeModal)


document.addEventListener('keydown',function(event){
    if(event.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal()
    }
})