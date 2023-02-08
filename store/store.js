import create from 'zustand';

export const useStore = create(
    (set) => ({
        cart: {
            pizzas: []
        },

        addPizza: (data) => {
            set((state) => {
                if (state.cart.pizzas) {
                    const existing = state.cart.pizzas.find((pizza) => pizza._id == data._id && pizza.size == data.size);
                    if (existing) {
                        const updated = state.cart.pizzas.map((pizza) => {
                            if (pizza == existing) {
                                pizza.quantity += data.quantity;
                            }
                        })
                        return [ ...updated ];
                    }
                }
                return { cart: {
                    pizzas: [ ...state.cart.pizzas, data ]
                }}
            })
        },
        
        removePizza: (index) => {
            set((state) => {
                // console.log(result)
                /*pizza._id != data._id || (pizza._id == data._id && pizza.size != data.size) */
                return { cart: {
                    pizzas: state.cart.pizzas.filter((_, i) => i != index)
                }}
            })
        },

        clearCart: () => {
            set(() => {
                return { cart: {
                    pizzas: []
                }};
            })
        }
    })
)