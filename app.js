let main = document.getElementById('main')
var a = document.getElementById('a')
var b = document.getElementById('b')
var c = document.getElementById('c')
var d = document.getElementById('d')
var e = document.getElementById('e')


a.addEventListener('mouseover', function() {
    a.style.color = 'white';
    a.style.scale = '1.2';
    main.style.backgroundImage = "url('Assets/img-1.jpg')";
}) 

a.addEventListener('mouseleave', function () {
    a.style.scale = '1';
    a.style.color = '#ffffffc1'
    main.style.backgroundColor = 'red';
});

b.addEventListener('mouseover', function() {
    b.style.color = 'white';
    b.style.scale = '1.2';
    main.style.backgroundImage = "url('Assets/img-2.jpg')";
}) 

b.addEventListener('mouseleave', function () {
    b.style.scale = '1';
    b.style.color = '#ffffffc1'
     main.style.backgroundColor = 'red';
});

c.addEventListener('mouseover', function() {
    c.style.color = 'white';
    c.style.scale = '1.2';
    main.style.backgroundImage = "url('Assets/img-3.jpg')";
}) 


c.addEventListener('mouseleave', function () {
    c.style.scale = '1';
    c.style.color = '#ffffffc1'
     main.style.backgroundColor = 'red';
});

d.addEventListener('mouseover', function() {
    d.style.color = 'white';
    d.style.scale = '1.2';
    main.style.backgroundImage = "url('Assets/img-4.jpg')";
}) 


d.addEventListener('mouseleave', function () {
    d.style.scale = '1';
    d.style.color = '#ffffffc1'
     main.style.backgroundColor = 'red';
});

e.addEventListener('mouseover', function() {
    e.style.color = 'white';
    e.style.scale = '1.2';
    main.style.backgroundImage = "url('Assets/img-5.jpg')";
}) 


e.addEventListener('mouseleave', function () {
    e.style.scale = '1';
    e.style.color = '#ffffffc1'
     main.style.backgroundColor = 'red';
});

