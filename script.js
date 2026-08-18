/* ============================================================
   ARRELS DEL FOC — Logica de la web
   ============================================================ */

/* ---- URL del lloc, per generar el QR de la carta automaticament ---- */
const SITE_URL = window.location.origin + window.location.pathname;

/* ---- La Carta: dades revisades pel document "Carta_Arrels_Traducciones_4idiomas" (16/08/26).
   Els noms dels plats ara es tradueixen quan te sentit fer-ho (equivalent clar i reconegut);
   es mantenen igual quan son noms propis de la casa, talls sense equivalent exacte, o termes
   ja internacionals. Veure notes de criteri del propi document. ---- */
const CARTA = {
  entrants: [
    {
      nom: { es: "Canelones de Carrillera", ca: "Canelons de Galta de Vedella", fr: "Cannellonis de Joue de Bœuf", en: "Beef Cheek Cannelloni" },
      preu: "15 €",
      img: "assets/img/dish-canelons.jpg",
      desc: {
        ca: "Canelons farcits de galta de vedella cuita a foc lent, gratinats amb beixamel lleugera.",
        es: "Canelones rellenos de carrillera de ternera braseada, gratinados con bechamel ligera.",
        fr: "Cannellonis farcis de joue de bœuf braisée, gratinés à la béchamel légère.",
        en: "Cannelloni filled with slow-braised beef cheek, baked with a light béchamel.",
      },
    },
    {
      nom: { es: "Empanada Argentina", ca: "Empanada Argentina", fr: "Empanada Argentine", en: "Empanada Argentina" },
      preu: "4,50 €",
      img: "assets/img/dish-empanada-carn.jpg",
      desc: {
        ca: "Farcida de vedella capolada a ganivet, ceba i pebrot vermell.",
        es: "Rellena de ternera picada a cuchillo, cebolla y pimiento rojo.",
        fr: "Farcie de bœuf haché au couteau, oignon et poivron rouge.",
        en: "Filled with hand-chopped beef, onion and red pepper.",
      },
    },
    {
      nom: { es: "Empanada Caprese", ca: "Empanada Caprese", fr: "Empanada Caprese", en: "Empanada Caprese" },
      preu: "4 €",
      img: "assets/img/dish-empanada-caprese.jpg",
      desc: {
        ca: "Farcida de formatges selectes, tomàquet assecat i alfàbrega fresca.",
        es: "Rellena de quesos seleccionados, tomate seco y albahaca fresca.",
        fr: "Farcie de fromages sélectionnés, tomates séchées et basilic frais.",
        en: "Filled with selected cheeses, sun-dried tomatoes and fresh basil.",
      },
    },
    {
      nom: { es: "Calamar a la Brasa", ca: "Calamar a la Brasa", fr: "Calamar Grillé", en: "Chargrilled Squid" },
      preu: "18 €",
      img: "assets/img/dish-calamar.jpg",
      desc: {
        ca: "Calamar a la brasa sobre puré de pèsols fumats, acabat amb el nostre chimichurri.",
        es: "Sobre puré de guisantes ahumados, terminado con nuestro chimichurri.",
        fr: "Calamar grillé au feu de bois sur purée de petits pois fumés, relevé de notre chimichurri.",
        en: "Chargrilled squid over a smoked pea purée, finished with our chimichurri.",
      },
    },
    {
      nom: { es: "Escalivada Arrels", ca: "Escalivada Arrels", fr: "Escalivada Arrels", en: "Escalivada Arrels" },
      preu: "15 €",
      img: "assets/img/dish-escalivada.jpg",
      desc: {
        ca: "Verdures rostides, formatge de cabra, mel i nous.",
        es: "Verduras asadas, queso de cabra, miel y nueces.",
        fr: "Légumes rôtis, fromage de chèvre, miel et noix.",
        en: "Roasted vegetables, goat cheese, honey and walnuts.",
      },
    },
    {
      nom: { es: "Salteado de Arrels", ca: "Saltat d'Arrels", fr: "Sauté d'Arrels", en: "Arrels Sauté" },
      preu: "15 €",
      img: "assets/img/gallery-plat-ou.jpg",
      desc: {
        ca: "Bolets silvestres saltats, all tendre, espàrrecs, ou ferrat i patates palla.",
        es: "Salteado de setas silvestres, ajo tierno, espárragos, huevo frito y patata paja.",
        fr: "Champignons sauvages sautés, ail nouveau, asperges, œuf au plat et pommes allumettes.",
        en: "Sautéed wild mushrooms, young garlic, asparagus, fried egg and shoestring fries.",
      },
    },
    {
      nom: { es: "Berenjena Asada", ca: "Albergínia a la Brasa", fr: "Aubergine Grillée", en: "Chargrilled Aubergine" },
      preu: "14 €",
      img: "assets/img/dish-berenjena.jpg",
      desc: {
        ca: "Albergínia a la brasa amb stracciatella, pesto de tomàquet assecat i ametlles.",
        es: "Berenjena a la brasa con stracciatella, pesto de tomate seco y almendras.",
        fr: "Aubergine grillée au feu de bois avec stracciatella, pesto de tomates séchées et amandes.",
        en: "Char-grilled aubergine with stracciatella, sun-dried tomato pesto and almonds.",
      },
    },
    {
      nom: { es: "Neu del Cadí", ca: "Neu del Cadí", fr: "Neu del Cadí", en: "Neu del Cadí" },
      preu: "14 €",
      img: "assets/img/dish-formatge.jpg",
      desc: {
        ca: "Formatge fos sobre puré d'albergínia rostida, amb nous, figues i mel de canya.",
        es: "Queso fundido sobre puré de berenjena asada, con nueces, higos y miel de caña.",
        fr: "Fromage fondu sur purée d'aubergine rôtie, avec noix, figues et miel de canne.",
        en: "Melted cheese over roasted aubergine purée, with walnuts, figs and cane honey.",
      },
    },
  ],
  principals: [
    {
      nom: { es: "Vacío Angus", ca: "Vacío Angus", fr: "Vacío Angus", en: "Vacío Angus" },
      preu: "25,50 €",
      img: "assets/img/dish-vacio-nova.jpg",
      desc: {
        ca: "Vano d'Angus argentí a la brasa amb verdures rostides.",
        es: "Vacío de Angus argentino a la brasa con verduras asadas.",
        fr: "Bavette d'Angus argentine grillée, accompagnée de légumes rôtis.",
        en: "Chargrilled Argentine Angus flank steak with roasted vegetables.",
      },
    },
    {
      nom: { es: "Carrilleras de Arrels", ca: "Galtes d'Arrels", fr: "Joues de Bœuf d'Arrels", en: "Arrels Beef Cheeks" },
      preu: "23 €",
      img: "assets/img/dish-galtes.jpg",
      desc: {
        ca: "Galtes de vedella cuinades a baixa temperatura, sobre puré de patata.",
        es: "Carrilleras de ternera cocinadas a baja temperatura, sobre puré de patata.",
        fr: "Joues de bœuf mijotées à basse température, sur purée de pommes de terre.",
        en: "Beef cheeks slow-cooked at low temperature, over a potato purée.",
      },
    },
    {
      nom: { es: "Milanesa Arrels", ca: "Milanesa Arrels", fr: "Milanesa de Bœuf Napolitaine", en: "Beef Milanesa Napolitana" },
      preu: "19 €",
      img: "assets/img/dish-milanesa-nova.jpg",
      desc: {
        ca: "Milanesa de vedella napolitana, amb patates fregides o amanida fresca.",
        es: "Milanesa de ternera napolitana, con patatas fritas o ensalada fresca.",
        fr: "Milanesa de bœuf panée à la napolitaine, avec frites ou salade fraîche.",
        en: "Breaded beef milanesa, napolitana style, with fries or fresh salad.",
      },
    },
    {
      nom: { es: "Milanesa Arrels", ca: "Milanesa Arrels", fr: "Milanesa de Poulet", en: "Chicken Milanesa" },
      preu: "19 €",
      img: "assets/img/dish-milanesa-pollo.jpg",
      desc: {
        ca: "Milanesa de pollastre, amb patates fregides o amanida fresca.",
        es: "Milanesa de pollo, con patatas fritas o ensalada fresca.",
        fr: "Milanesa de poulet panée, avec frites ou salade fraîche.",
        en: "Breaded chicken milanesa, with fries or fresh salad.",
      },
    },
    {
      nom: { es: "Entraña Criolla", ca: "Entranya Criolla", fr: "Bavette Grillée Criolla", en: "Chargrilled Skirt Steak" },
      preu: "23,50 €",
      img: "assets/img/dish-entrana.jpg",
      desc: {
        ca: "Entranya de vedella a la brasa amb patata dolça fregida i salsa criolla.",
        es: "Entraña de ternera a la brasa con patata dulce frita y salsa criolla.",
        fr: "Bavette de bœuf grillée, frites de patate douce et sauce criolla.",
        en: "Chargrilled beef skirt steak with sweet potato fries and criolla sauce.",
      },
    },
    {
      nom: { es: "Chuletón Madurado", ca: "Chuletó Madurat", fr: "Côte de Bœuf Maturée (1kg)", en: "Dry-Aged Bone-In Ribeye (1kg)" },
      preu: "69 €",
      img: "assets/img/dish-chuleton.jpg",
      desc: {
        ca: "Costella de bou d'1 kg amb os, madurada 30 dies, amb amanida i patates fregides. Ideal per compartir.",
        es: "Chuletón de 1 kg con hueso, madurado 30 días, con ensalada y patatas fritas. Ideal para compartir.",
        fr: "Côte de bœuf avec os d'1 kg, maturée 30 jours, avec salade et frites. Idéale à partager.",
        en: "1kg bone-in ribeye, dry-aged 30 days, with salad and fries. Perfect for sharing.",
      },
    },
    {
      nom: { es: "Lasaña Campestre", ca: "Lasanya Campestre", fr: "Lasagnes Campagnardes", en: "Country-Style Vegetable Lasagna" },
      preu: "18 €",
      img: "assets/img/dish-lasanya.jpg",
      desc: {
        ca: "Capes de verdures i salsa de tomàquet, gratinades amb formatge.",
        es: "Capas de verduras y salsa de tomate, gratinadas con queso.",
        fr: "Couches de légumes et sauce tomate, gratinées au fromage.",
        en: "Layers of vegetables and tomato sauce, topped with gratinated cheese.",
      },
    },
    {
      nom: { es: "Bacalao al Pil-Pil", ca: "Bacallà al Pil-Pil", fr: "Morue au Pil-Pil", en: "Cod in Pil-Pil Sauce" },
      preu: "24 €",
      img: "assets/img/dish-bacalla.jpg",
      desc: {
        ca: "Llom de bacallà en salsa pil-pil amb patates laminades i pebrots rostits.",
        es: "Lomo de bacalao en salsa pil-pil con patatas laminadas y pimientos asados.",
        fr: "Longe de morue en sauce pil-pil, avec pommes de terre en lamelles et poivrons rôtis.",
        en: "Cod loin in pil-pil sauce, with sliced potatoes and roasted peppers.",
      },
    },
    {
      nom: { es: "Ensalada César", ca: "Amanida Cèsar", fr: "Salade César", en: "Caesar Salad" },
      preu: "17 €",
      img: "assets/img/dish-cesar.jpg",
      desc: {
        ca: "Enciam romà fresc, pollastre a la brasa, parmesà i amaniment cèsar casolà.",
        es: "Lechuga romana fresca, pollo a la brasa, parmesano y salsa césar casera.",
        fr: "Laitue romaine fraîche, poulet grillé, parmesan et sauce César maison.",
        en: "Fresh romaine lettuce, chargrilled chicken, parmesan and homemade Caesar dressing.",
      },
    },
    {
      nom: { es: "Hamburguesa Gaucha", ca: "Hamburguesa Gaucha", fr: "Hamburger Gaucho", en: "Gaucho Burger" },
      preu: "19 €",
      img: "assets/img/dish-hamburguesa-nova.jpg",
      desc: {
        ca: "Barreja artesana de vedella, formatge fos, rúcula fresca, chutney de tomàquet casolà i maionesa de chimichurri. Amb patates dolces fregides.",
        es: "Mezcla artesana de ternera, queso fundido, rúcula fresca, chutney de tomate casero y mayonesa de chimichurri. Con patatas dulces fritas.",
        fr: "Bœuf artisanal, fromage fondu, roquette fraîche, chutney de tomate maison et mayonnaise au chimichurri. Avec frites de patate douce.",
        en: "Artisan beef blend, melted cheese, fresh rocket, homemade tomato chutney and chimichurri mayo. Served with sweet potato fries.",
      },
    },
    {
      nom: { es: "Pollo Picantón", ca: "Picantó a la Brasa", fr: "Poussin Grillé", en: "Chargrilled Spring Chicken" },
      preu: "22 €",
      img: "assets/img/dish-pollo-picanton.jpg",
      desc: {
        ca: "Picantó a la brasa amb salsa de bolets silvestres i bacon fumat, amb patates.",
        es: "Pollo a la brasa con salsa de setas y panceta ahumada, servido con patatas españolas.",
        fr: "Poussin grillé au feu de bois, sauce aux champignons sauvages et bacon fumé, avec pommes de terre sautées.",
        en: "Chargrilled spring chicken with wild mushroom sauce and smoked bacon, with pan-fried potatoes.",
      },
    },
  ],
  postres: [
    {
      nom: { es: "Tentación de Chocolate", ca: "Temptació de Xocolata", fr: "Tentation au Chocolat", en: "Chocolate Temptation" },
      preu: "8 €",
      img: "assets/img/dish-xocolata.jpg",
      desc: {
        ca: "Brownie amb gelat artesà de vainilla, salsa de toffee i nous.",
        es: "Brownie con helado artesano de vainilla, salsa toffee y nueces.",
        fr: "Brownie avec glace artisanale à la vanille, sauce toffee et noix.",
        en: "Brownie with artisan vanilla ice cream, toffee sauce and walnuts.",
      },
    },
    {
      nom: { es: "Tarta Silvestre", ca: "Tarta Silvestre", fr: "Cheesecake", en: "Cheesecake" },
      preu: "7 €",
      img: "assets/img/dish-tarta-silvestre.jpg",
      desc: {
        ca: "Cheesecake cremós i lleuger amb melmelada casolana de fruits vermells.",
        es: "Tarta de queso cremosa y ligera con mermelada casera de frutos rojos.",
        fr: "Cheesecake onctueux et léger, avec confiture maison de fruits rouges.",
        en: "Creamy, light cheesecake with homemade wild berry jam.",
      },
    },
    {
      nom: { es: "Flan Casero", ca: "Flam Casolà", fr: "Flan Maison", en: "Homemade Flan" },
      preu: "6 €",
      img: "assets/img/dish-flan.jpg",
      desc: {
        ca: "Amb dolç de llet.",
        es: "Con dulce de leche.",
        fr: "Avec dulce de leche.",
        en: "With dulce de leche.",
      },
    },
    {
      nom: { es: "Arroz Cremoso del Foc", ca: "Arròs Cremós del Foc", fr: "Riz au Lait Crémeux del Foc", en: "Creamy Rice Pudding del Foc" },
      preu: "8 €",
      img: "assets/img/dish-arros-cremos.jpg",
      desc: {
        ca: "Arròs amb llet, canyella, gelat de pistatxo i ametlles caramel·litzades cruixents.",
        es: "Arroz con leche con canela, helado de pistacho y almendras caramelizadas crujientes.",
        fr: "Riz au lait à la cannelle, glace à la pistache et amandes caramélisées croquantes.",
        en: "Rice pudding with cinnamon, pistachio ice cream and crunchy caramelized almonds.",
      },
    },
  ],
};

