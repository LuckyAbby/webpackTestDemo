import component from './component.js';
import imgComponent from './imgComponent.js';

import './style.css';
import bgUrl from './bg.jpg';

document.body.appendChild(component());
document.body.appendChild(imgComponent(bgUrl));
