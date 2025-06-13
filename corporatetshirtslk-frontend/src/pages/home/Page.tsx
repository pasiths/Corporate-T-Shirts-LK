import searchIcon from '@/assets/icons/search.svg';
import arrowBig from '@/assets/icons/arrow-big.svg';
import arrow from '@/assets/icons/arrow.svg';
import arrowMuted from '@/assets/icons/arrow-muted.svg';
import product1 from '@/assets/img/product1.svg';
import product2 from '@/assets/img/product2.svg';
import shirt1 from '@/assets/img/shirt1.svg';
import shirt2 from '@/assets/img/shirt2.svg';
import shirt3 from '@/assets/img/shirt3.svg';
import shirt4 from '@/assets/img/shirt4.svg';
import plusIcon from '@/assets/icons/plus.svg'

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
                    <img src={product1} alt="Product 1" className='w-[22.875rem] h-[23.5rem]' />
                    <img src={product2} alt="Product 2" className='w-[22.875rem] h-[23.5rem]' />
                </div>
            </section>
            <section className="flex flex-col gap-[1.875rem]">
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
                    <div className="flex flex-col gap-3.5 min-w-76 h-auto items-center">
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
                    <div className="flex flex-col gap-3.5 min-w-76 h-auto items-center">
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
                    <div className="flex flex-col gap-3.5 min-w-76 h-auto items-center">
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
                    <div className="flex flex-col gap-3.5 min-w-76 h-auto items-center">
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

                    <div className="flex flex-col gap-3.5 min-w-76 h-auto items-center">
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
                    <div className="flex flex-col gap-3.5 min-w-76 h-auto items-center">
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
            <section className="">

            </section>
            <section className="">

            </section>
            <section className="">

            </section>
        </div>
    );
}

export default HomePage;