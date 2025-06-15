import searchIcon from '@/assets/icons/search.svg';
import arrowBig from '@/assets/icons/arrow-big.svg';
import arrow from '@/assets/icons/arrow.svg';
import arrowMuted from '@/assets/icons/arrow-muted.svg';
import product1 from '@/assets/img/product1.svg';
import product2 from '@/assets/img/product2.svg';
import product3 from '@/assets/img/product3.svg';
import product4 from '@/assets/img/product4.svg';
import shirt1 from '@/assets/img/shirt1.svg';
import shirt2 from '@/assets/img/shirt2.svg';
import shirt3 from '@/assets/img/shirt3.svg';
import shirt4 from '@/assets/img/shirt4.svg';
import plusIcon from '@/assets/icons/plus.svg'
import downArrowIcon from '@/assets/icons/down-arrow.svg';

const HomePage = () => {
    return (
        <div className="font-roboto-slab tracking-2px mx-[3.125rem] my-[4.375rem]">
            <section className="flex flex-col gap-3.5 mb-24">
                <div className="flex flex-col gap-2">
                    <p className="">
                        <a className="hover:underline" href="#">MEN</a>
                    </p>
                    <p className="">
                        <a className="hover:underline" href="#">WOMEN</a>
                    </p>
                    <p className="">
                        <a className="hover:underline" href="#">KIDS</a>
                    </p>
                </div>
                <div className="w-[23.063rem] h-[3.125rem] bg-[#d9d9d9] flex items-center">
                    <img className="w-[0.9rem] h-[0.9rem] ml-4 mr-2" src={searchIcon} alt="Search Icon" />
                    <input className="w-full h-full font-poppins tracking-normal focus-visible:outline-none" type="text" name="search" id="search" />
                    <button className='ml-2 mr-5 cursor-pointer outline-none border-none text-black opacity-65'>Search</button>
                </div>
            </section>
            <section className="flex flex-row items-center gap-10 mb-[9.375rem]">
                <div className="flex flex-col gap-[12.5rem] min-w-[25rem]">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-beatrice-extrabold text-5xl leading-10 text-black">
                            NEW<br />
                            COLLECTION
                        </h1>
                        <p className="text-base text-black">
                            Summer<br />
                            2024
                        </p>
                    </div>
                    <div className="flex flex-row items-center gap-10">
                        <button className="flex flex-row items-center justify-between pl-7 pr-5 w-2xs h-10 bg-[#d9d9d9] cursor-pointer">
                            <p className="text-base text-black tracking-normal">
                                Go To Collection
                            </p>
                            <img src={arrowBig} alt="Big arrow" className="w-12 h-3" />
                        </button>
                        <div className="flex flex-row items-center gap-3">
                            <button className="w-10 h-10 cursor-pointer outline-none border-none">
                                <img src={arrowMuted} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                            </button>
                            <button className="w-10 h-10 cursor-pointer">
                                <img src={arrow} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10 overflow-hidden">
                    <img src={product1} alt="Product 1" className='w-[22.875rem] h-[23.5rem]' />
                    <img src={product2} alt="Product 2" className='w-[22.875rem] h-[23.5rem]' />
                    <img src={product3} alt="Product 3" className='w-[22.875rem] h-[23.5rem]' />
                    <img src={product4} alt="Product 4" className='w-[22.875rem] h-[23.5rem]' />
                </div>
            </section>
            <section className="flex flex-col gap-[1.875rem] mb-[7.25rem]">
                <div className="flex justify-between items-end">
                    <div className="flex items-center gap-0.5">
                        <h1 className="font-beatrice-extrabold text-5xl leading-10 text-black">
                            NEW<br />
                            THIS WEEK
                        </h1>
                        <p className="font-extrabold text-xl text-[#000E8A]">
                            (50)
                        </p>
                    </div>
                    <button className='tracking-normal text-sm'>See All</button>
                </div>
                <div className="flex flex-row gap-[1.625rem] overflow-hidden items-center">
                    <div className="flex flex-col gap-3.5 min-w-76 w-76 h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={shirt1} alt="shirt 1" className="w-76 h-78" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        V-Neck T-Shirt
                                    </p>
                                    <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Embroidered Seersucker Shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $ 99
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 min-w-76 w-76 h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={shirt2} alt="shirt 2" className="w-76 h-78" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Cotton T-Shirt
                                    </p>
                                    <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Basic Slim Fit T-Shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $99
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 min-w-76 w-76 h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={shirt3} alt="shirt 3" className="w-76 h-78" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Henley T-Shirt
                                    </p>
                                    <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Blurred Print T-Shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $99
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 min-w-76 w-76 h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={shirt4} alt="shirt 4" className="w-76 h-78" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Crewneck T-Shirt
                                    </p>
                                    <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Full Sleeve Zipper
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $99
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3.5 min-w-76 w-76 h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={shirt1} alt="shirt 1" className="w-76 h-78" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        V-Neck T-Shirt
                                    </p>
                                    <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Embroidered Seersucker Shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $ 99
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 min-w-76 w-76 h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={shirt2} alt="shirt 2" className="w-76 h-78" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Cotton T-Shirt <span className=""></span>+5
                                    </p>
                                    <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Basic Slim Fit T-Shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $99
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                    <button className="w-10 h-10 cursor-pointer outline-none border-none">
                        <img src={arrowMuted} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                    </button>
                    <button className="w-10 h-10 cursor-pointer">
                        <img src={arrow} alt="Arrow" className="w-10 h-10 cursor-pointer" />
                    </button>
                </div>
            </section>
            <section className="flex flex-col mb-41">
                <h1 className="font-beatrice-extrabold text-5xl leading-10 text-black mb-1">
                    XIV<br />
                    COLLECTIONS<br />
                    23-24
                </h1>
                <div className="flex flex-row items-end justify-between mb-[1.125rem]">
                    <div className="font-extrabold flex flex-row items-center gap-10 tracking-normal">
                        <button className="outline-none border-none cursor-pointer text-black">
                            (ALL)
                        </button>
                        <button className="outline-none border-none cursor-pointer text-[#8A8A8A]">
                            Men
                        </button>
                        <button className="outline-none border-none cursor-pointer text-[#8A8A8A]">
                            Women
                        </button>
                        <button className="outline-none border-none cursor-pointer text-[#8A8A8A]">
                            KID
                        </button>
                    </div>
                    <div className="tracking-normal flex flex-row items-start gap-[6.8125rem]">
                        <button className="outline-none border-none cursor-pointer text-black text-sm">
                            Filters(+)
                        </button>
                        <div className="flex flex-col items-center gap-2.5">
                            <h3 className="text-black text-sm mb-1">Sorts(-)</h3>
                            <button className="outline-none border-none cursor-pointer text-[#5E5E5E] text-sm">
                                Less to more
                            </button>
                            <button className="outline-none border-none cursor-pointer text-[#5E5E5E] text-sm">
                                More to less
                            </button>
                        </div>
                    </div>
                </div>
                <hr className='border-t border-[#5E5E5E] mb-[2.3125rem]' />
                <div className="grid grid-cols-4 gap-9 justify-items-center mb-6">
                    <div className="flex flex-col gap-3.5 min-w-[22.875rem] w-[22.875rem] h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={product4} alt="product 4" className="w-[22.875rem] h-94" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Cotton T-Shirt
                                    </p>
                                    {/* <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p> */}
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Basic Heavy Weight T-shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $ 199
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 min-w-[22.875rem] w-[22.875rem] h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={product1} alt="product 1" className="w-[22.875rem] h-94" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Cotton jeans
                                    </p>
                                    <div className="w-3 h-3 bg-white ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Soft Wash straight Fit Jeans
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $ 199
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 min-w-[22.875rem] w-[22.875rem] h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={product3} alt="product 3" className="w-[22.875rem] h-94" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Cotton T-Shirt
                                    </p>
                                    <div className="w-3 h-3 bg-white ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Basic Heavy Weight T-shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $ 199
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3.5 min-w-[22.875rem] w-[22.875rem] h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={product4} alt="product 4" className="w-[22.875rem] h-94" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute  bottom-0 left-1/2 transform -translate-x-1/2" />
                            </button>
                        </div>
                        <div className="flex justify-between items-end w-full">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-center">
                                    <p className="font-medium text-xs opacity-65 text-black tracking-normal">
                                        Cotton T-Shirt
                                    </p>
                                    <div className="w-3 h-3 bg-[#a19080] ml-1.5 mr-0.5"></div>
                                    <p className="font-light text-xs opacity-65 text-black">+5</p>
                                </div>
                                <p className="font-medium text-base tracking-normal">
                                    Basic Heavy Weight T-shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $ 199
                            </div>
                        </div>
                    </div>
                </div>
                <button className="flex flex-col items-center justify-center w-full gap-0.5 text-[#8A8A8A] text-base tracking-normal cursor-pointer">
                    More
                    <img src={downArrowIcon} alt="down arrow icon" className="h-3.5 w-3.5" />
                </button>
            </section>
            <section className="flex flex-col justify-center items-center gap-[0.8125rem]">
                <h1 className="text-5xl font-beatrice uppercase text-black">
                    Our Approach to fashion design
                </h1>
                <p className="font-light text-base text-black text-center">
                    at elegant vogue , we blend creativity with craftsmanship to create <br/>
                    fashion that transcends trends and stands the test of time each <br/>
                    design is meticulously crafted, ensuring the highest quelity <br/>
                    exqulsite finish
                </p>
            </section>
            <section className="">

            </section>
        </div>
    );
}

export default HomePage;