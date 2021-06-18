'use strict';

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

const button_active_popup = document.querySelectorAll('._js_popup_phone'),
	  popup_phone = document.querySelector('#popup_phone');

button_active_popup.forEach(e => {
	e.addEventListener('click', (event) => {
		event.preventDefault();

		popup_phone.classList.add('active');
	});
});

if(popup_phone) {
	document.addEventListener('click', (e) => {
		const target = e.target,
			  its_popup = target == popup_phone || popup_phone.contains(target),
			  its_btn_popup = target.classList.contains('_js_popup_phone'),
			  popup_is_active = popup_phone.classList.contains('active');

		if(!its_popup && !its_btn_popup && popup_is_active) {
			popup_phone.classList.remove('active');
		}
	});
}


const inputPhone = document.querySelectorAll('._js_phone');

if(inputPhone) {
	inputPhone.forEach(e => {
		Inputmask({"mask": "+7 (999) 999-99-99"}).mask(e);
	});
}

// swiper

const workSlider = document.querySelector('#work_slider');

if (workSlider) {
    let SliderMain = null,
        mediaQuerySize = 900;

    const sliderMainInit = () => {
        if (!SliderMain) {
            SliderMain = new Swiper('#work_slider', {
                slidesPerView: 1,
                spaceBetween: 40,
                loop: true,

                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },

				breakpoints: {
					768: {
						slidesPerView: 2,
						// spaceBetween: 33,
					}
				}
            });

			// const wrapper = SliderMain.wrapperEl;
			// if (wrapper) {
			// 	[].forEach.call(SliderMain.slides, function(slide) {
			// 		slide.style.height = "";
			// 	});

			// 	setTimeout(() => {
			// 		[].forEach.call(SliderMain.slides, function(slide) {
			// 			slide.style.height = wrapper.clientHeight + "px";
			// 		});
			// 	}, 300);

			// 	document.addEventListener('resize', () => {
			// 		[].forEach.call(SliderMain.slides, function(slide) {
			// 			slide.style.height = "";
			// 		});

			// 		setTimeout(() => {
			// 			[].forEach.call(SliderMain.slides, function(slide) {
			// 				slide.style.height = wrapper.clientHeight + "px";
			// 			});
			// 		}, 300);
			// 	});
			// }
        }
    };

    const sliderMainDestroy = () => {
        if (SliderMain) {
            SliderMain.destroy();
            SliderMain = null;
        }
    }

    window.addEventListener('load', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            sliderMainInit();
        } else {
            sliderMainDestroy();
        }
    });

    window.addEventListener('resize', () => {
        let windowWidthSlide = window.outerWidth;
        if (windowWidthSlide <= mediaQuerySize) {
            // console.log(2);
            sliderMainInit();
        } else {
            sliderMainDestroy();
        }
    });

	
}

