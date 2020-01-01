import Head from 'next/head'
import {Layout} from 'antd'
const {Header, Sider, Content} = Layout
import css from './index.scss'
function IndexLayout(){
    return(
        <div>
            <Head>
                <title>My Page</title>
                <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                key="viewport"
                />
            </Head>
            <style global jsx>{`
                html,body{
                    font-size:12px;
                    padding:0px;
                    margin:0px;
                }
                body{
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    min-width: 960px;
                    overflow: hidden;
                }
            `}</style>
            <Layout className={css.mylayout}>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        </div>
    )
}
export default IndexLayout