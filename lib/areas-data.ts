export type AreaData = {
  slug: string;
  titulo: string;
  subtitulo: string;
  heroDesc: string;
  metaDescription: string;
  image: string;
  imagePosition: string;
  situacao: {
    titulo: string;
    intro: string;
    sinais: string[];
  };
  processo: {
    titulo: string;
    etapas: { numero: string; titulo: string; descricao: string }[];
  };
  servicos: {
    titulo: string;
    lista: string[];
  };
  faq: { pergunta: string; resposta: string }[];
  destaque: string | null;
  cta: string;
};

export const areasData: AreaData[] = [
  {
    slug: "trabalhista",
    titulo: "Direito Trabalhista",
    subtitulo: "Defesa dos direitos de quem trabalha",
    heroDesc:
      "Muitos trabalhadores encerram um vínculo empregatício sem saber que ainda têm valores a receber. Nossa atuação começa pela análise completa do seu caso para identificar o que é devido.",
    metaDescription:
      "Advogado trabalhista em Florianópolis/SC. Verbas rescisórias, horas extras, reconhecimento de vínculo e demissões irregulares. Atendimento em todo o Brasil.",
    image: "/images/Frame 1707483076.jpg",
    imagePosition: "object-[30%_center]",
    situacao: {
      titulo: "Você se reconhece nessa situação?",
      intro:
        "Ao ser demitido ou ao encerrar um contrato de trabalho, a sensação de que algo ficou para trás é comum. Em muitos casos, essa intuição está correta: verbas não pagas, horas não computadas e direitos ignorados são frequentes.",
      sinais: [
        "Fui demitido e acho que não recebi tudo que tinha direito",
        "Trabalhei sem carteira assinada e quero reconhecer o vínculo",
        "Fazia horas extras que nunca foram pagas corretamente",
        "Sofri assédio moral ou trabalhei em condições irregulares",
        "Fui obrigado a pedir demissão ou coagido a assinar documentos",
        "Quero entender se posso pedir rescisão indireta",
      ],
    },
    processo: {
      titulo: "Como atuamos no seu caso",
      etapas: [
        {
          numero: "01",
          titulo: "Análise inicial",
          descricao:
            "Examinamos a carteira de trabalho, contracheques, termo de rescisão e demais documentos para mapear exatamente o que foi pago e o que pode estar faltando.",
        },
        {
          numero: "02",
          titulo: "Cálculo e estratégia",
          descricao:
            "Calculamos as verbas devidas e definimos o caminho mais adequado: negociação extrajudicial, ação perante a Justiça do Trabalho ou ambos.",
        },
        {
          numero: "03",
          titulo: "Atuação processual",
          descricao:
            "Elaboramos a petição, acompanhamos audiências e respondemos a todas as manifestações da outra parte, mantendo você informado em cada etapa.",
        },
        {
          numero: "04",
          titulo: "Recebimento",
          descricao:
            "Ao obter êxito, cuidamos da execução do crédito para que você efetivamente receba o que tem direito, sem burocracia desnecessária.",
        },
      ],
    },
    servicos: {
      titulo: "O que cobrimos",
      lista: [
        "Verbas rescisórias não pagas ou pagas a menor",
        "Horas extras, adicionais e intervalos não respeitados",
        "Reconhecimento de vínculo empregatício",
        "Assédio moral e ambiente de trabalho irregular",
        "Rescisão indireta por descumprimento do empregador",
        "Demissões irregulares e estabilidades não respeitadas",
        "Adicional de insalubridade e periculosidade",
        "Equiparação salarial",
      ],
    },
    faq: [
      {
        pergunta: "Quanto tempo tenho para ingressar com uma ação trabalhista?",
        resposta:
          "O prazo geral é de dois anos a partir do fim do contrato de trabalho, podendo reclamar verbas dos últimos cinco anos do contrato. Por isso, é importante buscar orientação o quanto antes para não perder o direito.",
      },
      {
        pergunta: "Posso entrar com ação mesmo sem ter sido demitido?",
        resposta:
          "Sim. Trabalhadores com contrato ativo também podem reivindicar direitos como horas extras não pagas, adicional de insalubridade e intervalo desrespeitado, sem necessidade de encerrar o vínculo.",
      },
      {
        pergunta: "Trabalhei sem carteira assinada. Tenho algum direito?",
        resposta:
          "Sim. O reconhecimento de vínculo empregatício pode ser obtido judicialmente mesmo sem registro em carteira. Se confirmado, todos os direitos trabalhistas do período podem ser exigidos, incluindo FGTS, férias e 13.º salário.",
      },
      {
        pergunta: "O que é rescisão indireta?",
        resposta:
          "É uma modalidade em que o empregado pede o encerramento do contrato por culpa do empregador, quando este descumpre obrigações legais graves. O trabalhador recebe as mesmas verbas de uma demissão sem justa causa.",
      },
    ],
    destaque:
      "Se você foi demitido, vale a pena entender o que ainda pode ser seu.",
    cta: "Analisar meu caso trabalhista (WhatsApp)",
  },
  {
    slug: "previdenciario",
    titulo: "Direito Previdenciário",
    subtitulo: "Benefícios, aposentadorias e revisões junto ao INSS",
    heroDesc:
      "A negativa do INSS não é o fim do caminho. Em muitos casos, a documentação certa e a estratégia adequada são suficientes para reverter a decisão e garantir o benefício a que você tem direito.",
    metaDescription:
      "Advogado previdenciário em Florianópolis/SC. Benefícios negados pelo INSS, aposentadorias, auxílio-doença e BPC/LOAS. Atendimento em todo o Brasil.",
    image: "/images/Frame 1707483077.jpg",
    imagePosition: "object-center",
    situacao: {
      titulo: "O INSS negou. E agora?",
      intro:
        "Ter um benefício indeferido é frustrante, especialmente quando você sabe que contribuiu por anos para a Previdência. Mas a negativa administrativa raramente é definitiva: existe um caminho para questionar a decisão e buscar o reconhecimento do seu direito.",
      sinais: [
        "Tive meu pedido de aposentadoria negado ou ainda está em análise há muito tempo",
        "O auxílio-doença foi negado ou cancelado e ainda não estou em condições de trabalhar",
        "Solicitei o BPC/LOAS e fui recusado",
        "Recebi menos do que deveria na aposentadoria",
        "Trabalhei em atividade especial e não tiveram reconhecimento do tempo",
        "Perdi um familiar e preciso requerer pensão por morte",
      ],
    },
    processo: {
      titulo: "Como atuamos no seu caso",
      etapas: [
        {
          numero: "01",
          titulo: "Leitura da negativa",
          descricao:
            "Analisamos o indeferimento ou o extrato previdenciário para identificar o motivo exato da recusa e o que precisa ser corrigido ou complementado.",
        },
        {
          numero: "02",
          titulo: "Levantamento documental",
          descricao:
            "Mapeamos os documentos que faltam ou precisam ser reforçados: laudos médicos, PPP, CNIS, declarações de tempo de serviço e demais comprovantes.",
        },
        {
          numero: "03",
          titulo: "Recurso ou ação",
          descricao:
            "Ingressamos com recurso administrativo ou ação judicial perante o INSS, apresentando todos os elementos necessários para reverter a decisão.",
        },
        {
          numero: "04",
          titulo: "Concessão e retroativos",
          descricao:
            "Ao obter a concessão, cuidamos também do recebimento dos valores retroativos desde a data do requerimento inicial, corrigindo o prejuízo causado pela demora.",
        },
      ],
    },
    servicos: {
      titulo: "O que cobrimos",
      lista: [
        "Aposentadoria por idade e por tempo de contribuição",
        "Aposentadoria especial (atividades insalubres ou perigosas)",
        "Auxílio-doença e auxílio por incapacidade permanente",
        "BPC/LOAS (benefício de prestação continuada)",
        "Pensão por morte e auxílio-reclusão",
        "Revisão e recálculo de benefícios já concedidos",
        "Salário-maternidade negado",
        "Restabelecimento de benefício cancelado indevidamente",
      ],
    },
    faq: [
      {
        pergunta: "Posso receber os valores retroativos se o INSS demorou ou negou?",
        resposta:
          "Sim. Em caso de concessão judicial ou administrativa, os valores são devidos desde a data do requerimento original, com correção monetária e juros. Esse retroativo pode representar quantias significativas.",
      },
      {
        pergunta: "Qual a diferença entre recurso administrativo e ação judicial?",
        resposta:
          "O recurso é apresentado dentro do próprio INSS, ao Conselho de Recursos da Previdência Social. Já a ação judicial tramita perante a Justiça Federal. Avaliamos qual caminho é mais adequado para cada situação.",
      },
      {
        pergunta: "Tenho direito ao BPC/LOAS mesmo sem ter contribuído para o INSS?",
        resposta:
          "Sim. O BPC/LOAS é um benefício assistencial, não contributivo. Para obtê-lo, é necessário comprovar deficiência ou idade igual ou superior a 65 anos, além de hipossuficiência econômica da família.",
      },
      {
        pergunta: "Meu benefício foi cancelado. Posso reverter?",
        resposta:
          "Em muitos casos, sim. Cancelamentos indevidos por erro na perícia, ausência de convocação ou falta de documentação podem ser contestados tanto na via administrativa quanto judicialmente.",
      },
    ],
    destaque:
      "Se o seu pedido foi indeferido, o caminho ainda pode estar aberto.",
    cta: "Analisar meu caso previdenciário (WhatsApp)",
  },
  {
    slug: "consumidor",
    titulo: "Direito do Consumidor",
    subtitulo: "Seus direitos frente a empresas, bancos e prestadores de serviço",
    heroDesc:
      "Relações de consumo desequilibradas geram prejuízo real e desgaste emocional. Nossa atuação é voltada a corrigir essas situações e, quando cabível, obter indenização pelo dano causado.",
    metaDescription:
      "Advogado do consumidor em Florianópolis/SC. Cobranças indevidas, negativação injusta, contratos abusivos e problemas com bancos. Defenda seus direitos.",
    image: "/images/Frame 1707483078.jpg",
    imagePosition: "object-[70%_center]",
    situacao: {
      titulo: "Você foi prejudicado como consumidor?",
      intro:
        "O Código de Defesa do Consumidor existe para equilibrar uma relação que, por natureza, coloca o cliente em desvantagem. Quando empresas ignoram esse equilíbrio, é possível buscar reparação judicial.",
      sinais: [
        "Fui cobrado por algo que não contratei ou já cancelei",
        "Tive meu nome negativado indevidamente no SPC ou Serasa",
        "Assinei um contrato com cláusulas que não compreendi ou que são abusivas",
        "Um produto ou serviço não funcionou como prometido e a empresa não resolveu",
        "Tive problema com banco ou financeira: tarifa indevida, juros abusivos, cartão clonado",
        "Recebi tratamento humilhante ou desrespeitoso de uma empresa",
      ],
    },
    processo: {
      titulo: "Como atuamos no seu caso",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico da situação",
          descricao:
            "Analisamos contratos, boletos, e-mails, comprovantes e histórico de atendimentos para entender exatamente o que ocorreu e qual é a responsabilidade da empresa.",
        },
        {
          numero: "02",
          titulo: "Notificação e tentativa de resolução",
          descricao:
            "Em certos casos, uma notificação formal já resolve o problema. Isso também cria um registro importante caso a via judicial se torne necessária.",
        },
        {
          numero: "03",
          titulo: "Ação judicial",
          descricao:
            "Quando a empresa não cumpre suas obrigações, ingressamos com ação para exigir a devolução dos valores, a exclusão da negativação e a indenização por danos morais.",
        },
        {
          numero: "04",
          titulo: "Reparação",
          descricao:
            "Acompanhamos a execução da sentença para garantir que você receba a indenização e que os registros negativos sejam efetivamente removidos.",
        },
      ],
    },
    servicos: {
      titulo: "O que cobrimos",
      lista: [
        "Cobranças indevidas e repetição do indébito",
        "Exclusão de negativação no SPC, Serasa e outros",
        "Contratos com cláusulas abusivas",
        "Produtos ou serviços que não cumpriram o prometido",
        "Problemas com bancos, financeiras e cartões de crédito",
        "Tarifas e juros abusivos",
        "Cancelamento de serviços com retenção indevida de valores",
        "Indenização por danos morais e materiais",
      ],
    },
    faq: [
      {
        pergunta: "Posso ser indenizado pelo constrangimento de uma negativação indevida?",
        resposta:
          "Sim. A negativação indevida gera dano moral presumido, o que significa que não é necessário provar o sofrimento concreto para ter direito à indenização. A simples inclusão irregular já é suficiente.",
      },
      {
        pergunta: "Quanto posso receber de volta por uma cobrança indevida?",
        resposta:
          "O Código de Defesa do Consumidor prevê a devolução em dobro dos valores cobrados indevidamente, acrescida de correção monetária e juros. Em alguns casos, é possível pleitear também danos morais.",
      },
      {
        pergunta: "O banco cobrou uma tarifa que não estava no contrato. O que fazer?",
        resposta:
          "É possível exigir a devolução da cobrança e, dependendo do histórico, pedir indenização. Guarde extratos, contratos e comprovantes de qualquer contato com o banco.",
      },
      {
        pergunta: "Posso entrar com ação mesmo sem ter ido ao Procon?",
        resposta:
          "Sim. A ida ao Procon não é obrigatória para ajuizar uma ação de consumidor. Ela pode ser útil como prova de tentativa de resolução, mas não é um requisito legal.",
      },
    ],
    destaque: null,
    cta: "Falar sobre meu caso (WhatsApp)",
  },
  {
    slug: "administrativo",
    titulo: "Direito Administrativo",
    subtitulo: "Seus direitos frente ao poder público",
    heroDesc:
      "Questões envolvendo a Administração Pública exigem técnica específica e atenção a prazos rigorosos. Acompanhamos servidores, candidatos e cidadãos em situações que envolvem órgãos públicos e autarquias.",
    metaDescription:
      "Advogado administrativo em Florianópolis/SC. Direitos de servidores, concursos públicos, mandado de segurança e processos administrativos. Atendimento em todo o Brasil.",
    image: "/images/Frame 1707483079.jpg",
    imagePosition: "object-[55%_center]",
    situacao: {
      titulo: "Você enfrenta uma situação com o poder público?",
      intro:
        "Relações com a Administração Pública têm regras próprias e prazos que não podem ser ignorados. Seja como servidor, candidato a concurso ou cidadão, agir com orientação jurídica correta faz toda a diferença.",
      sinais: [
        "Sou servidor público e tive um direito negado ou um ato disciplinar",
        "Fui eliminado de um concurso público de forma que considero irregular",
        "Recebi uma multa ou sanção administrativa e quero contestar",
        "Um ato da Administração me prejudicou e quero ser ressarcido",
        "Preciso impugnar um edital ou questionar uma decisão de banca",
        "Tenho uma questão com autarquia ou entidade pública (INSS, ANATEL, ANVISA etc.)",
      ],
    },
    processo: {
      titulo: "Como atuamos no seu caso",
      etapas: [
        {
          numero: "01",
          titulo: "Análise do ato administrativo",
          descricao:
            "Lemos o edital, a portaria, o ato ou a decisão para identificar se houve ilegalidade, desvio de finalidade ou violação de direitos.",
        },
        {
          numero: "02",
          titulo: "Recurso administrativo",
          descricao:
            "Antes da via judicial, avaliamos a pertinência de um recurso interno. Em concursos e processos administrativos, essa etapa pode ser determinante.",
        },
        {
          numero: "03",
          titulo: "Ação judicial ou mandado de segurança",
          descricao:
            "Quando necessário, ingressamos com ação perante a Justiça Federal ou Estadual, incluindo mandado de segurança para tutela urgente de direitos líquidos e certos.",
        },
        {
          numero: "04",
          titulo: "Acompanhamento",
          descricao:
            "Mantemos atenção aos prazos processuais e administrativos ao longo de todo o caso, garantindo que nenhuma oportunidade seja perdida.",
        },
      ],
    },
    servicos: {
      titulo: "O que cobrimos",
      lista: [
        "Direitos e garantias de servidores públicos",
        "Processos administrativos disciplinares",
        "Concursos públicos e impugnação de editais",
        "Mandado de segurança em matéria administrativa",
        "Responsabilidade do Estado por atos lesivos",
        "Recursos e impugnações em processos administrativos",
        "Questões com autarquias e agências reguladoras",
        "Licitações e contratos administrativos",
      ],
    },
    faq: [
      {
        pergunta: "Fui eliminado de um concurso. Posso questionar judicialmente?",
        resposta:
          "Sim. Se a eliminação decorreu de critério ilegal, questão anulável ou erro de avaliação, é possível buscar revisão judicial. Os prazos são curtos, então é importante agir rapidamente.",
      },
      {
        pergunta: "O que é mandado de segurança e quando se aplica?",
        resposta:
          "É um remédio constitucional para proteger direito líquido e certo contra ato ilegal ou abusivo de autoridade pública. É especialmente útil quando a situação exige uma resposta judicial urgente.",
      },
      {
        pergunta: "Sou servidor e sofri punição disciplinar. O que posso fazer?",
        resposta:
          "É possível questionar a legalidade do processo administrativo disciplinar, verificar se o contraditório e a ampla defesa foram respeitados, e contestar a penalidade tanto na via administrativa quanto judicial.",
      },
      {
        pergunta: "O Estado causou um dano a mim ou à minha empresa. Posso ser indenizado?",
        resposta:
          "Sim. A responsabilidade civil do Estado é objetiva em muitos casos, o que significa que basta demonstrar o dano e o nexo causal com a conduta estatal, sem necessidade de provar culpa.",
      },
    ],
    destaque: null,
    cta: "Falar sobre meu caso (WhatsApp)",
  },
];

export function getAreaBySlug(slug: string): AreaData | undefined {
  return areasData.find((a) => a.slug === slug);
}
