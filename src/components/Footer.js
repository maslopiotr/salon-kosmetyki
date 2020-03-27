import React from 'react'

const Footer = (props) => (
    <footer id="footer">
        <div className="inner">
            <ul className="links">
                <li><a href="/polityka-prywatnosci/">Polityka Prywatności</a></li>
                <li><a href="https://wszystkoociasteczkach.pl/" target="blank" rel="noopener noreferrer nofollow">Cookies</a></li>
                <li><a href="https://www.facebook.com/pg/salonkosmetykisamochodowej/about/" target="blank" rel="noopener noreferrer nofollow">Facebook</a></li>
                <li><a href="https://www.google.com/maps/place/Salon+Kosmetyki+Samochodowej+-+MYJNIA+POD+MC+DONALD'S+TO+NIE+MY/@50.0163563,20.967509,15z/data=!4m8!1m2!2m1!1sCar+detailing+service!3m4!1s0x473d9ca4373006bb:0xcfbe771f19b3f89c!8m2!3d50.016336!4d20.976296?hl=en-GB" target="blank" rel="noopener noreferrer nofollow">Google</a></li>
            </ul>
            <ul className="copyright">
                <li>&copy; Salon Kosmetyki Tarnów</li>
            </ul>
        </div>
        <div>
        <a href="#top" style={{position:`fixed`, bottom:`10px`, right:`10px`, border:`none`, padding:`0px 11px 8px 11px`, fontSize:`28px`, opacity:`1`, zIndex:`999`}}><i class="fa fa-arrow-circle-up" aria-hidden="true"></i>
</a>
        </div>
    </footer>
)

export default Footer
