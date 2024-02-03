import { Account } from './account';

type Props = {
    isAccountVisible: boolean;
};

function Header({ isAccountVisible }: Props) {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a href='/home' className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                {isAccountVisible && <Account />}
            </div>
        </div>
    );
}

export { Header };

