import AOS from 'aos';
import 'aos/dist/aos.css';
export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init(
            {
                once: false, // whether animation should happen only once - while scrolling down
                mirror: true, // whether elements should animate out while scrolling past them
            }
        );
    }
});