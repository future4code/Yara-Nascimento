import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://pbs.twimg.com/media/CHVtTt8WoAAvKv0.jpg" 
          nome="Yara Tacy" 
          descricao="Oi, eu sou Yara Tacy. Tenho 28 anos e sou natural do Pernambuco. Estudo na Labenu. Estudo Desenvolvimento de web: Front-End e Back-End. Meus hobbies são: viajar para luagares desconhecidos, pescar, desenhar, aprender assuntos novos, ler e entre outros."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
        
      </div>


  
    
      <div className="page-section-container">
      <h4>Contatos</h4>
      <CardPequeno
      imagem="https://img.icons8.com/nolan/2x/gmail.png"
    
      descricao="Gmail: yara.tacy.barbosa.29@gmail.com"
    />
    
      
      <CardPequeno
      imagem="http://amyris-fernandez.com/wp-content/uploads/2019/12/linkedin_icon.png"
      
      descricao="Linkedin: Yara Nascimento"
    />
       
    </div>












      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://ceabbrasil.com.br/blog/wp-content/uploads/2016/04/Aeromo%C3%A7a-Desenho.jpg" 
          nome="ANAC" 
          descricao="Tenho formação em Comissária de Bordo!" 
        />
        
        <CardGrande 
          imagem="https://st.depositphotos.com/2757500/3518/v/600/depositphotos_35180495-stock-illustration-a-woman-with-a-baby.jpg" 
          nome="Babysitter" 
          descricao="Trabalhei como babá durante dois anos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
