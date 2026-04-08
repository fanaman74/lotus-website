export const menuSections = [
  {
    id: 'thai',
    name: 'Specialites Thailandaises',
    categories: [
      {
        id: 'thai_potages',
        name: 'Potages',
        items: [
          { id: 'th01', num: '01', name: 'Tom yam kai', desc: 'Poulet a la citronnelle', priceRestaurant: 6.50, priceTraiteur: 5.50 },
          { id: 'th02', num: '02', name: 'Tom ka kai', desc: 'Poulet, lait de coco', priceRestaurant: 7.00, priceTraiteur: 5.50 },
          { id: 'th03', num: '03', name: 'Tom yam khung', desc: 'Scampis a la citronnelle', priceRestaurant: 6.50, priceTraiteur: 6.00 },
        ]
      },
      {
        id: 'thai_entrees',
        name: 'Entrees',
        items: [
          { id: 'th04', num: '04', name: 'Satay poulet', desc: 'Brochettes de poulet', priceRestaurant: 7.00, priceTraiteur: 6.50 },
          { id: 'th4a', num: '4a', name: 'Croquettes Thai', desc: '', priceRestaurant: 6.50, priceTraiteur: 6.00 },
          { id: 'th05', num: '05', name: 'Pai kai tod', desc: 'Ailes de poulet farcies', priceRestaurant: 7.50, priceTraiteur: null },
          { id: 'th06', num: '06', name: 'Scampis a la Coriandre', desc: '', priceRestaurant: 10.00, priceTraiteur: 9.50 },
          { id: 'th07', num: '07', name: 'Raviolis de scampis', desc: 'Et viande', priceRestaurant: 7.50, priceTraiteur: 7.00 },
          { id: 'th08', num: '08', name: 'Salade de poulet', desc: 'Aux herbes fraiches', priceRestaurant: 8.00, priceTraiteur: 7.50 },
          { id: 'th09', num: '09', name: 'Salade de boeuf', desc: 'Legerement grille au citron', priceRestaurant: 10.00, priceTraiteur: 9.50 },
          { id: 'th10', num: '10', name: 'Salade de scampis', desc: '', priceRestaurant: 10.00, priceTraiteur: null },
          { id: 'th11', num: '11', name: 'Homok', desc: 'Souffles de poulet, coco, curry', priceRestaurant: 7.50, priceTraiteur: null },
        ]
      },
      {
        id: 'thai_volailles',
        name: 'Volailles',
        items: [
          { id: 'th12', num: '12', name: 'Poulet grille', desc: 'A la citronnelle ou sauce Tom Yam', priceRestaurant: 13.50, priceTraiteur: 12.50 },
          { id: 'th13', num: '13', name: 'Poulet saute au basilic', desc: 'Avec legumes', priceRestaurant: 13.50, priceTraiteur: 12.50 },
          { id: 'th14', num: '14', name: 'Curry rouge au poulet', desc: 'Cassolette au coco', priceRestaurant: 13.50, priceTraiteur: 12.50 },
          { id: 'th15', num: '15', name: 'Canard au curry rouge', desc: 'Cassolette', priceRestaurant: 19.00, priceTraiteur: null },
          { id: 'th16', num: '16', name: 'Canard laque', desc: 'Avec crepes et poireaux', priceRestaurant: 19.00, priceTraiteur: null },
        ]
      },
      {
        id: 'thai_viandes',
        name: 'Porc & Boeuf',
        items: [
          { id: 'th17', num: '17', name: 'Porc caramelise', desc: 'Piquant', priceRestaurant: 14.00, priceTraiteur: 13.50 },
          { id: 'th18', num: '18', name: 'Boeuf piquant au basilic', desc: '', priceRestaurant: 16.00, priceTraiteur: 14.50 },
          { id: 'th19', num: '19', name: 'Boeuf au curry rouge', desc: 'Lait de coco et cacahuetes', priceRestaurant: 16.00, priceTraiteur: 14.50 },
          { id: 'th20', num: '20', name: 'Boeuf au curry vert', desc: 'Aubergines thai', priceRestaurant: 16.00, priceTraiteur: 14.50 },
        ]
      },
      {
        id: 'thai_poissons',
        name: 'Poissons & Crustaces',
        items: [
          { id: 'th21', num: '21', name: 'Scampis grilles', desc: 'Au lait de coco', priceRestaurant: 16.00, priceTraiteur: 14.50 },
          { id: 'th22', num: '22', name: 'Teppan de scampis', desc: 'Legumes, piquant', priceRestaurant: 16.00, priceTraiteur: 14.50 },
          { id: 'th23', num: '23', name: 'Croustillons de poisson', desc: 'Sauce coriandre ou aigre-douce', priceRestaurant: 14.00, priceTraiteur: 13.50 },
          { id: 'th24', num: '24', name: 'Teppan de fruits de mer', desc: 'St-Jacques, scampis, calamars, poisson', priceRestaurant: 19.00, priceTraiteur: null },
          { id: 'th25', num: '25', name: 'Cassolette fruits de mer au curry', desc: 'St-Jacques, scampis, calamars, poisson', priceRestaurant: 19.00, priceTraiteur: null },
          { id: 'th26', num: '26', name: 'Gambas grillees', desc: 'A la citronnelle', priceRestaurant: 17.00, priceTraiteur: 15.50 },
          { id: 'th27', num: '27', name: 'Homok de saumon', desc: 'En feuille de bananier', priceRestaurant: 17.00, priceTraiteur: 15.50 },
        ]
      },
      {
        id: 'thai_riz',
        name: 'Riz',
        items: [
          { id: 'th29', num: '29', name: 'Riz saute aux legumes', desc: 'Vegetarien', priceRestaurant: 8.00, priceTraiteur: 8.00 },
          { id: 'th30', num: '30', name: 'Riz saute au poulet', desc: '', priceRestaurant: 10.00, priceTraiteur: 10.50 },
          { id: 'th31', num: '31', name: 'Riz saute Special Mix', desc: '', priceRestaurant: 13.00, priceTraiteur: 13.00 },
          { id: 'th32', num: '32', name: 'Riz saute aux scampis', desc: '', priceRestaurant: 14.00, priceTraiteur: 14.50 },
          { id: 'th33', num: '33', name: 'Vermicelles de riz aux nems', desc: '', priceRestaurant: 10.00, priceTraiteur: null },
          { id: 'th34', num: '34', name: 'Vermicelles de riz au boeuf', desc: 'Saute a la citronnelle', priceRestaurant: 13.00, priceTraiteur: null },
        ]
      },
    ]
  },
  {
    id: 'viet',
    name: 'Specialites Vietnamiennes',
    categories: [
      {
        id: 'viet_potages',
        name: 'Potages',
        items: [
          { id: 'vn01', num: '01', name: 'Potage Saigon', desc: 'Scampis, viande, vermicelles', priceRestaurant: 6.50, priceTraiteur: 6.50 },
          { id: 'vn02', num: '02', name: 'Potage au poivre oriental', desc: '', priceRestaurant: 6.00, priceTraiteur: 5.50 },
          { id: 'vn2a', num: '2a', name: 'Potage aux legumes frais', desc: '', priceRestaurant: 6.00, priceTraiteur: 5.50 },
          { id: 'vn03', num: '03', name: 'Potage raviolis Wan Tan', desc: 'Langoustines et viande', priceRestaurant: 6.50, priceTraiteur: 6.00 },
          { id: 'vn04', num: '04', name: 'Potage asperges crabe', desc: 'Chair de crabe', priceRestaurant: 7.00, priceTraiteur: null },
        ]
      },
      {
        id: 'viet_entrees',
        name: 'Entrees',
        items: [
          { id: 'vn05', num: '05', name: 'Nems', desc: 'Rouleaux chauds aux langoustines, viandes', priceRestaurant: 7.00, priceTraiteur: 6.50 },
          { id: 'vn06', num: '06', name: 'Rouleaux de printemps', desc: 'Scampis et viande, froids', priceRestaurant: 7.00, priceTraiteur: 7.00 },
          { id: 'vn07', num: '07', name: 'Loempia au poulet', desc: 'Sauce aigre-douce', priceRestaurant: 6.00, priceTraiteur: 5.50 },
          { id: 'vn08', num: '08', name: 'Eventail de scampis croquants', desc: '', priceRestaurant: 9.00, priceTraiteur: 8.00 },
          { id: 'vn09', num: '09', name: 'Assiette maison', desc: 'Min. 2 couverts — brochettes, nems, raviolis, beignets, salade', priceRestaurant: 13.00, priceTraiteur: 11.50 },
        ]
      },
      {
        id: 'viet_dimsum',
        name: 'Dim Sum (a la vapeur)',
        items: [
          { id: 'vn10', num: '10', name: 'Bouchees de porc ou poulet', desc: '', priceRestaurant: 6.00, priceTraiteur: 5.50 },
          { id: 'vn11', num: '11', name: 'Bouchees de langoustines', desc: 'Ou coquilles St-Jacques', priceRestaurant: 6.50, priceTraiteur: 6.00 },
          { id: 'vn12', num: '12', name: 'Assortiment de Dim Sum', desc: '', priceRestaurant: 10.00, priceTraiteur: 9.50 },
        ]
      },
      {
        id: 'viet_volailles',
        name: 'Volailles',
        items: [
          { id: 'vn13', num: '13', name: 'Poulet aux ananas frais', desc: '', priceRestaurant: 13.50, priceTraiteur: 12.50 },
          { id: 'vn14', num: '14', name: 'Poulet imperial piquant', desc: '', priceRestaurant: 13.50, priceTraiteur: 12.50 },
          { id: 'vn15', num: '15', name: 'Poulet aux 3 champignons', desc: '', priceRestaurant: 13.50, priceTraiteur: 12.50 },
          { id: 'vn16', num: '16', name: "Canard a l'orange", desc: '', priceRestaurant: 19.00, priceTraiteur: null },
          { id: 'vn17', num: '17', name: 'Canard fondant', desc: 'Specialite maison — min. 2 couverts', priceRestaurant: 20.00, priceTraiteur: null },
        ]
      },
      {
        id: 'viet_viandes',
        name: 'Porc & Boeuf',
        items: [
          { id: 'vn18', num: '18', name: 'Porc sauce aigre-douce', desc: '', priceRestaurant: 14.00, priceTraiteur: 13.50 },
          { id: 'vn19', num: '19', name: 'Porc laque au miel', desc: '', priceRestaurant: 14.00, priceTraiteur: 13.50 },
          { id: 'vn20', num: '20', name: 'Boeuf grille facon du Chef', desc: 'Aux vermicelles', priceRestaurant: 17.00, priceTraiteur: 15.50 },
          { id: 'vn21', num: '21', name: 'Boeuf satay piquant', desc: '', priceRestaurant: 16.00, priceTraiteur: 14.50 },
          { id: 'vn22', num: '22', name: 'Les Huit Delices', desc: 'Porc, poulet, scampis, calamars, legumes', priceRestaurant: 16.00, priceTraiteur: 15.50 },
        ]
      },
      {
        id: 'viet_poissons',
        name: 'Poissons & Crustaces',
        items: [
          { id: 'vn23', num: '23', name: 'Calamars croquants', desc: '', priceRestaurant: 14.00, priceTraiteur: null },
          { id: 'vn24', num: '24', name: 'Beignets de scampis', desc: "A l'aigre-doux", priceRestaurant: 15.00, priceTraiteur: 14.50 },
          { id: 'vn25', num: '25', name: 'Marmite du Pecheur', desc: 'St-Jacques, scampis, calamars, poisson', priceRestaurant: 19.00, priceTraiteur: null },
          { id: 'vn26', num: '26', name: 'Saumon frais', desc: 'Au gingembre et limon', priceRestaurant: 17.00, priceTraiteur: 15.50 },
          { id: 'vn27', num: '27', name: "Cuisses de grenouilles a l'ail", desc: '', priceRestaurant: 17.00, priceTraiteur: null },
          { id: 'vn28', num: '28', name: 'Cuisses de grenouilles', desc: 'A la citronnelle', priceRestaurant: 17.00, priceTraiteur: null },
        ]
      },
      {
        id: 'viet_riz',
        name: 'Riz',
        items: [
          { id: 'vn29', num: '29', name: 'Riz saute aux legumes', desc: 'Vegetarien', priceRestaurant: 9.00, priceTraiteur: 8.00 },
          { id: 'vn30', num: '30', name: 'Riz saute au poulet', desc: '', priceRestaurant: 11.00, priceTraiteur: 10.50 },
          { id: 'vn31', num: '31', name: 'Riz saute Special Mix', desc: '', priceRestaurant: 14.00, priceTraiteur: 13.00 },
          { id: 'vn32', num: '32', name: 'Riz saute aux scampis', desc: '', priceRestaurant: 15.00, priceTraiteur: 14.50 },
          { id: 'vn33', num: '33', name: 'Vermicelles de riz aux nems', desc: '', priceRestaurant: 11.00, priceTraiteur: null },
          { id: 'vn34', num: '34', name: 'Vermicelles de riz au boeuf', desc: 'Saute a la citronnelle', priceRestaurant: 14.00, priceTraiteur: null },
        ]
      },
      {
        id: 'viet_nouilles',
        name: 'Nouilles',
        items: [
          { id: 'vn35', num: '35', name: 'Nouilles sautees legumes', desc: 'Vegetarien', priceRestaurant: 10.00, priceTraiteur: 9.50 },
          { id: 'vn36', num: '36', name: 'Nouilles sautees poulet', desc: '', priceRestaurant: 11.00, priceTraiteur: 10.50 },
          { id: 'vn37', num: '37', name: 'Nouilles sautees porc laque', desc: '', priceRestaurant: 13.00, priceTraiteur: 12.50 },
          { id: 'vn38', num: '38', name: 'Nouilles Facon du Chef', desc: '', priceRestaurant: 14.00, priceTraiteur: 13.50 },
          { id: 'vn39', num: '39', name: 'Nouilles sautees scampis', desc: '', priceRestaurant: 15.00, priceTraiteur: 14.50 },
          { id: 'vn40', num: '40', name: 'Grande soupe Pho au boeuf', desc: 'Tonkinoise', priceRestaurant: 13.00, priceTraiteur: null },
          { id: 'vn41', num: '41', name: 'Grande soupe Saigon', desc: '', priceRestaurant: 13.00, priceTraiteur: null },
        ]
      },
      {
        id: 'viet_vegetariens',
        name: 'Vegetariens',
        items: [
          { id: 'vn42', num: '42', name: 'Legumes frais sautes', desc: '', priceRestaurant: 11.00, priceTraiteur: 10.50 },
          { id: 'vn43', num: '43', name: "L'Assiette du Bonze", desc: 'Assortiment de legumes et tofu', priceRestaurant: 13.00, priceTraiteur: 12.50 },
          { id: 'vn44', num: '44', name: 'Tofu risole', desc: 'A la citronnelle', priceRestaurant: 13.00, priceTraiteur: 12.50 },
          { id: 'vn45', num: '45', name: 'Cassolette de legumes au curry', desc: '', priceRestaurant: 13.00, priceTraiteur: 12.50 },
        ]
      },
    ]
  }
];

// Keep a flat list for the ordering system — only items with traiteur prices (takeaway-available)
export const orderableItems = menuSections.flatMap(section =>
  section.categories.flatMap(cat =>
    cat.items.filter(item => item.priceTraiteur !== null).map(item => ({
      id: item.id,
      name: item.name,
      desc: item.desc,
      price: item.priceTraiteur,
      category: cat.name,
      section: section.name,
    }))
  )
);

// Featured dishes for the FeaturedDishes section
export const featuredDishes = [
  { id: 'th03', name: 'Tom Yam Khung', desc: 'Scampis a la citronnelle', price: 6.50, image: 'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'vn05', name: 'Nems Vietnamiens', desc: 'Rouleaux chauds aux langoustines', price: 7.00, image: 'https://images.pexels.com/photos/6646069/pexels-photo-6646069.jpeg?auto=compress&cs=tinysrgb&w=600' },
  { id: 'vn40', name: 'Pho Bo', desc: 'Grande soupe tonkinoise au boeuf', price: 13.00, image: 'https://images.pexels.com/photos/2133989/pexels-photo-2133989.jpeg?auto=compress&cs=tinysrgb&w=600' },
];
