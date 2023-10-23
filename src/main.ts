import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive('lazyload', {
  mounted(el) {
    if (el.parentNode) {
      el.parentNode.lazyLoadItemObserver =
        el.parentNode.lazyLoadItemObserver ||
        new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const lazyImage = entry.target as HTMLImageElement
              const dataSrcset = lazyImage.getAttribute('data-srcset')

              if (dataSrcset !== null) {
                lazyImage.srcset = dataSrcset

                lazyImage.addEventListener('load', () => {
                  lazyImage.classList.add('is-lazyloaded')
                })
                el.parentNode.lazyLoadItemObserver.unobserve(lazyImage)
              }
            }
          })
        })

      el.parentNode.lazyLoadItemObserver.observe(el)
    }
  },
  unmounted(el) {
    if (el.parentNode) {
      el.parentNode.lazyLoadItemObserver.unobserve(el)
    }
  }
})

// app.config.globalProperties.$filters = {
//   capitalize: (value) => {
//     if (!value) return ''
//     value = value.toString()
//     return value.charAt(0).toUpperCase() + value.slice(1)
//   }
// }

app.mount('#app')
