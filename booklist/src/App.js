import logo from "./logo.svg";
import "./App.css";
const author = " thibaut meurisse";
const title =
  "Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things (Productivity Series Book 1)";
const img =
  "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/413tVFk--xS.jpg";

const firstBook = {
  author: "Gaur Gopal Das",
  title:
    "Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions Paperback – 1 January 2023",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41RwQlo446L._SX329_BO1,204,203,200_.jpg",
};

const secondBook = {
  author: "Mark Manson",
  title:
    "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51mN3bY0JjL.jpg",
};

const thirdBook = {
  author: "Leil Lowndes",
  title:
    "How to Talk to Anyone: 92 Little Tricks for Big Success in Relationships ",
  img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41VC-6wmHsL._SX331_BO1,204,203,200_.jpg",
};

//simple list
const books = [
  {
    id: 1,
    author: "Gaur Gopal Das",
    title:
      "Energize Your Mind: Learn the Art of Mastering Your Thoughts, Feelings and Emotions Paperback – 1 January 2023",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41RwQlo446L._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
    author: "Mark Manson",
    title:
      "The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life (Mark Manson Collection Book 1)",
    img: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51mN3bY0JjL.jpg",
  },
];

//simple list
function App() {
  return (
    <div className="App">
      <section>
        {books.map((data) => {
          return (
            <div key={data.id}>
              <img src={data.img} alt={data.title} />
              <h2>{data.title}</h2>
              <h2>{data.author}</h2>
            </div>
          );
        })}
      </section>
    </div>
  );
}

/*



function App() {
  return (
    <div className="App">
      <Book
        author={firstBook.author}
        title={firstBook.title}
        img={firstBook.img}
      >
        <button
          style={{
            color: "white",
            margin: "1em",
            padding: "1em",
            background: "black",
          }}
        >
          Add to cart
        </button>
      </Book>
      <Book
        author={secondBook.author}
        title={secondBook.title}
        img={secondBook.img}
      />
      <Book
        author={thirdBook.author}
        title={thirdBook.title}
        img={thirdBook.img}
      />
    </div>
  );
}
/*
without destructuring 

const Book = (props) => {
 
  console.log(props);
  return (
    <article>
      <div>
        <img src={props.img} alt={props.title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
    </article>
  );
};
*/

/*


const Book = (props) => {
  //with destructuring
  const { img, title, author } = props;
  console.log(props);
  return (
    <article>
      <div>
        <img src={props.img} alt={props.title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
    </article>
  );
};
*/

//we can destructure in the argument also

/*
const Book = ({ img, title, author }) => {
  return (
    <article>
      <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
      </div>
    </article>
  );
};

*/

//children props

const Book = ({ img, title, author, children }) => {
  return (
    <article>
      <div>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <h4>{author}</h4>
        {children}
      </div>
    </article>
  );
};

// const Book = () => {
//   return (
//     <article>
//       <div>
//         <Image />
//         <Title />
//         <Author />
//       </div>
//     </article>
//   );
// };

// const Image = () => (
//   <img
//     src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/413tVFk--xS.jpg"
//     alt="Dopamine"
//   />
// );

//const Image = () => <img src="../assets/book.jpg" alt="Dopamine" />;
// const Title = () => (
//   <h2>
//     Dopamine Detox : A Short Guide to Remove Distractions and Get Your Brain to
//     Do Hard Things (Productivity Series Book 1)
//   </h2>
// );

//in line css as js object
// const inLineHeading = {
//   color: "lightblue",
//   fontSize: "2rem",
// };

// const Author = () => {
//   return <h4 style={inLineHeading}> thibaut meurisse</h4>;
// };
export default App;
