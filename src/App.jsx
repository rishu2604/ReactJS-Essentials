import Header from './components/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import { CORE_CONCEPTS } from './data.js';
import TabButton from './components/TabButton.jsx';
import { useState } from 'react';
import { EXAMPLES } from './data.js';

export default function App() {
  const [ selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Outputting List data dynamically
            Key is used to uniquely identify a list item */}
            {CORE_CONCEPTS.map((conceptItem) => 
                (<CoreConcepts key={conceptItem.title} {...conceptItem} />)
              )
            }
            {/* <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
              />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==='Components'} onSelect={()=>handleSelect('Components')}>Components</TabButton>  {/*passing content in custom component tags is known as component composition and is accessed by props.children */}
            <TabButton isSelected={selectedTopic==='JSX'} onSelect={()=>handleSelect('JSX')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==='Props'} onSelect={()=>handleSelect('Props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic==='State'} onSelect={()=>handleSelect('State')}>State</TabButton>
          </menu>
          {!selectedTopic ? <p>Please Select a Topic!</p> :
            <div id='tab-content'>
              <h3>
                {EXAMPLES[selectedTopic].title}
              </h3>
              <p>
                {EXAMPLES[selectedTopic].description}
              </p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
          }
          
        </section>
      </main>
    </div>
  );
}


// Another way of Rendering content conditionally
// {!selectedTopic && <p>Please Select a Topic!</p>}
// {selectedTopic && (<div id='tab-content'>
//                     <h3>
//                       {EXAMPLES[selectedTopic].title}
//                     </h3>
//                     <p>
//                       {EXAMPLES[selectedTopic].description}
//                     </p>
//                     <pre>
//                       <code>
//                         {EXAMPLES[selectedTopic].code}
//                       </code>
//                     </pre>
//                   </div>)
// }
