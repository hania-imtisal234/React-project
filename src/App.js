import logo from './logo.svg';
import './App.css';
import Form from './Form.js';
import RecentLogins from './RecentLogins';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <div class="component1">
            <RecentLogins/>
          </div>

          <div class="component2">
            <Form />
          </div>
        </div>
        <div class="label1">
          <p><temp>Create a Page</temp> for a celebrity,brand or business.</p>
        </div>
      </header>

      <footer className='App-footer'>
         <div class="languages">
          <p>English (UK)   اردو 
پښتو  العربية    हिन्दी   বাংলা   ਪੰਜਾਬੀ  فارسی  ગુજરાતી  Deutsch  Español  
          </p>
         </div>
          
          
      </footer>
    </div>
  );
}

export default App;
