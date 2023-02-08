import css from '../../styles/Pizza.module.css';
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client.js";
import Image from 'next/image';
import LeftArrow from '../../assets/arrowLeft.png';
import RightArrow from '../../assets/arrowRight.png';
import { useState } from 'react';
import { useStore } from '../../store/store.js';
import toast, { Toaster } from 'react-hot-toast';

export default function Pizza(props) {
    console.log(props.pizza);
    const src = urlFor(props.pizza.image).url();
    const [quant, setQuant] = useState(1);
    const [size, setSize] = useState(1);

    const handleQuant = (a) => {
        a == 0 ? 
            setQuant((prev) => quant > 1 ? prev - 1 : prev) 
            :
            setQuant((prev) => quant > 0 ? prev + 1 : prev);
    }

    const addPizza = useStore((state) => state.addPizza);

    const addToCart = () => {
        addPizza({ ...props.pizza, price: props.pizza.price[size], quantity: quant, size: size });
        setQuant(1);
        toast.success("Added to cart!");
    }

    return (
        <Layout>
            <Toaster/>
            <div className={css.container}>
                <div className={css.imageWrapper}>
                    <Image 
                    loader={() => src}
                    src={src} 
                    alt=""
                    layout="fill"
                    unoptimized objectFit="cover"/>
                </div>
                <div className={css.right}>

                    <span>{props.pizza.name}</span>
                    <span>{props.pizza.details}</span>
                    <span><span style={{ color: "var(--themeRed)" }}>$</span> {props.pizza.price[size]}</span>
                    <div className={css.size}>
                        <span>Size</span>
                        <div className={css.sizeVariants}>
                            <div onClick={() => setSize(0)} className={size == 0 ? css.selected : ''}>Small</div>
                            <div onClick={() => setSize(1)} className={size == 1 ? css.selected : ''}>Medium</div>
                            <div onClick={() => setSize(2)} className={size === 2 ? css.selected : ''}>Large</div>
                        </div>
                    </div>

                    <div className={css.quantity}>
                        <span>Quantity</span>

                        <div className={css.counter}>
                            <Image src={LeftArrow} 
                            onClick={() => handleQuant(0)}
                            height={20}
                            width={20}
                            objectFit="contain"
                            alt=""/>
                            <span>{quant}</span>
                            <Image src={RightArrow}
                            onClick={() => handleQuant(1)}
                            height={20}
                            width={20}
                            objectFit="contain"
                            alt=""/>
                        </div>
                    </div>

                    <div onClick={addToCart} className={`btn ${css.btn}`}>
                        Add to cart
                    </div>
                </div>
            </div>
        </Layout>
    )
};

export async function getStaticPaths() {
    const paths = await client.fetch(`*[_type=="pizza" && defined(slug.current)][].slug.current`);
    return {
        paths: paths.map((slug) => ({ params: { slug } })),
        fallback: 'blocking'
    };
};

export async function getStaticProps(context) {
    /* extract if exists, or give a empty string value */
    const { slug = "" } = context.params;
    const pizza = await client.fetch(`*[_type=="pizza" && slug.current=="${slug}"][0]`);
    return {
        props: {
            pizza,
        }
    };
};