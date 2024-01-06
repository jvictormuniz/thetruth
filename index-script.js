const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
       if(entry.isIntersecting){
           entry.target.classList.add('show')
       } else {
           entry.target.classList.remove('show')
    }
   })
})

const elements = document.querySelectorAll('.hidden')

elements.forEach( (element) => myObserver.observe(element))


const myObserver2 = new IntersectionObserver((entries) => {
   entries.forEach( (entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add('show2')
      } else {
          entry.target.classList.remove('show2')
   }
  })
})

const elements2 = document.querySelectorAll('.hidden2')

elements2.forEach( (element) => myObserver2.observe(element))


const myObserver3 = new IntersectionObserver((entries) => {
   entries.forEach( (entry) => {
      if(entry.isIntersecting){
          entry.target.classList.add('show3')
      } else {
          entry.target.classList.remove('show3')
   }
  })
})

const elements3 = document.querySelectorAll('.hidden3')

elements3.forEach( (element) => myObserver3.observe(element))


const myObserver4 = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
       if(entry.isIntersecting){
           entry.target.classList.add('show4')
       } else {
           entry.target.classList.remove('show4')
    }
   })
 })
 
 const elements4 = document.querySelectorAll('.hidden4')
 
 elements4.forEach( (element) => myObserver4.observe(element))
