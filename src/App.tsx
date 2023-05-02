import { useEffect, useRef } from "react";

const App = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current) ref.current.focus();
  });
  useEffect(() => {
    document.title = "My Apse";
  });

  return (
    <div>
      <label htmlFor="name" className="form-label">
        Name
      </label>
      <input ref={ref} id="name" type="text" className="form-control" />
    </div>
  );
};

export default App;
