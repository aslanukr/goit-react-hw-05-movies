import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  const centeredLoaderStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <ThreeDots
      height={100}
      width={100}
      radius={9}
      color="rgb(78, 1, 83)"
      ariaLabel="three-dots-loading"
      wrapperStyle={centeredLoaderStyle}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Loader;
