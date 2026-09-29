export function getRouteInfo(title){
 const t=title.toLowerCase();
 if(t==='wedding cards')return {heading:'Hindu Wedding Cards',description:'Explore Hindu, Christian, Muslim, Floral and Luxury wedding invitations from one page.',matcher:p=>p.category==='Wedding Cards',showFilters:true};
 if(t.includes('hindu wedding'))return {heading:'Hindu Wedding Cards',description:'Traditional and elegant designs for sacred wedding ceremonies.',matcher:p=>p.category==='Wedding Cards',defaultFilter:'Hindu',showFilters:true};
 if(t.includes('christian wedding'))return {heading:'Christian Wedding Cards',description:'Elegant floral and contemporary Christian wedding invitation designs.',matcher:p=>p.category==='Wedding Cards',defaultFilter:'Christian',showFilters:true};
 if(t.includes('muslim wedding'))return {heading:'Muslim Wedding Cards',description:'Beautiful Islamic-inspired wedding invitation designs.',matcher:p=>p.category==='Wedding Cards',defaultFilter:'Muslim',showFilters:true};
 if(t.includes('floral wedding'))return {heading:'Floral Wedding Cards',description:'Soft florals, botanical borders and romantic invitation styles.',matcher:p=>p.category==='Wedding Cards',defaultFilter:'Floral',showFilters:true};
 if(t.includes('luxury cards'))return {heading:'Luxury Wedding Cards',description:'Premium gold, royal and statement invitation designs.',matcher:p=>p.category==='Wedding Cards',defaultFilter:'Luxury',showFilters:true};
 if(t.includes('birthday'))return {heading:'Birthday Invitations',description:'Beautiful invitation ideas for memorable birthday celebrations.',matcher:p=>p.category==='Special Occasions'&&p.occasion==='Birthday',showFilters:true};
 if(t.includes('puperty'))return {heading:'Puperty Cards',description:'Traditional and elegant invitations for a beautiful coming-of-age celebration.',matcher:p=>p.category==='Special Occasions'&&p.occasion==='Puperty',showFilters:true};
 if(t.includes('engagement'))return {heading:'Engagement Cards',description:'Elegant engagement invitations for your special announcement.',matcher:p=>p.category==='Special Occasions'&&p.occasion==='Engagement',showFilters:true};
 if(t.includes('ear boring'))return {heading:'Ear Boring Cards',description:'Beautiful ceremony invitations for a cherished family celebration.',matcher:p=>p.category==='Special Occasions'&&p.occasion==='Ear Boring',showFilters:true};
 if(t.includes('house warming'))return {heading:'House Warming Invitations',description:'Warm and elegant invitations for your new beginning.',matcher:p=>p.category==='Special Occasions'&&p.occasion==='House Warming',showFilters:true};
 if(t.includes('anniversary'))return {heading:'Anniversary Cards',description:'Celebrate another beautiful chapter together.',matcher:p=>p.category==='Special Occasions'&&p.occasion==='Anniversary',showFilters:true};
 if(t.includes('luxury invitations'))return {heading:'Luxury Invitations',description:'Premium designs for every important celebration.',matcher:p=>p.category==='Special Occasions'&&p.occasion==='Luxury',showFilters:true};
 if(t==='theme cards'||t.includes('theme cards'))return {heading:'Theme Cards',description:'Creative themes for weddings and special moments.',matcher:p=>p.category==='Theme Cards',showFilters:false};
 if(t.includes('bride theme'))return {heading:'Bride Theme Cards',description:'Romantic bride-inspired invitation themes for your celebration.',matcher:p=>p.category==='Theme Cards' && p.theme==='Bride',showFilters:false};
 if(t.includes('box cards'))return {heading:'Box Theme Cards',description:'Premium box-style invitation concepts with a luxurious feel.',matcher:p=>p.category==='Theme Cards' && p.theme==='Box',showFilters:false};
 if(t.includes('single sheet'))return {heading:'Single Sheet Cards',description:'Minimal single-sheet invitations that are clean and elegant.',matcher:p=>p.category==='Theme Cards' && p.theme==='Single Sheet',showFilters:false};
 if(t.includes('scroll'))return {heading:'Scroll Invitations',description:'Classic scroll-style invitations with elegant ceremonial details.',matcher:p=>p.category==='Scroll Invitation',showFilters:false};
 if(t.includes('digital')||t.includes('visual'))return {heading:'Digital Invitations',description:'Modern invitations designed for instant digital sharing.',matcher:p=>p.category==='Digital Invitation',showFilters:false};
 if(t.includes('beach'))return {heading:'Beach Theme Cards',description:'Fresh seaside-inspired invitations for destination celebrations.',matcher:p=>p.category==='Theme Cards'&&p.name.toLowerCase().includes('beach'),showFilters:false};
 return {heading:title,description:'Discover invitation designs made for your special moments.',matcher:p=>p.category===title||p.type.toLowerCase()===t,showFilters:false};
}

