<template>
  <div>
  <Collections/>

  <GlobalStyle/>
  </div>
</template>

<script>
// import Home from './pages/Home';
import Collections from './pages/Collections';
import GlobalStyle from './styles/global';

export default {
  name: 'App',
  components: {
    // Card,
    Collections,
    GlobalStyle
  }
}
</script>