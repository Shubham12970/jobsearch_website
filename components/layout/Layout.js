import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import style from './layout.module.css';

export default function Layout({children}){
    return (
        <div className='bg-blue-50'>{children}
        </div>
    )

}