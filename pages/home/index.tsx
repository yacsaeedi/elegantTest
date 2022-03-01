import React, { FC } from 'react';
import ButtonCustom from '@components/ui/ButtonCustom';
import { Layout } from '@components/common';
import HomeIcon from '@assets/svg/homeIcon.svg';
const Home: FC = () => {
    return ( 
            <Layout footer searchBar selected="cart">
                <ButtonCustom 
                    title="صفحه اصلی"
                    disabled
                    Icon={HomeIcon}
                    size="small"
                />
            </Layout>
            )
};

export default Home;