/* ---- Begudes: noms traduïts per idioma ---- */
const BEGUDES = {
  sinAlcohol: [
    { nom: { ca: "Aigua mineral", es: "Agua mineral", fr: "Eau minérale", en: "Mineral water" }, preu: "2,50 €" },
    { nom: { ca: "Aigua amb gas", es: "Agua con gas", fr: "Eau gazeuse", en: "Sparkling water" }, preu: "2,50 €" },
    { nom: { ca: "Refrescos (Coca-Cola, Sprite, Fanta, Aquarius)", es: "Refrescos (Coca-Cola, Sprite, Fanta, Aquarius)", fr: "Sodas (Coca-Cola, Sprite, Fanta, Aquarius)", en: "Soft drinks (Coca-Cola, Sprite, Fanta, Aquarius)" }, preu: "3 €" },
    { nom: { ca: "Aigua tònica", es: "Agua tónica", fr: "Tonic", en: "Tonic water" }, preu: "2,50 €" },
    { nom: { ca: "Schweppes Zero taronja", es: "Schweppes Zero naranja", fr: "Schweppes Zero orange", en: "Schweppes Zero orange" }, preu: "2,50 €" },
    { nom: { ca: "Vichy", es: "Vichy", fr: "Vichy", en: "Vichy" }, preu: "3 €" },
  ],
  cerveses: [
    { nom: { ca: "Canya Alhambra", es: "Caña Alhambra", fr: "Pression Alhambra", en: "Alhambra draft" }, preu: "3,20 €" },
    { nom: { ca: "Gerra Alhambra", es: "Jarra Alhambra", fr: "Pichet Alhambra", en: "Alhambra pitcher" }, preu: "5 €" },
    { nom: { ca: "Alhambra Reserva", es: "Alhambra Reserva", fr: "Alhambra Reserva", en: "Alhambra Reserva" }, preu: "3,90 €" },
    { nom: { ca: "Alhambra Radler", es: "Alhambra Radler", fr: "Alhambra Radler", en: "Alhambra Radler" }, preu: "3,90 €" },
    { nom: { ca: "Mahou IPA", es: "Mahou IPA", fr: "Mahou IPA", en: "Mahou IPA" }, preu: "3,90 €" },
    { nom: { ca: "San Miguel 0.0 Torrada", es: "San Miguel 0.0 Tostada", fr: "San Miguel 0.0 Tostada", en: "San Miguel 0.0 Tostada" }, preu: "3 €" },
    { nom: { ca: "San Miguel sense gluten", es: "San Miguel sin gluten", fr: "San Miguel sans gluten", en: "San Miguel gluten-free" }, preu: "3 €" },
    { nom: { ca: "Cervesa artesanal El Gall Negre", es: "Cerveza artesanal El Gall Negre", fr: "Bière artisanale El Gall Negre", en: "El Gall Negre craft beer" }, preu: "4,70 €" },
  ],
  tragos: [
    { nom: { ca: "Gin tonic", es: "Gin tonic", fr: "Gin tonic", en: "Gin & tonic" }, preu: "7 €" },
    { nom: { ca: "Vermut", es: "Vermut", fr: "Vermouth", en: "Vermouth" }, preu: "4 €" },
    { nom: { ca: "Fernet amb Coca-Cola", es: "Fernet con Coca-Cola", fr: "Fernet-Coca", en: "Fernet and Coke" }, preu: "7 €" },
    { nom: { ca: "Whisky", es: "Whisky", fr: "Whisky", en: "Whisky" }, preu: "5 €" },
    { nom: { ca: "Rom", es: "Ron", fr: "Rhum", en: "Rum" }, preu: "4 €" },
    { nom: { ca: "Tinto de verano", es: "Tinto de verano", fr: "Tinto de verano", en: "Tinto de verano" }, preu: "3,50 €" },
  ],
  cafeteria: [
    { nom: { ca: "Cafè", es: "Café", fr: "Café", en: "Coffee" }, preu: "1,80 €" },
    { nom: { ca: "Tallat", es: "Cortado", fr: "Cortado", en: "Cortado" }, preu: "2 €" },
    { nom: { ca: "Americano", es: "Americano", fr: "Americano", en: "Americano" }, preu: "2 €" },
    { nom: { ca: "Cafè amb llet", es: "Café con leche", fr: "Café au lait", en: "White coffee" }, preu: "2,20 €" },
    { nom: { ca: "Carallet", es: "Carajillo", fr: "Carajillo", en: "Carajillo" }, preu: "3 €" },
    { nom: { ca: "Infusions", es: "Infusiones", fr: "Infusions", en: "Herbal teas" }, preu: "2 €" },
  ],
};

