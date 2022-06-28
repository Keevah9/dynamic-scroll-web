// set dynamic date
const date = document.querySelector('#date')

date.innerHTML = new Date().getFullYear()
const navToggle = document.querySelector('.navToggle') 
const navLinkContainer = document.querySelector('.navLinkContainer')
const links = document.querySelector('.links')

// nav menu
navToggle.addEventListener('click', _ => {
    // using css class
    // navLinkContainer.classList.toggle('showLinks')

    // using Element.getBoundingClientRect() shows the element size in relation to the viewport
    const navLinkHeight = navLinkContainer.getBoundingClientRect().height
    const linksHeight = links.getBoundingClientRect().height

    if(navLinkHeight === 0){
        navLinkContainer.style.height = `${linksHeight}px`
    }else{
        navLinkContainer.style.height = 0
    }
})


// fixed nav
const navBar = document.querySelector('.navBar')
const topLink = document.querySelector('.topLink')

window.addEventListener('scroll', ()=>{
    const ScrollHeight = window.pageYOffset
    const navHeight = navBar.getBoundingClientRect().height
    if(ScrollHeight > navHeight){
        navBar.classList.add('fixedNav')
    }else{
        navBar.classList.remove('fixedNav')
    }

    // scroll to the top link
    if(ScrollHeight > 500){
        topLink.classList.add('showTopLink')
    }else{
        topLink.classList.remove('showTopLink')
    }
})


// smooth scrolling 
const scrollLinks = document.querySelectorAll('.scroll-link')
// select individual link
scrollLinks.forEach((link) =>{
    link.addEventListener('click', (e)=>{
        e.preventDefault()
        const id = e.currentTarget.getAttribute('href').slice(1)// to remove the '#' in front of our attributes
        const element = document.getElementById(id)
        // calculate the heights
        const navHeight = navBar.getBoundingClientRect().height
        const navLinkHeight = navLinkContainer.getBoundingClientRect().height
        

        const fixedNav = navBar.classList.contains('fixedNav')
        // the exact top position of an element
        let position = element.offsetTop - navHeight

        if(!fixedNav){
            position = position - navHeight
        }
        if(navHeight > 82){
            position = position + navLinkHeight
        }
        // scroll to the specific link
        window.scrollTo({
            left: 0,
            top: position,
        })
        navLinkContainer.style.height = 0
    })
})