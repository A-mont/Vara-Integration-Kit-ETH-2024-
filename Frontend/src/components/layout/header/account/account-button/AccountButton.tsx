import Identicon from '@polkadot/react-identicon';
import { buttonStyles } from '@gear-js/ui';
import { Button } from '@chakra-ui/react';
import "./style.css";

type Props = {
    address: string;
    name: string | undefined;
    onClick: () => void;
    isActive?: boolean;
    block?: boolean;
    tokenBalance?: number;
    balanceUnit?: string;

};

function AccountButton({ tokenBalance, balanceUnit, address, name, onClick, isActive, block }: Props) {
    return (
        <button type='button' className='btn flex space-x-4 bg-primary' onClick={onClick}>
            <Identicon value={address} className='' theme="polkadot" size={28} />
            {name}
            {
                tokenBalance && balanceUnit && (
                    <p className=''>
                        {tokenBalance.toString().concat('  ',balanceUnit)}
                    </p>
                )
            }
        </button>
    );
}

export { AccountButton };