/* ---- Carta de vins ---- */
const VINS = {
  negres: [
    { nom: "Ugalde Crianza", origen: { ca: "Rioja, Espanya", es: "Rioja, España", fr: "Rioja, Espagne", en: "Rioja, Spain" }, tast: { ca: "Clàssic i equilibrat, criat en bota de roure.", es: "Clásico y equilibrado, criado en barrica de roble.", fr: "Classique et équilibré, élevé en fût de chêne.", en: "Classic and balanced, aged in oak barrels." }, botella: "22 €", copa: "4,50 €" },
    { nom: "Serbal Malbec 2024", origen: "Atamisque — Valle de Uco, Mendoza, Argentina", tast: { ca: "Fruits vermells, fresc i de tanins suaus.", es: "Frutos rojos, fresco y de taninos suaves.", fr: "Fruits rouges, frais, tanins souples.", en: "Red berries, fresh, soft tannins." }, botella: "28 €", copa: "" },
    { nom: "Lote 44 Malbec 2024", origen: "Cuarto Dominio — Valle de Uco, Mendoza, Argentina", tast: { ca: "Fruita negra, complex i sedós.", es: "Fruta negra, complejo y sedoso.", fr: "Fruits noirs, complexe et soyeux.", en: "Black fruit, complex and silky." }, botella: "", copa: "5,50 €" },
    { nom: "Chento Malbec 2022", origen: "Cuarto Dominio — Alto Agrelo, Mendoza, Argentina", tast: { ca: "Equilibrat i estructurat, amb fruits negres i tanins suaus.", es: "Equilibrado y estructurado, con frutos negros y taninos suaves.", fr: "Équilibré et structuré, fruits noirs et tanins souples.", en: "Balanced and structured, black fruit and soft tannins." }, botella: "32 €", copa: "" },
    { nom: "Reserva de la Familia Pinot Noir", origen: "Malma — Patagonia, Neuquén, Argentina", tast: { ca: "Lleuger i aromàtic, de tanins molt suaus.", es: "Ligero y aromático, de taninos muy suaves.", fr: "Léger et aromatique, tanins très souples.", en: "Light and aromatic, very soft tannins." }, botella: "36 €", copa: "" },
    { nom: "Gran Sombrero Malbec", origen: "Huentala Wines — Gualtallary, Valle de Uco, Mendoza, Argentina", tast: { ca: "Afruitat i sedós, de tanins suaus i rodons.", es: "Frutal y sedoso, de taninos suaves y redondos.", fr: "Fruité et soyeux, tanins souples et ronds.", en: "Fruity and silky, soft and round tannins." }, botella: "38 €", copa: "" },
    { nom: "Ari Priorat 2021", origen: { ca: "Clos Berenguer — Priorat, Tarragona, Catalunya", es: "Clos Berenguer — Priorat, Tarragona, Cataluña", fr: "Clos Berenguer — Priorat, Tarragone, Catalogne", en: "Clos Berenguer — Priorat, Tarragona, Catalonia" }, tast: { ca: "Sec, estructurat, amb notes intenses de fruita negra i espècies.", es: "Seco, estructurado, con notas intensas de fruta negra y especias.", fr: "Sec, structuré, notes intenses de fruits noirs et épices.", en: "Dry, structured, intense notes of black fruit and spice." }, botella: "38 €", copa: "" },
  ],
  blancs: [
    { nom: "Entreflores Verdejo", origen: { ca: "Príncipe de Viana — Rueda, Espanya", es: "Príncipe de Viana — Rueda, España", fr: "Príncipe de Viana — Rueda, Espagne", en: "Príncipe de Viana — Rueda, Spain" }, tast: { ca: "Fresc i aromàtic de fruites tropicals.", es: "Fresco y aromático de frutas tropicales.", fr: "Frais et aromatique, fruits tropicaux.", en: "Fresh and aromatic, tropical fruit." }, botella: "22 €", copa: "4,50 €" },
    { nom: "O Do Avó Marcelo Albariño 2024", origen: { ca: "Adegas Gran Vinum — Rías Baixas, Galícia", es: "Adegas Gran Vinum — Rías Baixas, Galicia", fr: "Adegas Gran Vinum — Rías Baixas, Galice", en: "Adegas Gran Vinum — Rías Baixas, Galicia" }, tast: { ca: "Fresc, cítric i mineral.", es: "Fresco, cítrico y mineral.", fr: "Frais, citronné et minéral.", en: "Fresh, citrusy and mineral." }, botella: "28 €", copa: "" },
    { nom: "Campgran", origen: "Cal Mandrat — Montellà i Martinet, Cerdanya", tast: { ca: "Vi blanc de proximitat, de la mateixa Cerdanya.", es: "Vino blanco de proximidad, de la propia Cerdanya.", fr: "Vin blanc de proximité, produit en Cerdagne.", en: "Local white wine, made right here in the Cerdanya." }, botella: "32 €", copa: "" },
    { nom: "Reserva de la Familia Chardonnay", origen: "Malma — Patagonia, Neuquén, Argentina", tast: { ca: "Elegant, fresc i equilibrat, amb aromes cítrics i afruitats.", es: "Elegante, fresco y equilibrado, con aromas cítricos y frutales.", fr: "Élégant, frais et équilibré, arômes d'agrumes et fruités.", en: "Elegant, fresh and balanced, citrus and fruity aromas." }, botella: "36 €", copa: "" },
    { nom: "Emendis – Nu Allongé", origen: "Cava brut rosé", tast: { ca: "Fresc, sec i elegant, amb bombolla fina i notes subtils de fruita vermella.", es: "Fresco, seco y elegante, con burbuja fina y notas sutiles de fruta roja.", fr: "Frais, sec et élégant, bulle fine, notes subtiles de fruits rouges.", en: "Fresh, dry and elegant, fine bubbles, subtle red fruit notes." }, botella: "30 €", copa: "" },
  ],
};

