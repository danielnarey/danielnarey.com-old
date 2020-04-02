import Footer from '../app/footer/Footer.svelte';
import Header from '../app/header/Header.svelte';
import Nav from '../app/nav/Nav.svelte';
import Main from '../app/main/Main.svelte';


try {
  const app = new App({
    target: document.body,
  });
  
} catch (err) {
  console.log(err);
}
