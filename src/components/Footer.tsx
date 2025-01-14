import logo from '../assets/logoFinanceSignal.png';
import { socialLinks } from '../lib/socialLinks';

export const Footer = () => {
    return (
        <div>
            <img src={logo} alt="Logo de la empresa Zulia" className='logoFooter mx-auto' />

            <div className='flex items-center flex-col justify-around p-4 bg-dark' data-aos="fade-up">
                <div className='flex items-center gap-5'>
                    {
                        socialLinks.map(({ href, label, icon }) => (
                            <a key={label} href={href} target='_blank'
                                rel="noopener noreferrer" aria-label={`Ingresar a ${label}`}
                                className='icon-redes text-white'>
                                <i className={`fa-brands ${icon}`}></i>
                            </a>
                        ))
                    }
                </div>

                <span className='font-secondary text-lg text-center text-white mt-5'>
                    © 2025 Copyright FinanceSignal
                </span>

            </div >
        </div>
    );
};
