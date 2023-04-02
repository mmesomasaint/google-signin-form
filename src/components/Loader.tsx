type LoadProps = {
  loading: boolean;
};

function Loader({ loading }: LoadProps) {
  return (
    <div
      className={`${
        loading ? 'block' : 'hidden'
      } absolute w-full h-1 top-0 left-0 z-10 bg-gray-300`}
    >
      <div className="w-full h-full bg-blue-700 relative overflow-hidden animate-load" />
    </div>
  );
}

export default Loader;
