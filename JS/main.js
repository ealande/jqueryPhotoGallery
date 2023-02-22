$(document).ready(function(){
    $('header button').click(function(){
        $(`form`).slideDown();
    })

    $('#cancelButton').click(function(){
        $('form').slideUp();
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        const addressNewImage = $('#addressNewImage').val();
        const newItem = $('<li style="display: none"></li>');
        $(`<img src="${addressNewImage}"/>`).appendTo(newItem);
        $(`<div class="overlayImageLink">
        <a href="${addressNewImage} target="_blank" title="See the image in real size">
        See the image in real size</a>
        <div>`).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#addressNewImage').val('')
    })
})
