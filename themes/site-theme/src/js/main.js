import styles from './../css/main.css';
import AOS from 'aos';
import Glide from '@glidejs/glide'

AOS.init({
    disable: 'mobile',
    once: true
});

var glide = new Glide('#glide', {
  type: 'carousel',
  perView: 3,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 3
    },
    480: {
      perView: 1
    }
  }
})

glide.mount()






