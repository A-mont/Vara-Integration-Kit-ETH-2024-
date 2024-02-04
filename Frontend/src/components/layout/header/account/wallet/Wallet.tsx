import { Account } from '@gear-js/react-hooks';
import { AccountButton } from '../account-button';
import styles from './Wallet.module.scss';

type Props = {
    balance: Account['balance'];
    address: string;
    name: string | undefined;
    onClick: () => void;
};

function Wallet({ balance, address, name, onClick }: Props) {
    return (
        <div className=''>
           <AccountButton address={address} name={name} tokenBalance={balance.value} balanceUnit={balance.unit} onClick={onClick} />
        </div>
    );
}

export { Wallet };
