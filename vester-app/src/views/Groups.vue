<template>
<div class="group">
    <v-container fluid class="section-1" style="max-width: unset; margin:0;" >
        <v-row id="mainrow" >
        <v-col class="asd1" >
            <Title color="#303960" ttlText="Afdelinger i Vesterhavsgruppen"/>
            <div id="button-container">
                    <v-container id="component" >
                        <v-btn id="square-button" 
                        dark
                        depressed
                        tile
                        @click="$vuetify.goTo('#anchor1')"
                        >
                            <h4> Mikro (0. - 1. klasse) </h4>
                        </v-btn>
                    </v-container>

                    <v-container id="component" >
                        <v-btn id="square-button" 
                        dark
                        depressed
                        tile
                        @click="$vuetify.goTo('#anchor2')"
                        >
                            <h4> Mini (2. - 3. klasse) </h4>
                        </v-btn>
                    </v-container>

                    <v-container id="component" >
                        <v-btn id="square-button" 
                        dark
                        depressed
                        tile
                        @click="$vuetify.goTo('#anchor3')"
                        >
                            <h4> Junior (4. 6. klasse) </h4>
                        </v-btn>
                    </v-container>

                    <v-container id="component" >
                        <v-btn id="square-button" 
                        dark
                        depressed
                        tile
                        @click="$vuetify.goTo('#anchor4')"
                        >
                            <h4> Trop (7. - 9. klasse) </h4>
                        </v-btn>
                    </v-container>

                    <v-container id="component" >
                        <v-btn id="square-button" 
                        dark
                        depressed
                        tile
                        @click="$vuetify.goTo('#anchor5')"
                        >
                            <h4> Klan (efter 9. klasse) </h4>
                        </v-btn>
                    </v-container>
        </div>
        </v-col>
        </v-row>
    </v-container>

    <v-container fluid class="groups" >
        
        <v-row class="groups-inner">
            <v-col lg="6" class="group-column"  id="anchor1">
                <h1>Mikro</h1>
                <h2>Tirsdag kl. 16:30 - 18:00</h2>
                <h5>Mikrospejd er at være sammen, lære, sanse og lege. Vi bygger huler, snitter, laver bål og mange andre ting. Vi har spejderhytten som vores faste tilholdssted, her findes udstyr og de ting spejderne har samlet og som vi alle sammen bruger. I spejderhytten bruger vi den del tid på at synge, lege og fortælle historier.
                </h5>
                <p id="last-p">På mikromøderne er der altid mindst en eller flere voksne til stede.  Hos mikroerne er det vigtigt at skabe et godt kammeratskab i gruppen. For der er plads til alle. <br><br> Mange drenge og piger starter som mikrospejder for her grundlægges fundamentet for mange år med kammeratskab, friluftsliv og sjove og udfordrende aktiviteter.
                </p>

                <h1>Leder</h1>
                <h2 style="margin:0;">Pernille Ravn</h2>
                <p>Email: mikro@vesterhavsgruppen.dk</p>

            </v-col>
            <v-col lg="6">
            <div style="margin-left:110px" class="main-img" id="groups-img">
                <ImageFrame ttlText='"Mikro' filename="mikro.jpg" />
            </div>
            </v-col>
        </v-row> 
        <div id="meow"></div>
    </v-container>
    
        <v-container fluid class="groups" id="light">
            <v-row class="groups-inner">
                <v-col lg="6" class="group-column" id="anchor2">
                    <h1>Mini</h1>
                    <h2 style="color:#49BFA3;">Tirsdag kl. 16:30 - 18:00</h2>
                    <h5>Minispejderne har naturen som legeplads. Vi tilbringer meget tid i naturen, mens vi træner vores spejderfærdigheder. 
Naturen er i brug hele året, hvor der er forskellige udfordringer og muligheder, der skal udforskes. 
                    </h5>
                    <p id="last-p">Som mini tager man på små hytte- eller teltture, laver opgave-løb i skoven, kigger på dyrespor, arbejder med kort og kompas og øver sig i at binde knob og bruge kniv. Minierne løser sjove og spændende opgaver sammen i gruppen.  Hos minierne er det vigtigt at skabe et godt kammeratskab i gruppen. For der er plads til alle.<br><br>
