export default function Login() {


  function loginAs(role){
    localStorage.setItem('user', role);
  }

  return(
    <> 
      <h1>Cibri</h1>
      <section>
        <h3>login as</h3>
        <button onClick={()=> { }}>user</button>
        <button onClick={()=> { }}>admin</button>
      </section>
    </>
  );
}