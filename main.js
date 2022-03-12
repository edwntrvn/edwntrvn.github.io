// Scroll to top
$(document).ready(function() {
  $("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow")

    return false
  })
})



// Mobile menu toggle
const menuBtn = document.querySelector(".menu-button")
const mobileMenu = document.querySelector(".mobile-menu")
const body = document.querySelector("body")
const footer = document.querySelector("footer")
const gallery = document.querySelector(".gallery")
const indexCurrent = document.querySelector(".index--current")
let prevScrollPos = 0

// Update scroll position when menu is closed
document.addEventListener("scroll", function() {

  if (!mobileMenu.classList.contains("open")) {
    prevScrollPos = window.pageYOffset
  }
})

// Toggle menu on/off + hide background elements
menuBtn.addEventListener("click", function() {

  if (!mobileMenu.classList.contains("open")) {
    menuBtn.classList.add("open")
    mobileMenu.classList.add("open")
    body.classList.add("open")
    footer.classList.add("open")
    gallery.style.display = "none"
    if (indexCurrent != null) { indexCurrent.style.display = "none" }
  }

  else {
    menuBtn.classList.remove("open")
    mobileMenu.classList.remove("open")
    body.classList.remove("open")
    footer.classList.remove("open")
    gallery.style.display = "block"
    if (indexCurrent != null) { indexCurrent.style.display = "block" }

    if (aboutSection.classList.contains("toggled")) {
      aboutSection.classList.remove("toggled")
      aboutToggle.innerHTML = `<p>ABOUT</p><img class="about-toggle-icon" src="plus.svg">`
    }

    if (projectsDropDown.classList.contains("open")) {
      projectsDropDown.classList.remove("open")
      projectsToggle.innerHTML = `<p>SELECT WORKS</p><img class="projects-toggle-icon" src="plus.svg">`
    }

    setTimeout(function() {
      window.scroll(0, prevScrollPos)
    }, 0)
  }

  return false
})



// About dropdown menu
const aboutToggle = document.querySelector(".menu-item--about")
const aboutSection = document.querySelector(".mobile-about-section")

aboutToggle.addEventListener("click", function() {

  aboutSection.classList.toggle("toggled")

  if (aboutSection.classList.contains("toggled")) {
    aboutToggle.innerHTML = `<p>ABOUT</p><img class="about-toggle-icon" src="minus.svg">`
  }

  else {
    aboutToggle.innerHTML = `<p>ABOUT</p><img class="about-toggle-icon" src="plus.svg">`
  }

  return false
})



// Projects dropdown menu
const projectsToggle = document.querySelector(".menu-item--select-works")
const projectsDropDown = document.querySelector(".projects-dropdown")

projectsToggle.addEventListener("click", function() {

  projectsDropDown.classList.toggle("open")

  if (projectsDropDown.classList.contains("open")) {
    projectsToggle.innerHTML = `<p>SELECT WORKS</p><img class="projects-toggle-icon" src="minus.svg">`
  }

  else {
    projectsToggle.innerHTML = `<p>SELECT WORKS</p><img class="projects-toggle-icon" src="plus.svg">`
  }

  return false
})



// Lazy load images/videos
document.addEventListener("DOMContentLoaded", function() {
  const lazyImages = [].slice.call(document.querySelectorAll(".lazy"))

  if ("IntersectionObserver" in window) {
    const lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(entry => {

        if (entry.isIntersecting) {
          const lazyImage = entry.target
          lazyImage.src = lazyImage.dataset.src
          lazyImage.classList.remove("lazy")
          lazyImageObserver.unobserve(lazyImage)
        }
      })
    })

    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage)
    })
  }

})



// Project title styling when hovering over project thumbnail on home page
const projectThumbnails = document.querySelectorAll(".thumbnail")
const projectDescriptionsHome = document.querySelectorAll(".project-description--home")