Minispejderne arbejder i patruljer. Patruljen begynder at klare sig selv på de ugentlige møder, hvor vi planlægger vores aktiviteter. Patruljen er vigtig for spejdere. I patruljen løser vi vores opgaver i fællesskab, med hjælp og instruktion fra erfarne spejdere og ledere.
                    </p>

                    <h1>Leder</h1>
                    <h2 style="margin:0;color:#49BFA3;">Casper Balle</h2>
                    <p>Email: mini@vesterhavsgruppen.dk</p>

                </v-col>
                <v-col lg="6">
                    <div style="margin-left:110px" class="main-img" id="groups-img">
                        <ImageFrame ttlText='"Mini' filename="mini.jpg" />
                    </div>
                </v-col>
        </v-row> 
    </v-container>
        <v-container fluid class="groups">
        <v-row class="groups-inner">
            <v-col lg="6" class="group-column" id="anchor3">
                <h1>Junior</h1>
                <h2>Tirsdag kl. 19:00 - 20:30</h2>
                <h5>Juniorspejdere er meget aktive. Vi tager på turer og prøver nye aktiviteter, hvor vi lærer at værne om naturen og klare os selv.
Juniorerne mødes i spejderhytten, arrangerer orienteringsløb og tager på ture, sover i telt, og laver mad over bål. 

                </h5>
                <p id="last-p">Juniorer træner de grundlæggende spejderfærdigheder og lærer bl.a. at håndtere en økse og rejse et telt alene.  Som junior får man mere ansvar. Patruljen begynder at klare sig selv på de ugentlige møder, hvor vi planlægger vores aktiviteter. Patruljen er vigtig for juniorspejdere. I patruljen løser vi vores opgaver i fællesskab, med hjælp og instruktion fra erfarne spejdere og ledere. <br><br>
                En juniorspejder er større end “de små”, men mindre end de store. Derfor kan juniorer en masse som spejdere, men vi har mange spejderoplevelser til gode.
                </p>

                <h1>Leder</h1>
                <h2 style="margin:0;">Steffen Sørensen</h2>
                <p>Email: junior@vessterhavsgruppen.dk</p>

            </v-col>
            <v-col lg="6">
            <div style="margin-left:110px" class="main-img" id="groups-img">
                <ImageFrame ttlText='"Junior' filename="junior.jpg" />
            </div>
            </v-col>
        </v-row> 
    </v-container>
        <v-container fluid class="groups" id="light">
        <v-row class="groups-inner" id="trop">
            <v-col lg="6" class="group-column" id="anchor4">
                <h1>Trop</h1>
                <h2 style="color:#49BFA3;">Onsdag kl. 19:30 - 21:00</h2>
                <h5>Tropsspejdere laver aktiviteter, der kræver mere af os end før. Her dyrkes kammeratskabet, de sjove og udfordrende aktiviteter. Samtidig får vi mere ansvar for os selv og hinanden.
                </h5>
                <p id="last-p">Aktiviteterne hos tropsspejdere er f.eks. teltlejre, vandreture med oppakning, orienteringsløb, projekter der skal bygges. Det er typiske spejderaktiviteter, hvor tropsspejderne bruger deres grundlæggende spejderfærdigheder i praksis. 
