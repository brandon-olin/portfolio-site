import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-name', {
    strings: ["Brandon Olin^1000\nRuby on Rails Developer"],
    typeSpeed: 50,
    loop: false
  });
}

export { loadDynamicBannerText };
