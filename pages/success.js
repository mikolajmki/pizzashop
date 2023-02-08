import React, { use, useState } from "react";
import Layout from "../components/Layout";
import OrderModal from "../components/OrderModal";

export default function Success() {
    const [modal, setModal] = useState(true);
    return (
        <Layout>
            { modal && <OrderModal setOpened={setModal} opened={1}/>}
        </Layout>
    )
}