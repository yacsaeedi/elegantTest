import React, { FC } from 'react';
import ButtonCustom from '@components/ui/ButtonCustom';
import { Layout } from '@components/common';
import HomeIcon from '@assets/svg/homeIcon.svg';
import InputCustom from '@components/ui/InputCustom';
import styles from "./Home.module.scss"
const Home: FC = () => {
    return ( 
            <Layout footer searchBar selected="cart">
                <ButtonCustom 
                    title="صفحه اصلی"
                />
            </Layout>
            )
};

export default Home;
