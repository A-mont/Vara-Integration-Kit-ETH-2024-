
import { useAccount, useApi, useAlert } from "@gear-js/react-hooks";
import { web3FromSource } from "@polkadot/extension-dapp";
import { ProgramMetadata } from "@gear-js/api";
import { Button } from "@chakra-ui/react";

function RedButton() {
  const alert = useAlert();
  const { accounts, account } = useAccount();
  const { api } = useApi();

  // Add your programID
  const programIDFT =
    "0x6a5be0ca678c2bdfe87cb1c622bafc4eb0e272243f9d6812f972c2db0b454ba9";

  // Add your metadata.txt
  const meta =
    "000100000001000000000101000000000000000102000000090320000808696f48416374696f6e547261666669634c6967687400010c14477265656e0000001859656c6c6f770001000c52656400020000040808696f444576656e74547261666669634c6967687400010c14477265656e0000001859656c6c6f770001000c52656400020000080000020c000c00000408101c001010106773746418636f6d6d6f6e287072696d6974697665731c4163746f724964000004001401205b75383b2033325d0000140000032000000018001800000503001c0000050200";

  const metadata = ProgramMetadata.from(meta);

  const message: any = {
    destination: programIDFT, // programId
    payload: "Red",
    gasLimit: 899819245,
    value: 0,
  };




  const signer = async () => {
    const localaccount = account?.address;
    const isVisibleAccount = accounts.some(
      (visibleAccount) => visibleAccount.address === localaccount
    );

    if (isVisibleAccount) {
      // Create a message extrinsic
      const transferExtrinsic = await api.message.send(message, metadata);

      const injector = await web3FromSource(accounts[0].meta.source);

      transferExtrinsic
        .signAndSend(
          account?.address ?? alert.error("No account"),
          { signer: injector.signer },
          ({ status }) => {
            if (status.isInBlock) {
              alert.success(status.asInBlock.toString());
            } else {
              console.log("In process");
              if (status.type === "Finalized") {
                alert.success(status.type);
              }
            }
          }
        )
        .catch((error: any) => {
          console.log(":( transaction failed", error);
        });
    } else {
      alert.error("Account not available to sign");
    }
  };

  return (<Button backgroundColor="red.400" onClick={signer}>RED</Button>)
}

export {RedButton };

 
    
    