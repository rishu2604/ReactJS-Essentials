export default function CoreConcepts(props){
    return(
        <li>
            <img src={props.image} alt="CoreConcepts" />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </li>
    )
}

// That's another way of passing props to the component i.e by object destructuring
// function CoreConcept({ image, title, description }) {
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }