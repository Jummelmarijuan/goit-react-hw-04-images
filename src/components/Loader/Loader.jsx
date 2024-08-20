import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-4">
      <TailSpin height="50" width="50" color="blue" ariaLabel="loading" />
    </div>
  );
};

export default Loader;
