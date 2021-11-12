new WOW().init();

$.scrollIt({
    topOffset: -50
});


// const sr = ScrollReveal({
//     origin: 'right',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr.reveal(`.port,.Btn`, {
//     interval: 200
// })

// const sr3 = ScrollReveal({
//     origin: 'left',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr3.reveal(`.sec-3,.box-exp,.item-box-contact,.info-icon`, {
//     interval: 200
// })
// const sr2 = ScrollReveal({
//     origin: 'top',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr2.reveal(`.box1,.box-pricing`, {
//     interval: 200
// })

// const sr4 = ScrollReveal({
//     origin: 'bottom',
//     distance: '30px',
//     duration: 2000,
//     reset: true
// });

// sr4.reveal(`.box-certificates,.titel,.item-skille,.input-form,.box-text-area,.btnForm`, {
//     interval: 200
// })



// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————
class TextScramble {
constructor(el) {
    this.el = el;
    this.chars = '!<>-_\\/[]{}—=+*^?#________';
    this.update = this.update.bind(this);
}

setText(newText) {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise(resolve => this.resolve = resolve);
    this.queue = [];

    for (let i = 0; i < length; i++) {
    const from = oldText[i] || '';
    const to = newText[i] || '';
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
    this.queue.push({
        from,
        to,
        start,
        end
    });
    }

    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
}

update() {
    let output = '';
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
    let {
        from,
        to,
        start,
        end,
        char
    } = this.queue[i];

    if (this.frame >= end) {
        complete++;
        output += to;
    } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
        char = this.randomChar();
        this.queue[i].char = char;
        }

        output += `<span class="dud">${char}</span>`;
    } else {
        output += from;
    }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
    this.resolve();
    } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
    }
}

randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
}

} 


$('.services-carousel').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
})

$(document).scroll(function () {
    if ($(document).scrollTop() > 300) {
        $('.top').fadeIn();
    } 
    else {
        $('.top').fadeOut();
    }
})

$('.top').click(function () {

    $('body, html').animate({
        scrollTop: 0
    }, 1500);

})
const menuBtn=document.querySelector('.menu-btn');
let menuOpen=false;
menuBtn.addEventListener('click',()=>{
    if (!menuOpen) {
        menuBtn.classList.add('open');
        menuOpen=true;
    }else{
        menuBtn.classList.remove('open');
        menuOpen=false;
        
    }
});
$(window).on("load",function(){
    $(".preloader").fadeOut("slow");
});

function sendmail(){
			var name = $('#Name').val();
			var email = $('#Sender').val();
			var subject = $('#Subject').val();
            var message = $('#Message').val();
			// var body = $('#body').val();
			var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
			//console.log(name, phone, email, message);
			Email.send({
                SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
				To: 'otaku3game@gmail.com',
				From: email,
				Subject: "New message on contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your mail has been send. Thank you for connecting.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
					}
				}
			);
		}


function toggleTeme(){
            if(localStorage.getItem("shala-theme")!==null){
                if(localStorage.getItem("shala-theme")==="dark"){
                    $(".all,body").addClass("dark");
                }
                else{
                    $(".all,body").removeClass("dark");
                }
            }
            updateIcon();
        }
        
        toggleTeme();
        
        $(".toggle-theme").on("click",function(){
            $(".all,body").toggleClass("dark");
            if($(".all,body").hasClass("dark")){
                localStorage.setItem("shala-theme","dark");
            }
            else{
                localStorage.setItem("shala-theme","light");
            }
            updateIcon();
        })
function updateIcon(){
            if($(".all,body").hasClass("dark")){
                $(".toggle-theme i").removeClass("fa-moon");
                $(".toggle-theme i").addClass("fa-sun");
            }
            else{
                $(".toggle-theme i").removeClass("fa-sun");
                $(".toggle-theme i").addClass("fa-moon");
            }
}        