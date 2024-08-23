import notify from './utils/notify';
import './App.css';

function App() {

  const handelSuccess = () => {

    notify.success("Success")

  }

  return (
    <div className="App">

      <div className='container mt-5'>
        <h4>React Notification Toaster</h4>
      </div>

      <div className='container mt-5'>

        <div className='d-flex flex-row align-items-center justify-content-center' style={{ gap: "20px" }}>

          <button className='btn btn-success' onClick={handelSuccess}>Add Toast</button>
          <button className='btn btn-warning'>Add Toast</button>
          <button className='btn btn-secondary'>Add Toast</button>
          <button className='btn btn-danger'>Add Toast</button>

        </div>

      </div>
    </div>
  );
}

export default App;
