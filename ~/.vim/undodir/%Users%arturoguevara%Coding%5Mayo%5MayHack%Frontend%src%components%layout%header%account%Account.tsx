Vim�UnDo� ����)�[�=��r@�9t�{l���Q��                                     e���   
 _�                             ����                                                                                                                                                                                                                                                                                                                                                             e���     �                 �                      5��                          $                     �                          $                     5�_�                             ����                                                                                                                                                                                                                                                                                                                                                             e���     �       !        �      !          *{isAppReady ? <Routing /> : <ApiLoader />}5��                       *   %              *       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             e���     �                function Account1() {5��                         �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e���     �                  �      !   !      function Account 5��                          &                     �                          &                     �                         8                     �                         7                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e���     �      !   !      function Account ()5��                         7                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e���     �      !   !      function Account () 5��                         9                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e���     �      !   !      function Account () {}5��                         :                     5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                                             e���     �      !   !      function Account () {   }�       !   "       5��                         ;                     �                           <                     �                           <                     �                          ?                     �                          >                     �                          =                     �                           <                     5�_�      
           	   #       ����                                                                                                                                                                                                                                                                                                                                                             e���     �   "   $        5��    "                      ?      +               5�_�   	              
   !        ����                                                                                                                                                                                                                                                                                                                                                             e���     �   !   "   "    �   !   "   "      *{isAppReady ? <Routing /> : <ApiLoader />}5��    !                      =              +       5�_�   
                 !        ����                                                                                                                                                                                                                                                                                                                                                             e���     �       "        5��                           <                     5�_�                    !        ����                                                                                                                                                                                                                                                                                                                                                             e���     �       "   "      .    {isAppReady ? <Routing /> : <ApiLoader />}5��                           <                     5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                             e���     �       "   "      .    {isAppReady ? <Account /> : <ApiLoader />}5��                         O                    5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                             e���    �       "   "      /    {isAppReady ? <Account1 /> : <ApiLoader />}5��                          V                     5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             e���     �              5��                                               5�_�                    !        ����                                                                                                                                                                                                                                                                                                                                                             e���     �   !   "        �   !   "          export { Account };5��    !                      Z                     5�_�                    !        ����                                                                                                                                                                                                                                                                                                                                                             e���    �   !   "   "       5��    !                      Z                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e��M    �         #    �         #      $    const { isApiReady } = useApi();   ,    const { isAccountReady } = useAccount();       4    const isAppReady = isApiReady && isAccountReady;5��                          �               �       5�_�                    
       ����                                                                                                                                                                                                                                                                                                                                                             e��Q    �   
      '       5��    
                      I                     �    
                     L                     �    
                     K                     �    
                     J                     �    
                      I                     5�_�                            ����                                                                                                                                                                                                                                                                                                                                                             e���    �         (    �          (      :import { useApi, useAccount } from '@gear-js/react-hooks';5��                                           ;       5�_�                           ����                                                                                                                                                                                                                                                                                                                                                             e���     �         )      =  const { account, accounts, isAccountReady } = useAccount();5��                         �                     �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    �                        �                    5�_�                            ����                                                                                                                                                                                                                                                                                                                               #          *       V   *    e���     �      
        5��                          �       R               5�_�                            ����                                                                                                                                                                                                                                                                                                                               #          *       V   *    e���     �      	        5��                          �                      5�_�                            ����                                                                                                                                                                                                                                                                                                                               #          *       V   *    e���     �      	        5��                          �       5               5�_�                    	        ����                                                                                                                                                                                                                                                                                                                               #          *       V   *    e���     �   	   
   %    �   	   
   %      4    const isAppReady = isApiReady && isAccountReady;5��    	                      ;              5       5�_�                    
       ����                                                                                                                                                                                                                                                                                                                               #          *       V   *    e���    �   	      &      0const isAppReady = isApiReady && isAccountReady;5��    	                     <                     �    	                      ;                     5�_�                            ����                                                                                                                                                                                                                                                                                                                               #          *       V   *    e���    �       '       &   :import { useApi, useAccount } from '@gear-js/react-hooks';   !import { useState } from 'react';   2import { useAccount } from '@gear-js/react-hooks';   1import { AccountsModal } from './accounts-modal';   "import { Wallet } from './wallet';       function Account1() {       ?    const { account, accounts, isAccountReady } = useAccount();   4    const isAppReady = isApiReady && isAccountReady;   :    const [isModalOpen, setIsModalOpen] = useState(false);           const openModal = () => {           setIsModalOpen(true);       };           const closeModal = () => {           setIsModalOpen(false);       };           return (   
        <>               {account ? (   {                <Wallet balance={account.balance} address={account.address} name={account.meta.name} onClick={openModal} />               ) : (   k                    <button type="button" className='btn' onClick={openModal}> Connect Your Wallet</button>                   )}   U            {isModalOpen && <AccountsModal accounts={accounts} close={closeModal} />}           </>       );   }           function Account () {   +{isAppReady ? <Account1 /> : <ApiLoader />}   }       export { Account };5��                         �                     �    	                      =                     �    
                     r                    �                         �                    �                         �                    �                         �                    �                         �                    �                                             �                         0                    �                         8                    �                         E                    �                         P                    �                         i                    �                         �                    �                         �                    �                         c                    �                         v                    �                         �                    �                         �                    �    "                      �                     5�_�                             ����                                                                                                                                                                                                                                                                                                                               #          *       V   *    e���   	 �              5��                          ]       3               5��