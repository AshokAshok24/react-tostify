import notify from './utils/notify';
import './App.css';

function App() {

  const handelSuccess = () => {

    notify.success("Hii..you are successfully Creted Toast")

  }
  const handelWarning = () => {

    notify.warning("Warning Message")

  }
  const handelInfo = () => {

    notify.info("This about React-tostify Notification Popups")

  }
  const handelError = () => {

    notify.error("Error Message")

  }


  return (
    <div className="App">

      <div className='container mt-5'>
        <h4>React Notification Toaster</h4>
      </div>

      <div className='container mt-5'>

        <div className='d-flex flex-row align-items-center justify-content-center' style={{ gap: "20px" }}>

          <button className='btn btn-success' onClick={handelSuccess}>Success Toast</button>
          <button className='btn btn-warning' onClick={handelWarning}>Warning Toast</button>
          <button className='btn btn-secondary' onClick={handelInfo}>Info Toast</button>
          <button className='btn btn-danger' onClick={handelError}>Error Toast</button>

        </div>

      </div>
    </div>
  );
}

export default App;