/* ---- Horari real (16/08/26): dinar cada dia menys dimecres, sopar nomes dv/ds ---- */
const HORARI = [
  { dow: 1, day: { ca: "Dilluns", es: "Lunes", fr: "Lundi", en: "Monday" }, hours: "13:00 – 16:00" },
  { dow: 2, day: { ca: "Dimarts", es: "Martes", fr: "Mardi", en: "Tuesday" }, hours: "13:00 – 16:00" },
  { dow: 3, day: { ca: "Dimecres", es: "Miércoles", fr: "Mercredi", en: "Wednesday" }, hours: null },
  { dow: 4, day: { ca: "Dijous", es: "Jueves", fr: "Jeudi", en: "Thursday" }, hours: "13:00 – 16:00" },
  { dow: 5, day: { ca: "Divendres", es: "Viernes", fr: "Vendredi", en: "Friday" }, hours: "13:00 – 16:00, 20:00 – 22:00" },
  { dow: 6, day: { ca: "Dissabte", es: "Sábado", fr: "Samedi", en: "Saturday" }, hours: "13:00 – 16:00, 20:00 – 22:00" },
  { dow: 0, day: { ca: "Diumenge", es: "Domingo", fr: "Dimanche", en: "Sunday" }, hours: "13:00 – 16:00" },
];

function horariHtml(dict) {
  return HORARI.map((d) => `
    <div class="horari-row">
      <span class="horari-day">${d.day[currentLang] || d.day.es}</span>
      <span class="horari-hours">${d.hours || dict["reserves.tancatLabel"]}</span>
    </div>
  `).join("");
}

function renderHorari() {
  const dict = I18N[currentLang] || I18N.es;
  document.querySelectorAll(".horari-table").forEach((el) => {
    el.innerHTML = horariHtml(dict);
  });
}

/* ---- Opinions reals (Google i Tripadvisor). Es mostren en el seu idioma original. ---- */
const REVIEWS = [
  {
    text: "Excelente!! Buenísima calidad. Un servicio excelente. Las raciones son perfectas. Buena relación calidad/precio. Sitio muy recomendable.",
    author: "Eva Colom", source: "Google", rating: 5,
  },
  {
    text: "Un acierto absoluto elegir este restaurante en nuestra visita a Martinet. La empanada y la carne estaban exquisitas. El trato cercano y cordial, profesional. Muy recomendable.",
    author: "Ramón Alarcón", source: "Google", rating: 5,
  },
  {
    text: "Hemos comido fenomenal, un sitio muy recomendable, la comida excelente. Nos ha atendido una chica argentina muy agradable y profesional. Volveremos seguro.",
    author: "Iciar Martín Muro", source: "Google", rating: 5,
  },
  {
    text: "Sitio super agradable y tranquilo, ideal para hacer un alto en el camino, ¡la terraza muy acogedora! El servicio muy atento, bueno y cercano, sin duda volveremos.",
    author: "Sergi Carrión", source: "Google", rating: 5,
  },
  {
    text: "Un restaurante pequeño, muy acogedor. La comida muy muy buena y las chicas muy amables. Un 5 estrellas. Felicidades.",
    author: "Noelia Chordà", source: "Google", rating: 5,
  },
  {
    text: "Situado en un pueblo muy pequeño en medio de las montañas catalanas, camino de Andorra, este restaurante argentino a la parrilla fue una sorpresa increíble.",
    author: "Tripadvisor", source: "Tripadvisor", rating: 5,
  },
];

