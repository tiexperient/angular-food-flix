import { FoodItem } from '../model/food.module';

export const dataFake: FoodItem[] = [
    /* ############################## RECEITAS SALGADAS ############################## */
    {
        id: "1",
        category: "salgados",
        title: "Pão Sírio",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "pães",
                        "massas",
                        "café da manhã"
                     ],

        ingredients: [
                        "1 xícaras de farinha de trigo",
                        "1 sachet de fermento biológico",
                        "1 colher de sopa de sal",
                        "250 ml de água",
                        "300 ml de leite"
                     ],

        video_embed: "https://www.facebook.com/aprediacozinhar/videos/619750042331534/?extid=WA-UNK-UNK-UNK-AN_GK0T-GK1C",
        resume: `
                    <br>
                    É um pão versátil, ideal para lanches quentes e frios, sanduíches naturais, servido com patês, como aperitivo, 
                    torradas e até preparado na frigideira como “mini pizza”.<br><br>
                    Quer saber mais? Vem conferir!
                `,
        preparo: [
                    "Numa tijela despeje a farinha, o fermento e o sal e misture os ingredientes secos",
                    "Acrescente a água e o leite e misture tudo até virar uma massa. Quando não conseguir mais mexer com uma colher, utilize as mãos, até virar uma massa homogênea",
                    "Deixe a massa descansar por 1 hora",
                    "Depois que a massa descansar, corte-a em fatias e faça bolinhas",
                    "Passei o rolo por cima das bolinhas até ficar num formato de massa de pizza",
                    "asse os discos numa frigideira por 30 segundos cada lado"
                 ],
        photoCover: "assets/img-capas/mini46.jpg",
        photoCoverContent: "assets/img-content/pao-sirio.png"
    },
    {
        id: "2",
        category: "salgados",
        title: "Feijão de Rico",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sem lactose",
                        "acompanhamento"
                     ],

        ingredients: [
                        "500g de feijão carioca",
                        "200g de bacon picado",
                        "1 linguiça picada",
                        "1/2 cebola picada",
                        "3 dentes de alho picado",
                        "1 colher chá de páprica picante",
                        "1 colher chá de chimichurri",
                        "1 colher de sobremesa de sal",
                        "1 beterraba picada",
                        "1 xícara de vargem picada",
                        "1 cenoura picada",
                        "1 batata picada",
                        "1 xícara de quiabo"
                     ],

        video_embed: "https://www.facebook.com/receitastopchefe/videos/788306581860294/",
        resume: `
                    <br>
                    Cremoso e uma delícia, com alguns troque que deixam ele ainda mais saboroso e também muito nutritivo! 
                    O feijão é uma das paixões do nosso Brasil.
                    <br><br>
                    Você também vai amar fazer feijão assim!
                `,
        preparo: [
                    "Deixe o feijão de molho por 3 horas e depois escorra",
                    "Numa panela de pressão refogue o bacon, a linguiça, a cebola, o alho, a páprica picante, o chimichurri, o sal e misture tudo muito bem",
                    "Acrescente o feijão, misture tudo muito bem e acrescente água até que cubra tudo e deixe cozinhar na pressão por 15 minutos",
                    "Após o cozimento, acrescente aos poucos a beterraba, a vargem, a cenoura, a batata, misturando tudo muito bem. Acrescente mais 1 xícara de água",
                    "Feche a panela e deixe pegar pressão. Bem no início, já retire da pressão e deixe cozinhar por mais 5 minutos",
                    "Depois desse prazo, acrescente o quiabo, apague o fogo e deixe-o cozinhar com o calor que já existe na panela"
                 ],
        photoCover: "assets/img-capas/mini16.jpg",
        photoCoverContent: "assets/img-content/feijao-de-rico.png"
    },
    {
        id: "3",
        category: "salgados",
        title: "Caldo de Quenga",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "caldos",
                        "sem lactose"
                     ],

        ingredients: [
                        "800g de mandioca",
                        "2 sachets tempero de frango",
                        "2,5 litros de água",
                        "1 calabresa picadas",
                        "200g de bacon picado",
                        "3 dentes de alho amassado",
                        "1 cebola ralada",
                        "500g peito de frango cozido e desfiago",
                        "açafrão a gosto",
                        "pimenta do reino a gosto",
                        "pimenta calabresa a gosto",
                        "sal a gosto",
                        "cheiro verde a gosto"
                     ],

        video_embed: "https://www.facebook.com/receitasdavobita/videos/caldo-de-kenga/200408158519561/",
        resume: `
                    <br>
                    Descubra o sabor aconchegante do Caldo de Quenga, uma iguaria mineira.
                    <br><br>
                    Depois de experimentar esse caldo delicioso, você não vai querer outro!
                `,
        preparo: [
                    "Numa panela de pressão despeje a mandioca, o tempero de frango, a água e deixe cozinhar por 15 minutos",
                    "No liquidificador, aos poucos, bata a mandioca cozida com a água do cozimento",
                    "A parte, frite o bacon e junte a linguiça, o alho, a cebola, o peito de frango, o açafrão, a pimenta do reino, a pimenta calabresa, o creme da mandioca, o restante da água do cozimento, o sal e misture bem",
                    "Acrescente o cheiro verde e desligue",
                    "Por cima, acrescente mussarela e bacon a gosto"
                 ],
        photoCover: "assets/img-capas/mini5.jpg",
        photoCoverContent: "assets/img-content/caldo-de-quenga.png"
    },
    {
        id: "4",
        category: "salgados",
        title: "Bolo de Arroz",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanches",
                        "bolos",
                        "arroz"

                     ],

        ingredients: [
                        "3 ovos inteiros",
                        "1/2 xícara de óleo",
                        "1 xícara de leite",
                        "2 xícaras de arroz",
                        "1 xícara de farinha de trigo",
                        "1/2 xícara de amido",
                        "1 colher de sopa de fermento",
                        "sal a gosto",
                        "pimenta do reino e ervas finas",
                        "1/2 xícara de tomate picado sem semente",
                        "150g de presunto picado",
                        "150g de mussarela picada",
                        "cebolinha picada a gostoS"
                     ],

        video_embed: "https://www.facebook.com/gordicesdateka/videos/sobrou-arroz-cozido-do-seu-almo%C3%A7o-fa%C3%A7a-esse-bolo-salgado-de-arroz-para-o-caf%C3%A9-f%C3%A1/130135458915011/",
        resume: `
                    <br>
                    Está com aquelas sobras de arroz aí e não sabe o que fazer? que tal uma deliciosa torta salgada então? 
                    <br><br>
                    Super prática e deliciosa!
                `,
        preparo: [
                    "Em um liquidificador despeje os ovos, o óleo, o leite e o arroz e bata por aproximadamente 2 minutos",
                    "Despeje a mistura do liquidificador em uma tijela e adicione a farinha, o amido de milho, o fermento, o sal, a pimenta e ervas finas e misture tudo com um fuê",
                    "Chegou a hora de acrescentar os recheios como o tomate, o presunto, o queijo e a cebolinha, misturando tudo muito bem. Dica: Os recheio são livres. Você pode usar, milho, azeitona, palmito, frango, carne moída, etc ",
                    "Numa forma untada, despeje a mistura e leve ao forno pré aquecido a 180° por cerca de 45 a 50 minutos"
                 ],
        photoCover: "assets/img-capas/mini4.jpg",
        photoCoverContent: "assets/img-content/bolo-arroz.png"
    },
    {
        id: "5",
        category: "salgados",
        title: "Arroz de Siri",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "arroz",
                        "sem lactose"
                     ],

        ingredients: [
                        "2 xícaras de arroz cozido",
                        "400g de carne de siri",
                        "3 pimentões coloridos em cubos pequenos",
                        "1 cebola média em cubos pequenos",
                        "3 tomates picados sem sementes",
                        "1 dente de alho amassado",
                        "1 pimenta picada",
                        "200ml de leite de coco",
                        "1/2 xícara de cheiro verde picado",
                        "1 limão espremido",
                        "azeite",
                        "sal a gosto"
                     ],

        video_embed: "http://www.receitinhasdabrunildinha.com.br/2013/11/arroz-de-siri.html?m=1",
        resume: `
                    <br>
                    Para fugir do comum na hora de cozinhar frutos do mar, a dica é preparar receitas com carne de siri, 
                    que rende pratos diferentes, saborosos e que são a cara do verão!
                    <br><br>
                `,
        preparo: [
                    "Em uma panela grande refogue a cebola e o alho no azeite. Acrescente a pimenta e os pimentões e continue mexendo. Coloque os tomates, a carne de siri, o limão e o sal e refogue mais um pouco. Quando estiver bem refogado, adicione o leite de coco, espere ferver e desligue o fogo",
                    "Coloque o arroz cozido e misture bem (Se usar cheiro verde, coloque agora)",
                    "Transfira para um refratário"
                 ],
        photoCover: "assets/img-capas/mini7.jpg",
        photoCoverContent: "assets/img-content/arroz-siri.png"
    },
    {
        id: "6",
        category: "salgados",
        title: "Caldo Cabeça de Galo",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "caldos",
                        "sem lactose"
                     ],

        ingredients: [
                        "1 xícara de farinha de mandioca fina",
                        "3 litros de água",
                        "2 colheres de sopa de óleo",
                        "5 dentes de alho amassados",
                        "1 cebola grande picada",
                        "2 tomates maduros picados",
                        "1 pimentão verde picado",
                        "3 pimentas de cheiro picadas",
                        "açafrão a gosto",
                        "colorau a gosto",
                        "pimenta do reino a gosto",
                        "pimenta calabresa a gosto",
                        "sal a gosto",
                        "cheiro verde a gosto",
                        "7 ovos"
                     ],

        video_embed: "https://www.facebook.com/jessiaraalmeidaa/videos/884500775383476/",
        resume: `
                    Considerado um potente restaurador de energias, sobretudo após um dia de trabalho ou esforços físicos intensos.
                    <br>
                    Com ingredientes que usamos no dia a dia, o caldo de ovo ou cabeça de galo é uma receita super nutritiva e fica deliciosa!
                `,
        preparo: [
                    "Em uma vasilha, despeje a farinha de mandioca e metade da água. Misture tudo e deixe hidratar",
                    "Em uma panela, despeje o óleo e refogue a cebola, o tomate, o pimentão, a pimenta de cheiro, o colorau, o açafrão, a pimenta do reino, a pimenta calabresa e o sal. Acrescente o restante da água, misturando tudo muito bem e deixe levantar fervura",
                    "Adicione a farinha hidratada e mexa por aproximadamente 10 minutos, para a farinha cozinhar",
                    "Acrescente o cheiro e verde e cuidadosamente acrescente os ovos a fervura, sem mexer, para não derreter os ovos e deixe cozinhando entre 5 e 10 minutos"
                 ],
        photoCover: "assets/img-capas/mini3.jpg",
        photoCoverContent: "assets/img-content/cabeca-de-galo.jpg"
    },
    {
        id: "7",
        category: "salgados",
        title: "Cuscuz Recheado",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "café da manhã"
                     ],

        ingredients: [
                        "2 xícaras de flocão",
                        "sal a gosto",
                        "100ml de água",
                        "bacon frito a gosto",
                        "linguiça frita a gosto",
                        "banana frita a gosto,",
                        "mussarela a gosto",
                        "requeijão a gosto",
                        "cheiro verde a gosto",
                        "3 ovos cozidos"
                     ],

        video_embed: "https://www.facebook.com/imperioreceitas/videos/2801937070026919/",
        resume: `
                    <br>
                    O cuscuz nordestino recheado é uma receita tradicional brasileira que dá água na boca.
                    <br><br>
                    não coma pão com trigo, faça essa delicia fica pronto em 5 minutos.
                `,
        preparo: [
                    "Em uma tijela despeje o flocão, o sal, a água, misture bem e deixe descansar por 15 minutos",
                    "Na cuscuzeira vá acrescentando uma camada de flocão, uma de linguiça, bacon e mussarela, outra camada de cuscuz, uma camada de banana, uma terceira camada de cuscuz, uma segunda camada de linguiça, bacon e mussarela, requeijão e uma quarta camada de cuscuz, Deixe cozinhar em fogo baixo por 15 minutos",
                    "Depois dos 15 minutos, acrescente os ovos cozidos cortados e cheiro verde para decoração"
                 ],
        photoCover: "assets/img-capas/mini10.jpg",
        photoCoverContent: "assets/img-content/cuscuz-recheado.jpg"
    },
    {
        id: "8",
        category: "salgados",
        title: "Bolo de povilho e queijo",
        porcoes: "",
        tempo_preparo: "40 minutos",
        
        subcategory: [
                        "bolos",
                        "pães",
                        "lanches",
                        "café da manhã"
                     ],

        ingredients: [
                        "3 ovos",
                        "1 xícara de leite",
                        "1 xícara de queijo ralado",
                        "1 pitada bem generosa de sal",
                        "3 xícaras de polvilho doce",
                        "1 xícara de óleo",
                        "1 colher (sobremesa) de fermento em pó"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/42070-bolo-de-polvilho-e-queijo.html",
        resume: `
                    <br><br>
                    Uma receita fácil e deliciosa para o seu café da tarde, com queijo e polvilho doce, fofinho e irresistível!
                    <br><br>
                `,
        preparo: [
                    "Bata dos ingredientes no liquidificador até misturar bem",
                    "Coloque o fermento por último",
                    "Coloque em forma de buraco no meio",
                    "Asse em forno médio, pré-aquecido, por aproximadamente 30 minutos"
                 ],
        photoCover: "assets/img-capas/mini11.jpg",
        photoCoverContent: "assets/img-content/bolo-queijo.jpg"
    },
    {
        id: "9",
        category: "salgados",
        title: "Arroz de Preguiçoso",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "arroz",
                        "sem lactose"
                     ],

        ingredients: [
                        "1 linguiça calabresa picada",
                        "3 dentes de alho picados",
                        "1 cenoura em cubinhos",
                        "1 batata em cubinhos",
                        "pimenta do reino a gosto",
                        "orégano a gosto",
                        "salsa desidratada a gosto",
                        "1 colher de sopa de molho shoyo",
                        "1 xícará de arroz",
                        "2 xícaras de caldo de bacon",
                        "4 ovos"
                     ],

        video_embed: "https://www.facebook.com/FoodMakersBr/videos/777572649631300/",
        resume: `
                    <br>
                    Que tal aprender como fazer uma receita de arroz de preguicoso no forno bem fácil e rápido? Esse é aquele almoço completo que fica pronto bem rapidinho. 
                    <br><br>
                `,
        preparo: [
                    "Em uma panela quente, acrescente a calabresa, o alho, a cenoura, a batata, a pimenta do reino, o orégano, a salsa desidratada, o molho shoyo, o arroz e refogue tudo muito bem",
                    "Acrescente o caldo de bacon e deixe cozinhar",
                    "Quando a finalização do cozimento estiver quase finalizando(80%), com uma concha, abra covinhas no arroz e delicadamente deite os ovos sobre elas. Acrescente temperos a gosto. Se necessário, acrescente um pouco mais de água",
                    "Deixe o cozimento finalizar por 5 a 10 minutos"
                 ],
        photoCover: "assets/img-capas/mini9.jpg",
        photoCoverContent: "assets/img-content/arroz-de-preguicoso.jpg"
    },
    {
        id: "10",
        category: "salgados",
        title: "Batata doce ao Forno",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamentos"
                     ],

        ingredients: [
                        "800g de batata doce com casca cortada em cubinhos",
                        "1 colher se sopa de sal",
                        "1 colher de chá de pimenta calabresa",
                        "2 dentes de alho cortados em lâminas", 
                        "alecrim a gosto",
                        "1 colher de sopa de manteiga",
                        "2 colheres de sopa de azeite",
                        "1 colher de chá de orégano",
                        "1 colher de chá de páprica"
                     ],

        video_embed: "https://www.youtube.com/watch?v=WBtabcGqlbA",
        resume: `
                    <br><br>
                    Essa é uma daquelas receitas viciantes que quando vc experimenta vc quer fazer todos os dias. Um acompanhamento coringa que todos vão amar!
                    <br><br>
                `,
        preparo: [
                    "Em uma panela, despeje a batata doce cortada em cubinhos, o sal, a pimenta calabresa, o alho cortado em lâminas, o alecrim e água até cobrir as batatas. Mele ao fogo e assim que levantar fervura, deixe cozinhas por 8 minutos",
                    "Para a pasta, misture a manteiga, o azeite, o orégano e a páprica. Despeje a pasta na batata doce cozida, misturando bem",
                    "Leve para assar em forno a 220° por 45 minutos aproximadamente"
                 ],
        photoCover: "assets/img-capas/mini26.jpg",
        photoCoverContent: "assets/img-content/batata-doce-ao-forno.jpg"
    },
    {
        id: "11",
        category: "salgados",
        title: "Salada Simples",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamentos",
                        "saladas",
                        "sem lactose",
                     ],

        ingredients: [
                        "azeite a gosto para fritura",
                        "250g de grão de bico cozido",
                        "1 cebola em tiras",
                        "1 pepino cortado em meia lua", 
                        "tomates cereja a gosto",
                        "salsa a gosto",
                        "3 colheres de azeite para o molho",
                        "3 colheres de vinagre",
                        "1/2 limão",
                        "alho a gosto",
                        "chimichurri a gosto",
                        "pimenta calabresa a gosto",
                        "sal a gosto"
                     ],

        video_embed: "https://www.facebook.com/Receitasdochefdelicias/videos/315877013355007/?extid=WA-UNK-UNK-UNK-AN_GK0T-GK1C",
        resume: `
                    <br>
                    Não há nada melhor para dar um ânimo no seu dia do que uma salada simples. E o seu nome faz jus ao seu modo de preparo.
                    <br><br>
                    Repleta de nutrientes e de muito sabor, essa salada é perfeita como acompanhamento.
                `,
        preparo: [
                    "Deixe a cebola cortada em tiras de molho na água gelada com gelo enquanto conduz o preparo",
                    "Em uma panela, despeje um pouco de azeite e refogue o grão de bico. Reserve",
                    "Prepare o molho com as 3 colheres de azeite, o vinagre, o limão, o alho, o chimichurri, a pimenta calabresa e o sal e misture tudo",
                    "Numa travessa, acrescente o grão de bico, o pepino, a cebola, os tomates, a salsa e o molho. Misture bem"
                 ],
        photoCover: "assets/img-capas/mini19.jpg",
        photoCoverContent: "assets/img-content/salada-simples.jpg"
    },
    {
        id: "12",
        category: "salgados",
        title: "Galinhada",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "arroz"
                     ],

        ingredients: [
                        "6 coxas de frango",
                        "suco de 1/2 limão para o frango no molho",
                        "1 colher de chá de páprica",
                        "1/2 colher de chá de pimenta do reino",
                        "1/2 colher de chá de tempero baiano",
                        "1 colher de chá de sal para o frango",
                        "3 dentes de alho triturados",
                        "suco de 1/2 limão para o frango",
                        "2 xícaras de arroz",
                        "1 cenoura cortada em cubos pequenos",
                        "1 cebola roxa picada",
                        "1 lata de milho verde",
                        "1/2 pimentão vermelho picado",
                        "2 pimentas de cheiro picadas",
                        "cebolinha a gosto",
                        "1/2 colher de chá de pimenta do reino",
                        "1 colher de açafrão",
                        "1 1/2 de sal para o arroz",
                        "800ml de água",
                        "tomate cereja a gosto",
                        "mussarela a gosto"
                     ],

        video_embed: "https://www.facebook.com/culinariaaprendaoficial/videos/1389162188146668/",
        resume: `
                    Perfeita para o almoço do fim de semana, a galinhada é um prato tradicional de nossa culinária! 
                    <br><br>
                    Deliciosa e reconfortante, a galinhada tem cara de comida de casa de mãe. E por ser preparada numa panela só ainda é prática. Melhor, impossível.
                `,
        preparo: [
                    "Numa travessa, adicione as coxas de frango e despeje água quente até cobrir, acrescente o suco de 1/2 limão e deixe descansar por 5 minutos",
                    "Escorra e acrescente a páprica, a pimenta do reino, o tempero baiano, o sal, o alho, o limão, misture bem e deixe marinar por 30 minutos",
                    "Numa travessa, acrescente o arroz, a cenoura, a cebola, o milho verde, o pimentão, as pimentas de cheiro, o cheiro verde, a pimenta do reino, o açafrão, o sal e os 800ml de água e misture tudo muito bem",
                    "Acrescente as coxas de frango",
                    "Na vasilha onde se marinou o frango, acrescente 100ml de água e acrescente na forma",
                    "Para finalizar, acrescente os tomates cereja",
                    "Cubra com papel alumínio com o lado brilhante virado para baixo e leve ao forno por 40 minutos, sendo 20 minutos a 250° e 20 minutos a 200°",
                    "Após esse prazo, retire o papel alumínio e acrescente o queijo mussarela. Leve novamente ao forno por mais 10 ou 20 minutos a 200°"
                 ],
        photoCover: "assets/img-capas/mini37.jpg",
        photoCoverContent: "assets/img-content/galinhada.png"
    },
    {
        id: "13",
        category: "salgados",
        title: "Bolo de Carne",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamentos",
                        "carnes",
                        "bolos"
                     ],

        ingredients: [
                        "2 tomates picados",
                        "500g de batata cortada em cubos",
                        "1 cebola picada",
                        "1 pimentão verde picado",
                        "1 cenoura ralada",
                        "4 dentes de alho amassados",
                        "500g de carne moída",
                        "2 colheres de sopa de extrato de tomate",
                        "azeite a gosto",
                        "1 colher de sobremesa de sal",
                        "1 colher de chá de tempero baiano",
                        "1 colher de chá de páprica",
                        "pimenta do reino a gosto",
                        "1 colher de chá de orégano",
                        "100ml de água",
                        "150g de mussarela"
                     ],

        video_embed: "https://www.facebook.com/ViajandoPelaCulinaria/videos/846117806007321/?extid=NS-UNK-UNK-UNK-AN_GK0T-GK1C",
        resume: `
                    <br>
                    de carne moída é uma receita prática e deliciosa que agrada a todos com seu sabor e apresentação. 
                    <br>
                    Uma opção criativa e diferenciada para uma refeição especial ou uma ceia comemorativa.
                `,
        preparo: [
                    "Numa forma, acrescente o tomate, a batata, a cebola, o pimentão, a cenoura, o alho, a carne moída, o extrato de tomate, o azeite, o sal, o tempero baiano, a páprica, a pimenta do reino o orégano e a água e  misture tudo muito bem",
                    "Depois amasse, para que fique parecendo com um bolo",
                    "Cubra com papel alumínio, com o lado brilhante virado para baixo",
                    "Leve ao forno a 180° por 50 minutos",
                    "Retire o papel alumínio, acrescente a mussarela e retorne ao forno por mais 20 minutos"

                 ],
        photoCover: "assets/img-capas/mini20.jpg",
        photoCoverContent: "assets/img-content/bolo-de-carne.png"
    },
    {
        id: "14",
        category: "salgados",
        title: "Salada Tropical",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamentos",
                        "saladas",
                        "sem lactose"
                     ],

        ingredients: [
                        "1/2 repolho picado",
                        "1 cebola roxa picada",
                        "2 tomates picados",
                        "1 manga picada",
                        "1 cenoura ralada",
                        "200g de maionese",
                        "1 caixa de creme de leite",
                        "1 colher de sopa de mel",
                        "1 colher de sopa de mostarda",
                        "suco de 1/2 limão",
                        "1/2 colher de chá de pimenta do reino"
                     ],

        video_embed: "https://www.facebook.com/Receitasedicasdevo/videos/174809421225543/?extid=WA-UNK-UNK-UNK-AN_GK0T-GK1C",
        resume: `
                    <br>
                    A salada tropical é uma receita saudável, leve e nutritiva. Sugestão para os dias mais quentes, o prato é refrescante e fica pronta em poucos minutos.
                    <br><br>
                `,
        preparo: [
                    "Em uma travessa, acrescente o repolho, a cebola, os tomates, a manga, a cenoura e  misture tudo muito bem",
                    "Em outra vasilha, adicione a maionese, o creme de leite, o mel, a mostarda, o suco do limão, a pimenta do reino e misture tudo muito bem",
                    "Despeje sobre a salada e bom apetite!"

                 ],
        photoCover: "assets/img-capas/mini33.jpg",
        photoCoverContent: "assets/img-content/salada-tropical.jpg"
    },
    {
        id: "15",
        category: "salgados",
        title: "Creme de Espinafre",
        porcoes: "10",
        tempo_preparo: "30 minutos",
        
        subcategory: [
                        "acompanhamentos"
                     ],

        ingredients: [
                        "1 maço de espinafre",
                        "2 colheres de sopa de cebola picada",
                        "2 xícaras de leite",
                        "Pitada de noz moscada",
                        "3 colheres de sopa de manteiga",
                        "2 colheres de sopa de farinha de trigo",
                        "1 colher de sopa de parmesão ralado",
                        "Sal e pimenta do reino"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/11899-creme-de-espinafre.html",
        resume: `
                    <br><br>
                    O creme de espinafre vai bem como guarnição para peixes, carnes e aves, confira esta receita simples e saborosa.
                    <br><br>
                `,
        preparo: [
                    "Retire as folhas de espinafre e elimine os talos",
                    "Lave bem, não seque as folhas e coloque para cozinhar em uma panela com tampa, em fogo baixo por cerca de 5 a 10 minutos, ou o suficiente para murchar as folhas",
                    "Retire do fogo e deixar esfriar",
                    "Pique grosseiramente e reserve",
                    "Em outra panela coloque a cebola picada e a manteiga, refogue bem para que a cebola fique murcha e macia",
                    "Acrescente a farinha de trigo e misture bem, coloque o leite aos poucos e misture, acrescente o espinafre e o queijo ralado, cozinhe até o ponto desejado",
                    "Tempere com sal e pimenta-do-reino",
                    "Sirva como guarnição para peixes, carnes e aves"
                 ],
        photoCover: "assets/img-capas/mini18.jpg",
        photoCoverContent: "assets/img-content/creme-de-espinafre.png"
    },
    {
        id: "16",
        category: "salgados",
        title: "Creme de Couve",
        porcoes: "8",
        tempo_preparo: "20 minutos",
        
        subcategory: [
                        "acompanhamentos"
                     ],

        ingredients: [
                        "3 folhas de couve bem picadas",
                        "1 xícara (chá) de leite",
                        "1 colher de farinha de trigo",
                        "Sal a gosto",
                        "1/2 cebola picada",
                        "1 xícara (chá) de água",
                        "2 colheres (sopa) de queijo parmesão ralado",
                        "2 colheres de azeite"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/96357-creme-de-folha-de-couve.html",
        resume: `
                    A couve é um superalimento cheio de benefícios! Rica em fibras, ferro e vitaminas, ela é perfeita para 
                    fortalecer a imunidade e dar aquele toque nutritivo às refeições.
                    Nesta receita, transformamos esse ingrediente incrível em um creme delicioso!
                `,
        preparo: [
                    "Refogue no azeite a cebola e as folhas picadas até que a cebola fique transparente",
                    "Em outra frigideira junte o leite, a água, a farinha de trigo e o queijo ralado, mexa bem até que vire um creme bem encorpado",
                    "Junte em seguida ainda com o fogo ligado, o refogado e continue mexendo por mais 2 minutos",
                    "Servir em seguida sobre saladas, carnes ou aves, como preferir"
                 ],
        photoCover: "assets/img-capas/mini2.jpg",
        photoCoverContent: "assets/img-content/creme-de-couve.jpg"
    },
    {
        id: "17",
        category: "salgados",
        title: "Omelete de Miojo",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "massas"
                     ],

        ingredients: [
                        "1 pacote de miojo",
                        "mussarela a gosto",
                        "2 ovos",
                        "chimichurri",
                        "orégano a gosto",
                        "sal a gosto",
                        "margarina para fritar"
                     ],

        video_embed: "https://www.facebook.com/manualdacozinha/videos/780793405894616/",
        resume: `
                    <br><br>
                    Às vezes, a correria do dia a dia nos deixa sem tempo para um café da manhã nutritivo e saboroso. 
                    Mas não se preocupe, temos a solução perfeita para você!
                    <br><br>
                `,
        preparo: [
                    "Em uma panela com água, ferva somente o macarrão do miojo e escorra",
                    "Acrescente o tempero do miojo, o queijo e misture bem",
                    "Numa tijela parte, coloque os ovos e tempere com chimichurri, orégano, sal e misture tudo muito bem",
                    "Numa frigideira, coloque a margarina para derreter e acrescente metade da porção de ovos, a porção com macarrão e finalize com o restante da porção de ovos",
                    "Coloque a tampa e espere o cozimento. Quando puder virar, faça como faria num omelete tradicional e estará pronto"
                 ],
        photoCover: "assets/img-capas/mini25.jpg",
        photoCoverContent: "assets/img-content/omelete-de-miojo.png"
    },
    {
        id: "18",
        category: "salgados",
        title: "Maminha de Panela",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "carnes",
                        "acompanhamentos"
                     ],

        ingredients: [
                        "azeite a gosto",
                        "3 cebolas picadas",
                        "3 tomates picados",
                        "4 dentes de alho triturados",
                        "salsa a gosto",
                        "páprica a gosto",
                        "pimenta do reino a gosto",
                        "1,5 kg de maminha ",
                        "1 colher de sopa de sal grosso",
                        "1 cenoura cortada em tiras grandes",
                        "1 colher de sopa de manteiga",
                        "1 colher de sopa de amido de milho"
                     ],

        video_embed: "https://www.facebook.com/receitasbraziloficial/videos/1451532441877627/",
        resume: `
                    <br><br>
                    Às vezes, a correria do dia a dia nos deixa sem tempo para um café da manhã nutritivo e saboroso. 
                    Mas não se preocupe, temos a solução perfeita para você!
                    <br><br>
                `,
        preparo: [
                    "Em uma panela de pressão, acrescente o azeite, a cebola, o tomate, o alho, a salsa, a páprica, a pimenta do reino e misture tudo muito bem",
                    "Acrescente a carne, o sal grosso, água e deixe cozinhar por 30 minutos",
                    "Acrescente a cenoura e deixe cozinhar por mais 10 minutos",
                    "Retire o caldo, passe pelo coador e coloque o líquido numa panela com a manteiga e o amido de milho. Mecha até formar uma calda",
                    "Despeje a calda sobre a carne"
                 ],
        photoCover: "assets/img-capas/mini38.jpg",
        photoCoverContent: "assets/img-content/maminha-de-panela.jpg"
    },
    {
        id: "19",
        category: "salgados",
        title: "Bolo Salgado",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "bolos",
                        "lanches"
                     ],

        ingredients: [
                        "3 ovos",
                        "½ xícara de óleo",
                        "1 colher de chá de sal",
                        "2 xícaras de farinha de trigo",
                        "½ xícara de amido de milho",
                        "1 xícara de leite",
                        "1 colher de sopa de fermento",
                        "200g de presunto picado",
                        "200g de mussarela picada",
                        "salsa a gosto",
                        "1 tomate picado",
                     ],

        video_embed: "https://www.facebook.com/tudonapanelaofc/videos/n%C3%A3o-fa%C3%A7a-bolo-antes-de-ver-essa-receita/1222209998181168/",
        resume: `
                    <br><br>
                    Um Bolo Salgado muito fácil e rápido de fazer!
                    <br><br>
                `,
        preparo: [
                    "Numa travessa, despeje os ovos, o óleo, o leite, a farinha de trigo, o fermento, o sal, o amido e misture tudo muito bem",
                    "por último, acrescente parte do presunto, do queijo, da salsa e metade do tomate picado",
                    "Despeje o preparo numa forma untada e por cima coloque um pouco de presunto, queijo, salsa e o tomate que sobrou",
                    "Leve ao forno pré-aquecido a 180° por 40 minutos"
                 ],
        photoCover: "assets/img-capas/mini17.jpg",
        photoCoverContent: "assets/img-content/bolo-salgado.jpg"
    },
    {
        id: "20",
        category: "salgados",
        title: "Bolinho de Feijão",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "petiscos",
                        "sem lactose",
                        "acompanhamentos"
                     ],

        ingredients: [
                        "2 xícaras de feijão pré cozido e amassado",
                        "açafrão a gosto",
                        "ervas finas a gosto",
                        "salsa desidratada",
                        "sal a gosto",
                        "pimenta do reino a gosto",
                        "2 dentes de alho amassado",
                        "1/2 cebola picada",
                        "1 cenoura ralada",
                        "cheiro verde a gosto",
                        "2 xícaras de farinha de rosca ou até dar o ponto"
                     ],

        video_embed: "https://www.facebook.com/paginadevo/videos/803650743685918/?extid=WA-UNK-UNK-UNK-AN_GK0T-GK1C",
        resume: `
                    <br><br>
                    Saboroso e levemente crocante, ele marca o paladar como se fosse uma viagem ao Brasil em apenas uma mordida.
                    <br><br>
                `,
        preparo: [
                    "Em uma tijela. acrescente o feijão, o açafrão, as ervas finas, a salsa desidratada, o sal e misture tudo muito bem",
                    "Acrescente o alho, a cebola, a cenoura, o cheiro verde e continue a misturar",
                    "Por fim, acrescente a farinha de rosca aos poucos, até chegar ao ponto de bolinhas",
                    "Leve para fritar em óleo quente"
                 ],
        photoCover: "assets/img-capas/mini14.jpg",
        photoCoverContent: "assets/img-content/bolinho-de-feijao.jpg"
    },
    {
        id: "21",
        category: "salgados",
        title: "Yakisoba Fácil",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "massas",
                        "sem lactose"
                     ],

        ingredients: [
                        "500g de carne picada",
                        "2 alhos picados para a carne",
                        "sal a gosto",
                        "pimenta do reino a gosto",
                        "suco de 1 limão",
                        "1 cenoura em tiras",
                        "2 alhos picados para a cenoura",
                        "1/2 pimentão vermelho",
                        "1/2 pimentão amarelo",
                        "200g de repolho picado",
                        "1 cebola em tiras",
                        "350ml de shoyo",
                        "1 brócolis cozido",
                        "macarrão para yakisoba cozido"
                     ],

        video_embed: "https://www.facebook.com/superreceitasdapaty/videos/556993592141574/",
        resume: `
                    <br>
                    É um clássico nos restaurantes orientais e conquistou paladares em todo o mundo. Agora, 
                    você terá a oportunidade de preparar sua própria versão deliciosa desse prato tão apreciado!
                `,
        preparo: [
                    "Em uma panela com azeite, coloque a carne para refogar com o alho, o sal, a pimenta do reino e o suco de limão. Reserve",
                    "Refogue a cenoura com o alho, o pimentão vermelho, o pimentão amarelo, o repolho, a cebola e um pouco do shoyo. Misture bem",
                    "Acrescente a carne, um pouco mais de shoyo, o brócolis, o macarrão, o restante do shoyo, misturando tudo muito bem"
                 ],
        photoCover: "assets/img-capas/mini44.jpg",
        photoCoverContent: "assets/img-content/yakisoba-facil.jpg"
    },
    {
        id: "22",
        category: "salgados",
        title: "Quibe de Forno",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanches",
                        "acompanhamentos"
                     ],

        ingredients: [
                        "500g de farinha de quibe",
                        "750g de carne moída",
                        "1 cebola grande picada",
                        "cheiro verde picada a gosto",
                        "alecrim a gosto",
                        "queijo cheddar a gosto",
                        "400g de mussarela",
                        "150g de azeitonas",
                        "1 lata de milho verde",
                        "azeite a gosto"
                     ],

        video_embed: "https://www.youtube.com/watch?app=desktop&v=Z3a6CPluM1E&feature=youtu.be",
        resume: `
                    <br>
                    Uma ótima opção de refeição, de lanche, fica super gostoso, bem suculento e o preparo é bem fácil.
                `,
        preparo: [
                    "Hidrate a farinha de quibe por 3 horas, conforme as instruções",
                    "Na sequência, acrescente a carne, a cebola, o cheiro verde, o azeite e misture tudo muito bem",
                    "Separe a mistura em 2 camadas. A primeira camada irá forrar a forma já untada. Coloque mussarela, cheddar, azeitona e milho por cima",
                    "Acrescente a segunda camada e leve ao forno por 45 minutos",
                 ],
        photoCover: "assets/img-capas/mini42.jpg",
        photoCoverContent: "assets/img-content/quibe-de-forno.jpg"
    },
    {
        id: "23",
        category: "salgados",
        title: "Lanche Rápido",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanches",
                        "pães",
                        "café da manhã"
                     ],

        ingredients: [
                        "4 salsichas pré-cozidas",
                        "2 fatias de tomate",
                        "2 ovos",
                        "40ml de leite",
                        "1 pitada de sal",
                        "pimenta do reino a gosto",
                        "2 fatias de pão",
                        "margarina",
                        "2 fatias de queijo",
                        "orégano a gosto"
                     ],

        video_embed: "https://www.facebook.com/aprediacozinhar/videos/355479439306034/",
        resume: `
                    <br>
                    Uma lanche rápido, delicioso e simples de fazer.
                    <br><br>
                `,
        preparo: [
                    "Corte a ponta das salsichas e corte-as ao meio também",
                    "Numa tijela, acrescente os ovos, o leite, o sal, a pimenta do reino e com um fuê, acrescente tudo muito bem",
                    "Passe margarina nos dois lados do pão e doure-os numa frigideira quente",
                    "Acrescente as salsichas nas laterais e jogue os ovos por cima",
                    "Acrescente os tomates e as duas fatias de queijo. Tampe a panela para que o queijo derreta",
                    "Em seguida, acrescente orégano e corte o lanche ao meio e dobre"
                 ],
        photoCover: "assets/img-capas/mini40.jpg",
        photoCoverContent: "assets/img-content/lanche.png"
    },
    {
        id: "24",
        category: "salgados",
        title: "Xica Doida",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "caldos"
                     ],

        ingredients: [
                        "300g de bacon picado",
                        "2 linguiças calabresas picadas",
                        "4 latas de milho verde",
                        "1 cebola picada",
                        "3 dentes de alho picados",
                        "1 pimenta dedo de moça picada",
                        "sal a gosto",
                        "300g de mussarela",
                        "400g de linguiça de porco picada frita",
                        "1 lata de milho verde para a finalização",
                        "cheiro verde a gosto"
                     ],

        video_embed: "https://www.facebook.com/Receitasedicasdevo/videos/552394192791254/",
        resume: `
                    Uma receita que faz parte da culinária de Goiás e foi criada em Quirinópolis, 
                    há mais de 60 anos, por Dona Petronilha e o marido, João. O prato ganhou título de patrimônio 
                    cultural e imaterial de Goiás e não pode faltar na Festa Junina da região.
                    <br>
                `,
        preparo: [
                    "Numa panela, coloque o bacon para fritar e soltar um pouco da gordura",
                    "Acrescente a linguiça e deixe fritar bem",
                    "A parte, no liquidificador, adicione as 4 latas de milho verde, água até cobrir e bater por 5 minutos aproximadamente",
                    "Onde o bacon e a linguiça estão fritando, retire o excesso de óleo e adicione a cebola e deixe refogar",
                    "Acrescente o alho e refogue bem",
                    "Acrescente a mistura do liquidificador, a pimenta dedo de moça, misture e deixe cozinhar por 10 minutos aproximadamente",
                    "Acrescente o sal, a mussarela e misture bem",
                    "Acrescente a linguiça de porco, o milho para a finalização, o cheiro verde e misture"
                 ],
        photoCover: "assets/img-capas/mini35.jpg",
        photoCoverContent: "assets/img-content/xica-doida.jpg"
    },
    {
        id: "25",
        category: "salgados",
        title: "Arroz com Linguiça",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "arroz",
                        "refeição completa",
                        "sem lactose"
                     ],

        ingredients: [
                        "1 colher de óleo",
                        "2 dentes de alho triturados",
                        "1 1/2 de arroz cru",
                        "1 cenoura ralada",
                        "1/2 repolho",
                        "sal a gosto",
                        "1 tomate picado",
                        "1 linguiça calabresa em rodelas",
                        "3 salsichas em rodelas",
                        "1 cebola picada",
                        "1/2 pimentão picado",
                        "cheiro verde a gosto"
                     ],

        video_embed: "https://www.facebook.com/receitashowdebolaoficial/videos/297987971713718/",
        resume: `
                    <br>
                    Se você esta procurando uma refeição completa, então venha aprender a preparar esse arroz com linguiça.
                    <br><br>
                `,
        preparo: [
                    "Numa panela, coloque o óleo para fritar o alho. Acrescente também o arroz",
                    "Em seguida, coloque a cenoura, o repolho e coloque água até cobrir e adicione o sal",
                    "Após uns 5 minutos de fervura, acrescente o tomate e misture",
                    "Enquanto o arroz cozinha, em uma panela, frite a linguiça, as salsichas, a cebola, o pimentão e o cheiro verde. Despeje tudo sobre o arroz", 
                 ],
        photoCover: "assets/img-capas/mini29.jpg",
        photoCoverContent: "assets/img-content/arroz-com-linguica.png"
    },
    {
        id: "26",
        category: "salgados",
        title: "Salada de Grão de Bico",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamentos",
                        "saladas",
                        "sem lactose"
                     ],

        ingredients: [
                        "1 cenoura picada",
                        "vargem picada a gosto",
                        "500g de grão de bico cozido e escorrido",
                        "2 tomates picados",
                        "1 cebola picada",
                        "50g de ervilha",
                        "50g de milho verde",
                        "100g de azeitona sem caroço",
                        "cheiro verde a gosto",
                        "pimenta do reino a gosto",
                        "orégano a gosto",
                        "azeite a gosto",
                        "ovos de codorna a gosto"
                     ],

        video_embed: "https://www.facebook.com/FazReceitas/videos/236541944874836/",
        resume: `
                    <br>
                    Aprenda a preparar esta receita de saladas de grão-de-bico e surpreenda-se com o resultado!
                    <br><br>
                `,
        preparo: [
                    "Cozinhe a cenoura e a vargem a vapor",
                    "Numa travessa, acrescente o grão de bico, a cenoura, a vargem, o tomate, a cebola, a ervilha, o milho verde, as azeitonas e misture tudo muito bem",
                    "Acrescente sal, o cheiro verde, a pimenta do reino, o orégano e continue a misturar",
                    "Finalize colocando os ovos de codorna por cima"
                 ],
        photoCover: "assets/img-capas/mini41.jpg",
        photoCoverContent: "assets/img-content/salada-de-grao-de-bico.png"
    },
    {
        id: "27",
        category: "salgados",
        title: "Creme de Milho",
        porcoes: "4",
        tempo_preparo: "20 minutos",
        
        subcategory: [
                        "acompanhamentos"
                     ],

        ingredients: [
                        "1 lata de milho",
                        "1 colher (sopa) de manteiga",
                        "1 tablete de caldo de legumes",                        
                        "2 colheres (sopa) de farinha de trigo",
                        "1 e 1/2 xícara (chá) de leite",
                        "1 cebola média ralada",
                        "1 lata de creme de leite"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/6662-creme-de-milho.html",
        resume: `
                    O creme de milho é um acompanhamento incrível e fácil de fazer, que encanta a cada garfada ou 
                    colherada e combina com vários pratos diferentes. Com passos e ingredientes simples, você vai preparar um prato cheio de suavidade e um sabor marcante.
                    <br>
                `,
        preparo: [
                    "No liquidificador, bata o milho e o leite e reserve",
                    "Em uma panela, aqueça a manteiga, junte a cebola e refogue um pouco",
                    "Adicione a farinha de trigo e mexa rapidamente",
                    "Deixe dourar e misture o milho batido com o leite ao caldo",
                    "Mexa até dissolvê-lo completamente e cozinhe por cerca de 10 minutos, até obter uma consistência cremosa",
                    "Acrescente o creme de leite, mexa e desligue o fogo"
                 ],
        photoCover: "assets/img-capas/mini15.jpg",
        photoCoverContent: "assets/img-content/creme-de-milho.jpg"
    },
    {
        id: "28",
        category: "salgados",
        title: "Feijão com Bucho",
        porcoes: "8",
        tempo_preparo: "40 minutos",
        
        subcategory: [
                        "acompanhamentos",
                        "carnes",
                        "sem lactose"
                     ],

        ingredients: [
                        "2 kg de bucho bovino",
                        "500 g de feijão branco",
                        "2 cebola",
                        "1 cabeça de alho",
                        "Colorífico a gosto",
                        "Sal a gosto",
                        "Coentro a gosto",
                        "6 limão",
                        "2 tomates sem casca e picados",
                        "500 g de lingüiça toscana em cubos médios",
                        "2 folhas de louro",
                        "1 colher (sopa) de páprica picante",
                        "Azeite a gosto"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/17910-dobradinha-com-feijao-branco.html",
        resume: `
                    <br>
                    A dobradinha com feijão branco é um prato tradicional da culinária brasileira.  
                    <br><br>
                `,
        preparo: [
                    "Deixe o feijão branco de molho, de véspera",
                    "Cozinhe o feijão branco na água com 1 cabeça de alho inteira sem descascar, folha de louro e sal, até amolecer, sem desmanchar (cerca de 20 minutos) - reserve",
                    "Retire toda gordura do bucho e corte em tiras",
                    "Coloque dentro de um recipiente e lave várias vezes na água",
                    "Em seguida esprema todo o limão (com a casca) dentro da última água e espere uns 10 minutos",
                    "A seguir, escalde o bucho em água quente pelo menos por 3 vezes",
                    "Pegue uma panela de pressão; coloque água, o bucho, 1 cebola inteira descascada, louro e sal",
                    "Feche a panela e leve para cozinhar por uns 15 minutos ou até o bucho ficar macio",
                    "Em outra panela aqueça o azeite frite a lingüiça, acrescente 1 cebola picada, colorante alimentício, páprica, o coentro e o tomate",
                    "Para finalizar, escorra o bucho e junte ao feijão branco e o refogado da lingüiça",
                    "Deixe apurar por mais uns 10 minutos para pegar gosto"
                 ],
        photoCover: "assets/img-capas/mini31.jpg",
        photoCoverContent: "assets/img-content/feijao-com-bucho.png"
    },
    {
        id: "29",
        category: "salgados",
        title: "Fricassê de Frango",
        porcoes: "5",
        tempo_preparo: "30 minutos",
        
        subcategory: [
                        "acompanhamentos",
                        "carnes"
                     ],

        ingredients: [
                        "1 lata de creme de leite",
                        "1 copo de requeijão cremoso",
                        "2 peitos de frango desfiados",
                        "100 g de batata palha",
                        "1 pitada de sal",
                        "1 lata de milho verde",
                        "100 g de azeitona sem caroço",
                        "200 g de mussarela fatiada",
                        "1 xícara de água"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/10254-fricasse-de-frango.html",
        resume: `
                    <br>
                    Bora aprender uma receita de fricassê de frango fácil? Essa receita é muito prática 
                    porque é feita com auxílio do liquidificador.
                    <br><br>
                `,
        preparo: [
                    "Bata no liquidificador o milho, o requeijão, o creme de leite e a água",
                    "Refogue o creme do liquidificador com o frango desfiado, as azeitonas e o sal até ficar com uma textura espessa",
                    "Coloque o refogado numa assadeira, cubra com mussarela e espalhe a batata palha por cima",
                    "Leve ao forno até borbulhar",
                    "Sirva com arroz branco."
                 ],
        photoCover: "assets/img-capas/mini45.jpg",
        photoCoverContent: "assets/img-content/fricasse-frango.png"
    },
    {
        id: "30",
        category: "salgados",
        title: "Omelete Saudável",
        porcoes: "2",
        tempo_preparo: "20 minutos",
        
        subcategory: [
                        "acompanhamentos"
                     ],

        ingredients: [
                        "5 ovos",
                        "2 colheres (sopa) de farinha de trigo",
                        "1 colher (café) de fermento em pó",
                        "1/2 pimentão verde picado",
                        "1 cenoura cozida em cubos",
                        "1 tomate sem sementes picado",
                        "1/2 lata de ervilha escorrida",
                        "1/2 lata de milho verde escorrido",
                        "1 xícara (chá) de queijo mussarela em cubos",
                        "Sal a gosto",
                        "Manteiga para untar"
                     ],

        video_embed: "https://guiadacozinha.com.br/receitas/omelete-saudavel-de-legumes/",
        resume: `
                    <br>
                    Para preparar esta receita de omelete saudável de legumes, você só precisa misturar os 
                    ingredientes e fritar. Uma mistura deliciosa e perfeita para um jantar rápido, saboroso e fit!
                    <br><br>
                `,
        preparo: [
                    "Em uma tigela, bata os ovos, a farinha e o fermento até ficar aerado",
                    "Depois, junte o pimentão, a cenoura, o tomate, a ervilha, o milho e a mussarela e misture",
                    "Para finalizar, tempere com sal e despeje em uma frigideira antiaderente untada, em fogo baixo, até dourar dos dois lados. Sirva"

                 ],
        photoCover: "assets/img-capas/mini36.jpg",
        photoCoverContent: "assets/img-content/omelete-saudavel.jpg"
    },
    {
        id: "47",
        category: "salgados",
        title: "Creme de Abóbora",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "caldos",
                        "sem lactose"
                     ],

        ingredients: [
                        "1 abóbora cabotia cebola",
                        "1,5 kg de carne",
                        "2 tomates picados",
                        "1 cebola picada",
                        "200g de bacon picado",
                        "água até cobrir",
                        "pimenta do reino a gosto",
                        "páprica a gosto",
                        "sal a gosto "
                     ],

        video_embed: "https://www.instagram.com/p/C9IrCctyPvv/",
        resume: `
                    <br>
                    O creme de abóbora é uma opção deliciosa e aconchegante, ideal para esquentar os 
                    dias mais frios ou para ser servido como uma entrada sofisticada em ocasiões especiais.
                    <br><br>
                `,
        preparo: [
                    "Em uma panela, coloque o bacon para dourar e em seguida acrescente a cebola",
                    "Corte a carne em pedaços e acrescente a fritura para refogar",
                    "Acrescente o tomate, a páprica, a pimenta do reino, a água e deixe cozinhar por 30 minutos",
                    "Passado esse tempo, desfie a carne e reserve",
                    "A parte, cozinhe a abóbora e leve ao liquidificador até virar um purê",
                    "Leve para a panela e adicione o creme de leite e sal",
                    "Finalize com a cebolinha"
                 ],
        photoCover: "assets/img-capas/mini47.jpg",
        photoCoverContent: "assets/img-content/creme-abobora.jpg"
    },
    {
        id: "49",
        category: "salgados",
        title: "Pizza de Tapioca",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição completa",
                        "pizzas"
                     ],

        ingredients: [
                        "2 ovos",
                        "8 colheres de sopa de tapioca",
                        "1 colher de queijo ralado",
                        "recheio a gosto"
                     ],

        video_embed: "https://www.instagram.com/p/DEnosZIxqJL/",
        resume: `
                    <br>
                    Tudo na frigideira! Clique logo abaixo e vem com a gente ver essa receita deliciosa!
                    <br><br>
                `,
        preparo: [
                    "Em uma travessa, acrescente os ovos, a tapioca, o queijo e misture tudo muito bem",
                    "Unte uma frigideira e leve a mistura paa cozinhar em fogo baixo",
                    "Em seguida, vire, desligue o fogo e comece a rechear",
                    "Leve a fogo baixo novamente. Tampe e deixe cozinhar por mais dois minutos"
                 ],
        photoCover: "assets/img-capas/mini49.jpg",
        photoCoverContent: "assets/img-content/pizza-tapioca.png"
    },
    {
        id: "50",
        category: "salgados",
        title: "Seleta de Legumes",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamentos",
                        "sem lactose"
                     ],

        ingredients: [
                        "1 cenoura média picada",
                        "1 abobrinha média picada",
                        "1 fio de azeite",
                        "3 colheres sopa de cebola picada",
                        "1 dente de alho picado",
                        "sal a gosto",
                        "páprica defumada a gosto",
                        "orégano a gosto",
                        "manjericão seco a gosto"
                     ],

        video_embed: "https://www.instagram.com/p/DBO2pxLOFV7/",
        resume: `
                    <br>
                    Legumes assim. com um arroz branco fresquinho e um frango ou peixe grelhado fica simplesmente perfeito!
                    <br><br>
                `,
        preparo: [
                    "Em uma frigideira refogue primeiro a cebola no azeite",
                    "Quando a cebola ficar mais transparente começando a dourar levemente, acrescente o alho picado e mexa para não queimar",
                    "Após refogar, adicione os legumes e mexa um pouco",
                    "Acrescente o sal e os temperos (a quantidade é a gosto) mexendo bem para agregar o sabor nos legumes e coloque um “pouquinho” de água",
                    "Tampe a panela e deixe em fogo mais brando mexendo de vez em quando",
                    "O ponto certo dos legumes seriam mais macios, algo em torno de 8 minutos, ou se preferir, mais moles"
                 ],
        photoCover: "assets/img-capas/mini50.jpg",
        photoCoverContent: "assets/img-content/seleta-de-legumes.jpg"
    },
    {
        id: "51",
        category: "salgados",
        title: "Pão de Frigideira",
        porcoes: "1",
        tempo_preparo: "",
        
        subcategory: [
                        "sem lactose",
                        "café da manhã",
                        "pães"
                     ],

        ingredients: [
                        "1 ovo",
                        "3 colheres de sopa de farelo de aveia",
                        "Sal e chimichurri a gosto",
                        "1 colher de café de fermento",
                        "O recheio é o da sua preferência"
                     ],

        video_embed: "https://www.instagram.com/p/C-VSNuRxsBm/",
        resume: `
                    <br>
                    Se você gosta de pães macios e flexíveis este é o pãozinho fit com aveia ideal pra você!
                    <br><br>
                `,
        preparo: [
                    "Em uma travessa, acrescente o ovo, a aveia, o chimichurri, o sal e o fermento e misture tudo muito bem, até obter uma massa homogênea",
                    "Leve até uma frigideira e asse 3 minutos de cada lado"
                 ],
        photoCover: "assets/img-capas/mini51.jpg",
        photoCoverContent: "assets/img-content/pao-frigideira.jpg"
    },
    {
        id: "52",
        category: "salgados",
        title: "Torta de Abobrinha",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamentos",
                        "bolos"
                     ],

        ingredients: [
                        "1 abobrinha",
                        "sal a gosto",
                        "2 dentes de alho amassados",
                        "200g de mussarela ralada",
                        "3 ovos",
                     ],

        video_embed: "https://www.instagram.com/p/Cpdtv0vorgl/",
        resume: `
                    <br>
                    rápida e deliciosa pra deixar pro jantar, acrescentar a proteína da sua preferência no prato e PRONTO.
                    <br>
                    Pouco calórica, temperadinha, de dar água na boca!
                    <br>
                `,
        preparo: [
                    "Rale a abobrinha e acrescente o sal, o alho e 150g da mussarela",
                    "A parte, misture bem 3 ovos",
                    "Misture os ovos com a abobrinha",
                    "Finalize com 50g de mussarela por cima e leve para gratinar por 30 a 35 minutos"
                 ],
        photoCover: "assets/img-capas/mini52.jpg",
        photoCoverContent: "assets/img-content/torta-abobrinha.jpg"
    },
    {
        id: "55",
        category: "salgados",
        title: "Cuscuz de Frigideira",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "café da manhã"
                    ],

        ingredients: [
                        "3 colheres (sopa) de flocão de milho",
                        "⁠4 colheres (sopa) de água",
                        "sal a gosto",
                        "⁠tomate",
                        "atum",
                        "queijo mussarela",
                        "óregano fresco ou seco"
                    ],

        video_embed: "https://www.instagram.com/p/C-WK5SJOMBp/",
        resume: `
                    <br>
                    Uma ótima substituta para o pão do café da manhã se quiser usar o cuscuz para inovar nos preparos da semana. 
                    É ainda melhor para celíacos, já que o cuscuz usa farinha de milho, que não tem glúten.
                    <br>
                `,
        preparo: [
                    "Hidrate o cuscuz e o sal e sem deixar de molho, espalhe numa frigideira untada com manteiga, com a chama ainda desligada",
                    "Ligue a chama e tampe um pouco, para cozinhar no vapor",
                    "Acrescente o queijo, o tomate, o atum, o orégano e dobre como se fosse uma tapioca"
                ],
        photoCover: "assets/img-capas/mini55.jpg",
        photoCoverContent: "assets/img-content/cuscuz-frigideira.jpg"
},
{
        id: "61",
        category: "salgados",
        title: "Pão de Flocão",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sem lactose",
                        "café da manhã",
                        "pães"
                    ],

        ingredients: [
                        "5 colheres de sopa de flocão de milho",
                        "50ml de água",
                        "1 ovo",
                        "sal a gosto",
                        "1 colher de sopa de azeite",
                        "1 colher de café de fermento químico"
                    ],

        video_embed: "https://www.instagram.com/p/DFX6nIZxRNm/",
        resume: `
                    Você pode fazer um pão caseiro de uma forma muito mais simples, usando uma frigideira para tostar.
                    Além de delicioso, em vez da farinha, a opção nesta receita prática é usar o flocão de 
                    milho hidratado, uma receita sem glúten e perfeita para quem busca manter uma alimentação saudável.
                `,
        preparo: [
                    "Hidrate o flocão e o sal na água e deixe  descansar por 10 minutos",
                    "Em seguida, acrescente o ovo, o azeite e misture bem",
                    "Por último, adicione o fermento e mexa muito bem",
                    "Despeje metade da mistura numa frigideira pequena e untada, adicione o recheio da sua prederência, coloque o resto da mistura e deixe assar por 3 minutos cada lado",
                    "Recheio sugerido: goiabada zero açúcar e 1 fatia de queijo mussarela"
                ],
        photoCover: "assets/img-capas/mini61.jpg",
        photoCoverContent: "assets/img-content/pao-flocao.jpg"
},
{
    id: "62",
    category: "salgados",
    title: "Bolinhas de Batata",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "acompanhamentos",
                    "petiscos",
                    "sem lactose"
                ],

    ingredients: [
                    "2 xícaras de batatas cozidas e amassadas",
                    "2 colheres (sopa) de azeite de oliva",
                    "1⁄2 colher (chá) de sal",
                    "1⁄2 xícara ou até dar ponto de amido de milho ou mix de farinhas sem glúten"
                ],

    video_embed: "https://www.instagram.com/p/DE7OiA5upCD/",
    resume: `
                <br>
                Um lanche nutritivo, fácil e saboroso. Ideal para servir para toda a criançada. Esta receita é saudável, 
                pois leva ingredientes naturais e pouco calóricos, além disso, não utiliza óleo em seu preparo.
                <br>
            `,
    preparo: [
                "Em um recipiente misture a batata, o azeite e o sal",
                "Acrescente o amido ou mix de farinhas até obter ponto de desgrudar das mãos",
                "Faça bolinhas , coloque em forma untada, pincele azeite de oliva e asse em forno preaquecido ou airfryer a 200 graus por cerca de 30 minutos ou até ficarem douradas"
            ],
    photoCover: "assets/img-capas/mini62.jpg",
    photoCoverContent: "assets/img-content/bolinhas-batata.jpg"
},
{
    id: "63",
    category: "salgados",
    title: "Muffin de Flocão",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "lanches",
                    "bolos"
                ],

    ingredients: [
                    "50g flocão de milho",
                    "1 ovo inteiro",
                    "25g queijo mussarela",
                    "30g requeijão light",
                    "50g frango desfiado",
                    "50ml água"
                ],

    video_embed: "https://www.instagram.com/p/DD9k3LYx96A/",
    resume: `
                <br>
                Muffins fit de cuscuz com frango e mussarela são uma excelente opção para o lanchinho da tarde!
                <br>
            `,
    preparo: [
                "Misture o flocão, água, ovo e o sal muito bem",
                "Deixe descansar por pelo menos 10 minutos",
                "Depois de descansar é só montar nas formas de silicone",
                "Comece com a massa, recheie com o frango depois o requeijão e finalize com a massa e o queijo ralado",
                "Leve para airfryer por 5 minutos a 180 graus",
                "Obs: o tempo pode variar em cada airfryer. Mas é importante não deixar muito tempo, pois o flocão pode ficar duro"
            ],
    photoCover: "assets/img-capas/mini63.jpg",
    photoCoverContent: "assets/img-content/muffin-flocao.png"
},
{
    id: "64",
    category: "salgados",
    title: "Bolachas de Arroz",
    porcoes: "40 unidades",
    tempo_preparo: "",
    
    subcategory: [
                    "lanches",
                    "biscoitos",
                    "arroz"
                 ],

    ingredients: [
                    "1/4 xícara de leite",
                    "1 xícara de arroz cozido",
                    "3 colheres (sopa) de azeite de oliva",
                    "1/3 xícara de queijo parmesão ralado",
                    "1 colher (sopa) de chia",
                    "1/4 colher (chá) de sal",
                    "1 xícara de tapioca"
                ],

    video_embed: "https://www.instagram.com/p/C_-3E_pprHx/",
    resume: `
                <br>
                Bolachas de arroz são um lanche prático e versátil que podem ser consumidas em vários momentos do dia. 
                <br>
            `,
    preparo: [
                "Aqueça o leite, coloque no liquidificador e bata com o arroz e o azeite",
                "Transfira para uma vasilha e misture com o queijo, a chia e o sal",
                "Finalize com a tapioca e mexa até obter uma massa homogênea",
                "Coloque na geladeira por cerca de 20 minutos",
                "Forre a bancada com um plástico, pegue uma pequena porção da massa e cubra com outro plástico para abrir com o rolo. Quanto mais fininha, mais crocantes elas ficarão",
                "Corte em diferentes formatos com o auxílio de aros ou corte no formato que desejar",
                "Coloque em forma untada e asse em forno preaquecido a 200 graus por cerca de 20 minutos ou até dourar levemente"
            ],
    photoCover: "assets/img-capas/mini64.jpg",
    photoCoverContent: "assets/img-content/bolachas-arroz.png"
},
{
    id: "66",
    category: "salgados",
    title: "Pipoca de Cinema",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "pipocas"
                ],

    ingredients: [
                    "Óleo",
                    "1 colher de sopa de manteiga",
                    "300g de salsichas",
                    "1 xícara de milho de pipoca",
                    "Sal a gosto"
                ],

    video_embed: "https://www.instagram.com/p/DDzwkxRN3Qi/",
    resume: `
                <br>
                Essas pipocas são melhores até que as de cinema! 
                <br>
            `,
    preparo: [
                "Numa panela, acrescente o óleo, a manteiga e espere derreter",
                "Acrescente a salsicha cortada em rodelas e deixe fritar um pouco",
                "Adicione o milho a fritura e mexa muito bem, para pegar o sabor da salsicha",
                "Depois que elas estourarem, retire do fogo e tempere com o sal",
                "Obs: Se quiser, pode acrescentar bacon a mistura"
            ],
    photoCover: "assets/img-capas/mini66.jpg",
    photoCoverContent: "assets/img-content/pipoca-cinema.jpg"
},
{
    id: "67",
    category: "salgados",
    title: "Pizza Halloween Caveirinhas",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "massas",
                    "pizzas",
                    "datas comemorativas"
                ],

    ingredients: [
                    "Molho de Tomate",
                    "Queijo",
                    "Orégano",
                    "cogumelos"
                ],

    video_embed: "https://www.instagram.com/p/DBW9ohdtF3Y/",
    resume: `
                <br>
                O Halloween pode ficar ainda mais divertido se os monstrinhos estiverem em formato de pizza também. 
                Inspire-se, e faça algo diferente para as visitas.
                <br>
            `,
    preparo: [
                "Caso não tenha a massa básica para pizza, procure no site. É muito fácil de fazer",
                "Acrescente molho de tomate por cima da massa e em seguida a mussarela",
                "Corte os cogumelos ao meio e retire a parte onde ficarão os olhos(veja no vídeo)",
                "Finalize com orégano e leve para assar até o queijo derreter"
            ],
    photoCover: "assets/img-capas/mini67.jpg",
    photoCoverContent: "assets/img-content/pizza-halloween.jpg"
},
{
    id: "68",
    category: "salgados",
    title: "Muffin de Tapioca",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "lanches",
                    "bolos"
                ],

    ingredients: [
                    "2 ovos inteiros",
                    "50g tapioca",
                    "50g queijo mussarela",
                    "20g requeijão light",
                    "fermento (1 colher de café rasa)",
                    "sal a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C_nqthrOoQk/",
    resume: `
                <br>
                Mais uma forma pra você variar seu café da manhã/lanche da tarde com essa receita de muffin de tapioca com queijo 
                recheado na airfryer.
                <br>
            `,
    preparo: [
                "Numa tijela, acrescente os ovos, a tapioca, a mussarela, o sal e misture tudo muito bem",
                "Acrescente o fermento e continue a misturar",
                "Se quiser, pode despejar nas forminhas e rechear com requeijão",
                "Acrescente nas forminhas e leve para assar na airfryer a 120 graus por 15 minutos",
                "Você também pode jogar queijo por cima, pra ficar mais douradinho"
            ],
    photoCover: "assets/img-capas/mini68.jpg",
    photoCoverContent: "assets/img-content/muffin-tapioca.jpg"
},
{
    id: "69",
    category: "salgados",
    title: "Rap 10 de Batata Doce",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "café da manhã"
                ],

    ingredients: [
                    "Batata doce raladinha",
                    "tempero a gosto",
                    "frango, requeijão ou mussarela para o recheio"
                ],

    video_embed: "https://www.instagram.com/p/C-6A2gHSE17/",
    resume: `
                <br>
                O wrap está entre os queridinhos porque a aveia é fonte de fibras e proteínas enquanto a batata-doce 
                dá uma boa textura para o pão e energia para quem o come.
                <br>
            `,
    preparo: [
                "Tempere a batata ralada",
                "Leve para uma frigideira untada e asse como um rap 10 normal. Deixe secar e criar a casquinha antes de virar"

            ],
    photoCover: "assets/img-capas/mini69.jpg",
    photoCoverContent: "assets/img-content/rap10-batata-doce.jpg"
},
{
    id: "70",
    category: "salgados",
    title: "Pizza de Frigideira",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "pizzas"
                ],

    ingredients: [
                    "2 tomates cortados em rodelas",
                    "3 ovos",
                    "1/2 colher de sal",
                    "alho em pó",
                    "cebolinha a gosto",
                    "presunto a gosto",
                    "manteiga para untar",
                    "queijo mussarela",
                    "orégano a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C3s_fIHPAmr/",
    resume: `
                <br>
                Poucas sensações são tão gostosas quanto saborear uma pizza bem quentinha. Melhor que isso, 
                apenas se você puder preparar uma versão rápida em casa.
                <br>
            `,
    preparo: [
                "coloque os tomates na frigideira untada com manteiga",
                "Acrescente um pouco de sal e por cima, coloque a mistura dos ovos com a cebolinha e os outros temperos",
                "Coloque o presunto picado em cubinhos, feche a tampa e deixe cozinhar por 5 minutos",
                "Retire a tampa, acrescente a mussarela e o orégano. Tampe a panela e deixe no fogo até o queijo derreter"

            ],
    photoCover: "assets/img-capas/mini70.jpg",
    photoCoverContent: "assets/img-content/pizza-frigideira.png"
},
{
    id: "72",
    category: "salgados",
    title: "Almoço de 1 Panela",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "refeição completa",
                    "arroz"
                ],

    ingredients: [
                    "200g de linguiça fininha",
                    "3 dentes de alho ralado",
                    "1 tomate picado",
                    "1/2 lata de milho",
                    "1 cenoura ralada",
                    "salsinha e cebolinha a gosto",
                    "1 sachet de molho de tomate",
                    "1 1/2 de arroz",
                    "sal a gosto",
                    "mussarela a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C2KpOLZu9LU/",
    resume: `
                <br>
                Receita deliciosa e prática para você fazer na sua casa!
                <br>
            `,
    preparo: [
                "Unte a panela com 1 fio de azeite e acrescente a linguiça cortada em rodelas para fritar",
                "Acrescente o alho e deixe dourar",
                "Depois acrescente o tomate, o milho, a cenoura, a salsa, a cebola, o molho de tomate e o arroz",
                "Cubra com água e acrescente o sal e deixe cozinhar"

            ],
    photoCover: "assets/img-capas/mini72.jpg",
    photoCoverContent: "assets/img-content/almoco-uma-panela.png"
},
{
    id: "73",
    category: "salgados",
    title: "Lanchão de Forno",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "lanches"
                ],

    ingredients: [
                    "4 ovos",
                    "1 caixa de creme de leite",
                    "1 tomate picado",
                    "cheiro verde a gosto", 
                    "sal a gosto",
                    "pimenta do reino a gosto",
                    "presunto a gosto",
                    "mussarela a gosto",
                    "calabresa em rodelas a gosto",
                    "pão de sal ou de forma a gosto",
                    "orégano a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C3QvySCO0MK/",
    resume: `
                <br>
                Esse lanchão de forno vai te surpreender de tão delicioso que fica!
                <br>
            `,
    preparo: [
                "Corte pão de sal em rodelas o suficiente para cobrir uma forma já untada forma",
                "a parte, bata os ovos e acrescente o tomate, o cheiro verde, o creme de leite, o sal, a pimenta do reino e misture bem",
                "Despeje a mistura por cima do pão e acrescente presunto, queijo e rodelas de calabresae por cima",
                "Finalize com orégano",
                "Leve para assar por aproximadamente 20 ou 25 minutos a 180°"

            ],
    photoCover: "assets/img-capas/mini73.jpg",
    photoCoverContent: "assets/img-content/lanchao-forno.jpg"
},
{
    id: "74",
    category: "salgados",
    title: "Pão de Tapioca",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "café da manhã",
                    "pães"
                ],

    ingredients: [
                    "500ml de leite desnatado",
                    "240g de tapioca granulada",
                    "2 ovos",
                    "40g de queijo parmesão ralado",
                    "sal a gosto"
                ],

    video_embed: "https://www.instagram.com/p/CylTvCpuczb/",
    resume: `
                <br>
                Uma ótima opção de café da manhã, lanche da tarde e até pré treino! O melhor, só 121 calorias cada pãozinho.
                <br>
            `,
    preparo: [
                "Numa tijela, acrescente o leite e misture como sal, a tapioca granulada e deixe hidratar por 15 minutos na geladeira",
                "Após esse tempo, acrescente os ovos, o parmesão, o queijo ralado e misture tudo",
                "Molde no formato de pãezinhos e coloque na geladeira por mais 10 minutos",
                "Leve para assar por 20 minutos a 180°"
            ],
    photoCover: "assets/img-capas/mini74.jpg",
    photoCoverContent: "assets/img-content/pao-tapioca.jpg"
},
{
    id: "77",
    category: "salgados",
    title: "Ovos natalinos",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "datas comemorativas",
                    "sem lactose"
                 ],

    ingredients: [
                    "Ovos de galinha",
                    "grãos de café",
                    "pimentão vermelho",
                    "maionese"
                ],

    video_embed: "https://www.instagram.com/p/DCzczflIv7p/",
    resume: `
                <br>
                Uma data especial merece um jeitinho diferente de comemorar, 
                ainda mais em momentos onde toda a família está reunida!
                <br>
            `,
    preparo: [
                "Corte os ovos ao meio",
                "Corte os pimentões em formato de chapeu",
                "Utilize os grãos para moldar olhos e nariz",
                "Com a maionese, faça a barba e a cola do chapeu"
            ],
    photoCover: "assets/img-capas/mini77.jpg",
    photoCoverContent: "assets/img-content/ovos-natalinos.png"
},
{
    id: "78",
    category: "salgados",
    title: "Cestinhas de Pastel",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "massas",
                    "lanches"
                ],

    ingredients: [
                    "massa pequena de pastel",
                    "presunto a gosto",
                    "mussarela a gosto",
                    "orégano a gosto"
                ],

    video_embed: "https://www.instagram.com/p/DCk0iCluD9d/",
    resume: `
                Se você pensou que a massa de pastel serve apenas para fazer pastel, achou errado. 
                Temos uma receita que dá uma nova funcionalidade para ela. São cestinhas recheadas com presunto, 
                queijo e o que mais você gostar.
                <br>
                É uma boa ideia de aperitivo! E o melhor: é assado, não frito.
            `,
    preparo: [
                "Coloque as forminhas na forma de cupcake",
                "Dentro da cestinha coloque presunto e finalize com mussarela e orégano",
                "Deixe assar em forno a 180° até percener que as bordas da cestinha estão ficando douradas",
                "Obs: O recheio pode ser de sua preferência. Desde que finalize com a mussarela com orégano"
            ],
    photoCover: "assets/img-capas/mini78.jpg",
    photoCoverContent: "assets/img-content/cestinhas-pastel.png"
},
/* AQUI 50 */
{
    id: "79",
    category: "salgados",
    title: "Esfirra de Batata",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "lanche"
                ],

    ingredients: [
                    "350g de batata",
                    "25g farinha de aveia",
                    "sal a gosto",
                    "pimenta do reino a gosto",
                    "requeijão a gosto",
                    "mussarela a gosto",
                    "orégano a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C9TC6eYSkod/",
    resume: `
                <br>
                Sem farinha trigo, sem glúten e o principal, é muito fácil de fazer!
                <br>
            `,
    preparo: [
                "Amasse as batatas como se fosse fazer um purê",
                "Acrescente a farinha de aveia, o sal, a pimenta do reino e misture bem até virar uma massinha",
                "Molde as esfirras e coloque os recheios como requeijão, a mussarela e o orégano",
                "Leve ao forno por 20 minutos a 180°"
            ],
    photoCover: "assets/img-capas/mini79.jpg",
    photoCoverContent: "assets/img-content/esfirra-batata.png"
},
{
    id: "80",
    category: "salgados",
    title: "Pizza de Abobrinha",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "acompanhamento"
                ],

    ingredients: [
                    "1 abobrinha grande",
                    "1 ovo",
                    "1 colher de sopa de creme de ricota ou requeijão",
                    "60g de frango desfiado",
                    "50g de queijo mussarela",
                    "sal a gosto",
                    "pimenta do reino a gosto",
                    "cheiro verde a gosto",
                    "azeite a gosto",
                    "orégano a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C-kpkunOgd3/",
    resume: `
                <br>
                Uma pizza sem massa, com rodelas de abobrinha e nem por isso menos saborosa!
                <br>
            `,
    preparo: [
                "Corte as abobrinhas em rodelas e retire o miolo, como aneis",
                "Coloque os aneis numa tijela e tempere com azeite, sal e pimenta do reino e coloque numa forma forrada com papel manteiga",
                "Pique o miolo finamente e acrescente o frango, o creme de ricota, o ovo, sal, pimenta do reino e misture bem",
                "Recheie os aneis e finalize com a mussarela e orégano",
                "Leve ao forno a 180° até dourar"
            ],
    photoCover: "assets/img-capas/mini80.jpg",
    photoCoverContent: "assets/img-content/pizza-abobrinha.png"
},  
{
    id: "81",
    category: "salgados",
    title: "Arroz Primavera",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "refeição"
                ],

    ingredients: [
                    "3 ovos",
                    "300g de carne de porco ou frango",
                    "1/2 cenoura ralada",
                    "Sal",
                    "500g de arroz cozido",
                    "cebolinha a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C248JD9OEEf/",
    resume: `
                <br>
                Soltinho, simples e saboroso!
                <br>
            `,
    preparo: [
                "Frite os ovos mexidos e reserve",
                "Frite a carne já picada. Acrescente a cenoura e refogue",
                "Adicione os ovos, o sal e misture bem",
                "Adicione o arroz, a cebolinha e misture"
            ],
    photoCover: "assets/img-capas/mini81.jpg",
    photoCoverContent: "assets/img-content/arroz-primavera.jpg"
}, 
{
    id: "83",
    category: "salgados",
    title: "Batata Rústica",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "acompanhamento"
                ],

    ingredients: [
                    "Batata inglesa",
                    "Sal",
                    "3ml de azeite"
                ],

    video_embed: "https://www.instagram.com/p/CskDSMuOvKz/",
    resume: `
                <br>
                Como fazer batatas assadas perfeitas na airfryer ou no forno: macia por dentro e com casca crocante por fora.
                <br>
            `,
    preparo: [
                "Corte as batatas em 4 pedaços",
                "Acrescente azeite, sal e misture bem",
                "Levar para a Air fryer por 30 minutos com temperatura de 160 graus"
            ],
    photoCover: "assets/img-capas/mini83.jpg",
    photoCoverContent: "assets/img-content/batata-rustica.jpg"
}, 
{
    id: "84",
    category: "salgados",
    title: "Massa Básica para Pizza",
    porcoes: "",
    tempo_preparo: "",
    
    subcategory: [
                    "Lanche"
                ],

    ingredients: [
                    "2 ovos",
                    "1/2 xícara de óleo",
                    "2 xícaras de leite",
                    "2 xícaras de farinha de trigo",
                    "1 pitada de sal",
                    "1 colher de fermento"
                ],

    video_embed: "https://www.instagram.com/p/DCbomQCuyDg/",
    resume: `
                <br>
                Aprenda a fazer massa caseira profissional para pizza! Receita fácil e prática, que garante pizzas deliciosas.
                <br>
            `,
    preparo: [
                "No liquidificador, coloque os ovos, o óleo, o leite, o sal, a farinha e o fermento e bata até atingir a mistura",
                "Despeje o conteúdo numa forma untada e leve ao forno por 15 minutos a 180°"
            ],
    photoCover: "assets/img-capas/mini84.jpg",
    photoCoverContent: "assets/img-content/massa-basica-pizza.jpg"
}, 
{
    id: "85",
    category: "salgados",
    title: "Arroz Temperado",
    porcoes: "5",
    tempo_preparo: "",
    
    subcategory: [
                    "refeição"
                ],

    ingredients: [
                    "350g de arroz",
                    "1 calabresa e meia",
                    "1 cenoura",
                    "1 milho verde",
                    "cebola a gosto",
                    "pimenta de cheiro a gosto",
                    "alho a gosto",
                    "temperos a gosto"
                ],

    video_embed: "https://www.instagram.com/p/C62SJjHu8Ye/",
    resume: `
                <br>
                Confira todas as dicas e detalhes dessa receita de Arroz temperado que é uma delícia e simples de ser feita. 
                Divirta-se e delicie-se!
                <br>
            `,
    preparo: [
                "Triture a calabresa",
                "Coloque a calabresa para fritar",
                " Em seguida acrescente o alho, a cebola, a pimenta de cheiro, o arroz, os temperos, a cenoura, o milho e refogue tudo muito bem",
                "Acrescente 2 medidas de água iguais a do arroz e deixe cozinhar",
                "Depois de cozido, finalize com cheiro verde por cima"
            ],
    photoCover: "assets/img-capas/mini85.jpg",
    photoCoverContent: "assets/img-content/arroz-temperado.jpg"
},
    /* ######################### END RECEITAS SALGADAS ############################ */



    /* ############################## RECEITAS DOCES ############################## */
    {
        id: "31",
        category: "doces",
        title: "Bolo de Beterraba",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa",
                        "sem lactose"
                     ],

        ingredients: [
                        "2 beterrabas picadas",
                        "3 ovos",
                        "suco de 2 limões",
                        "1 xícara de açúcar",
                        "1/2 xícara de óleo",
                        "2 xícaras de chá de farinha de trigo",
                        "1 colher de sopa de fermento"
                     ],

        video_embed: "https://www.facebook.com/receitasaprenda/videos/adicionei-3-ovos-na-beterraba/2767891436805914/",
        resume: `
                    <br>
                    Esse bolo é ideal pra vc que adora adicionar vegetais aos seus preparos.
                    <br><br>
                    Surpreendentemente gostoso, é uma ótima opção pra não deixar murchar e nem estragar a 
                    beterraba na geladeira.
                `,
        preparo: [
                    "No liquidificador bata as beterrabas, os ovos, o suco de limões, o óleo e o açúcar",
                    "Despeje tudo numa travesa e acrescente aos poucos a farinha e o fermento. Misture bem",
                    "Transfira a mistura para uma forma untada e leve para assar por 40 minutos a 180°"
                 ],
        photoCover: "assets/img-capas/mini6.jpg",
        photoCoverContent: "assets/img-content/bolo-beterraba.jpg"
    },
    {
        id: "32",
        category: "doces",
        title: "Broa de Fubá",
        porcoes: "8",
        tempo_preparo: "40 minutos",
        
        subcategory: [
                        "lanche"
                     ],

        ingredients: [
                        "1 copo de fubá",
                        "1 copo de leite",
                        "1/2 copo de óleo",
                        "1 ovo",
                        "Erva doce",
                        "1 copo de açúcar",
                        "1 copo e 1/2 de farinha de trigo",
                        "1 pitada de sal",
                        "1 colher de sopa de fermento"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/18287-broa-de-fuba.html",
        resume: `
                    <br><br>
                    Descubra como fazer broa de milho caseira, com textura macia por dentro e crocante 
                    por fora. Perfeita para acompanhar refeições ou cafés especiais.
                    <br><br>
                `,
        preparo: [
                    "Bata no liquidificador todos os ingredientes",
                    "Leve a assar, em forno previamente aquecido por cerca de 40 a 50 minutos"
                 ],
        photoCover: "assets/img-capas/mini12.jpg",
        photoCoverContent: "assets/img-content/broa-de-milho.jpg"
    },
    {
        id: "33",
        category: "doces",
        title: "Chantilly de Chambinho",
        porcoes: "25",
        tempo_preparo: "15 minutos",
        
        subcategory: [
                        "cobertura"
                     ],

        ingredients: [
                        "1 lata de leite condensado de boa qualidade",
                        "3 colheres de sopa de tang sabor morango (suco em pó)",
                        "2 colheres de sopa de emulsificante para sorvete",
                        "corante alimentício em gel de sua preferência (usei o rosa)"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/161811-cobertura-de-morango-para-cupcakes.html",
        resume: `
                    <br><br>
                    Cremoso e cheio de sabor. uma cobertura de bolo fácil, rápida, muito saborosa e que 
                    toda família aprova!            
                    <br><br>
                `,
        preparo: [
                    "Bata todos os ingredientes, na batedeira, por 10 minutos",
                    "Coloque a mistura em um saco de confeitar, com o bico de sua preferência e cubra os cupcakes"
                 ],
        photoCover: "assets/img-capas/mini21.jpg",
        photoCoverContent: "assets/img-content/chantilly-chambinho.jpg"
    },
    {
        id: "34",
        category: "doces",
        title: "Cocada de leite Condensado",
        porcoes: "30",
        tempo_preparo: "20 minutos",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "1 lata de leite moça",
                        "1 pacote de coco",
                        "2 latas de açúcar"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/3688-cocada.html",
        resume: `
                    Super cremosa que tem em todo arraiá! Tenho certeza que vai fazer sucesso na sua festa também.
                    <br>
                    Feita de um jeitinho bem simples e rápido. Todo mundo vai conseguir fazer em casa e 
                    não tem como errar.          
                    <br>
                `,
        preparo: [
                    "Misture tudo e leve ao fogo baixo até desprender da panela mexendo sempre. Na pia (mármore) deixe esfriar, e corte"
                 ],
        photoCover: "assets/img-capas/mini13.jpg",
        photoCoverContent: "assets/img-content/cocada.jpg"
    },
    {
        id: "35",
        category: "doces",
        title: "Bala de Goma",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "1 pacote de gelatina com sabor",
                        "200ml de água",
                        "1 pacote de gelatina sem sabor"
                     ],

        video_embed: "https://www.facebook.com/ReceitaDicaseMuitoMais/videos/212309597406910/",
        resume: `
                    <br>
                    Que tal relembrar os bons tempos e preparar um doce que faz parte da memória? 
                    Aposte nessa bala de gelatina colorida e açucarada. O preparo é super simples e prático!      
                    <br>
                `,
        preparo: [
                    "Em uma panela, acrescente a água, a gelatina com sabor e a gelatina sem sabor. Leve ao fogo e deixe até ferver",
                    "Despeje a mistura em uma forma untada com óleo e leve a geladeira por 12 horas",
                    "Retire da geladeira e coloque sobre uma superfície açucarada. Jogue açúcar por cima também",
                    "Corte a balinha com uma tesoura"
                 ],
        photoCover: "assets/img-capas/mini34.jpg",
        photoCoverContent: "assets/img-content/bala-de-goma.jpg"
    },
    {
        id: "36",
        category: "doces",
        title: "Bolo de Banana",
        porcoes: "10",
        tempo_preparo: "40 minutos",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "3 ovos",
                        "1 xícara (chá) de leite",
                        "2 xícaras (chá) de farinha de trigo",
                        "7 bananas",
                        "2 xícaras (chá) de açúcar",
                        "1/2 xícara (chá) de óleo",
                        "1 colher (sopa) de fermento químico",
                        "3/4 xícara (chá) de açúcar para a cobertura",
                        "1/2 xícara (chá) de água quente"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/119737-bolo-de-banana-rapido-de-liquidificador.html",
        resume: `
                    <br>
                    A combinação perfeita entre a praticidade e um sabor único. Esta receita é ideal para 
                    aqueles momentos em que se deseja preparar algo delicioso sem abrir mão da facilidade 
                    no preparo.      
                    <br>
                `,
        preparo: [
                    "Em uma panela, adicione o açúcar e misture até derreter",
                    "Despeje a água quente e mexa até dissolver o açúcar",
                    "Deixe engrossar até chegar ao ponto de calda e reserve",
                    "Para a massa, bata no liquidificador os ovos, o açúcar, o óleo e o leite",
                    "Acrescente a farinha de trigo aos poucos e continue batendo até obter uma massa lisa e homogênea",
                    "Adicione por último o fermento e bata na velocidade mínima do liquidificador",
                    "Unte uma forma média com margarina e farinha",
                    "Despeje o caramelo e as bananas cortadas no comprimento",
                    "Leve para assar em forno médio 180º C, preaquecido por aproximadamente 30 minutos"
                 ],
        photoCover: "assets/img-capas/mini39.jpg",
        photoCoverContent: "assets/img-content/bolo-de-banana.png"
    },
    {
        id: "37",
        category: "doces",
        title: "Canjica de AMendoim",
        porcoes: "16",
        tempo_preparo: "1 hora",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "250 g de milho para canjica",
                        "1 lata de leite condensado",
                        "2 xícaras de leite comum",
                        "3 pauzinhos de canela",
                        "Canela em pó para polvilhar",
                        "2 litros de água",
                        "1 vidro de leite de coco",
                        "10 cravos da Índia",
                        "250 g de amendoim torrado e moído grosseiramente"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/15313-canjica-com-amendoim.html",
        resume: `
                    <br>
                    Uma opção perfeita para os amantes de doces de milho e amendoim. Aprenda a preparar 
                    essa delícia seguindo o nosso passo a passo e surpreenda sua família e amigos com 
                    essa sobremesa irresistível e cheia de sabor!    
                    <br>
                `,
        preparo: [
                    "Deixe a canjica de molho na água de um dia para o outro",
                    "Coloque na panela de pressão e cozinhe por 30 minutos ou até que esteja macia",
                    "Coloque em outra panela (se necessário, maior) acrescente o leite, o leite de coco, o cravo e a canela",
                    "Deixe ferver por 10 minutos, mexendo sempre",
                    "Acrescente o leite condensado mexendo para não grudar, por mais 10 minutos",
                    "Desligue estando bem cremosa e não seca",
                    "Acrescente o amendoim passe para uma travessa e polvilhe a canela em pó",
                    "Sirva morna ou fria"
                 ],
        photoCover: "assets/img-capas/mini23.jpg",
        photoCoverContent: "assets/img-content/canjica-com-amendoim.png"
    },
    {
        id: "38",
        category: "doces",
        title: "Chantilly Caseiro",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "cobertura"
                     ],

        ingredients: [
                        "1 caixa de creme de leite bem gelado",
                        "2 colheres de sopa de açúcar",
                        "1 colher de sopa de emulsificante"
                     ],

        video_embed: "https://www.youtube.com/watch?v=xBViAN4wFYU",
        resume: `
                    <br><br>
                    Muito prático! Em poucos minutos, você tem um delicioso acompanhamento para diversas sobremesas.     
                    <br><br>
                `,
        preparo: [
                    "Em uma batedeira, coloque o creme de leite, o açúcar e o emulsificante e bata até dar o ponto",
                 ],
        photoCover: "assets/img-capas/mini22.jpg",
        photoCoverContent: "assets/img-content/chantilly-tradicional.png"
    },
    {
        id: "39",
        category: "doces",
        title: "Pipoca Caramelizada",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanche"
                     ],

        ingredients: [
                        "1 xícara de leite",
                        "50ml de leite",
                        "1 colher de manteiga",
                        "1 1/2 xícara de milho para pipoca",
                        "leite em pó a gosto"
                     ],

        video_embed: "https://www.facebook.com/receitasrapidas5/videos/467877697645658/?extid=NS-UNK-UNK-UNK-AN_GK0T-GK1C",
        resume: `
                    Dourada, sequinha e muito crocante, esta pipoca caramelada também vai estourar na sua casa! 
                    O modo de preparo é infalível, e garante que o caramelo não queime no fundo da panela. 
                    Boa pra festas, pro lanche da tarde, pro cineminha… Boa sempre!     
                    <br>
                `,
        preparo: [
                    "Em uma batedeira, coloque o açúcar para derreter",
                    "Acrescente o leite e mexa até caramelizar",
                    "Acrescente a manteira e quando chegar no ponto de caramelo, reserve",
                    "Faça a pipoca normalmente com o milho",
                    "Despeje o caramelo por cima da pipoca, misture bem e depois jogue o leite em pó por cima"
                 ],
        photoCover: "assets/img-capas/mini30.jpg",
        photoCoverContent: "assets/img-content/pipoca-caramelizada.png"
    },
    {
        id: "40",
        category: "doces",
        title: "Torta de Limão",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "2 pacotes de bolacha Maria",
                        "3 colheres de sopa de margarina derretida",
                        "suco de 3 limões",
                        "2 caixas de creme de leite",
                        "1 caixa de leite condensado",
                        "chantilly gelado"
                     ],

        video_embed: "https://www.facebook.com/cozinhadanayoficial/videos/559433991729370/",
        resume: `
                    <br>
                    A leveza e o frescor do limão combinados com a textura macia do recheio fazem dessa torta uma 
                    opção perfeita para qualquer ocasião. 
                    <br><br> 
                `,
        preparo: [
                    "No liquidificador, bata as bolachas em pedaços até que virem uma farofa",
                    "Transfira para uma tijela, e acrescente a margarina para ficar úmida e forrar o fundo da forma",
                    "Leve ao forno por 10 minutos",
                    "A parte, numa travessa, acrescente o creme de leite, o leite condensado, o suco de limões e com um fuê, misture tudo muito bem",
                    "Despeje sobre a forma com o fundo de biscoitos e finalize com o chantilly",
                    "Povilhe com raspas de limão"
                 ],
        photoCover: "assets/img-capas/mini32.jpg",
        photoCoverContent: "assets/img-content/torta-de-limao.png"
    },
    {
        id: "41",
        category: "doces",
        title: "Bolo de Laranja",
        porcoes: "12",
        tempo_preparo: "40 minutos",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "4 ovos",
                        "1 xícara (chá) de óleo",
                        "casca de 1 laranja",
                        "1 colher (sopa) de fermento",
                        "2 xícaras (chá) de açúcar",
                        "suco de 2 laranjas",
                        "2 xícaras (chá) de farinha de trigo"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/13953-bolo-de-laranja.html",
        resume: `
                    <br>
                    Esta receita simples e prática promete conquistar o paladar de todos com seu aroma cítrico e 
                    sabor inconfundível.
                    <br><br> 
                `,
        preparo: [
                    "Bata no liquidificador os ovos, o açúcar, o óleo, o suco e a casca da laranja",
                    "Passe para uma tigela e acrescente a farinha de trigo e o fermento",
                    "Leve para assar em uma forma com furo central, untada e enfarinhada, por mais ou menos 30 minutos",
                    "Desenforme o bolo e molhe com suco de laranja"
                 ],
        photoCover: "assets/img-capas/mini1.jpg",
        photoCoverContent: "assets/img-content/bolo-de-laranja.png"
    },
    {
        id: "42",
        category: "doces",
        title: "Bala de Coco",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "1 caixa de leite condensado",
                        "100g de coco ralado",
                        "2 xícaras de açúcar",
                        "1 xícara de água",
                        "2 colheres de sopa de vinagre"
                     ],

        video_embed: "https://www.facebook.com/ReceitaDicaseMuitoMais/videos/298606238660099/",
        resume: `
                    <br>
                    As Balas de Coco em geral são doces ótimos para completar suas festas, aniversários, 
                    sobremesas e para alegrar as crianças e dar um sabor adicional para as mesmas.
                    <br>
                    Derretem na boca com seu sabor único!
                    <br> 
                `,
        preparo: [
                    "Em uma panela, despeje o leite condensado, o coco, misture tudo muito bem. Depois leve ao fogo até engrossar ao ponto de brigadeiro",
                    "Retire do fogo, espalhe num prato e leve a geladeira, para pegar consistência por algumas horas",
                    "Retire da geladeira w modele as bolinhas",
                    "A parte, em uma panela, acrescente o açúcar, a água, o vinagre e ferva em fogo baixo para caramelizar, sem usar a colher",
                    "Retire o caramelo do fogo e despeje num copo, para facilitar",
                    "Espete as bolinhas e banhe-as no caramelo e depois separe-as para esfriar e secar"
                 ],
        photoCover: "assets/img-capas/mini27.jpg",
        photoCoverContent: "assets/img-content/bala-de-coco.jpg"
    },
    {
        id: "43",
        category: "doces",
        title: "Pudim de Chocolate",
        porcoes: "10",
        tempo_preparo: "2 porções",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "1 caixa de leite condensado",
                        "1 caixa de leite (mesma medida da caixa de leite condensado",
                        "chocolate em pó a gosto",
                        "1 caixa de creme de leite",
                        "1 pacotinho de gelatina sem sabor"

                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/197605-pudim-de-chocolate-de-geladeira.html",
        resume: `
                    <br>
                    O pudim de chocolate é com certeza a sobremesa perfeita para a sua noite. 
                    Delicioso e com gostinho de quero mais!
                    <br><br> 
                `,
        preparo: [
                    "Bata no liquidificador o leite condensado, o creme de leite e o leite",
                    "Coloque o chocolate aos poucos com o liquidificador ainda ligado; quanto mais chocolate, mais escuro e com sabor mais forte ficará",
                    "Dilua a gelatina sem sabor de acordo com as instruções no verso do pacote",
                    "Após, bata a gelatina no liquidificador junto aos demais ingredientes",
                    "Coloque tudo em uma forma para pudim de plástico e leve à geladeira por no mínimo 3 horas",
                    "Desenforme e sirva-se"

                 ],
        photoCover: "assets/img-capas/mini28.jpg",
        photoCoverContent: "assets/img-content/pudim-chocolate.jpg"
    },
    {
        id: "44",
        category: "doces",
        title: "Pipoca Doce",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanche"
                     ],

        ingredients: [
                        "4 colheres de açúcar",
                        "4 colheres de água",
                        "4 colheres de milho",
                        "3 colheres de óleo",
                        "leite ninho a gosto"

                     ],

        video_embed: "https://www.youtube.com/watch?v=oriJZOs5x64",
        resume: `
                    <br>
                    Procurando uma receita doce para assistir seu filme favorito? Confira essa receita fácil e 
                    diferente de pipoca com leite em pó.
                    <br><br> 
                `,
        preparo: [
                    "Misture tudo com fogo ligado até formar um caramelo e as pipocas começarem a estourar",
                    "Coloque leite ninho por cima"


                 ],
        photoCover: "assets/img-capas/mini24.jpg",
        photoCoverContent: "assets/img-content/pipoca-doce.jpg"
    },
    {
        id: "45",
        category: "doces",
        title: "Sobremesa de Banana",
        porcoes: "12",
        tempo_preparo: "15 minutos",
        
        subcategory: [
                        "sobremesa"
                     ],

        ingredients: [
                        "8 bananas",
                        "1/2 xícara de água",
                        "1 xícara de açúcar",
                        "1 lata de leite condensado",
                        "3 gemas",
                        "1 colher de sobremesa de baunilha",
                        "1 lata de leite comum",
                        "2 colheres de sopa de amido de milho",
                        "3 claras",
                        "3 colheres de sopa de açúcar"
                     ],

        video_embed: "https://www.tudogostoso.com.br/receita/13974-sobremesa-deliciosa-de-banana.html",
        resume: `
                    <br>
                    A sobremesa de banana combina camadas de caramelo cremoso, creme e merengue suíço. 
                    É a receita ideal para servir em ocasiões especiais com a família.
                    <br><br> 
                `,
        preparo: [
                    "Levar ao fogo o açúcar até dourar juntar a água e mexer até derreter",
                    "Juntar as bananas deixar cozinhar até dourar, mas sem desmanchar e passar para um refratário",
                    "Levar ao fogo os ingredientes do creme e colocar sobre as bananas bater as claras em neve com o açúcar e colocar em cima",
                    "Levar ao forno para corar por 15 minutos",
                    "Servir gelado ou morno de qualquer maneira é uma delícia"
                 ],
        photoCover: "assets/img-capas/mini43.jpg",
        photoCoverContent: "assets/img-content/sobremesa-banana.png"
    },
    {
        id: "46",
        category: "doces",
        title: "Pudim de Frutas",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "250g de morangos",
                        "200g de uvas cortadas ao meio",
                        "1 banana em rodelas",
                        "1 maçã picada com casca",
                        "10 colheres de sopa de água",
                        "2 pacotes de gelatina sem sabor",
                        "2 caixas de creme de leite",
                        "1 caixa de leite condensado"
                    ],

        video_embed: "https://www.facebook.com/receitariadathai/videos/210236093819875/",
        resume: `
                    <br>
                    O pudim de frutas é uma sobremesa saudável e deliciosa, tem uma bela apresentação e vai dar um 
                    colorido especial para a sua mesa. Ideal para servir bem gelado após uma de suas refeições, 
                    essa gostosura vai deixar todos com água na boca!
                    <br>
                `,
        preparo: [
                    "Retire o talo dos morangos e corte-os ao meio",
                    "Reserve as frutas",
                    "Num refratário, hidrate a gelatina e reserve",
                    "No liquidificador, adicione o creme de leite, o leite condensado e deixe bater por 1 ou 2 minutos",
                    "Feito isso acrescente a gelatina sem sabor, que foi levada ao microondas para derreter por 25 segundos e deixe bater por mais 1 minuto",
                    "Numa forma untada com óleo, acrescente as frutas e a calda. Cubra todas as frutas",
                    "Leve a geladeira por no mínimo 3 horas"
                ],
        photoCover: "assets/img-capas/mini8.jpg",
        photoCoverContent: "assets/img-content/pudim-de-frutas.jpg"
    },
    {
        id: "48",
        category: "doces",
        title: "Panqueca de Banana",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "refeição"
                    ],

        ingredients: [
                        "2 ovos",
                        "2 bananas",
                        "3 colheres de aveia",
                        "mel a gosto"
                    ],

        video_embed: "https://www.instagram.com/p/DCMhZ_BxooN/",
        resume: `
                    <br>
                    Chegou a vez de fazer a panqueca de banana que leva apenas quatro ingredientes e vai muito bem com um 
                    leite ou chá quente.
                    <br>
                `,
        preparo: [
                    "Amasse as duas bananas",
                    "A parte, misture bem os dois ovos",
                    "misture os ovos com a banana e acrescente a aveia",
                    "Leve tudo a uma frigideira untada com manteiga e tampe",
                    "Deixe cozinhar, vire e deixe o outro lado cozinhando por mais 2 minutos",
                    "Retire do fogo e jogue mel por cima",
                ],
        photoCover: "assets/img-capas/mini48.jpg",
        photoCoverContent: "assets/img-content/panqueca-banana.png"
    },
    {
        id: "53",
        category: "doces",
        title: "Bolacha Maizena",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanche"
                    ],

        ingredients: [
                        "500g Maizena",
                        "1 lada leite condensado",
                        "1 colher bem cheia de manteiga"
                    ],

        video_embed: "https://www.instagram.com/p/B-kDoL0nP39/",
        resume: `
                    <br>
                    Com apenas 3 ingredientes, uma receita fácil para fazer com toda a família!
                    <br>
                `,
        preparo: [
                    "Adicione todos os ingredientes em um recipiente, misture até formar um massinha que não grude na mão",
                    "Faça bolinhas. Se quiser decorar, use um garfo apertando em cima da bolinha e coloque em uma assadeira untada com um pouco de manteiga",
                    "Leve pra assar em fogo baixo por mais ou menos 15 minutos"
                ],
        photoCover: "assets/img-capas/mini53.jpg",
        photoCoverContent: "assets/img-content/bolacha-maizena.png"
    },
    {
        id: "54",
        category: "doces",
        title: "Bolo Flocao",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanche"
                    ],

        ingredients: [
                        "1 e 1/2 xícara de Flocão de milho",
                        "1/2 xícara de leite",
                        "3 ovos",
                        "1 xícara de açúcar",
                        "3/4 xícara de óleo",
                        "1 xícara de queijo ralado",
                        "50g de coco ralado",
                        "1 colher de fermento"
                    ],

        video_embed: "https://www.instagram.com/p/C3-KZkBOTsx/",
        resume: `
                    <br>
                    Deliciosa receita de Bolo de flocão de milho, simples e fácil de se fazer!
                    <br>
                `,
        preparo: [
                    "Em um bol, coloque o flocão e o leite e deixe hidratar por 20 minutos",
                    "A parte, no liquidificador, acrescente os ovos, o açúcar, o óleo e o flocão hidratado. Deixe bater por 3 minutos",
                    "Despeje tudo em um bol. Acrescente o queijo, o coco, o fermento e misture com um fuê",
                    "Numa forma untada com fubá, despeje o conteúdo do bol e leve para assar por 45 minutos a 180°"
                ],
        photoCover: "assets/img-capas/mini54.jpg",
        photoCoverContent: "assets/img-content/bolo-flocao.png"
    },
    {
        id: "56",
        category: "doces",
        title: "Creme de Tapioca",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "1 litro de leite",
                        "1 xícara de tapioca granulada",
                        "1 vidrinho de leite de coco (200ml)",
                        "1 caixa de leite condensado",
                        "1 caixa de creme de leite",
                        "coco ralado (50g para o creme e 30g para decoração)"
                    ],

        video_embed: "https://www.instagram.com/p/C_wZUr3ythW/",
        resume: `
                    <br>
                    Deliciosa receita de Bolo de flocão de milho, simples e fácil de se fazer!
                    <br>
                `,
        preparo: [
                    "Em uma panela coloque o leite e leve ao fogo, quando estiver quase fervendo acrescente a tapioca e mexa bem",
                    "Começou a ferver apague o fogo e coloque o leite de coco, o leite condensado, misture",
                    "Acrescente o coco ralado e por último o creme de leite",
                    "Deixe descansar mexendo de vez em quando até inchar a tapioca",
                    "Polvilhar coco ralado por cima",
                    "Levar a geladeira até ficar bem geladinho ou sirva morno"
                ],
        photoCover: "assets/img-capas/mini56.jpg",
        photoCoverContent: "assets/img-content/creme-tapioca.jpg"
    },
    {
        id: "57",
        category: "doces",
        title: "Brigadeiro de Café",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "5 colheres de sopa de leite em pó",
                        "4 colheres (sopa) de cacau em pó (usei 50%)",
                        "Café (temperatura ambiente) até dar o ponto"
                    ],

        video_embed: "https://www.instagram.com/p/C9kPJ1kxtC1/",
        resume: `
                    <br>
                    Brigadeiro de Café cai bem com um cafezinho é uma ótima maneira de começar o dia.
                    É uma versão sofisticada e incomum. Este novo conceito se destaca na seleção de produtos de alta qualidade, 
                    receitas individuais e combinações de ingredientes inusitados.
                    <br>
                `,
        preparo: [
                    "Misture o leite em pó, o cacau e o café até dar o ponto, sem levar nada ao fogo",
                    "Café sem adoçar se o cacau for 50% ou menos. Se o cacau for maior que 50% talvez tenha que adicionar algum adoçante na receita"
                ],
        photoCover: "assets/img-capas/mini57.jpg",
        photoCoverContent: "assets/img-content/brigadeiro-cafe.jpg"
    },
    {
        id: "58",
        category: "doces",
        title: "Bolo de Tapioca",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "500g de tapioca granulada fina",
                        "1 litro de leite",
                        "200ml de leite de coco",
                        "2 caixas de leite condensado",
                        "100g de coco ralado",
                        "1/2 xícara de leite em pó"
                    ],

        video_embed: "https://www.instagram.com/p/C4ESGALO72u/",
        resume: `
                    <br>
                    Preparo fácil, fica delicioso e agrada a todos!
                    <br>
                `,
        preparo: [
                    "Em uma tijela, acrescente a tapioca, o leite bem quente e o coco ralado e deixe descansar por 10 minutos",
                    "Após esse prazo, acrescente o leite de coco, o leite condensado e misture bem",
                    "Em seguida, acrescente o leite em pó e misture",
                    "Despeje tudo numa forma untada com óleo, cubra com plástico filme e leve pra gelar por 12 horas",
                    "Para desinformar, passe a faca na lateral da forma"
                ],
        photoCover: "assets/img-capas/mini58.jpg",
        photoCoverContent: "assets/img-content/bolo-tapioca.jpg"
    },
    {
        id: "59",
        category: "doces",
        title: "Mousse de Café",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "100g de gelo",
                        "6g de café solúvel",
                        "100ml de leite desnatado",
                        "Adoçante a gosto"
                    ],

        video_embed: "https://www.instagram.com/p/C9w0OEAxK7n/",
        resume: `
                    <br>
                    Sobremesa deliciosa e prática que fica pronta em cinco minutos
                    <br>
                `,
        preparo: [
                    "Bater no mixer por 5 minutos"
                ],
        photoCover: "assets/img-capas/mini59.jpg",
        photoCoverContent: "assets/img-content/mousse-cafe.jpg"
    },
    {
        id: "60",
        category: "doces",
        title: "Pamonha de Forno",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "2 latas de milho",
                        "200 ml de leite de coco",
                        "1 xícara de açúcar",
                        "4 ovos",
                        "4 colheres de sopa de farinha de trigo",
                        "1 colher de fermento"
                    ],

        video_embed: "https://www.instagram.com/p/Cs4ydYDu2uN/",
        resume: `
                    <br>
                    Feito no liquidificador, esse bolo de pamonha traz o sabor e o clima da roça, 
                    tanto no sabor quanto na apresentação, e é perfeito para festas juninas - ou julinas!
                    <br>
                `,
        preparo: [
                    "No liquidificador, acrescente o milho, o leite de coco, o açúcar, os ovos e a farinha de trigo e deixe bater por 5 minutos",
                    "Após isso, acrescente o fermento e bata mais um pouco para misturar",
                    "Em uma fôrma untada, despeje o conteúdo do liquidificador e leve ao forno a 180° até que fique dourada"
                ],
        photoCover: "assets/img-capas/mini60.jpg",
        photoCoverContent: "assets/img-content/pamonha-forno.jpg"
    },
    {
        id: "65",
        category: "doces",
        title: "Bolinho de Chuva de Forno",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanche"
                    ],

        ingredients: [
                        "3 xícaras de farinha de trigo",
                        "1 colher de sopa de fermento",
                        "2 xícaras de leite",
                        "3 ovos",
                        "3 colheres de óleo",
                        "1 xícara de açúcar"
                    ],

        video_embed: "https://www.instagram.com/p/DBhIn7Hv6Nl/",
        resume: `
                    <br>
                    Sem fritura!
                    <br>
                    Bolinho de Chuva assado, super fácil e delicioso.
                    <br>
                `,
        preparo: [
                    "Em um liquidificador, acrescente os ovos, o óleo, o leite e o açúcar e deixe bater",
                    "Se seu liquidificador não suportar os ingredientes que vem em seguida, despeje tudo numa tijela e acrescente a farinha, o fermento e misture bem",
                    "Leve para assar por 20 minutos a 180°",
                    "Depois de assado, passe o cupcake numa mistura de açúcar com canela"
                ],
        photoCover: "assets/img-capas/mini65.jpg",
        photoCoverContent: "assets/img-content/bolinho-chuva-forno.jpg"
    },
    {
        id: "71",
        category: "doces",
        title: "Bolo de Batata Doce",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "lanche"
                    ],

        ingredients: [
                        "280g de batata doce crua",
                        "2 ovos",
                        "½ xícara de açúcar",
                        "½ xícara de óleo",
                        "200ml de leite de coco",
                        "2 colheres de queijo parmesão ralado",
                        "2 xícaras de farinha de arroz",
                        "1 colher de fermento em pó"
                    ],

        video_embed: "https://www.instagram.com/p/C56CnMdOq9e/",
        resume: `
                    <br>
                    Este bolo é daqueles que a gente adora, é só bater todos os ingredientes no liquidificador e 
                    colocar o bolo pra assar, não precisa sujar nenhuma bacia, só o liquidificador, a forma e uma espátula.
                    <br>
                `,
        preparo: [
                    "Em um liquidificador, acrescente a batata doce, os ovos, o óleo, o leite de coco, o açúcar, o parmesão e deixe bater",
                    "Despeje tudo numa tijela e acrescente a farinha de arroz, o fermento e misture bem",
                    "Povilhe a forma com margarina, açúcar e canela e leve para assar por 40 minutos a 180°"

                ],
        photoCover: "assets/img-capas/mini71.jpg",
        photoCoverContent: "assets/img-content/bolo-batata-doce.jpg"
    },
    {
        id: "75",
        category: "doces",
        title: "Balas de Gengibre",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "400 gramas de açúcar",
                        "100 ml de suco de limão",
                        "1 gengibre grande ralado",
                        "1 pitada de açafrão"
                    ],

        video_embed: "https://www.instagram.com/p/CviAF7WAHua/",
        resume: `
                    <br>
                    Além de serem muito gostosas, fazem muito bem a saúde!
                    <br>
                    Auxilia na má digestão, azia, tosse e resfriado.
                    <br>
                `,
        preparo: [
                    "Em uma panela, despeje o açúcar, o limão, o gengibre, o açafrão e mexa apenas para misturar os ingredientes. Depois, não pode mexer mais",
                    "Deixe cozinhando até chegar no ponto de bala, o que pode levar de 10 a 15 minutos",
                    "Despeje a mistura numa forma untada com azeite",
                    "A medida que for ficando morno e esfriando, vá modelando. Enrole com papel manteiga"

                ],
        photoCover: "assets/img-capas/mini75.jpg",
        photoCoverContent: "assets/img-content/bala-gengibre.jpg"
    },
    {
        id: "76",
        category: "doces",
        title: "Árvores de Waffes",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "acompanhamento"
                    ],

        ingredients: [
                        "1 Pacote de Waffes de chocolate",
                        "1 Pacote de Torrone",
                        "Chocolate derretido",
                        "palito de pirulito"
                    ],

        video_embed: "https://www.instagram.com/p/DCqI4gRtveB/",
        resume: `
                    <br>
                    Rústicos, criativos, econômicos, lindos, fáceis de fazer e com apenas 4 ingredientes!
                    <br>
                `,
        preparo: [
                    "Corte as bolachas em 5 tamanhos diferentes",
                    "Espete as bolachas com o palito e coloque o chocolate derretido para firmar onde foi feito o furo",
                    "Corte as estrelinhas com uma forminha em estrela de alumínio e coloque no topo do palito"
                ],
        photoCover: "assets/img-capas/mini76.jpg",
        photoCoverContent: "assets/img-content/arvores-waffes.jpg"
    },
    {
        id: "82",
        category: "doces",
        title: "Cocada de Forno",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "1 lata de leite condensado",
                        "3 ovos",
                        "1 vidrinho de leite de coco",
                        "1 colher de sopa de manteiga",
                        "100g de coco ralado seco sem açúcar"
                    ],

        video_embed: "https://www.instagram.com/p/Csglq1PuXej/",
        resume: `
                    <br>
                    Cocada de forno bem cremosa e fácil de fazer. Tão boa que você vai querer toda semana!
                    <br>
                `,
        preparo: [
                    "Numa travessa, acrescente os ovos, o leite de coco, o leite condensado, a manteiga em ponto pomada e misture bem",
                    "Adicione o coco ralado e continue a misturar",
                    "Despeje tudo numa travessa untada com manteiga e leve ao forno por aproximadamente 35 minutos a 180°"
                ],
        photoCover: "assets/img-capas/mini82.jpg",
        photoCoverContent: "assets/img-content/cocada-forno.png"
    },
    {
        id: "86",
        category: "doces",
        title: "Café Gelado",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "bebida"
                    ],

        ingredients: [
                        "café em cubinhos de gelo",
                        "1/2 litro de leite",
                        "2 colheres de leite em pó",
                        "2 colheres de achocolatado",
                        "100g de coco ralado seco sem açúcar"
                    ],

        video_embed: "https://www.instagram.com/p/C0hwelxuaCB/",
        resume: `
                    <br>
                    Nunca mais você vai comprar café gelado depois de aprender a fazer esse aqui.
                    <br>E no calor, te garanto que seu café da manhã vai ser sempre assim!
                    <br>
                `,
        preparo: [
                    "Bater tudo no liquidificador"
                ],
        photoCover: "assets/img-capas/mini86.jpg",
        photoCoverContent: "assets/img-content/cafe-gelado.jpg"
    },
    {
        id: "87",
        category: "doces",
        title: "Pudim na Caixa",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "1 caixa de leite condensado",
                        "1 xícara de chocolate em pó 50%",
                        "2 caixas de creme de leite",
                        "1 xícaras de leite",
                        "24g de gelatina sem sabor hidratada"
                    ],

        video_embed: "https://www.instagram.com/p/CrWjD0Cgd38/",
        resume: `
                    <br>
                    O pudim de chocolate desta receita é tão prático de preparar que você nem vai acreditar!
                    <br>
                `,
        preparo: [
                    "No liquidificador, acrescente o leite consensado, o leite, o creme de leite, o chocolate em pó e deixe bater por alguns minutos",
                    "Por último, coloque a gelatina sem sabor e deixe bater um pouco mais",
                    "Despeje tudo numa caixa de leite já higienizada e leve para a geladeira por no mínimo 3 horas",
                    "Depois, corte a caixa com uma tesoura"
                ],
        photoCover: "assets/img-capas/mini87.jpg",
        photoCoverContent: "assets/img-content/pudim-caixa.jpg"
    },
    {
        id: "88",
        category: "doces",
        title: "Bombom Caribe",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "sobremesa"
                    ],

        ingredients: [
                        "3 bananas",
                        "1 colher de sopa de cacau",
                        "1/2 xícara de água",
                        "200g de chocolate 70% para banhar"
                    ],

        video_embed: "https://www.instagram.com/p/CslxtK9OI2o/",
        resume: `
                    <br>
                    Essa receita de Bombom caribe é uma delicia e o melhor de tudo é que a gente come um doce sem pesar 
                    na balança e na consciência.
                    <br>
                `,
        preparo: [
                    "Amasse as bananas, misture o cacau e água e leve ao fogo até o ponto de brigadeiro",
                    "Coloque em um prato de vidro untado com margarina e leve para gelar",
                    "Corte em quadradinhos e banhe no chocolate meio amargo"
                ],
        photoCover: "assets/img-capas/mini88.jpg",
        photoCoverContent: "assets/img-content/bombom-caribe.jpg"
    }
    /* ######################### END RECEITAS DOCES ############################ */
]