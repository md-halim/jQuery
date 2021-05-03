$(document).ready(function(){
    $('#box').click(function(){
        $('#box').css({
            'background-color' : 'hotpink',
            'border' : '2px solid red',
            'border-radius' : '50px'
            
        });
    });


    $('#box').mouseenter(function(){
        $('#box').css({
            'background-color' : '#f1c40f',
            'border' : '2px solid red',
            'border-radius' : '50px'
            
        });
    });

    $('#box').mouseleave(function(){
        $('#box').css({
            'background-color' : '#34495e',
            'border' : '2px solid #fff',
            'color' : '#fff',
            'font-size' : '18px',
            'border-radius' : '50px'
            
        });
    });

    $('#box').contextmenu(function(){
        $('#box').css({
            'background-color' : '#1abc9c',
            'border' : '2px solid #f39c12',
            'border-radius' : '50px'
            
        });
    });
});