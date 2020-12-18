<template>
<Container>
  <Card> 
    <div>
      <input placeholder="Title"/>
      <ColorPickTop />
    </div>
      <TextEditor placeholder="Note..."/>
      <EditButtons>
        <span id="editButtons">
          <button><FormatBold /></button>
          <button><FormatItalic /></button>
          <button><FormatUnderline /></button>
          <button><FormatStrikethrough /></button>
          <!-- <button><TextFields /></button>
          <button><Title/></button> -->
        </span>

        <span id="editButtons">
          <button><FormatAlignJustify /></button>
          <button><FormatAlignCenter /></button>
          <button><FormatAlignLeft /></button>
          <button><FormatAlignRight /></button>
        </span>

        <span id="editButtons">
          <button><InsertPhoto /></button>
          <button><FormatColorText /></button>
          <button><FormatColorFill /></button>
        </span>

      </EditButtons>
  </Card>
  <Buttons>
    <button>Salvar</button>
    <button>Lista de notas</button>
  </Buttons>
</Container>
</template>

<script>
import FormatBold from 'vue-material-design-icons/FormatBold'
import FormatItalic from 'vue-material-design-icons/FormatItalic'
import FormatUnderline from 'vue-material-design-icons/FormatUnderline'
import FormatStrikethrough from 'vue-material-design-icons/FormatStrikethrough'
import FormatAlignJustify from 'vue-material-design-icons/FormatAlignJustify'
import FormatAlignCenter from 'vue-material-design-icons/FormatAlignCenter'
import FormatAlignLeft from 'vue-material-design-icons/FormatAlignLeft'
import FormatAlignRight from 'vue-material-design-icons/FormatAlignRight'
import InsertPhoto from 'vue-material-design-icons/GooglePhotos';
import FormatColorText from 'vue-material-design-icons/FormatColorText';
import FormatColorFill from 'vue-material-design-icons/FormatColorFill';

import {
  Container, 
  Card,
  TextEditor,
  EditButtons,
  Buttons,
  ColorPickTop 
  } from './styles'


export default {
  components: {
    Container,
    Card,
    TextEditor,
    EditButtons,
    Buttons,
    ColorPickTop,

    //Cbuttons md
    FormatItalic,
    FormatUnderline,
    FormatStrikethrough,
    FormatAlignJustify,
    FormatAlignCenter,
    FormatAlignLeft,
    FormatAlignRight,
    InsertPhoto,
    FormatColorText,
    FormatColorFill,
    FormatBold,
    
  }
 }
</script>
<style>

</style>