projectThumbnails.forEach(thumbnail => {
  const currentProjectLink = thumbnail.getAttribute("href")

  thumbnail.addEventListener("mouseenter", function() {
    projectDescriptionsHome.forEach(description => {

      if (description.firstElementChild.firstElementChild.getAttribute("href") !== currentProjectLink) {
        description.style.animation = "fadeout 0.4s forwards"
        description.firstElementChild.firstElementChild.style.animation = "fadeout 0.4s forwards"
      }
    })
  })

  thumbnail.addEventListener("mouseleave", function() {
    projectDescriptionsHome.forEach(description => {

      if (description.firstElementChild.firstElementChild.getAttribute("href") !== currentProjectLink) {
        description.style.animation = "fadein 0.4s forwards"
        description.firstElementChild.firstElementChild.style.animation = "fadein 0.4s forwards"
      }
    })
  })
})



// // Project title styling when hovering over project title
// const projectLinksHome = document.querySelectorAll(".project-link__home")
//
// projectLinksHome.forEach(link => {
//   link.addEventListener("mouseenter", function() {
//     link.classList.add("placeholder")
//
//     projectLinksHome.forEach(link => {
//       if (!link.classList.contains("placeholder")) {
//         link.style.animation = "fadeout 0.4s forwards"
//         link.parentElement.parentElement.style.animation = "fadeout 0.4s forwards"
//       }
//     })
//
//   })
//
//   link.addEventListener("mouseleave", function() {
//     projectLinksHome.forEach(link => {
//
//       if (link.classList.contains("placeholder")) {
//         link.classList.remove("placeholder")
//       }
//
//       else if (!link.classList.contains("placeholder")) {
//         link.style.animation = "fadein 0.4s forwards"
//         link.parentElement.parentElement.style.animation = "fadein 0.4s forwards"
//       }
//     })
//   })
// })

// Project title styling when hovering over project title
const projectLinksHome = document.querySelectorAll(".project-link__home")
var timer

projectLinksHome.forEach(link => {
  link.addEventListener("mouseenter", function() {
    timer = setTimeout(function() {
      link.classList.add("placeholder")

      projectLinksHome.forEach(link => {
        if (!link.classList.contains("placeholder")) {
          link.style.animation = "fadeout 0.4s forwards"
          link.parentElement.parentElement.style.animation = "fadeout 0.4s forwards"
        }
      })
    }, 150)
  })

  link.addEventListener("mouseleave", function() {
    projectLinksHome.forEach(link => {

      if (link.classList.contains("placeholder")) {
        link.classList.remove("placeholder")
      }

      else if (!link.classList.contains("placeholder")) {
        link.style.animation = "fadein 0.4s forwards"
        link.parentElement.parentElement.style.animation = "fadein 0.4s forwards"
      }
    })
    clearTimeout(timer)
  })
})



// // Project title hovers outside home page
const projectLinksOther = document.querySelectorAll(".project-link__not-current")

projectLinksOther.forEach(link => {
  link.addEventListener("mouseenter", function() {
    link.style.animation = "fadein 0.4s forwards"
    link.parentElement.parentElement.style.animation = "fadein 0.4s forwards"
  })

  link.addEventListener("mouseleave", function() {
    link.style.animation = "fadeout 0.4s forwards"
    link.parentElement.parentElement.style.animation = "fadeout 0.4s forwards"
  })
})



// Project title hovers on about page
const projectDescriptionsAbout = document.querySelectorAll(".project-description--about")

projectThumbnails.forEach(thumbnail => {
  const currentProjectLink = thumbnail.getAttribute("href")

  thumbnail.addEventListener("mouseenter", function() {
    projectDescriptionsAbout.forEach(description => {

      if (description.firstElementChild.firstElementChild.getAttribute("href") == currentProjectLink) {
        description.style.animation = "fadein 0.4s forwards"
        description.firstElementChild.firstElementChild.style.animation = "fadein 0.4s forwards"
      }
    })
  })

  thumbnail.addEventListener("mouseleave", function() {
    projectDescriptionsAbout.forEach(description => {

      if (description.firstElementChild.firstElementChild.getAttribute("href") == currentProjectLink) {
        description.style.animation = "fadeout 0.4s forwards"
        description.firstElementChild.firstElementChild.style.animation = "fadeout 0.4s forwards"
      }
    })
  })
})
