import '../styles/App.css';
import logoImg from '../assets/images/logo-white.svg';
import startImg from '../assets/images/start-img.svg';
import secondImg from '../assets/images/clinic-img.svg';
import shapeImg from '../assets/images/shape-bg.svg';
import thirdImg from '../assets/images/shop-img.svg';
import fourthImg from '../assets/images/faq-img.svg';
import Box from '../components/Box.js';
import logoFoot from '../assets/images/logo-footer.svg';
import Nav from '../components/Nav.js'

function App() {
  return (
    <div className="App">
      <header className="header">
        <a> 
          <img src={logoImg}/> 
        </a>
        <Nav/>
      </header>
      <main>
        <section id='inicio'>
          <img id='img1' src={startImg}/>
          <div>
            <h1>Garanta uma vida longa e cheia de alegria para o seu melhor amigo</h1>
            <p className='texto'>
              A PetLife é o seu refúgio de confiança para o cuidado completo do seu pet. Com profissionais dedicados e serviços abrangentes,oferecemos uma experiência acolhedora e personalizada,garantindo o bem estar, a saúde e a felicidade dos seus animais de estimação.
            </p>
            <div id='botoes'>
              <a className='botao1'>Marque uma consulta</a>
              <a className='botao2' href='#clinica'>Conheça nossa clínica</a>
            </div>
          </div>
          <img className='bg' src={shapeImg}/>
        </section>
        <section id='clinica'>
          <div>
            <h2>Cuidado Veterinário de Qualidade</h2>
            <p className='texto'>
              Nossa clínica veterinária é local onde a paixão pelos animais se unem a excelência em cuidados veterinários. Sob a liderança da Dra.Vivian Reid,uma profissional altamente qualificada e comprometida,oferecemos serviços de saúde e bem-estar para animais de estimação de todas as espécies.Venha conhecer nossa clínica e desfrute da atenção personalizada e do carinho que seu pet merece.
            </p>
            <ul>
              <li>Consultas de rotina e exames de saúde abrangentes</li>
              <li>Vacinação e imunização</li>
              <li>Cirurgias e procedimentos veterinários</li>
              <li>Tratamento e controle de doenças</li>
              <li>Odontologia veterinária</li>
              <li>Atendimento de emergência 24 horas</li>
              <li>Nutrição e aconselhamento alimentar personalizado</li>
            </ul>
          </div>
          <img src={secondImg}/>
        </section>
        <section id='farmacia'>
          <img src={thirdImg}/>
          <div>
            <h2>Venha conferir o nosso petshop e farmácia</h2>
            <p className='texto'>
              Alem de ser uma clinica veterinaria de confiança, tambem contamos com um completo petshop e farmácia. Nosso petshop oferece uma ampla seleção de produtos de alta qualidade, desde alimentos balanceados e petiscos deliciosos ate brinquedos divertidos e acessórios elegantes para o seu pet. Na nossa farmácia, voce encontrará uma variedade de medicamentos, produtos de cuidados e suplementos recomendados pelos nossos veterinários, garantindo que o bem-estar e a saude do seu amado pet estejam sempre em boas mãos. Tudo o que voce precisa para cuidar e mimar o seu pet esta aqui, no nosso petshop e farmácia, com a mesma dedicação e qualidade que nos tornou referência na área veterinária.
            </p>
          </div>
        </section>
        <section id='duvidas'>
          <img id='img4' src={fourthImg}/>
          <div>
            <h2>Ficou com algum dúvida?</h2>
            <Box texto1={'Quais são os serviços oferecidos pela clínica PetLife?'} texto2={'A clínica da Pet Life oferece uma ampla gama de serviços, incluindo consultas de rotina, vacinação, cirurgias, tratamento de doenças, cuidados odontológicos, atendimento de emergência 24 horas, programas de prevenção de pulgas, carrapatos e vermes, entre outros. Nosso objetivo e fornecer cuidados abrangentes e personalizados para garantir a saúde e o bem-estar do seu pet.'}/>
            <Box texto1={'Quais espécies de animais a clínica veterinária atende?'} texto2={'Gatos,cachorros,pássaros,roedores e répteis'}/>
            <Box texto1={'A clínica veterinária da Pet Life possui serviços de emergência?'} texto2={'Sim, a clinica PetLife oferece atendimento de emergência.'}/>
            <Box texto1={'A clínica oferece serviços de banho e tosa?'} texto2={'Sim, oferecemos uma experiência completa para o seu pet.'}/>
          </div>
        </section>
        <footer>
          <div>
            <img src={logoFoot}/> 
            <p className='texto'>Cuidando com amor, vivendo com alegria: PetLife, onde a vida dos pets e mais feliz!</p>
          </div>
          <div>
            <strong className='titulo'>Links rápidos</strong>
            <nav>
              <a href='#inicio'>Inicio</a>
              <a href='#clinica'>Clinica</a>
              <a href='#farmacia'>Farmacia</a>
              <a href='#duvidas'>Dúvidas</a>
            </nav>
          </div>
          <div>
            <strong className='titulo'>Encontre-nos</strong>
            <p className='texto'>WhatsApp:(22) 98765-4321</p>
            <p className='texto'>Email: contato@petlife.com.br</p>
            <p className='texto'>Endereço: Av. 7 de Setembro, n° 42, Centro</p>
          </div>
        </footer>
        <div className='copyright'>
          Replicado por <a href='https://github.com/lipesilvapr' target='_blank'>Felipe</a>
        </div>
      </main>
    </div>
  );
}


export default App;
