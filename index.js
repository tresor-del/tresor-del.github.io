document.addEventListener('DOMContentLoaded', function (){

    document.querySelectorAll('.a').forEach(a => {
        a.onclick = function(){
            showDiv(this.dataset.id)
            document.querySelectorAll('.a').forEach(a => a.classList.remove('active'))
            this.classList.add('active')
        }
    })

    showDiv('image')

});

function showDiv(id){

    document.querySelectorAll('.def').forEach(def =>{
        def.style.display = 'none'
    })

    document.querySelector(`#${id}`).style.display = 'block';

}