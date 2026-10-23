import { Link } from 'react-router-dom';
import siteConfig from '../../../siteConfig';

const Logo = ({ logo }) => {
    return <Link to='/'>
        <img src={logo} alt={siteConfig.brandName} className="img-fluid" />
    </Link>
}

export default Logo;
