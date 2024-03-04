$(function () {
    $('.notice ul li:first-child').on('click', function () {
        $('#modal').css('display', 'flex')
    })
    $('.modal-close').on('click', function () {
        $('#modal').hide()
    })
})
