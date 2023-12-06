import Head from 'next/head';
import LoginForm from '../components/login/loginpage';
import Layout from '../components/layout/Layout';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export async function getServerSideProps(context) {
  const req = context.req
  const res = context.res
  var username = getCookie('username', { req, res });
  if (username != undefined){
      return {
          redirect: {
              permanent: false,
              destination: "/"
          }
      }
  }
  return { props: {username:false} };
};

export default function Home() {
  const router = useRouter()
  const { msg } = router.query
  return (
    <Layout>
      <Head>
        <title>Employment Website</title>
      </Head>
      <LoginForm />
      </Layout>
  );
}
