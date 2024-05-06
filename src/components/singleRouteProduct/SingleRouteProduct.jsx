import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

// ICONS
import { FaChevronDown, FaChevronUp, FaRegHeart, FaStar } from 'react-icons/fa6'
import { FiSearch } from 'react-icons/fi'
import { IoStar } from 'react-icons/io5'
import { RiShoppingCart2Line, RiShuffleFill } from 'react-icons/ri'
import loadingGif from '../../images/loading.gif'
import Karam from '../../images/karam.png'
import CategoryImg1 from '../../images/category1.svg'
import CategoryImg2 from '../../images/category2.svg'
import CategoryImg3 from '../../images/category3.svg'
import CategoryImg4 from '../../images/category4.svg'
import CategoryImg5 from '../../images/category5.svg'
import ProductImg1 from '../../images/newProduct1.png'
import ProductImg2 from '../../images/newProduct2.png'
import ProductImg3 from '../../images/newProduct3.png'
import { Checkbox } from '@mui/material';
import { LuFilter } from 'react-icons/lu';

function valuetext(value) {
    return `${value}°C`;
}
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const SingleRouteProduct = () => {
    const [count, setCount] = useState(1)

    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const { id } = useParams()
    const { data: el, loading } = useFetch(`products/${id}`, id)
    console.log(el);

    let product = (
        <div key={el?.data?.id} className="single-product__content">
            <div className="product__left">
                <div className="product__left-img">
                    <img src={el?.data?.image} alt="product img" />
                    <FiSearch />
                </div>
                <div className="product__left-secondaryImgs">
                    <div>
                        <img src={el?.data?.image} alt="product img" />
                    </div>
                    <div>
                        <img src={el?.data?.image} alt="product img" />
                    </div>
                    <div>
                        <img src={el?.data?.image} alt="product img" />
                    </div>
                    <div>
                        <img src={el?.data?.image} alt="product img" />
                    </div>
                </div>
            </div>
            <div className="product__right">
                <div className="product__right-sale">Sale Off</div>
                <h3>{el?.data?.title}</h3>
                <div className="product__right-rating">
                    <span>
                        {el ? new Array(Math.round(el?.data?.rating / 10 / 2)).fill(<IoStar className='rate' />) : <></>} {el ? new Array(Math.round(5 - (el?.data?.rating / 10 / 2))).fill(<IoStar className='unrate' />) : <></>}
                    </span>
                    <p>({el?.data?.rating / 10 / 2})</p>
                </div>
                <div className="product__right-price">
                    <h4>${el?.data?.price}</h4>
                    <article>
                        <p>{Math.round((el?.data?.price * 1.5) - el?.data?.price)}% Off</p>
                        <h5><del>${Math.round(el?.data?.price * 1.5)}</del></h5>
                    </article>
                </div>
                <p className="product__right-desc">{el?.data?.desc}</p>
                <div className="product__right-sizes">
                    <span>Size / Weight:</span>
                    <div>
                        <button>50g</button>
                        <button>60g</button>
                        <button>80g</button>
                        <button>100g</button>
                        <button>150g</button>
                    </div>
                </div>
                <div className="product__right-btns">
                    <div className="product__right-btns--number">
                        <p>{count}</p>
                        <article>
                            <button disabled={count >= 10 ? true : false} onClick={() => setCount(count + 1)}>
                                <FaChevronUp />
                            </button>
                            <button disabled={count <= 0 ? true : false} onClick={() => setCount(count - 1)}>
                                <FaChevronDown />
                            </button>
                        </article>
                    </div>
                    <button className="product__right-btns--cart">
                        <RiShoppingCart2Line />
                        <p>Add to cart</p>
                    </button>
                    <div className="product__right-btns--heartGroup">
                        <button className='product__right-btns--heart'>
                            <FaRegHeart />
                        </button>
                        <button className='product__right-btns--heart'>
                            <RiShuffleFill />
                        </button>
                    </div>
                </div>
                <div className="product__right-compositions">
                    <ul>
                        <li>Type: <span>{el?.data?.category[0].toUpperCase() + el?.data?.category.slice(1)}</span></li>
                        <li>MFG: <span>Jun 4.2022</span></li>
                        <li>LIFE: <span>70 days</span></li>
                    </ul>
                    <ul>
                        <li>SKU: <span>FWM15VKT</span></li>
                        <li>Tags: <span>Snack, Organic, Brown</span></li>
                        <li>Stock: <span>{el?.data?.stock} Items In Stock</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )

    let skeleton = (
        <div className="skeleton">
            <div className="product__left">
                <div className="product__left-img"></div>
                <div className="product__left-secondaryImgs">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="product__right">
                <div className="product__right-sale"></div>
                <h3></h3>
                <div className="product__right-rating"></div>
                <div className="product__right-price"></div>
                <p className="product__right-desc"></p>
                <div className="product__right-sizes"></div>
                <div className="product__right-btns"></div>
                <div className="product__right-compositions">
                    <ul></ul>
                    <ul></ul>
                </div>
            </div>
        </div>
    )

    return (
        <div className='single-product'>
            <div className="container">
                <div className="wrapper">
                    {loading ? skeleton : <>{product}</>}
                    <div className="single-product__title none">
                        <div className="single-product__title-btns">
                            <button>Description</button>
                            <button>Additional info</button>
                            <button>Vendor</button>
                            <button>Reviews (3)</button>
                        </div>
                        <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                        <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                        <div className="single-product__title-lists">
                            <ul>
                                <li>Type Of Packing</li>
                                <li>Color</li>
                                <li>Quantity Per Case</li>
                                <li>Ethyl Alcohol</li>
                                <li>Piece In One</li>
                            </ul>
                            <ul>
                                <li>Bottle</li>
                                <li>Green, Pink, Powder Blue, Purple</li>
                                <li>100ml</li>
                                <li>70%</li>
                                <li>Carton</li>
                            </ul>
                        </div>
                        <div className="single-product__title-line"></div>
                        <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                        <h3>Packaging & Delivery</h3>
                        <div className="single-product__title-line"></div>
                        <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                        <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                        <h3>Suggested Use</h3>
                        <ul className='single-product__title-list2'>
                            <li>Refrigeration not necessary.</li>
                            <li>Stir before serving</li>
                        </ul>
                        <h3>Other Ingredients</h3>
                        <ul className='single-product__title-list2'>
                            <li>Organic raw pecans, organic raw cashews.</li>
                            <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                            <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                        </ul>
                        <h3>Warnings</h3>
                        <ul className='single-product__title-list2'>
                            <li>Oil separation occurs naturally. May contain pieces of shell.</li>
                        </ul>
                    </div>
                </div>
                <aside>
                    <div className="single-product__aside__category">
                        <h3>Category</h3>
                        <div className='single-product__aside__category-line'></div>
                        <div className="single-product__aside__category-cards">
                            <div className="single-product__aside__category-card">
                                <article>
                                    <img src={CategoryImg1} alt="category" />
                                    <h4>Milks & Dairies</h4>
                                </article>
                                <p>5</p>
                            </div>
                            <div className="single-product__aside__category-card">
                                <article>
                                    <img src={CategoryImg2} alt="category" />
                                    <h4>Clothing</h4>
                                </article>
                                <p>6</p>
                            </div>
                            <div className="single-product__aside__category-card">
                                <article>
                                    <img src={CategoryImg3} alt="category" />
                                    <h4>Pet Foods</h4>
                                </article>
                                <p>7</p>
                            </div>
                            <div className="single-product__aside__category-card">
                                <article>
                                    <img src={CategoryImg4} alt="category" />
                                    <h4>Baking material</h4>
                                </article>
                                <p>2</p>
                            </div>
                            <div className="single-product__aside__category-card">
                                <article>
                                    <img src={CategoryImg5} alt="category" />
                                    <h4>Fresh Fruit</h4>
                                </article>
                                <p>6</p>
                            </div>
                        </div>
                    </div>
                    <div style={{background: `url(${Karam})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right'}} className="single-product__aside__category">
                        <h3>New products</h3>
                        <div className='single-product__aside__category-line'></div>
                        <Box sx={{ width: 300 }} className={"slider"}>
                            <Slider
                                className='slider'
                                getAriaLabel={() => 'Temperature range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                            />
                        </Box>
                        <div className="single-product__aside__category-price">
                            <p>From: <span>$500</span></p>
                            <p>To: <span>$1000</span></p>
                        </div>
                        <ul className='single-product__aside__category-checkbox'>
                            <h5>Color</h5>
                            <li>
                                <Checkbox {...label} color="success" />
                                <span className='single-product__aside__category-checkbox--span'>Red (56)</span>
                            </li>
                            <li>
                                <Checkbox {...label} color="success" />
                                <span className='single-product__aside__category-checkbox--span'>Green (78)</span>
                            </li>
                            <li>
                                <Checkbox {...label} color="success" />
                                <span className='single-product__aside__category-checkbox--span'>Blue (54)</span>
                            </li>   
                        </ul>
                        <ul className='single-product__aside__category-checkbox'>
                            <h5>Item Condition</h5>
                            <li>
                                <Checkbox {...label} color="success" />
                                <span className='single-product__aside__category-checkbox--span'>New (1506)</span>
                            </li>
                            <li>
                                <Checkbox {...label} color="success" />
                                <span className='single-product__aside__category-checkbox--span'>Refurbished (27)</span>
                            </li>
                            <li>
                                <Checkbox {...label} color="success" />
                                <span className='single-product__aside__category-checkbox--span'>Used (45)</span>
                            </li>   
                        </ul>
                        <button className='single-product__aside__category-filter'>
                            <LuFilter />
                            <span>Fillter</span>
                        </button>
                    </div>
                    <div className="single-product__aside__category">
                        <h3>New products</h3>
                        <div className='single-product__aside__category-line'></div>
                        <div className="single-product__aside__category-cards2">
                            <div className="single-product__aside__category-card2">
                                <img src={ProductImg1} alt="category" />
                                <article>
                                    <h4>Chen Cardigan</h4>
                                    <p>$99.50</p>
                                    <FaStar />
                                </article>
                            </div>
                            <div className="single-product__aside__category-card2">
                                <img src={ProductImg2} alt="category" />
                                <article>
                                    <h4>Chen Sweater</h4>
                                    <p>$89.50</p>
                                    <FaStar />
                                </article>
                            </div>
                            <div className="single-product__aside__category-card2">
                                <img src={ProductImg3} alt="category" />
                                <article>
                                    <h4>Colorful Jacket</h4>
                                    <p>$25</p>
                                    <FaStar />
                                </article>
                            </div>
                        </div>
                    </div>
                </aside>
                <div className="single-product__title flex">
                        <div className="single-product__title-btns">
                            <button>Description</button>
                            <button>Additional info</button>
                            <button>Vendor</button>
                            <button>Reviews (3)</button>
                        </div>
                        <p>Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.</p>
                        <p>Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.</p>
                        <div className="single-product__title-lists">
                            <ul>
                                <li>Type Of Packing</li>
                                <li>Color</li>
                                <li>Quantity Per Case</li>
                                <li>Ethyl Alcohol</li>
                                <li>Piece In One</li>
                            </ul>
                            <ul>
                                <li>Bottle</li>
                                <li>Green, Pink, Powder Blue, Purple</li>
                                <li>100ml</li>
                                <li>70%</li>
                                <li>Carton</li>
                            </ul>
                        </div>
                        <div className="single-product__title-line"></div>
                        <p>Laconic overheard dear woodchuck wow this outrageously taut beaver hey hello far meadowlark imitatively egregiously hugged that yikes minimally unanimous pouted flirtatiously as beaver beheld above forward energetic across this jeepers beneficently cockily less a the raucously that magic upheld far so the this where crud then below after jeez enchanting drunkenly more much wow callously irrespective limpet.</p>
                        <h3>Packaging & Delivery</h3>
                        <div className="single-product__title-line"></div>
                        <p>Less lion goodness that euphemistically robin expeditiously bluebird smugly scratched far while thus cackled sheepishly rigid after due one assenting regarding censorious while occasional or this more crane went more as this less much amid overhung anathematic because much held one exuberantly sheep goodness so where rat wry well concomitantly.</p>
                        <p>Scallop or far crud plain remarkably far by thus far iguana lewd precociously and and less rattlesnake contrary caustic wow this near alas and next and pled the yikes articulate about as less cackled dalmatian in much less well jeering for the thanks blindly sentimental whimpered less across objectively fanciful grimaced wildly some wow and rose jeepers outgrew lugubrious luridly irrationally attractively dachshund.</p>
                        <h3>Suggested Use</h3>
                        <ul className='single-product__title-list2'>
                            <li>Refrigeration not necessary.</li>
                            <li>Stir before serving</li>
                        </ul>
                        <h3>Other Ingredients</h3>
                        <ul className='single-product__title-list2'>
                            <li>Organic raw pecans, organic raw cashews.</li>
                            <li>This butter was produced using a LTG (Low Temperature Grinding) process</li>
                            <li>Made in machinery that processes tree nuts but does not process peanuts, gluten, dairy or soy</li>
                        </ul>
                        <h3>Warnings</h3>
                        <ul className='single-product__title-list2'>
                            <li>Oil separation occurs naturally. May contain pieces of shell.</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default SingleRouteProduct