import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';

function App() {
  return (
    <div>
    <h3>Some Blog</h3>
    <div className="buttons">
      <RenderProps
        render={(count, handleCount) => (
          <LikeImagePart2 count={count} handleCount={handleCount} />
        )}
      />
      <RenderProps
        render={(count, handleCount) => (
          <LikePostPart2 count={count} handleCount={handleCount} />
        )}
      />
    </div>
  </div>
  );
}

export default App;
