import Image from './Image';
import spongebob from './images/spongebob.png';
import patrick from './images/patrick.png';
import squidward from './images/squidward.png';
import mrkrabs from './images/mrkrabs.png';

function App() {
  return (
    <div style={{
      backgroundColor: 'lightblue',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
    }}>
      <h1 style={{ marginBottom: '30px' }}>SpongeBob Characters</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '30px',
      }}>
        <Image src={spongebob} width={200} />
        <Image src={patrick} width={200} />
        <Image src={squidward} width={200} />
        <Image src={mrkrabs} width={200} />
      </div>
    </div>
  );
}

export default App;
