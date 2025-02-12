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
                        "",
                     ],

        video_embed: "https://www.facebook.com/receitasfaceisdesefazer/videos/1231457040637148/",
        resume: `
                    <br><br>
                    Essa é uma daquelas receitas viciantes que quando vc experimenta vc quer fazer todos os dias. Um acompanhamento coringa que todos vão amar!
                    <br><br>
                `,
        preparo: [
                    "",
                 ],
        photoCover: "assets/img-capas/mini26.jpg",
        photoCoverContent: "assets/img-content/batata-doce-ao-forno.jpg"
    },
]