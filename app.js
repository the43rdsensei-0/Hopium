const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})


window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
        topBtn.classList.add('show')
    }
    else {
        topBtn.classList.remove('show')
    }
})
const topBtn = document.getElementById('top_btn');

topBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    })
})