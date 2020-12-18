<template>
  <Container>
    <Card>
        <ul>
          <li>Esse é uma nota do app feito vue</li>
          <li>Esse é uma nota do app feito vue</li>
          <li>Esse é uma nota do app feito vue</li>
        </ul>
        <Buttons>
          <button>voltar</button>
          <button><NoteAdd/></button>
          <button>proximo</button>
        </Buttons>
    </Card>
  </Container>
</template>
<script>
import NoteAdd from 'vue-material-design-icons/NotePlus'

import { Container, Card, Buttons } from './styles'; 

export default {
  components: {
    Container,
    Card,
    Buttons,

    NoteAdd
  }
}
</script>