import Head from 'next/head';
import Calculator from '../components/Calculator';

const CalculatePage = () => {
  return (
    <div>
      <Head>
        <title>계산기</title>
      </Head>
      <Calculator />
    </div>
  );
};

export default CalculatePage;