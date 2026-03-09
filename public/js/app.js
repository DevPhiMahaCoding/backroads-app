// ********** set date ************
// select span
document.getElementById('date').innerHTML = new Date().getFullYear()

// ********** nav toggle ************
// select button and links
const navbar = document.querySelector('.navbar')
const navBtn = document.getElementById('nav-toggle')
const links = document.getElementById('nav-links')
// add event listener
navBtn.addEventListener('click', () => {
  links.classList.toggle('show-links')
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll('.scroll-link')
scrollLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    // prevent default
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1)
    const element = document.getElementById(id)

    // calculate the heights
    const navHeight = navbar.getBoundingClientRect().height
    const containerHeight = element.getBoundingClientRect().top
    const fixedNav = navbar.classList.contains('navbar')
    let position = containerHeight - navHeight

    if (!fixedNav) {
      position = containerHeight + window.pageYOffset
    }
    window.scrollTo({
      left: 0,
      top: position,
    })
    // close the dropdown (mobile)
    links.classList.remove('show-links')
  })
})
