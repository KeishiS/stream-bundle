import { createRoot } from 'react-dom/client';
import LiveIcon from './LiveIcon';

createRoot(document.getElementById('container')!).render(
    <>
        <div>Hello World</div>
        <LiveIcon />
    </>
);
