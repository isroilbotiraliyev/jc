var yosh = prompt('yoshingizni kiriting !')
if (!isNaN(yosh)) {

    if ( yosh < 18) {
    console.log("o'qishingiz kerak !")
    }else if ( yosh >= 18 && yosh <= 50  ){
         console.log('ishlashingiz kerak !')
    }else if (yosh >= 50 && yosh < 60) {
    console.log('nafaqaga chiqishingiz kerak !')
    }else if (yosh >= 60 && yosh < 100 ) {
        console.log('siz nafaqadasiz !')
    }else {
        console.log('nimadur xato ketti !')
    }

} else {

    console.log('yoshni raqamda kiriting !!!')
}
