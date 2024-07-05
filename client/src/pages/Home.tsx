import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GiWallet } from "react-icons/gi";
import { FaUnlockAlt, FaLongArrowAltRight } from "react-icons/fa";
import { PiCallBellBold } from "react-icons/pi";

const Home = () => {
  return (
    <div>
      <section className="mx-auto max-w-screen-xl px-6 py-[100px] flex flex-wrap gap-5 justify-between">
        <div>
          <h1 className="text-[50px] text-primary-black font-bold">
            Ehtereum's
          </h1>
          <h1 className="text-[50px] text-primary-black font-bold">
            Orginial Wallet
          </h1>
          <p className="mt-5 max-w-[550px] text-gray-400 text-justify">
            MyEtherWallet (our friends call us MEW) is a free, client-side
            interface helping you interact with the Etherium blockchain. Our
            easy-to-use, open-source platform allows you to generate wallets,
            interact with smart contracts, and so much more.
          </p>
        </div>
        <div>
          <img
            className="w-[100%]"
            src="./assets/article-1.png"
            alt="article-1"
          />
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl p-6 flex flex-wrap gap-5 justify-between">
        <Link to="/create-wallet">
          <div
            className="h-[100%] w-[100%] md:w-[550px] xl:w-[600px] bg-primary-purple text-white p-6 rounded-md flex gap-8 justify-between
                          hover:cursor-pointer hover:translate-y-1"
          >
            <div className="flex items-center">
              <GiWallet size={60} />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-xl font-bold">Create A New Wallet</h1>
                <p className="my-3">
                  Generate your own unique Ehterium wallet. Receive a public
                  address (0x...) and choose a method for access and recovery
                </p>
              </div>
              <div className="flex items-center gap-3 font-bold">
                <p>Get Started</p>
                <FaLongArrowAltRight size={20} />
              </div>
            </div>
          </div>
        </Link>
        <Link to="/access-wallet">
          <div
            className="h-[100%] w-[100%] md:w-[550px] xl:w-[600px] bg-primary-green text-white p-6 rounded-md flex gap-8 justify-between
                          hover:cursor-pointer hover:translate-y-1"
          >
            <div className="flex items-center">
              <FaUnlockAlt size={60} />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-xl font-bold">Access My Wallet</h1>
                <p>
                  Connect to the blockchain using the wallet of your choice.
                </p>
                <ul className="ml-10 my-3 list-disc">
                  <li>Send and Swap ETH & Tokens</li>
                  <li>Sign & Verify Messages</li>
                  <li>Interact with Contracts, ENS, Dopps, and more!</li>
                </ul>
              </div>
              <div className="flex items-center gap-3 font-bold">
                <p>Get Started</p>
                <FaLongArrowAltRight size={20} />
              </div>
            </div>
          </div>
        </Link>
      </section>
      <section className="mx-auto max-w-screen-xl px-6 py-[100px]">
        <div className="flex flex-wrap gap-20 items-center justify-between">
          <div className="flex flex-col gap-20 md:w-[500px]">
            <div className="w-[100%] flex gap-5">
              <div className="w-[20%]">
                <img
                  className="w-[100%]"
                  src="/assets/logo-create.svg"
                  alt="article"
                />
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold">Join MEW</h1>
                <p className="mt-3 text-gray-400">
                  Access the Etherium blockchain's orginial and most-trusted
                  wallet client, now with a host of new features all contained
                  in an elegant, easy-to-use interface.
                </p>
              </div>
            </div>
            <div className="w-[100%] flex gap-5">
              <div className="w-[20%]">
                <img
                  className="w-[100%]"
                  src="/assets/logo-create.svg"
                  alt="article"
                />
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold">Swap</h1>
                <p className="mt-3 text-gray-400">
                  MEW has partnered with Bity, Kyber Network, Changelly, and
                  Simplex to allow users to swap flat to crypto, ETH and BTC,
                  ETH and ERC20.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-20 md:w-[500px]">
            <div className="md:w-[500px] flex gap-5">
              <div className="w-[20%]">
                <img
                  className="w-[100%]"
                  src="/assets/logo-create.svg"
                  alt="article"
                />
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold">Hardware Wallet Support</h1>
                <p className="mt-3 text-gray-400">
                  MEW offers support for all major hardware wallets including
                  Ledger, Trezor, and many mare.
                </p>
              </div>
            </div>
            <div className="md:w-[500px] flex gap-5">
              <div className="w-[20%]">
                <img
                  className="w-[100%]"
                  src="/assets/logo-create.svg"
                  alt="article"
                />
              </div>
              <div className="w-[80%]">
                <h1 className="text-2xl font-bold">MEW Wallet</h1>
                <p className="mt-3 text-gray-400">
                  MEW's official fully-fledged app brings Etherium to your IOS
                  or Android smartphone. MEW wallet puts you in full control.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-screen-xl px-6 pb-[100px]">
        <h1 className="text-[50px] font-bold">FAQs</h1>
        <div className="mb-10 flex flex-wrap gap-5 items-center justify-between">
          <div className="flex flex-wrap items-center gap-1">
            <p>Have not found the question that you are looking for?</p>
            <Link to="/more">
              <p className="text-primary-green font-bold">see more...</p>
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <PiCallBellBold className="text-primary-green" size={25} />
            <p className="font-bold text-primary-green">Customer Support</p>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              <h1 className="text-xl font-bold">What is MEW Wallet?</h1>
            </AccordionTrigger>
            <AccordionContent>
              MEW Wallet is out official fully-fledged mobile app, bringing
              Etherium to your IOS or Android phone.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              <h1 className="text-xl font-bold">
                Can MEW work with other Wallets?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              MEW supports many different wallet types including hardware
              wallets, such as the Ledger Nano S or Trenzor, and third-party
              wallets like MetaMask. We are also open for anyone to use their
              Etherium wallets with the appropriate information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              <h1 className="text-xl font-bold">
                How can i send a transaction?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              MEW lets anyone with a balance of ETH or ERC20 tokens send a
              transaction, without additional charges. Using the Ethereum
              blockchain takes gas, which is paid for in ETH, so we recommend
              having at least .01 ETH to cover around 2 - 3 transactions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              <h1 className="text-xl font-bold">
                I forgot my password/Private key! What can i do?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              MEW does not offer support to recover of reset password/ private
              keys. We always suggest writing down private keys and passwords on
              physical paper/ notebooks for safekeeping. Maybe you saved it on
              your computer!.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              <h1 className="text-xl font-bold">
                How do i create a new wallet?
              </h1>
            </AccordionTrigger>
            <AccordionContent>
              MyEtherWallet (MEW) offers three ways to create a new ETH wallet.
              These are via MEW wallet, Keystore file, or Mnemonic phrase.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default Home;
