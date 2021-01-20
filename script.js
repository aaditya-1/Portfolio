const tl = gsap.timeline({ defaults: { ease: 'power1.out' } })
tl.to('.text', { y: '0%', duration: 3 });
tl.to('.slider', { y: '-100%', duration: 3 }, "+=2");
tl.to('.intro', { y: '-100%', duration: 3 }, "-=3");
tl.fromTo('nav', { opacity: 0 }, { opacity: 1, duration: 1.5 });
tl.fromTo('.content', { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=0.5");