/* ---- Textos en 4 idiomes ---- */
const I18N = {
  ca: {
    "nav.inici": "Inici", "nav.cuina": "La cuina", "nav.carta": "Carta",
    "nav.experiencia": "Experiència", "nav.contacte": "Contacte", "nav.reservar": "Reservar taula",
    "hero.cta1": "Reservar taula", "hero.cta2": "Veure la carta", "hero.scroll": "Descobreix-nos",
    "hero.tagline": "Cuina argentina al Pirineu",
    "hero.h1": "Arrels del Foc — Restaurant de cuina argentina a Martinet, Cerdanya",
    "brand.pillars": "Arrels · Foc · Pirineu",
    "cuina.eyebrow": "La nostra cuina",
    "cuina.title": "Arrels argentines,<br>cuina pròpia.",
    "cuina.p1": "La nostra cuina neix de l'Argentina, de la graella i de sabors que formen part de la nostra història, però evoluciona amb una mirada pròpia. Seleccionem carns, vins i productes que arriben especialment des de l'Argentina i els combinem amb producte de proximitat del Pirineu.",
    "cuina.p2": "Aquí cuinem des de zero. Empanades, salses, guarnicions, postres i cada elaboració que arriba a la taula neixen a la nostra pròpia cuina, tenint cura del producte, de cada procés i deixant sempre un lloc protagonista al foc.",
    "cuina.stat1.title": "Brasa de carbó", "cuina.stat1.desc": "El foc com a part de la nostra identitat.",
    "cuina.stat2.title": "Elaboració pròpia", "cuina.stat2.desc": "Fet a la nostra cuina, des de zero.",
    "cuina.stat3.title": "Producte de qualitat", "cuina.stat3.desc": "Triat pel que aporta al plat.",
    "team.eyebrow": "Qui som", "team.title": "Les persones darrere d'Arrels.",
    "team.intro": "Avui Arrels som Bruno, Rodrigo i Valèria. Tres persones, tres maneres d'aportar a un mateix projecte: cuina, foc i sala.<br><br>Seguim darrere de cada servei, fent créixer amb les nostres pròpies mans el restaurant que un dia vam imaginar al Pirineu.",
    "team.bruno.role": "Xef executiu · Cuina i creació",
    "team.bruno.bio": "Bruno està darrere de la visió culinària d'Arrels. Desenvolupa les receptes, busca nous sabors i combinacions per acompanyar les nostres carns a la brasa i dona forma als plats d'autor que defineixen la nostra cuina. La seva feina és trobar equilibri, identitat i personalitat en cada plat.",
    "team.rodrigo.role": "Graella · Foc i gestió",
    "team.rodrigo.bio": "Rodrigo està darrere del foc i la graella d'Arrels. La seva feina se centra en el producte, els punts de cocció i treure el màxim partit de cada tall de carn a través de la brasa. A més, participa activament en la gestió i el desenvolupament d'Arrels com a projecte.",
    "team.valeria.role": "Sala · Hospitalitat i experiència",
    "team.valeria.bio": "Valèria dirigeix la sala i l'experiència del client. És qui rep, cuida i acompanya cada taula, fent que l'experiència Arrels sigui molt més que el que hi ha al plat.",
    "team.cta": "Coneix l'equip",
    "carta.eyebrow": "La carta", "carta.title": "Del foc a la taula",
    "carta.lede": "Una carta nascuda de les nostres arrels argentines i portada a la nostra manera. Producte argentí seleccionat, producte de proximitat, elaboracions pròpies i el foc com a protagonista.",
    "carta.note": "* Carta orientativa i subjecta a mercat i temporada. Preus amb IVA inclòs.",
    "carta.veureTot": "Veure la carta completa",
    "exp.eyebrow": "Experiència Arrels", "exp.title": "Les nostres arrels.",
    "exp.lede": "Cuina argentina d'autor, al cor del Pirineu. Una cuina que neix de les nostres arrels, combina producte argentí seleccionat amb producte de proximitat i troba en el foc la seva manera d'expressar-se.",
    "opinions.eyebrow": "Opinions", "opinions.title": "El que diuen els nostres clients",
    "opinions.ratingLabel": "L'experiència de qui ja s'ha assegut a la nostra taula.",
    "opinions.count": "Més de 200 opinions a Google",
    "opinions.note": "Ressenyes reals de clients a Google i Tripadvisor.",
    "opinions.cta": "Deixa la teva ressenya a Google",
    "reserves.eyebrow": "Martinet · Cerdanya · Pirineu català", "reserves.title": "Vine a seure a la nostra taula.",
    "reserves.lede": "Truca'ns o escriu-nos per WhatsApp i et confirmem la reserva de seguida.",
    "reserves.call": "Trucar · 633 86 86 10", "reserves.whatsapp": "Reservar per WhatsApp",
    "reserves.tancatLabel": "Tancat",
    "reserves.adrecaLabel": "Adreça",
    "contacte.eyebrow": "Contacte", "contacte.title": "On som",
    "contacte.marketing": "Ens trobareu al Carrer del Segre, 13D, sobre la carretera principal de Martinet i a pocs passos del riu Segre.",
    "contacte.ubicacio": "Ubicació",
    "contacte.telefon": "Telèfon", "contacte.xarxes": "Xarxes",
    "contacte.comArribar": "Com arribar",
    "footer.tagline": "Cuina de producte i foc al cor del Pirineu català.",
    "footer.discover": "Descobreix Arrels",
    "footer.offMenu": "Fora de carta", "footer.history": "La nostra història",
    "footer.contactTitle": "Vine a veure'ns",
    "preFooter.text": "A punt per venir?",
    "cat.entrants": "Entrants", "cat.principals": "Principals", "cat.postres": "Postres",
    "cat.begudes": "Begudes", "cat.vins": "Vins",
    "begudes.sinAlcohol": "Sense alcohol", "begudes.cerveses": "Cerveses",
    "begudes.tragos": "Còctels i clàssics", "begudes.cafeteria": "Cafeteria",
    "vins.negres": "Vins negres", "vins.blancs": "Vins blancs",
    "vins.botella": "Ampolla", "vins.copa": "Copa",
  },
  es: {
    "nav.inici": "Inicio", "nav.cuina": "La cocina", "nav.carta": "Carta",
    "nav.experiencia": "Experiencia", "nav.contacte": "Contacto", "nav.reservar": "Reservar mesa",
    "hero.cta1": "Reservar mesa", "hero.cta2": "Ver la carta", "hero.scroll": "Descúbrenos",
    "hero.tagline": "Cocina argentina en los Pirineos",
    "hero.h1": "Arrels del Foc — Restaurante argentino en Martinet, Cerdanya, cerca de Andorra",
    "brand.pillars": "Raíces · Fuego · Pirineo",
    "cuina.eyebrow": "Nuestra cocina",
    "cuina.title": "Raíces argentinas,<br>cocina propia.",
    "cuina.p1": "Nuestra cocina nace de Argentina, de la parrilla y de sabores que forman parte de nuestra historia, pero evoluciona con una mirada propia. Seleccionamos carnes, vinos y productos que llegan especialmente desde Argentina y los combinamos con producto de proximidad del Pirineo.",
    "cuina.p2": "Aquí cocinamos desde cero. Empanadas, salsas, guarniciones, postres y cada elaboración que llega a la mesa nace en nuestra propia cocina, cuidando el producto, cada proceso y dejando siempre un lugar protagonista al fuego.",
    "cuina.stat1.title": "Brasa de carbón", "cuina.stat1.desc": "El fuego como parte de nuestra identidad.",
    "cuina.stat2.title": "Elaboración propia", "cuina.stat2.desc": "Hecho en nuestra cocina, desde cero.",
    "cuina.stat3.title": "Producto de calidad", "cuina.stat3.desc": "Elegido por lo que aporta al plato.",
    "team.eyebrow": "Quiénes somos", "team.title": "Las personas detrás de Arrels.",
    "team.intro": "Hoy Arrels somos Bruno, Rodrigo y Valeria. Tres personas, tres formas de aportar a un mismo proyecto: cocina, fuego y sala.<br><br>Seguimos detrás de cada servicio, haciendo crecer con nuestras propias manos el restaurante que un día imaginamos en el Pirineo.",
    "team.bruno.role": "Chef Ejecutivo · Cocina y Creación",
    "team.bruno.bio": "Bruno está detrás de la visión culinaria de Arrels. Desarrolla las recetas, busca nuevos sabores y combinaciones para acompañar nuestras carnes a la brasa y da forma a los platos de autor que definen nuestra cocina. Su trabajo está en encontrar equilibrio, identidad y personalidad en cada plato.",
    "team.rodrigo.role": "Parrilla · Fuego y Gestión",
    "team.rodrigo.bio": "Rodrigo está detrás del fuego y la parrilla de Arrels. Su trabajo se centra en el producto, los puntos de cocción y en sacar lo mejor de cada corte de carne a través de las brasas. Además, participa activamente en la gestión y en el desarrollo de Arrels como proyecto.",
    "team.valeria.role": "Sala · Hospitalidad y Experiencia",
    "team.valeria.bio": "Valeria dirige la sala y la experiencia del cliente. Es quien recibe, cuida y acompaña cada mesa, haciendo que la experiencia Arrels sea mucho más que lo que hay en el plato.",
    "team.cta": "Conoce al equipo",
    "carta.eyebrow": "La carta", "carta.title": "Del fuego a la mesa",
    "carta.lede": "Una carta nacida de nuestras raíces argentinas y llevada a nuestra manera. Producto argentino seleccionado, producto de proximidad, elaboraciones propias y el fuego como protagonista.",
    "carta.note": "* Carta orientativa y sujeta a mercado y temporada. Precios con IVA incluido.",
    "carta.veureTot": "Ver la carta completa",
    "exp.eyebrow": "Experiencia Arrels", "exp.title": "Nuestras raíces.",
    "exp.lede": "Cocina argentina de autor, en el corazón del Pirineo. Una cocina que parte de nuestras raíces, combina producto argentino seleccionado con producto de proximidad y encuentra en el fuego su forma de expresarse.",
    "opinions.eyebrow": "Opiniones", "opinions.title": "Lo que dicen nuestros clientes",
    "opinions.ratingLabel": "La experiencia de quienes ya se sentaron a nuestra mesa.",
    "opinions.count": "Más de 200 opiniones en Google",
    "opinions.note": "Reseñas reales de clientes en Google y Tripadvisor.",
    "opinions.cta": "Deja tu reseña en Google",
    "reserves.eyebrow": "Martinet · Cerdanya · Pirineo catalán", "reserves.title": "Vení a sentarte a nuestra mesa.",
    "reserves.lede": "Llámanos o escríbenos por WhatsApp y te confirmamos la reserva enseguida.",
    "reserves.call": "Llamar · 633 86 86 10", "reserves.whatsapp": "Reservar por WhatsApp",
    "reserves.tancatLabel": "Cerrado",
    "reserves.adrecaLabel": "Dirección",
    "contacte.eyebrow": "Contacto", "contacte.title": "Dónde estamos",
    "contacte.marketing": "Nos encontrarás en Carrer del Segre, 13D, sobre la carretera principal de Martinet y a pocos pasos del río Segre.",
    "contacte.ubicacio": "Ubicación",
    "contacte.telefon": "Teléfono", "contacte.xarxes": "Redes",
    "contacte.comArribar": "Cómo llegar",
    "footer.tagline": "Cocina de producto y fuego en el corazón del Pirineo catalán.",
    "footer.discover": "Descubre Arrels",
    "footer.offMenu": "Fuera de carta", "footer.history": "Nuestra historia",
    "footer.contactTitle": "Ven a vernos",
    "preFooter.text": "¿Listo para venir?",
    "cat.entrants": "Entrantes", "cat.principals": "Principales", "cat.postres": "Postres",
    "cat.begudes": "Bebidas", "cat.vins": "Vinos",
    "begudes.sinAlcohol": "Sin alcohol", "begudes.cerveses": "Cervezas",
    "begudes.tragos": "Tragos y clásicos", "begudes.cafeteria": "Cafetería",
    "vins.negres": "Vinos tintos", "vins.blancs": "Vinos blancos",
    "vins.botella": "Botella", "vins.copa": "Copa",
  },
  fr: {
    "nav.inici": "Accueil", "nav.cuina": "La cuisine", "nav.carta": "Menu",
    "nav.experiencia": "Expérience", "nav.contacte": "Contact", "nav.reservar": "Réserver une table",
    "hero.cta1": "Réserver une table", "hero.cta2": "Voir le menu", "hero.scroll": "Découvrez-nous",
    "hero.tagline": "Cuisine argentine dans les Pyrénées",
    "hero.h1": "Arrels del Foc — Restaurant argentin à Martinet, Cerdagne, près d'Andorre",
    "brand.pillars": "Racines · Feu · Pyrénées",
    "cuina.eyebrow": "Notre cuisine",
    "cuina.title": "Racines argentines,<br>cuisine maison.",
    "cuina.p1": "Notre cuisine naît d'Argentine, du grill et de saveurs qui font partie de notre histoire, mais elle évolue avec un regard qui nous est propre. Nous sélectionnons viandes, vins et produits venus spécialement d'Argentine et les combinons à des produits de proximité des Pyrénées.",
    "cuina.p2": "Ici, on cuisine à partir de zéro. Empanadas, sauces, accompagnements, desserts et chaque élaboration qui arrive à table naissent dans notre propre cuisine, en prenant soin du produit, de chaque étape, et en laissant toujours au feu une place de choix.",
    "cuina.stat1.title": "Braise de charbon", "cuina.stat1.desc": "Le feu comme partie de notre identité.",
    "cuina.stat2.title": "Élaboration maison", "cuina.stat2.desc": "Fait dans notre cuisine, à partir de zéro.",
    "cuina.stat3.title": "Produit de qualité", "cuina.stat3.desc": "Choisi pour ce qu'il apporte au plat.",
    "team.eyebrow": "Qui sommes-nous", "team.title": "L'équipe derrière Arrels.",
    "team.intro": "Aujourd'hui, Arrels, c'est Bruno, Rodrigo et Valeria. Trois personnes, trois façons de contribuer à un même projet : cuisine, feu et salle.<br><br>Nous restons derrière chaque service, faisant grandir de nos propres mains le restaurant que nous avons un jour imaginé dans les Pyrénées.",
    "team.bruno.role": "Chef exécutif · Cuisine et création",
    "team.bruno.bio": "Bruno est à l'origine de la vision culinaire d'Arrels. Il élabore les recettes, explore de nouvelles saveurs et associations pour accompagner nos viandes grillées et donne forme aux plats signature qui définissent notre cuisine. Son travail consiste à trouver l'équilibre, l'identité et la personnalité de chaque plat.",
    "team.rodrigo.role": "Grill · Feu et gestion",
    "team.rodrigo.bio": "Rodrigo est derrière le feu et le grill d'Arrels. Son travail se concentre sur le produit, les points de cuisson et sur la façon de tirer le meilleur de chaque pièce de viande grâce à la braise. Il participe également activement à la gestion et au développement d'Arrels en tant que projet.",
    "team.valeria.role": "Salle · Hospitalité et expérience",
    "team.valeria.bio": "Valeria dirige la salle et l'expérience client. C'est elle qui accueille, prend soin et veille sur chaque table, faisant de l'expérience Arrels bien plus que ce qui se trouve dans l'assiette.",
    "team.cta": "Découvrir l'équipe",
    "carta.eyebrow": "Le menu", "carta.title": "Du feu à la table",
    "carta.lede": "Un menu né de nos racines argentines, porté à notre façon. Produit argentin sélectionné, produit de proximité, élaborations maison et le feu comme protagoniste.",
    "carta.note": "* Menu indicatif, selon le marché et la saison. Prix TVA incluse.",
    "carta.veureTot": "Voir la carte complète",
    "exp.eyebrow": "Expérience Arrels", "exp.title": "Nos racines.",
    "exp.lede": "Cuisine argentine d'auteur, au cœur des Pyrénées. Une cuisine qui puise dans nos racines, associe un produit argentin sélectionné à un produit de proximité, et trouve dans le feu sa façon de s'exprimer.",
    "opinions.eyebrow": "Avis", "opinions.title": "Ce que disent nos clients",
    "opinions.ratingLabel": "L'expérience de ceux qui se sont déjà assis à notre table.",
    "opinions.count": "Plus de 200 avis sur Google",
    "opinions.note": "Avis authentiques de clients sur Google et Tripadvisor.",
    "opinions.cta": "Laissez votre avis sur Google",
    "reserves.eyebrow": "Martinet · Cerdagne · Pyrénées catalanes", "reserves.title": "Venez vous asseoir à notre table.",
    "reserves.lede": "Appelez-nous ou écrivez-nous sur WhatsApp, confirmation immédiate.",
    "reserves.call": "Appeler · 633 86 86 10", "reserves.whatsapp": "Réserver par WhatsApp",
    "reserves.tancatLabel": "Fermé",
    "reserves.adrecaLabel": "Adresse",
    "contacte.eyebrow": "Contact", "contacte.title": "Où sommes-nous",
    "contacte.marketing": "Vous nous trouverez au Carrer del Segre, 13D, sur la route principale de Martinet, à quelques pas de la rivière Segre.",
    "contacte.ubicacio": "Adresse",
    "contacte.telefon": "Téléphone", "contacte.xarxes": "Réseaux",
    "contacte.comArribar": "Comment venir",
    "footer.tagline": "Cuisine de produit et de feu au cœur des Pyrénées catalanes.",
    "footer.discover": "Découvrir Arrels",
    "footer.offMenu": "Hors menu", "footer.history": "Notre histoire",
    "footer.contactTitle": "Venez nous voir",
    "preFooter.text": "Prêt à venir ?",
    "cat.entrants": "Entrées", "cat.principals": "Plats", "cat.postres": "Desserts",
    "cat.begudes": "Boissons", "cat.vins": "Vins",
    "begudes.sinAlcohol": "Sans alcool", "begudes.cerveses": "Bières",
    "begudes.tragos": "Cocktails classiques", "begudes.cafeteria": "Café",
    "vins.negres": "Vins rouges", "vins.blancs": "Vins blancs",
    "vins.botella": "Bouteille", "vins.copa": "Verre",
  },
  en: {
    "nav.inici": "Home", "nav.cuina": "Our kitchen", "nav.carta": "Menu",
    "nav.experiencia": "Experience", "nav.contacte": "Contact", "nav.reservar": "Book a table",
    "hero.cta1": "Book a table", "hero.cta2": "See the menu", "hero.scroll": "Discover us",
    "hero.tagline": "Argentine cuisine in the Pyrenees",
    "hero.h1": "Arrels del Foc — Argentine restaurant in Martinet, Cerdanya, near Andorra",
    "brand.pillars": "Roots · Fire · Pyrenees",
    "cuina.eyebrow": "Our kitchen",
    "cuina.title": "Argentine roots,<br>our own kitchen.",
    "cuina.p1": "Our kitchen is rooted in Argentina, in the grill and in flavours that are part of our history, but it evolves with a voice of its own. We select meats, wines and products that come especially from Argentina and combine them with local produce from the Pyrenees.",
    "cuina.p2": "Here, we cook from scratch. Empanadas, sauces, sides, desserts and every preparation that reaches the table are born in our own kitchen, taking care of the produce, of every process, and always giving fire the leading role.",
    "cuina.stat1.title": "Charcoal embers", "cuina.stat1.desc": "Fire as part of our identity.",
    "cuina.stat2.title": "Made in-house", "cuina.stat2.desc": "Made in our kitchen, from scratch.",
    "cuina.stat3.title": "Quality produce", "cuina.stat3.desc": "Chosen for what it brings to the dish.",
    "team.eyebrow": "Who we are", "team.title": "The people behind Arrels.",
    "team.intro": "Today, Arrels is Bruno, Rodrigo and Valeria. Three people, three ways of contributing to the same project: kitchen, fire and dining room.<br><br>We're still behind every service, growing with our own hands the restaurant we once imagined in the Pyrenees.",
    "team.bruno.role": "Executive Chef · Kitchen & Creation",
    "team.bruno.bio": "Bruno is behind Arrels' culinary vision. He develops the recipes, explores new flavours and pairings to accompany our chargrilled meats, and shapes the signature dishes that define our kitchen. His work is about finding balance, identity and personality in every dish.",
    "team.rodrigo.role": "Grill · Fire & Management",
    "team.rodrigo.bio": "Rodrigo is behind Arrels' fire and grill. His work is focused on the produce, the cooking points, and getting the best out of every cut of meat through the embers. He's also actively involved in managing and developing Arrels as a project.",
    "team.valeria.role": "Floor · Hospitality & Experience",
    "team.valeria.bio": "Valeria leads the dining room and the guest experience. She's the one who welcomes, looks after and takes care of every table, making the Arrels experience about much more than what's on the plate.",
    "team.cta": "Meet our team",
    "carta.eyebrow": "The menu", "carta.title": "From the fire to the table",
    "carta.lede": "A menu born from our Argentine roots, made our own way. Selected Argentine produce, local ingredients, in-house preparations, and fire at the heart of it all.",
    "carta.note": "* Menu indicative, subject to market and season. Prices include VAT.",
    "carta.veureTot": "See the full menu",
    "exp.eyebrow": "The Arrels experience", "exp.title": "Our roots.",
    "exp.lede": "Signature Argentine cooking, in the heart of the Pyrenees. A cuisine that draws on our roots, combines selected Argentine produce with local ingredients, and finds its way of expressing itself through fire.",
    "opinions.eyebrow": "Reviews", "opinions.title": "What our guests say",
    "opinions.ratingLabel": "The experience of those who've already sat at our table.",
    "opinions.count": "200+ reviews on Google",
    "opinions.note": "Real customer reviews from Google and Tripadvisor.",
    "opinions.cta": "Leave your review on Google",
    "reserves.eyebrow": "Martinet · Cerdanya · Catalan Pyrenees", "reserves.title": "Come sit at our table.",
    "reserves.lede": "Call us or message us on WhatsApp and we'll confirm your booking right away.",
    "reserves.call": "Call · 633 86 86 10", "reserves.whatsapp": "Book via WhatsApp",
    "reserves.tancatLabel": "Closed",
    "reserves.adrecaLabel": "Address",
    "contacte.eyebrow": "Contact", "contacte.title": "Find us",
    "contacte.marketing": "You'll find us at Carrer del Segre, 13D, on Martinet's main road and just steps from the Segre river.",
    "contacte.ubicacio": "Location",
    "contacte.telefon": "Phone", "contacte.xarxes": "Social",
    "contacte.comArribar": "Get directions",
    "footer.tagline": "Produce and fire cooking in the heart of the Catalan Pyrenees.",
    "footer.discover": "Discover Arrels",
    "footer.offMenu": "Off the menu", "footer.history": "Our story",
    "footer.contactTitle": "Come see us",
    "preFooter.text": "Ready to come?",
    "cat.entrants": "Starters", "cat.principals": "Mains", "cat.postres": "Desserts",
    "cat.begudes": "Drinks", "cat.vins": "Wines",
    "begudes.sinAlcohol": "Soft drinks", "begudes.cerveses": "Beers",
    "begudes.tragos": "Cocktails & classics", "begudes.cafeteria": "Coffee",
    "vins.negres": "Red wines", "vins.blancs": "White wines",
    "vins.botella": "Bottle", "vins.copa": "Glass",
  },
};

