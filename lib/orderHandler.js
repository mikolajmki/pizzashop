export const createOrder = async ({name, phone, address, total, method, pizzas}) => {
    const res = await fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify({ name, phone, address, total: parseFloat(total), method, pizzas })
    });
    const id = await res.json();
    return id;
}