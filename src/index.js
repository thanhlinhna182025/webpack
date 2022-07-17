import FooterScreen from './screens/FooterScreen';
import HeaderScreen from './screens/HeaderScreen';
import HomeScreen from './screens/HomeScreen';
import './scss/style.scss';

const router = () => {
    $('#header').html(HeaderScreen.render());
    $('#main').html(HomeScreen.render());
    $('#footer').html(FooterScreen.render());
};

window.addEventListener('load', router);
