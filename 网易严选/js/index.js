$(function () {

    //人气推荐选项卡
    $(".item-0").click(function () {
        $(".showContainer2").css("display","none")
        $(".showContainer1").css("display","block")
        $(".item-1").removeClass("active")
        $(this).addClass("active")
        
    })
    $(".item-1").click(function () {
        $(".showContainer2").css("display","block")
        $(".showContainer1").css("display","none")
        $(".item-0").removeClass("active")
        $(this).addClass("active")
    })

    // 大家都在说
    $.get("../js/allSay.json", function (date) {
        // console.log(date)
        $(date).each(function () {
            
            $(".slickWidth-swiper")[0].innerHTML +=
                `
            <div class="swiper-slide">
                <div class="img-lazyload"> <img class="img-lazyload1" src=${this.img} alt=""></div>
                <div class="img-lazyload-xia">
                    <div class="m-comment">
                        <div class="top">
                            <span>${this.user}</span>
                            <span class="img-lazyload-span1">${this.time}</span>
                        </div>
                        <div class="middle">
                            <span class="middle-name">${this.name}</span>
                            <span class="middle-price">
                                ￥
                                <span>${this.price}</span>
                            </span>
                        </div>
                        <div class="bottom">
                            <p>${this.describe}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            var swiper1 = new Swiper('.swiper-container1', {
                loop: true,
                autoplay: {
                    delay: 2000,
                },
                freeMode : false,
                slidesPerView: 3,
                centeredSlides: true,
                centeredSlidesBounds: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        })
    })
    



})