
export default function Home() {
  const user = localStorage.getItem(`user`);

  return(
    <> 
      <h1>home</h1>
      <h5>not ready</h5>
      <section>

        <h3>{user}</h3>
      </section>
    </>
  );
}