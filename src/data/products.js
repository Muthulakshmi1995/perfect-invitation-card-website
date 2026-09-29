
export const A='/assets/';
export const assets={
 logo:'logo.png',
 hero:'hero.png',
 laser:'laser.jpg',
 hindu:'hindu-home.png',
 luxury:'luxury.png',
 floral:'floral.png',
 beach:'beach-theme.png',
 birds:'birds.png',
 palace:'palace.png',
 blue:'blue.png',
 brown:'brown.jpg',
 red:'maroon-rangoli.png',
 digital:'digital-invite.png',
 christian:'christian.png',
 muslim:'muslim.png',
 muslimCouple:'muslim-couple.png',
 couple:'couple.png',
 vintage:'classic-scroll.png',
 nepali:'nepali.png',
 green:'green.png',
 gold:'gold.png',
 gate:'gate.png',
 emerald:'emerald.png'
};
export const img=k=>A+assets[k];

export const products=[
 {id:'p1',name:'Red Vertical Personal Invite with Bride And Groom Names',price:7.50,img:A+'personal-bride.png',category:'Wedding Cards',type:'Hindu'},
 {id:'p2',name:'Brown with Vingayagar Picture Invite with Bride And Groom Names',price:7.00,img:img('brown'),category:'Wedding Cards',type:'Hindu'},
 {id:'p3',name:'Maroon Card with Rangoli Theme Personal Invite with Bride And Groom Names',price:9.00,img:A+'maroon-rangoli.png',category:'Wedding Cards',type:'Hindu'},
 {id:'p4',name:'Elegant Floral Dusty Blue Christian Invitation',price:18.50,img:img('christian'),category:'Wedding Cards',type:'Christian'},
 {id:'p5',name:'Classic Blue White Muslim Wedding Invitation',price:16.00,img:img('blue'),category:'Wedding Cards',type:'Muslim'},
 {id:'p6',name:'Watercolor Arabian Lattice Muslim Invitation',price:17.50,img:img('muslim'),category:'Wedding Cards',type:'Muslim'},
 {id:'p7',name:'Luxury Gold Floral Wedding Invite',price:25.00,img:img('luxury'),category:'Wedding Cards',type:'Luxury'},
 {id:'p8',name:'Golden Peacock Luxury Wedding Card',price:28.00,img:img('emerald'),category:'Wedding Cards',type:'Luxury'},
 {id:'p9',name:'Floral Indian Wedding Invitation',price:15.00,img:img('floral'),category:'Wedding Cards',type:'Floral'},
 {id:'p10',name:'Pink Ivory Floral Couple Invitation',price:19.00,img:img('couple'),category:'Wedding Cards',type:'Floral'},
 {id:'p11',name:'Green Gold Floral Anand Karaj Invitation',price:20.00,img:img('green'),category:'Wedding Cards',type:'Floral'},
 {id:'p12',name:'Kerala Traditional Wedding Invitation',price:21.00,img:img('gate'),category:'Wedding Cards',type:'Hindu'},
 {id:'p35',name:'Elegant Peacock Save the Date Invitation',price:13.50,img:A+'peacock-save.png',category:'Wedding Cards',type:'Hindu'},
 {id:'p36',name:'Decorative Hindu Wedding Card',price:12.50,img:A+'decorative-hindu.png',category:'Wedding Cards',type:'Hindu'},
 {id:'p37',name:'Low Cost Traditional Wedding Invitation',price:11.50,img:A+'low-cost.png',category:'Wedding Cards',type:'Hindu'},
 {id:'p38',name:'Indian Wedding Wardrobe Invitation',price:16.00,img:A+'wardrobe.png',category:'Wedding Cards',type:'Hindu'},
 {id:'p39',name:'Ganesha Hindu Wedding Invitation',price:14.00,img:A+'ganesha-wedding.png',category:'Wedding Cards',type:'Hindu'},
 {id:'p40',name:'Premium Indian Wedding Invitation Card',price:15.00,img:A+'premium-indian.jpg',category:'Wedding Cards',type:'Hindu'},
 {id:'p13',name:'Vintage Scroll Wedding Invitation',price:21.00,img:img('vintage'),category:'Scroll Invitation',type:'Luxury'},
 {id:'p14',name:'Classic Scroll Floral Invitation',price:17.00,img:A+'classic-scroll.png',category:'Scroll Invitation',type:'Floral'},
 {id:'p15',name:'Modern Digital Indian Wedding Invite',price:11.00,img:img('digital'),category:'Digital Invitation',type:'Hindu'},
 {id:'p16',name:'Nepali Digital Wedding Template',price:15.00,img:img('nepali'),category:'Digital Invitation',type:'Floral'},
 {id:'p17',name:'Aqua Love Birds Digital Invitation',price:12.75,img:img('birds'),category:'Digital Invitation',type:'Floral'},
 {id:'p18',name:'Beach Love Story Invitation',price:12.75,img:img('beach'),category:'Theme Cards',type:'Floral'},
 {id:'p19',name:'Palace Royal Theme Invitation',price:22.00,img:img('palace'),category:'Theme Cards',type:'Luxury'},
 {id:'p20',name:'Emerald Garden Theme Invitation',price:17.50,img:img('green'),category:'Theme Cards',type:'Floral'},
 {id:'p21',name:'Birthday Floral Celebration Invite',price:8.50,img:img('floral'),category:'Special Occasions',occasion:'Birthday',type:'Floral'},
 {id:'p22',name:'Birthday Luxury Gold Celebration',price:10.50,img:img('luxury'),category:'Special Occasions',occasion:'Birthday',type:'Luxury'},
 {id:'p23',name:'Birthday Blue Celebration Card',price:8.00,img:img('blue'),category:'Special Occasions',occasion:'Birthday',type:'Christian'},
 {id:'p24',name:'Birthday Royal Hindu Theme Card',price:9.00,img:A+'birthday-royal.png',category:'Special Occasions',occasion:'Birthday',type:'Hindu'},
 {id:'p25',name:'Birthday Muslim Floral Celebration',price:9.50,img:img('muslim'),category:'Special Occasions',occasion:'Birthday',type:'Muslim'},
 {id:'p26',name:'Elegant Puperty Celebration Invitation',price:12.00,img:img('floral'),category:'Special Occasions',occasion:'Puperty',type:'Floral'},
 {id:'p27',name:'Royal Engagement Invitation',price:15.00,img:img('luxury'),category:'Special Occasions',occasion:'Engagement',type:'Luxury'},
 {id:'p28',name:'Elegant Ear Boring Ceremony Invitation',price:11.00,img:img('hindu'),category:'Special Occasions',occasion:'Ear Boring',type:'Hindu'},
 {id:'p29',name:'Beautiful House Warming Invitation',price:10.00,img:img('green'),category:'Special Occasions',occasion:'House Warming',type:'Floral'},
 {id:'p30',name:'Romantic Anniversary Invitation',price:13.00,img:img('christian'),category:'Special Occasions',occasion:'Anniversary',type:'Christian'},
 {id:'p31',name:'Luxury Celebration Invitation',price:14.00,img:img('luxury'),category:'Special Occasions',occasion:'Luxury',type:'Luxury'},
 {id:'p32',name:'Beach Bride Theme Invitation',price:13.00,img:A+'beach-bride.png',category:'Theme Cards',theme:'Bride',type:'Floral'},
 {id:'p33',name:'Premium Box Theme Invitation',price:18.00,img:img('gate'),category:'Theme Cards',theme:'Box',type:'Luxury'},
 {id:'p34',name:'Single Sheet Minimal Invitation',price:9.00,img:img('blue'),category:'Theme Cards',theme:'Single Sheet',type:'Floral'}
];

export const categoryCards=[
 ['Hindu Wedding Cards',A+'hindu-home.png','Hindu Wedding Cards'],['Luxury Cards',img('luxury'),'Luxury Cards'],['Floral Wedding Cards',img('floral'),'Floral Wedding Cards'],
 ['Beach Theme Cards',A+'beach-theme.png','Beach Theme Cards'],['Birds Theme Cards',img('birds'),'Theme Cards'],['Palace Theme Cards',img('palace'),'Luxury Cards']
];
export const collectionCards=[['Hindu Invitation Collections',img('couple'),'Hindu'],['Christian Invitation Collections',img('christian'),'Christian'],['Muslim Invitation Collections',img('muslim'),'Muslim'],['Interfaith Invitation Collections',A+'interfaith-collection.jpg','Floral']];
export const weddingFilters=['Hindu','Christian','Muslim','Floral','Luxury'];