I troppen står spejderne selv for deres patruljemøde sammen med en jævnaldrende patruljeleder. <br><br> Spejderne træffer selv de fleste beslutninger, om hvad de vil, og hvordan møder og aktiviteter skal foregå. De kan altid få hjælp fra ældre ledere. <br>
Som tropsspejder kan man tage på kurser og lære, hvordan man leder en patrulje. I troppen lærer man en masse om sig selv og hinanden, og man får muligheder for at mødes med spejdere fra andre steder i verden. <br><br> Tropsspejdere er opdelt i patruljer, typisk af 5-6 spejdere i hver 
Patruljerne er sammensat at lederne, og med spejdere som har forskellige kvalifikationer. Hver patruljerne har en patruljeleder og assistent, som selv planlægger de spejderaktiviteter som deres patrulje ønsker at arbejde med, ud fra bl.a. materiale fra korpset.

                </p>

                <h1>Leder</h1>
                <h2 style="margin:0;color:#49BFA3;">Anne Nygård</h2>
                <p>Email: trop@vessterhavsgruppen.dk</p>

            </v-col>
            <v-col lg="6">
            <div style="margin-left:110px" class="main-img" id="groups-img">
                <ImageFrame ttlText='"Trop' filename="trop.jpg" />
            </div>
            </v-col>
        </v-row> 
    </v-container>
        <v-container fluid class="groups">
        <v-row class="groups-inner">
            <v-col lg="6" class="group-column" id="anchor5">
                <h1>Klan</h1>
                <h2>Torsdag kl. 19:00 - 21:00</h2>
                <h5>Klanen er den næste gren i rækken. Efter 3 år som tropsspejder bliver man seniorspejder. Klanen er for drenge, piger, mænd, kvinder, herre og damer og hvad der nu ellers findes af sjove typer i alderen 16-25 år.
                </h5>
                <p id="last-p">Gennem hele spejderlivet fra mikro og frem til trop lærer man en masse færdigheder. Disse færdigheder kommer til nytte i klanarbejdet, da vi bl.a. planlægger og udfører løb for de mindre spejdere i gruppen, division, eller hvem der ellers har lysten til at deltage. Vi bruger ikke kun spejdermøderne på at lave løb, men også på at lave projekter. Projekterne kan være alt lige fra knobtavler til store byggeprojekter til tekniske finurligheder – kun fantasien sætter grænser. I klanen er der derfor masser af mulighed for at være kreativ og udvikle projekterne, men der er også plads til dem, som er mere tilbageholdende, og som bare godt kan lide sammenholdet og resten af godteposen, som følger med. <br><br>
                Da mange af seniorspejderne også fungerer som ledere i gruppen eller centerspejdere rundt omkring i Danmark, skal der også være plads til hygge og snak. De ugentlige møder kan derfor den ene gang bestå af hygge med kaffe, the og kage og andre gange i den helt anden retning med larm, gøgl og vilde projekter.

                </p>

            </v-col>
            <v-col lg="6">
            <div style="margin-left:110px" class="main-img" id="groups-img">
                <ImageFrame ttlText='"Klan' filename="senior.jpg" />
            </div>
            </v-col>
        </v-row> 
        <v-row class="groups-inner">
            <v-col lg="6">
            <div style="margin-left:80px" class="main-img" id="groups-img">
                <ImageFrame ttlText='"Klan' filename="klan.jpeg" />
            </div>
            </v-col>
            <v-col lg="6" class="group-column">
                <h5>Selvom man er blevet senior og nu er de store, gamle og rutinerede spejdere, så holder man ikke op med at tage på lejre. Mulighederne bliver kun større og større. 
                </h5>
                <p id="last-p">Der er både lejre internt i klanen, i gruppen, i divisionerne, landet over osv. Der er også mulighed for at planlægge lejre, hvis der er gemt en lille eventkoordinator i dig. Hvis eventyrlysten bobler i dig, er det bare at komme af sted, men hvis ikke eventyrlysten allerede bobler som en gal, så skal den nok blive trænet, til den slet ikke kan få nok. <br><br>
                Som seniorspejder vil der stadig være mulighed for at udvikle sine lederevner og spejderfærdigheder gennem kurser. Det vil også være mulighed for at få tilfredsstillet rejselysten gennem internationalt spejderarbejde og på disse måder knytte nye venskaber i byen, landet og verden over. Kurser i Danmark indenfor rammerne af Esbjerg Kommunes tilskudsregel er gratis at deltage på. Kurser er ikke kun gældende inden for spejderkorpset, men også ude i erhvervslivet. Grib chancen nu hvor den er her!
                </p>

                <h1>Leder</h1>
                <h2 style="margin:0;">Mona Poulsen</h2>
                <p>Email: klan@vessterhavsgruppen.dk</p>
            </v-col>

        </v-row> 
    </v-container>
</div>
</template>

<script>
import Title from '@/components/Title.vue'
import ImageFrame from '@/components/ImageFrame.vue'
export default {
    name:'groups',
    components: {
    // HelloWorld
        Title,
        ImageFrame

    },
    mounted () {
        window.scrollTo(0, 0)
    },



}
</script>

<style lang="scss">
.groups{
    background-color: #303960;
    color:#eee;
}
#light{
    background-color: #eee;
    color:#303960
}

.groups-inner{
    height: 120vh;
    margin-left: 8vw;
}
#trop{
    height: 150vh;
}
h1{

    font-size: 28px;
}
h2{
    color:#637CDF;
    font-family: 'Merriweather', serif;
    font-size: 24px;
    margin-bottom: 3vh;
}
h5{

    font-family: 'Lato', sans-serif;
    font-size: 20px;
    margin-bottom: 2.5vh;
}
p{
    font-size: 18px;
    font-weight: 400;
}
#last-p{
    margin-bottom: 7vh;
}
.group-column{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}

#component {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    width: max-content;
    margin: 0 30px 64px 0;
    padding: 0;

    #square-button {
        // body
        display: flex;
        flex-direction: column;
        justify-content: center; 
        align-items: center;
        width: max-content;
        height: 72px;
        margin: 0;
        // style
        text-align: center;
        text-transform: none;
        text-decoration: none;
        letter-spacing: 0;
        background-color: white;
        //border
        border-style: solid;
        border-width: 4px;
        border-color: #303960;

        h4 {
            font-family: 'Lato', sans-serif;
            font-size: 20px;
            font-weight: bold;
            letter-spacing: 0;
            padding: 0 16px 0 16px;
            color: #303960;
        }
        box-shadow: 0 8px 0 #637CDF;
    }
}

#button-container{
    width: 900px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
}
.asd1 {
  display: flex;
  flex-direction: column;
  justify-items: center;
  height: max-content;

}
#groups-img{
    display: flex;
    align-items: center;
    height: 100%;
}

</style>