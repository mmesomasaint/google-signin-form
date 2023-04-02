type LoadProps = {
  loading: boolean;
};

function Loader({ loading }: LoadProps) {
  return {
    loader: () => (
      <div
        className={`${
          loading ? 'fixed' : 'hidden'
        } w-full h-2 fixed top-0 left-0 z-10`}
      >
        <div className="w-full h-full bg-blue-500 relative overflow-hidden animate-load" />
      </div>
    ),
  };
}

export default Loader;