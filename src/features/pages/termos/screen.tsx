import { Column } from "../../../components/Column"
import { Footer } from "../../../components/footer"
import { Navbar } from "../../../components/navbar"

export const Terms =() =>{


return(

    <>
    <Navbar/>
    <Column classname="px-[16px]">
    <h1>Termos de Uso - LAV</h1>

<h2>1. Descrição do Serviço</h2>
<p>O LAV oferece serviços de lavanderia com pronta entrega, permitindo aos usuários agendar a coleta, lavagem e entrega de suas roupas de forma conveniente através de nosso aplicativo móvel.</p>

<h2>2. Uso do Serviço</h2>
<ul>
  <li>Ao utilizar nosso serviço, você concorda em fornecer informações precisas e atualizadas sobre suas necessidades de lavanderia.</li>
  <li>É responsabilidade do usuário selecionar corretamente as peças de roupa a serem lavadas. Roupas não selecionadas e entregues junto com o pedido não serão processadas.</li>
</ul>

<h2>3. Pagamento</h2>
<ul>
  <li>Os preços dos serviços de lavanderia são exibidos claramente no aplicativo. Ao efetuar o pagamento, você concorda com os valores estabelecidos.</li>
  <li>Caso ocorra um equívoco no número de peças entregues, se houver roupas a menos, será aplicado um desconto na próxima compra equivalente ao valor das peças não lavadas.</li>
</ul>

<h2>4. Privacidade</h2>
<p>Respeitamos sua privacidade e protegemos suas informações pessoais de acordo com nossa Política de Privacidade. Ao utilizar o LAV, você concorda com a coleta e uso de suas informações conforme descrito.</p>

<h2>5. Responsabilidade</h2>
<p>O LAV se compromete a cuidar das suas roupas com o máximo cuidado e profissionalismo. No entanto, não nos responsabilizamos por danos preexistentes, como manchas difíceis, botões soltos ou outros defeitos não causados durante o processo de lavagem e entrega.</p>

<h2>6. Alterações nos Termos</h2>
<p>Reservamo-nos o direito de alterar estes termos de uso a qualquer momento. Recomendamos que você revise regularmente os termos para estar ciente de quaisquer atualizações.</p>

<h2>7. Contato</h2>
<p>Se você tiver alguma dúvida ou preocupação sobre estes termos de uso, entre em contato conosco através dos canais de suporte fornecidos no aplicativo.</p>

<p>Ao utilizar o aplicativo LAV, você concorda com estes termos de uso. Obrigado por confiar em nós para cuidar das suas roupas.</p>
    </Column><Footer/>
    </>
)
}