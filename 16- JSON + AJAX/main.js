 // get elements html
 const header = document.querySelector('#header')
 const section = document.querySelector('#section')

 // create request AJAX
 const request = new XMLHttpRequest()
 const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json"

 request.open('GET', requestURL)
 request.responseType = 'json'
 request.send()
 request.onload = () => {
     var superHeroes = request.response
     squadInfo(superHeroes)
     showHeroes(superHeroes)
 }

 // create two functions (squadInfo && showHeroes)
 function squadInfo(jsonObj) {
     var myH1 = document.createElement('h1')
     myH1.textContent = jsonObj['squadName']
     header.appendChild(myH1)

     var myPara = document.createElement('p')
     myPara.textContent = `HomeTown: ${jsonObj['homeTown']} // Formed: ${jsonObj['formed']} `
     header.appendChild(myPara)
 }

 function showHeroes(jsonObj) {
     var array = jsonObj['members']

     for (let i = 0; i < array.length; i++) {
          // create elements
         const myArticle = document.createElement('article')
         const myH2 =      document.createElement('h2')
         const myPara1 =   document.createElement('p')
         const myPara2 =   document.createElement('p')
         const myPara3 =   document.createElement('p')
         const myList =    document.createElement('ul')

         // add somethinng to the elements
         myH2.textContent = array[i].name
         myPara1.textContent = `Secret Identity: ${array[i].secretIdentity}`
         myPara2.textContent = `Age: ${array[i].age}`
         myPara3.textContent = `Superpower`

         // add the powers in list itens
         const superPowers = array[i].powers
         for (let j = 0; j < superPowers.length; j++) {
             const li = document.createElement('li')
             li.textContent = superPowers[j]
             myList.appendChild(li)
         }

         // append elementss
         myArticle.appendChild(myH2)
         myArticle.appendChild(myPara1)
         myArticle.appendChild(myPara2)
         myArticle.appendChild(myPara3)
         myArticle.appendChild(myList)
         section.appendChild(myArticle)
     }
 }