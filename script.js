let htext = document.getElementById('userName')
let statusCheck = document.getElementById('status')
let btn = document.getElementById('actionBtn')

//мы обратились к элементу по id, и через console.log выводим его

console.log(htext);
console.log(statusCheck);
console.log(btn);

userName.textContent = 'Бекзат';
// textContent - меняет содержимое текста

// userName.style.transition = 'transform 0.4s ease-in-in-out ';     //это чисто для себя


actionBtn.addEventListener('click', () => {
    statusCheck.textContent = 'В сети';
     // при нажатии кнопки оффлайн меняет 'В сети'
    
     statusCheck.style.color = 'green'; 
    
    userName.style.color = 'blue'
    //это изменяет цвет в h1
  
    // userName.style.transform = 'scale(1.8) rotate(1deg)'
   
    btn.remove() 
    //при нажатии кнопки удаляется

    card.style.background = 'rgb(255,255,210)'
})
