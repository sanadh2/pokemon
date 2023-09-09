const App = () => {
  const [click, setClick] = useState("not clicked");

  useEffect(() => {
    console.log("effect running...");
  }, []);

  return (
    <div>
      count:{click}
      <br />
      <button
        onClick={(e) => {
          setClick("clicked");
        }}
      >
        increase
      </button>
    </div>
  );
};
