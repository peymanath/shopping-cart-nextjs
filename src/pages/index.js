import Layout from '@/components/common/layouts/layout';
import React from 'react';
import Link from "next/link";
import Button from "@/components/common/Button";

export default function Home() {
    return (
        <Layout>
            <div className="flex flex-col items-center justify-center gap-5 h-[80vh]">
                <p>This Is New Task Shopping Cart</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link href="/products">
                        <Button text=" Go to Shopping"/>
                    </Link>
                    <Link href="https://github.com/peymanath/shopping-cart-nextjs">
                        <Button text=" Go to Source"/>
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
