import { Link } from "react-router-dom";
import { FaEthereum, FaBitcoin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-primary-black text-white">
      <div className="mx-auto max-w-screen-xl px-6 pt-[80px] pb-6">
        <div className="flex flex-wrap gap-[50px] justify-between">
          <div className="flex gap-5 justify-between">
            <div className="flex gap-5 md:gap-[150px]">
              <div className="flex flex-col gap-8">
                <h1 className="text-lg font-bold">Discover</h1>
                <div className="flex flex-col gap-5">
                  <Link to="/">
                    <p className="text-gray-400">Convert Units</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">MEW wallet</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">MEWconnect Protocol</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">MEW CX</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">EthVM</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Buy a HardWare wallet</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">send Office Helper</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Verify Message</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Submit Dapp</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Press Kit</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Generate Eth2 Address</p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="text-lg font-bold">Affiliates</h1>
                <div className="flex flex-col gap-5">
                  <Link to="/">
                    <p className="text-gray-400">Ledger Wallet</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Ether Card</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Alchemy</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Bity</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Billfodl</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Finney</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Trezor</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Secalot</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">KeepKey</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">CoolWallet</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">State of the Dapps</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">BC Vault</p>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-8">
                <h1 className="text-lg font-bold">MEW</h1>
                <div className="flex flex-col gap-5">
                  <Link to="/">
                    <p className="text-gray-400">About</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Team</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">FAQs</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">MEWtopia</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Customer Support</p>
                  </Link>
                  <Link to="/">
                    <p className="text-gray-400">Help Center</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1 className="font-bold">Love ❤️ MEW? Donate</h1>
            <p className="mt-10 my-5 w-[400px] text-gray-400">
              MyEtherWallet is open-source and free to the community. Your
              donations go a long way towards making that possible.
            </p>
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3 text-gray-400">
                <FaEthereum size={30} color="purple" />
                <p>Etherium Donate</p>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaBitcoin size={30} color="yellow" />
                <p>Bitcoin Donate</p>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 w-full h-[1px] bg-gray-400"></div>
        <div className="flex flex-col items-center text-gray-400">
          <div className="flex items-center gap-2">
            Pricing taken from <p className="text-white font-bold">Coingecko</p>
          </div>
          <p>© 2024 MyEtherWallet. All Rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
