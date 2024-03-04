$(function () {
    // let now = 0;

    // const slideCount = ('.slide ul li')
    // const slideList = ('.slide ul')
    
    // setInterval(function () {
    //     now = (now + 1) % slideCount
    //     slideList.css('left', 100 * -now + '%')
    // }, 3000)

    $('.notice ul li:first-child').on('click', function () {
        $('#modal').css('display', 'flex')
    })
    $('.modal-close').on('click', function () {
        $('#modal').hide()
    })
})
