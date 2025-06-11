import logoIcon from '@/assets/icons/logo.svg';

const Footer = () => {
    return (
        <footer className="mt-[3.125rem] pb-[1.75rem] font-poppins">
            <div className="flex justify-between items-start mx-80 mb-9.5">
                <div className="">
                    <h3 className="text-sm font-semibold mb-2.5">Know Us</h3>
                    <p className="text-[12px] text-zinc-700">About Us</p>
                    <p className="text-[12px] text-zinc-700">Contact Us</p>
                    <p className="text-[12px] text-zinc-700">Press</p>
                    <p className="text-[12px] text-zinc-700">Careers</p>
                    <p className="text-[12px] text-zinc-700">Elexo Earn</p>
                </div>
                <div className="">
                    <h3 className="text-sm font-semibold mb-2.5 ">Policy</h3>
                    <p className="text-[12px] text-zinc-700">Security</p>
                    <p className="text-[12px] text-zinc-700">Privacy</p>
                    <p className="text-[12px] text-zinc-700">Term of use</p>
                    <p className="text-[12px] text-zinc-700">Return policy</p>
                    <p className="text-[12px] text-zinc-700">Compliance</p>

                </div>
                <div className="">
                    <h3 className="text-sm font-semibold mb-2.5 ">Help you</h3>
                    <p className="text-[12px] text-zinc-700">Return and Cancelation</p>
                    <p className="text-[12px] text-zinc-700">Membership</p>
                    <p className="text-[12px] text-zinc-700">Payments</p>
                    <p className="text-[12px] text-zinc-700">Account</p>
                    <p className="text-[12px] text-zinc-700">Shipping</p>

                </div>
                <div className="">
                    <h3 className="text-sm font-semibold mb-2.5 ">Social</h3>
                    <p className="text-[12px] text-zinc-700">Facebook</p>
                    <p className="text-[12px] text-zinc-700">Instagram</p>
                    <p className="text-[12px] text-zinc-700">Twitter</p>
                    <p className="text-[12px] text-zinc-700">Youtube</p>
                    <p className="text-[12px] text-zinc-700">Tiktok</p>

                </div>
            </div>
            <div className="border border-[#424242] mx-5.5">
                {/* Line */}
            </div>
            <div className="pt-7.5 mx-40 flex justify-between items-start" >
                <div className="">
                    <h3 className="text-sm font-semibold mb-2.5">Mail Us</h3>
                    <p className="text-[12px]">
                        <a href="mailto:info@corporatetshirtslk.com" className="text-zinc-600 hover:underline hover:text-zinc-800 ">
                            info@corporatetshirtslk.com
                        </a>
                    </p>
                </div>
                <div className="">
                    <img src={logoIcon} alt="logo" className="inline-block md:w-13 md:h-13 w-10 h-10" />
                </div>
                <div className="">
                    <h3 className="text-sm font-semibold mb-2.5">Contact us</h3>
                    <p className="text-[12px] text-zinc-700">
                        Corporate T Shirts <br />
                        Panadura, <br />
                        Sri Lanka <br />
                        0114 242 976
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;