/* SHOW THE MENU */

const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if (toggle && nav){
        toggle.addEventListener('click',()=> {
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click',linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll' scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

            /* REMOVES THE SECTION BACK TO THE RIGHT ON CLICK */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelectorAll('nav_menu a[href*=' + sectionId + ']').classList.add('active')
        }
        else {
            document.querySelectorAll('nav_menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
