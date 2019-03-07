document.addEventListener('DOMContentLoaded', ()=>{
  const summon = document.querySelector('.summon-cats');
  summon.addEventListener('click', ()=>{
    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      data: {},
      dataType: 'json'
    }).done((responseData)=>{
      for (var i = 0; i < responseData.cats.length; i++) {
        let box = document.querySelector(`#cat${i+1}`);
        box.innerText = '';
        let image = document.createElement('img');
        image.setAttribute("src", responseData.cats[i].photo);
        image.setAttribute("alt", responseData.cats[i].name);
        box.appendChild(image);
      }
    });
  })
})
