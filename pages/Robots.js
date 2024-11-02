import Link from "next/link";

const Robots = (props) => {
  return (
    <div>
      <h1>Robots</h1>
      <Link href='/'>
        <button>Home</button>
      </Link>
      <div>
        {
          props.robots.map(robot =>(
            <li key={robot.id}>
              <Link href={`/Robots/${robot.id}`}>
                {robot.title}
              </Link>
            </li>
          ))
        }
      </div>
    </div>
  )
}

// getStaticProps is a specific Next.js syntax that allows the user to fetch data
// from an API and pass it as props in the 'Robots' component(because it's the default exported).
// When the page is refreshed, data from the API ('https://jsonplaceholder.typicode.com/posts')
// is fetched again on the server.
// When navigating between pages, the data fetched during
// the initial load is used, unless the fetching logic is executed again.

export async function getStaticProps () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);
  return {
    props:{
      robots: data
    }
  };
};

export default Robots;