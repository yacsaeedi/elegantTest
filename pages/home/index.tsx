import React, { FC } from 'react';
import ButtonCustom from '@components/ui/ButtonCustom';
import { Layout } from '@components/common';
import HomeIcon from '@assets/svg/homeIcon.svg';
import InputCustom from '@components/ui/InputCustom';
import styles from './Home.module.scss';
const Home: FC = () => {
    return (
        <Layout footer searchBar selected="cart">
            <ButtonCustom
                Icon={HomeIcon}
                title="صفحه اصلی"
                size="large"
                mode="contained"
                variant="success"
            />
        </Layout>
    );
};

export default Home;
