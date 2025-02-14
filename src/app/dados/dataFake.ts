import { FoodItem } from '../model/food.module';

export const dataFake: FoodItem[] = [
    {
        id: "1",
        category: "salgados",
        title: "Pão Sírio",
        porcoes: "",
        tempo_preparo: "",
        
        subcategory: [
                        "com lactose",
                        "massas",
                        "árabe"
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
                        "refeição"
                     ],

        ingredients: [
                        "500g de feijão carioca",
                        "200g de peito picado",
                        "1 linguiça picada",
                        "1/2 cebola picada",
                        "3 dentes de alho picado",
                        "1 colher chá de páprica picante",
                        "1 colher chá de chimichurri",
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
                    "Numa panela de pressão refogue o bacon, a linguiça, a cebola, o alho, a páprica picante, o chimichurri, 1 colher pequena de sal e misture tudo muito bem",
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
                        "culinária mineira"
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
                        "lanche",
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
                        "refeição",
                        "frutos do mar"
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
                        "culinária maranhense"
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
                        "refeição"
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
                        "lanche"
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
                        "refeição"
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
                        "acompanhamento"
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
                        "acompanhamento"
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
                        "refeição",
                        "culinária goiana"
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

    /* ############################## RECEITAS DOCES ############################## */

    {
        id: "13",
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
        id: "14",
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
        id: "15",
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
        id: "16",
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
        id: "17",
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
        id: "18",
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
        id: "19",
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
        id: "20",
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
                        "1 colher de sopa de emulsificante",
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
    }
]