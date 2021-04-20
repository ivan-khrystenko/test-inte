/* Votre code JS ici */
let parents = document.querySelectorAll('.article');
for (let i = 0, parent; parent = parents[i]; i++)
   parent.onclick = function (e) {
      if (e.target.className == 'btn') {
         this.classList.add('hide');
      }
   };
