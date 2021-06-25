// $('h1').hide();
// $('h1').show();
// $('h1').toggle();


// $('p').hide();
// $('p').show();
// $('p').toggle();

// $('ul').html()
// $('ul li').html()
// $('ul li:first-child').html()
// $('ul li:last-child').html()
// $('ul li:nth-child(3)').html()


// let spanText = $('.hello-one-para span').text();
// console.log(spanText);

// spanText = $('.hello-one-para').html();

// $('#hello-one').html('Wow');

// $(document).ready(function(){
//     alert('Document is ready. You can add your js now');
//     $('#hello-one').css('color','red');
// });


// $('.hello-title').css('background-color','red');

// $('.hello-title').css('opacity',.5);

// $('.input-name').val()
// $('input[name="firstname"]').val()

// names = ['name 1', 'name 2'];

// $.each(names, function( index, value ) {
//     console.log( index + ": " + value );
//   });


// $('.google-link-wrap a').attr('href');
// $('.google-link-wrap a').attr('class');
// $('.google-link-wrap a').attr('id');
// $('.google-link-wrap a').attr('data-myname');
// $('.google-link-wrap a').data('myname');

// #hoisting 

// clicked = 'name';

// var clicked = '';

// $('.click-btn:first-child').click(function(e){
//     // let btnClass = $(e.currentTarget.innerHtml);
//     // console.log(btnClass);
//     e.preventDefault();
//     console.log(this);
//     // alert('clicked!');

//     $(this).addClass('clicked');
//     $(this).removeClass('click-btn');
// });

// $('.click-btn').on('click', function(){
//     console.log('clicked form on function');
// })

// $('.input-name').on('keyup', function(){
//     console.log($(this).val());
// });

// $('.input-name').on('change', function(){
//     console.log($(this).val());
// });

// $('.my-form').submit(function(e){
//     e.preventDefault();
//     let inputVal = $('.input-name').val();
//     console.log(inputVal);
// });

// $('ul').append('<li>hey last</li>');
// $('ul').prepend('<li>hey first</li>');


// $('.animation-content').fadeIn(300);
// $('.animation-content p:last-child').fadeOut(300);
// $('.animation-content p:first-child').fadeToggle(300);

// $('.animation-content').slideUp(300);
// $('.animation-content p:last-child').slideDown(300);
// $('.animation-content p:last-child').slideToggle(300);



$('.my-form').submit(function(e){
    e.preventDefault();
    let inputVal = $('.input-name').val();
    console.log(inputVal);


    $.ajax({
        method: "POST",
        url: "https://jsonplaceholder.typicode.com/posts",
        data: {
            name: inputVal,
            location: "Boston"
        }
    }).done(function (msg) {
        console.log("Data Saved: " + msg);
    });
});