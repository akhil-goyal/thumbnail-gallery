
// -------------------- METHOD 1 --------------------

imageLarge = document.querySelector('.image-large')

imageSmall1 = document.querySelector('.image-small-1')
imageSmall1Src = document.querySelector('.image-small-1').src
imageSmall1Alt = document.querySelector('.image-small-1').alt

imageSmall2 = document.querySelector('.image-small-2')
imageSmall2Src = document.querySelector('.image-small-2').src
imageSmall2Alt = document.querySelector('.image-small-2').alt

imageSmall3 = document.querySelector('.image-small-3')
imageSmall3Src = document.querySelector('.image-small-3').src
imageSmall3Alt = document.querySelector('.image-small-3').alt


imageSmall1.addEventListener('click', function(){
    imageLarge.src = imageSmall1Src
    imageLarge.alt = imageSmall1Alt
})

imageSmall2.addEventListener('click', function(){
    imageLarge.src = imageSmall2Src
    imageLarge.alt = imageSmall2Alt
})

imageSmall3.addEventListener('click', function(){
    imageLarge.src = imageSmall3Src
    imageLarge.alt = imageSmall3Alt
})

// --------------------------------------------------