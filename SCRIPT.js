//header toggle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e) {
document.querySelector('body').classList.toggle('mobile-nav-active');
this.classList.toggle('fa-xmark')
 })

//  typing effect
 let typed = new Typed('.auto-input',{ 
   strings: ['0','Data Analyst!'],
   typeSpeed:100,
   backSpeed:100,
   backDelay: 2000,
   loop:true,
 })

 //Active  All Links state on scroll

 //Get all Links
 let navlinks= document.querySelectorAll('nav ul li a')
 // Get all section
 let sections= document.querySelectorAll('section') 
 console.log(sections)

 window.addEventListener('scroll', function(){
    const scrollPos = window.scrollY +20
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight )){
        navlinks.forEach(link =>{
            link.classList.remove('active');
            if(section.getAttribute('id')== link.getAttribute('href').substring(1)){
                link.classList.add('active')
            }
        });
     }
    });
 });
