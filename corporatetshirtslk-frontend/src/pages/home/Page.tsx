import { useEffect, useState } from 'react';

import searchIcon from '@/assets/icons/search.svg';
import arrowBig from '@/assets/icons/arrow-big.svg';
import arrow from '@/assets/icons/arrow.svg';
import arrowMuted from '@/assets/icons/arrow-muted.svg';
import product1 from '@/assets/img/product1.svg';
import product2 from '@/assets/img/product2.svg';
import product3 from '@/assets/img/product3.svg';
import product4 from '@/assets/img/product4.svg';
import product5 from '@/assets/img/product5.svg';
import product6 from '@/assets/img/product6.svg';
import product7 from '@/assets/img/product7.svg';
import shirt1 from '@/assets/img/shirt1.svg';
import shirt2 from '@/assets/img/shirt2.svg';
import shirt3 from '@/assets/img/shirt3.svg';
import shirt4 from '@/assets/img/shirt4.svg';
import plusIcon from '@/assets/icons/plus.svg'
import downArrowIcon from '@/assets/icons/down-arrow.svg';

const changeFavicon = (faviconUrl: string) => {
    const existingLink = document.querySelector<HTMLLinkElement>("link[rel*='icon']");

    if (existingLink) {
        existingLink.href = faviconUrl;
    } else {
        const link = document.createElement('link');
        link.rel = 'icon';
        link.href = faviconUrl;
        document.head.appendChild(link);
    }
};

const productImages = [
    product1, product2, product3, product4, product5, product6, product7
];

const shirtDetails = [
    {
        id: 1,
        thumbnail: shirt1,
        short: "V-Neck T-Shirt",
        title: "Embroidered Seersucker Shirt",
        price: "$99",
    },
    {
        id: 2,
        thumbnail: shirt2,
        short: "Cotton T-Shirt",
        title: "Basic Slim Fit T-Shirt",
        price: "$99",
    },
    {
        id: 3,
        thumbnail: shirt3,
        short: "Henley T-Shirt",
        title: "Blurred Print T-Shirt",
        price: "$99",
    },
    {
        id: 4,
        thumbnail: shirt4,
        short: "Crewneck T-Shirt",
        title: "Full Sleeve Zipper",
        price: "$99",
    },
    {
        id: 5,
        thumbnail: shirt1,
        short: "V-Neck T-Shirt",
        title: "Embroidered Seersucker Shirt",
        price: "$99",
    },
    {
        id: 6,
        thumbnail: shirt2,
        short: "Cotton T-Shirt",
        title: "Basic Slim Fit T-Shirt",
        price: "$99",
    }
];

const products = [
    { id: 1, image: product4, name: "Basic Heavy Weight T-shirt", category: "men", subtitle: "Cotton T-Shirt", price: 199 },
    { id: 2, image: product1, name: "Soft Wash straight Fit Jeans", category: "men", subtitle: "Cotton jeans", price: 199 },
    { id: 3, image: product3, name: "Basic Heavy Weight T-shirt", category: "women", subtitle: "Cotton T-Shirt", price: 199 },
    { id: 4, image: product4, name: "Basic Heavy Weight T-shirt", category: "kid", subtitle: "Cotton T-Shirt", price: 199 },
    // Add more mock products as needed
];