let currentLang = "ca";

function applyLanguage(lang) {
  const dict = I18N[lang] || I18N.ca;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });
  document.querySelectorAll("#lang-switch button").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  renderCarta();
  renderHorari();
  try { localStorage.setItem("arrels-lang", lang); } catch (e) {}
}

function initLangSwitch() {
  const wrap = document.getElementById("lang-switch");
  if (!wrap) return;
  wrap.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
  });
  let saved = "ca";
  try { saved = localStorage.getItem("arrels-lang") || "ca"; } catch (e) {}
  applyLanguage(saved);
}

/* ---- La Carta: entrants/principals/postres (fotos+preu) + begudes/vins (llistes) com a pestanyes ---- */
const CARTA_TABS = ["entrants", "principals", "postres", "begudes", "vins"];

function dishGridHtml(key) {
  const grid = document.createElement("div");
  grid.className = "carta-grid";
  CARTA[key].forEach((plat) => {
    const item = document.createElement("div");
    item.className = "dish" + (plat.img ? " dish--photo" : " dish--text");
    const nomText = plat.nom ? (plat.nom[currentLang] || plat.nom.es) : "";
    const descText = plat.desc ? (plat.desc[currentLang] || plat.desc.es) : "";
    const descHtml = descText ? `<p class="dish-desc">${descText}</p>` : "";
    const priceHtml = plat.preu ? `<span class="dish-price">${plat.preu}</span>` : "";
    const mediaHtml = plat.img
      ? `<div class="dish-media"><img src="${plat.img}" alt="${nomText} — Arrels del Foc, restaurant argentí a Martinet" loading="lazy"></div>`
      : "";
    item.innerHTML = `
      ${mediaHtml}
      <div class="dish-body">
        <div class="dish-top">
          <h3 class="dish-name">${nomText}</h3>
          ${priceHtml}
        </div>
        ${descHtml}
      </div>
    `;
    grid.appendChild(item);
  });
  return grid;
}

