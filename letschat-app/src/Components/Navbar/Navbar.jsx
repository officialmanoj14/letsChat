import { Button } from '@chakra-ui/react';
import { FaSmile, FaGlobeAmericas, FaLock, FaStore, FaUserFriends, FaArrowRight } from "react-icons/fa";
import styles from './Navbar.module.css';
import { ChevronDownIcon,ArrowDownIcon } from '@chakra-ui/icons';

let drpdwn = document.getElementById('drpdwn');
let itsid = document.querySelector('#itsid');
console.log(drpdwn)
itsid.addEventListener('click', openDrpdwn)

let display = false
let openDrpdwn = ()=> {
    console.log('check')
    // if(display) {
    //     drpdwn.style.display = 'none'
    //     display = !display
    // } else {
    //     drpdwn.style.display = 'block'
    //     display = !display
    // }
}

let Navbar = ()=> {
    
    return (<div className={styles.nav}>
        <nav>
            <img id='itsid' src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" alt="letsChat logo" />
            <div className={styles.container}>
                <a >Feature <ChevronDownIcon/></a>
                <a href="">Privacy</a>
                <a href="">Help Center</a>
                <a href="">Blog</a>
            </div>
            <div>
                <a href="">LetsChat Web</a>
                <a href=''><Button border='1px solid' borderRadius='20px' bgColor="#25d366" padding="5px 20px" colorScheme='green'>Download<ArrowDownIcon/></Button></a>
            </div>
        </nav>
        <div className={styles.dropDown} id='drpdwn'>
            <div className={styles.dropdownCard}>
                <FaLock/>
                <p className={styles.dropdownHeading}>Message privately</p>
                <p>End-to-end encryption and privacy controls.</p>
                <FaArrowRight/>
            </div>
            <div className={styles.dropdownCard}>
                <FaGlobeAmericas/>
                <p className={styles.dropdownHeading}>Stay connected</p>
                <p>Message and call for free* around the world</p>
                <FaArrowRight/>
            </div>
            <div className={styles.dropdownCard}>
            <FaUserFriends/>
            <p className={styles.dropdownHeading}>Build community</p>
            <p>Group convesations made simple</p>
            <FaArrowRight/>
            </div>
            <div className={styles.dropdownCard}>
                <FaSmile/>
                <p className={styles.dropdownHeading}>Express yourself</p>
                <p>Say it with stickers, voice, GIFs and more.</p>
                <FaArrowRight/>
            </div>
            <div className={styles.dropdownCard}>
                <FaStore/>
                <p className={styles.dropdownHeading}>LetsChat Bussiness</p>
                <p>Reach your costomers from anywhere.</p>
                <FaArrowRight/>
            </div>
        </div>
    </div>
    );
}


export default Navbar