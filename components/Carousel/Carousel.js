class Carousel {

    constructor(element){
        this.element = element;
        this.left = document.querySelector('.left-button');
        this.left.addEventListener('click', () => {this.decrement()});
        this.right = document.querySelector('.right-button');
        this.right.addEventListener('click', () => {this.increment()});
        this.imgs = Array.from(this.element.querySelectorAll('img'));
        this.currentIndex = -1;
        this.increment();
    }
    increment(){
        this.currentIndex === 3 ? this.currentIndex = 0 : this.currentIndex += 1;
        this.imgs.forEach(img => {
            img.classList.remove('img-display');
            img.classList.add('img-none');
        });
        this.imgs[this.currentIndex].classList.remove('img-none');
        this.imgs[this.currentIndex].classList.add('img-display');
    }
    decrement() {
        this.currentIndex === 0 ? this.currentIndex = 3 : this.currentIndex -= 1;
        this.imgs.forEach(img => {
            img.classList.remove('img-display');
            img.classList.add('img-none');
        });
        this.imgs[this.currentIndex].classList.remove('img-none');
        this.imgs[this.currentIndex].classList.add('img-display');
    }
}

let carousel = document.querySelector(".carousel");
carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/