const HomePage = () => {

    const [startIndex, setStartIndex] = useState(0);
    const [startIndexShirt, setStartIndexShirt] = useState(0);
    const itemsPerPage = 4; // Number of items to show per page
    const shirtPerPage = 6; // Number of shirts to show per page

    useEffect(() => {
        document.title = 'Home - Corporatet Shirts LK'; // Set your desired title

        // Change favicon dynamically
        changeFavicon('/logo.svg'); // or .ico, .png, etc.
    }, []);

    const canGoNext = startIndex + itemsPerPage - 1 < productImages.length;
    const canGoPrev = startIndex > 0;

    const nextImages = () => {
        if (canGoNext) {
            setStartIndex(startIndex + itemsPerPage - 1);
        }
    };

    const prevImages = () => {
        if (canGoPrev) {
            setStartIndex(startIndex - itemsPerPage + 1);
        }
    };

    const visibleImages = productImages.slice(startIndex, startIndex + itemsPerPage);

    const canGoNextShirt = startIndexShirt + shirtPerPage - 1 < shirtDetails.length;
    const canGoPrevShirt = startIndexShirt > 0;

    const nextImagesShirt = () => {
        if (canGoNextShirt) {
            setStartIndexShirt(startIndexShirt + shirtPerPage - 1);
        }
    };

    const prevImagesShirt = () => {
        if (canGoPrevShirt) {
            setStartIndexShirt(startIndexShirt - shirtPerPage + 1);
        }
    };

    const visibleImagesShirt = shirtDetails.slice(startIndexShirt, startIndexShirt + shirtPerPage);

    const [activeCategory, setActiveCategory] = useState("all");
    const [showAll, setShowAll] = useState(false);

    const categories = ["all", "men", "women", "kid"];
    const filteredProducts = activeCategory === "all"
        ? products
        : products.filter((p) => p.category === activeCategory);

    const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 4);

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
                    <div className="flex flex-row items-center gap-10 w-100">
                        <button className="flex flex-row items-center justify-between pl-7 pr-5 w-2xs h-10 bg-[#d9d9d9] cursor-pointer">
                            <p className="text-base text-black tracking-normal">
                                Go To Collection
                            </p>
                            <img src={arrowBig} alt="Big arrow" className="w-12 h-3" />
                        </button>
                        <div className="flex flex-row items-center gap-3">
                            <button onClick={prevImages} disabled={!canGoPrev} className="w-10 h-10 cursor-pointer outline-none border-none">
                                <img src={!canGoPrev ? arrowMuted : arrow} alt="Arrow" className={`w-10 h-10 cursor-pointer ${!canGoPrev ? "" : "rotate-180"}`} />
                            </button>
                            <button onClick={nextImages} disabled={!canGoNext} className="w-10 h-10 cursor-pointer">
                                <img src={!canGoNext ? arrowMuted : arrow} alt="Arrow" className={`w-10 h-10 cursor-pointer ${!canGoNext ? "rotate-180" : ""}`} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-10 overflow-hidden">
                    {visibleImages.map((src, i) => (
                        <img key={i} src={src} alt={`Product ${i + 1}`} className="w-[22.875rem] h-[23.5rem] min-w-[22.875rem] min-h-[23.5rem] border border-[#D7D7D7]" />
                    ))}
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
                    {visibleImagesShirt.map((product) => (
                        <div key={product.id} className="flex flex-col gap-3.5 min-w-76 w-76 items-center">
                            <div className="relative flex flex-col items-center">
                                <img src={product.thumbnail} alt={product.short} className="w-76 h-78" />
                                <button className="outline-none border-none cursor-pointer">
                                    <img src={plusIcon} alt="plus icon" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
                                </button>
                            </div>
                            <div className="flex justify-between items-end w-full">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row items-center">
                                        <p className="font-medium text-xs opacity-65 text-black tracking-normal">{product.short}</p>
                                        <div className="w-3 h-3 bg-black ml-1.5 mr-0.5"></div>
                                        <p className="font-light text-xs opacity-65 text-black">+5</p>
                                    </div>
                                    <p className="font-medium text-base tracking-normal">{product.title}</p>
                                </div>
                                <div className="font-medium text-base tracking-normal">{product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-center items-center gap-3">
                    <button onClick={prevImagesShirt} disabled={!canGoPrevShirt} className="w-10 h-10 cursor-pointer outline-none border-none">
                        <img src={!canGoPrevShirt ? arrowMuted : arrow} alt="Arrow" className={`w-10 h-10 cursor-pointer ${!canGoPrevShirt ? "" : "rotate-180"}`} />
                    </button>
                    <button onClick={nextImagesShirt} disabled={!canGoNextShirt} className="w-10 h-10 cursor-pointer">
                        <img src={!canGoNextShirt ? arrowMuted : arrow} alt="Arrow" className={`w-10 h-10 cursor-pointer ${!canGoNextShirt ? "rotate-180" : ""}`} />
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
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`outline-none border-none cursor-pointer ${activeCategory === cat ? "text-black" : "text-[#8A8A8A]"
                                    }`}
                                onClick={() => {
                                    setActiveCategory(cat);
                                    setShowAll(false); // reset on tab change
                                }}
                            >
                                {cat.toUpperCase()}
                            </button>
                        ))}
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
                    {displayedProducts.map((product) => (
                        <div key={product.id} className="flex flex-col gap-3.5 min-w-[22.875rem] w-[22.875rem] items-center">
                            <div className="relative flex flex-col items-center">
                                <img src={product.image} alt={product.name} className="w-[22.875rem] h-94" />
                                <button className="outline-none border-none cursor-pointer">
                                    <img src={plusIcon} alt="plus icon" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
                                </button>
                            </div>
                            <div className="flex justify-between items-end w-full">
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row items-center">
                                        <p className="font-medium text-xs opacity-65 text-black tracking-normal">{product.subtitle}</p>
                                    </div>
                                    <p className="font-medium text-base tracking-normal">{product.name}</p>
                                </div>
                                <div className="font-medium text-base tracking-normal">${product.price}</div>
                            </div>
                        </div>
                    ))}

                    {/* <div className="flex flex-col gap-3.5 min-w-[22.875rem] w-[22.875rem] h-auto items-center">
                        <div className="relative flex flex-col items-center">
                            <img src={product4} alt="product 4" className="w-[22.875rem] h-94" />
                            <button className="outline-none border-none cursor-pointer">
                                <img src={plusIcon} alt="plus icon" className="absolute bottom-0 left-1/2 transform -translate-x-1/2" />
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
                                    Basic Heavy Weight T-shirt
                                </p>
                            </div>
                            <div className="font-medium text-base tracking-normal">
                                $ 199
                            </div>
                        </div>
                    </div> */}
                </div>
                {filteredProducts.length > 4 && (
                    <button
                        className="flex flex-col items-center justify-center w-full gap-0.5 text-[#8A8A8A] text-base tracking-normal cursor-pointer"
                        onClick={() => setShowAll((prev) => !prev)}
                    >
                        {showAll && <img src={downArrowIcon} alt="down arrow icon" className="h-3.5 w-3.5 rotate-180" />}

                        {showAll ? "Hide" : "More"}
                        {!showAll ? <img src={downArrowIcon} alt="down arrow icon" className="h-3.5 w-3.5" /> : null}
                    </button>
                )}
            </section>
            <section className="flex flex-col justify-center items-center gap-[0.8125rem] mb-28">
                <h1 className="text-5xl font-beatrice uppercase text-black">
                    Our Approach to fashion design
                </h1>
                <p className="font-light text-base text-black text-center">
                    at elegant vogue , we blend creativity with craftsmanship to create <br />
                    fashion that transcends trends and stands the test of time each <br />
                    design is meticulously crafted, ensuring the highest quelity <br />
                    exqulsite finish
                </p>
            </section>
            <section className="flex flex-row justify-center items-start gap-9  mb-31">
                <img src={product7} alt="product 7" className="w-[19.813rem] h-97" />
                <img src={product5} alt="product 5" className="w-[19.813rem] h-[26.188rem] mt-18" />
                <img src={product1} alt="product 1" className="w-[19.813rem] h-[26.188rem] bg-[#f4f6f5]" />
                <img src={product6} alt="product 6" className="w-[19.813rem] h-97 mt-25" />
            </section>
        </div>
    );
}

export default HomePage;