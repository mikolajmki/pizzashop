import css from '../styles/Menu.module.css';
import Image from 'next/image';
import { urlFor } from '../lib/client';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Menu(props) {
    console.log(props.pizzas);

    return (
        <div className={css.container}>
            <div className={css.heading}>
                <span>OUR MENU</span>
                <span>Specially prepared</span>
                <span>by our experienced cooks!</span>
            </div>

            <div className={css.menu}>
                {props.pizzas.map((pizza, id) => {
                    const src = urlFor(pizza.image).url();
                    if (!pizza.slug) {
                        return null;
                    }
                    return (
                        <Link key={id} href={`./pizza/${pizza.slug.current}`}>
                            <div className={css.pizza} key={id}>
                                <div className={css.imageWrapper}>
                                    <Image
                                    loader={() => src}
                                    objectFit='cover'
                                    layout='fill'
                                    src={src} alt=""/>
                                </div>
                                <span>{pizza.name}</span>
                                <span><span style={{ color: 'var(--themeRed)' }}>$</span> {pizza.price[1]}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}