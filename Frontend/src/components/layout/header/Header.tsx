
import { ApiLoader } from 'components'
import { useApi } from '@gear-js/react-hooks'
import { Account } from './account';


type Props = {
    isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
    const { isApiReady } = useApi();
    const isReady = isAccountVisible && isApiReady;
    
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/home' className="btn btn-ghost text-xl">Schola</a>
            </div>
            <div className="flex-none">
                {isReady ? <Account /> : <ApiLoader /> }
            </div>
        </div>
    );
}

export { Header };

