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
                <ul className="menu menu-horizontal px-1">
                    <li>
                        {isAccountVisible && <Account />}
                    </li>
                    <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                <li><h1>Link 1</h1></li>
                                <li><h2>Link 2</h2></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export { Header };