function begudesHtml(dict) {
  const drinkGroup = (titleKey, items) => `
    <div class="price-group">
      <h4>${dict[titleKey]}</h4>
      ${items.map((d) => `<div class="price-row"><span>${d.nom[currentLang] || d.nom.ca}</span><span class="price-row-price">${d.preu}</span></div>`).join("")}
    </div>
  `;
  return `
    <div class="price-columns">
      ${drinkGroup("begudes.sinAlcohol", BEGUDES.sinAlcohol)}
      ${drinkGroup("begudes.cerveses", BEGUDES.cerveses)}
      ${drinkGroup("begudes.tragos", BEGUDES.tragos)}
      ${drinkGroup("begudes.cafeteria", BEGUDES.cafeteria)}
    </div>
  `;
}

function vinsHtml(dict) {
  const wineGroup = (titleKey, items) => `
    <div class="price-group price-group--vins">
      <h4>${dict[titleKey]}</h4>
      ${items.map((v) => `
        <div class="wine-row">
          <div class="wine-info">
            <span class="wine-name">${v.nom}</span>
            <span class="wine-origin">${typeof v.origen === "string" ? v.origen : (v.origen[currentLang] || v.origen.ca)}</span>
            <span class="wine-tast">${(v.tast[currentLang] || v.tast.ca)}</span>
          </div>
          <div class="wine-price">
            ${v.botella ? `<span>${dict["vins.botella"]} ${v.botella}</span>` : ""}
            ${v.copa ? `<span>${dict["vins.copa"]} ${v.copa}</span>` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  `;
  return `
    <div class="price-columns price-columns--vins">
      ${wineGroup("vins.negres", VINS.negres)}
      ${wineGroup("vins.blancs", VINS.blancs)}
    </div>
  `;
}

function renderCarta() {
  const panelsWrap = document.getElementById("carta-panels");
  const tabsWrap = document.getElementById("carta-tabs");
  if (!panelsWrap || !tabsWrap) return;

  const activeBefore = document.querySelector(".carta-tab.is-active");
  const activeKey = activeBefore ? activeBefore.dataset.target : CARTA_TABS[0];

  tabsWrap.innerHTML = "";
  panelsWrap.innerHTML = "";
  const dict = I18N[currentLang] || I18N.ca;

  CARTA_TABS.forEach((key) => {
    const isActive = key === activeKey;
    const tab = document.createElement("button");
    tab.className = "carta-tab" + (isActive ? " is-active" : "");
    tab.textContent = dict["cat." + key] || key;
    tab.dataset.target = key;
    tab.addEventListener("click", () => activateTab(key));
    tabsWrap.appendChild(tab);

    const panel = document.createElement("div");
    panel.className = "carta-panel" + (isActive ? " is-active" : "");
    panel.id = `panel-${key}`;

    if (key === "begudes") {
      panel.innerHTML = begudesHtml(dict);
    } else if (key === "vins") {
      panel.innerHTML = vinsHtml(dict);
    } else {
      panel.appendChild(dishGridHtml(key));
    }
    panelsWrap.appendChild(panel);
  });
}

function activateTab(key) {
  document.querySelectorAll(".carta-tab").forEach((t) => {
    t.classList.toggle("is-active", t.dataset.target === key);
  });
  document.querySelectorAll(".carta-panel").forEach((p) => {
    p.classList.toggle("is-active", p.id === `panel-${key}`);
  });
}

/* ---- Opinions ---- */
function renderReviews() {
  const wrap = document.getElementById("opinions-grid");
  if (!wrap) return;
  wrap.innerHTML = "";
  const stars = (n) => "★".repeat(n) + "☆".repeat(5 - n);
  REVIEWS.forEach((r) => {
    const card = document.createElement("div");
    card.className = "opinion-card reveal";
    card.innerHTML = `
      <span class="opinion-stars">${stars(r.rating || 5)}</span>
      <p class="opinion-text">“${r.text}”</p>
      <span class="opinion-author">${r.author} <span class="opinion-source">· ${r.source}</span></span>
    `;
    wrap.appendChild(card);
  });
}

/* ---- Header: canvi d'estil en fer scroll ---- */
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---- Menu mobil ---- */
function initMobileNav() {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".mobile-nav");
  if (!burger || !nav) return;
  const close = () => {
    nav.classList.remove("is-open");
    document.body.style.overflow = "";
  };
  burger.addEventListener("click", () => {
    const willOpen = !nav.classList.contains("is-open");
    nav.classList.toggle("is-open", willOpen);
    document.body.style.overflow = willOpen ? "hidden" : "";
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
}

/* ---- Reveal on scroll ---- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !els.length) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  els.forEach((el) => io.observe(el));
}

/* ---- Placeholders de foto amb fallback ---- */
function initPhotoFallbacks() {
  document.querySelectorAll(".photo[data-src]").forEach((el) => {
    const src = el.dataset.src;
    const img = new Image();
    img.onload = () => {
      el.style.backgroundImage = `url("${src}")`;
      el.classList.add("photo--has-img");
    };
    img.src = src;
  });
}

/* ---- Logo amb fallback textual ---- */
function showLogoFallback(img) {
  img.style.display = "none";
  const fallback = img.parentElement.querySelector(".brand-fallback");
  if (fallback) fallback.style.display = "flex";
}

function initLogoFallback() {
  document.querySelectorAll("img.logo-img").forEach((img) => {
    if (img.complete && img.naturalWidth === 0) {
      showLogoFallback(img);
    } else {
      img.addEventListener("error", () => showLogoFallback(img));
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initLangSwitch();
  renderReviews();
  initHeaderScroll();
  initMobileNav();
  initReveal();
  initPhotoFallbacks();
  initLogoFallback();
  document.getElementById("year").textContent = new Date().getFullYear();
});
