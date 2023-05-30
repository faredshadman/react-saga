import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCatsFetch } from "./catState";
function App() {
  const cats = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);
  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of different species of cats. Lots of cats for your viewing
        pleasure.
      </p>
      <hr />
      <div className="Gallery">
        {cats?.map((cat) => (
          <div key={cat.id} className="row">
            <div className="column column-left">
              <img
                src={cat.image.url}
                alt={cat.name}
                width={200}
                height={200}
              />
            </div>
            <div className="column column-right">
              <h1>{cat.name}</h1>
              <h3>Temperament: {cat.temperament}</h3>
              <p>{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
