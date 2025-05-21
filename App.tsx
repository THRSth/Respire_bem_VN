
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import GeminiInteraction from './components/GeminiInteraction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-light-blue via-white to-light-green">
      <Header title="Respire Bem Vila Natal: Conscientização e Ação Ambiental na Vila Natal" />
      
      <main className="flex-grow container mx-auto px-4 py-8 space-y-12">
        <Section title="Bem-vindo à Luta por um Ar Mais Limpo!">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A Vila Natal, em Cubatão, é uma comunidade vibrante com uma história rica, mas também enfrenta desafios ambientais significativos, especialmente relacionados à qualidade do ar. A proximidade com o polo industrial impacta diretamente a saúde e o bem-estar de seus moradores.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Este espaço é dedicado a conscientizar sobre os perigos da poluição, seus efeitos na saúde respiratória e a explorar juntos caminhos para um futuro mais saudável e sustentável para todos nós.
              </p>
            </div>
            <img 
              src="https://picsum.photos/seed/vilanatalnature/600/400" 
              alt="Paisagem da Vila Natal ou Cubatão" 
              className="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
            />
          </div>
        </Section>

        <Section title="O Impacto da Poluição na Saúde Respiratória" bgClassName="bg-red-50 rounded-xl p-6 shadow-md">
          <p className="text-lg text-red-700 leading-relaxed mb-4">
            A poluição do ar é uma ameaça invisível, mas com consequências muito reais para nossa saúde, principalmente para o sistema respiratório. Moradores de áreas com alta concentração de poluentes, como pode ocorrer na Vila Natal, estão mais suscetíveis a:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
            <li><strong>Doenças Respiratórias Crônicas:</strong> Agravamento de asma, bronquite crônica e Doença Pulmonar Obstrutiva Crônica (DPOC).</li>
            <li><strong>Infecções Respiratórias:</strong> Maior frequência de pneumonias, sinusites e outras infecções.</li>
            <li><strong>Alergias:</strong> Intensificação de rinites alérgicas e outras reações alérgicas respiratórias.</li>
            <li><strong>Problemas Cardiovasculares:</strong> A poluição também afeta o coração e pode aumentar o risco de infartos e AVCs.</li>
            <li><strong>Desenvolvimento Infantil:</strong> Crianças expostas à poluição podem ter seu desenvolvimento pulmonar comprometido.</li>
          </ul>
          <p className="text-md text-red-600 font-semibold">
            Fique atento aos sintomas como tosse persistente, falta de ar, chiado no peito e cansaço excessivo. Procure um médico se necessário.
          </p>
        </Section>

        <Section title="O Que Podemos Fazer Juntos? Ações para Mudar Essa Realidade">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ActionCard 
              title="Monitoramento Cidadão" 
              description="Participar de iniciativas de monitoramento da qualidade do ar e denunciar irregularidades." 
              icon="👁️"
            />
            <ActionCard 
              title="Plantar Mais Verde" 
              description="Incentivar o plantio de árvores e a criação de áreas verdes, que ajudam a purificar o ar." 
              icon="🌳"
            />
            <ActionCard 
              title="Reduzir, Reutilizar, Reciclar" 
              description="Diminuir a produção de lixo e dar o destino correto aos resíduos, evitando queima e poluição." 
              icon="♻️"
            />
            <ActionCard 
              title="Cobrar Autoridades" 
              description="Exigir fiscalização rigorosa das indústrias e políticas públicas eficazes para controle da poluição." 
              icon="🗣️"
            />
            <ActionCard 
              title="Educação Ambiental" 
              description="Promover a conscientização na comunidade, escolas e famílias sobre os problemas e soluções." 
              icon="📚"
            />
            <ActionCard 
              title="Transporte Consciente" 
              description="Optar por transporte público, bicicletas ou caminhadas sempre que possível para reduzir emissões veiculares." 
              icon="🚲"
            />
          </div>
        </Section>
        
        <Section title="Pergunte ao Nosso Assistente Virtual" bgClassName="bg-brand-blue text-white rounded-xl p-6 shadow-lg">
          <p className="text-lg mb-4 text-light-blue">
            Tem dúvidas sobre poluição, saúde respiratória ou iniciativas ambientais na Vila Natal? Nosso assistente virtual, treinado com informações relevantes, pode ajudar!
          </p>
          <GeminiInteraction />
        </Section>
      </main>

      <Footer />
    </div>
  );
};

interface ActionCardProps {
  title: string;
  description: string;
  icon: string;
}

const ActionCard: React.FC<ActionCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <span className="text-4xl mb-3">{icon}</span>
      <h3 className="text-xl font-semibold text-brand-blue mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default App;
