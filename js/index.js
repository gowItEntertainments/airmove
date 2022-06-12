var startPos = 0, winScrollTop = 0;
// scrollイベントを設定

window.addEventListener('scroll', function () {
    winScrollTop = this.scrollY;
    if (winScrollTop >= startPos) {
        // 下にスクロールされた時
        if (winScrollTop >= 200) {
            // 下に200pxスクロールされたら隠す
            document.getElementsByClassName('logo_background')[0].classList.add('hide_top');

            document.getElementsByClassName('requests')[0].classList.remove('hide_right');
            document.getElementsByClassName('requests')[0].style.display="block";

        }
    } else {

        if (winScrollTop <= 200) {
            // 下に200pxスクロールされたら隠す
            document.getElementsByClassName('logo_background')[0].classList.remove('hide_top');

            document.getElementsByClassName('requests')[0].classList.add('hide_right');

        }
        
    }
    startPos = winScrollTop;
});