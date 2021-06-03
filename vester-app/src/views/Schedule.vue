<template>
<div id="schedule">

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="Januar" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in jan" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="Februar" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in feb" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="Marts" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in mar" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="April" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in apr" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="Maj" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in may" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="Juni" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in jun" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="Juli" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in jul" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="August" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in aug" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="September" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in sep" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="Oktober" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in oct" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="November" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in nov" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>

    <v-container fluid class="section-1 light" style="max-width: unset; margin:0;" align="center">  
        <v-row align="center">
            <v-col lg="12" md="12" sm="12">
                <Title ttlText="December" color="#303960"/>
            </v-col>
            <v-col lg="4" md="6" sm="12" v-for="(index, i) in dec" :key="i">
                <v-row align="center">
                    <EventCard :name="index.name" :date="index.date" :groups="index.groups"/>
                </v-row>       
            </v-col>
        </v-row> 
    </v-container>



</div>
</template>

<script>

import Title from '@/components/Title.vue'
import EventCard from '@/components/EventCard.vue'


export default {
    name: 'Schedule',
    components: {
        // HelloWorld
        Title,
        EventCard,
    },
    data() {
    return {
      jan: [
        {
          name: 'Gruppestyrelsesmøde',
          date: '2021.01.06.',
          groups: 'Forældre'
        }
      ],
      feb: [
        {
          name: 'Grupperådsmøde',
          date: '2021.02.24.',
          groups: 'Mikro, Mini, Junior, Trop, Senior, Forældre'
        },
        {
          name: 'Vinterhike',
          date: '2021.02.5 - 7.',
          groups: 'Senior'
        }
      ],
      mar: [
        {
          name: 'Mikro-weekend',
          date: '2021.03.13 - 14.',
          groups: 'Mikro'
        },
        {
          name: 'Natløb',
          date: '2021.03.19 - 20.',
          groups: 'Junior'
        },
        {
          name: 'Gruppestyrelsesmøde',
          date: '2021.03.03.',
          groups: 'Forældre'
        }
      ],
      apr: [
        {
          name: 'Byløb',
          date: '2021.04.17.',
          groups: 'Mikro, Mini, Junior, Trop'
        },
        {
          name: 'Sct. Georgsdag',
          date: '2021.04.24.',
          groups: 'Mikro, Mini, Junior, Trop, Senior, Forældre'
        }
      ],
      may: [
        {
          name: 'Gruppestyrelsesmøde',
          date: '2021.05.07.',
          groups: 'Forældre'
        },
        {
          name: 'Servering til SwimCup',
          date: '2021.05.13 - 16.',
          groups: 'Forældre'
        },
        {
          name: 'Marbækdag',
          date: '2021.05.17',
          groups: 'Mikro, Mini, Junior, Trop, Senior'
        },
        {
          name: 'Vandreture',
          date: '2021.05.29',
          groups: 'Mikro, Mini, Junior, Trop, Senior'
        }
      ],
      jun: [
        {
          name: 'Fælles møde inden sommerferien',
          date: '2021.06.22.',
          groups: 'Mikro, Mini, Junior, Trop, Senior, Forældre'
        }
      ],
      jul: [
        {
          name: 'Sommerlejr',
          date: '2021.07.5 - 7.',
          groups: 'Mikro, Mini'
        },
        {
          name: 'Sommerlejr',
          date: '2021.07.3 - 10.',
          groups: 'Junior, Trop, Senior'
        }
      ],
      aug: [
        {
          name: 'Fælles oprykningsmøde',
          date: '2021.08.17.',
          groups: 'Mikro, Mini, Junior, Trop, Senior, Forældre'
        }
      ],
      sep: [
        {
          name: 'Gruppestyrelsesmøde',
          date: '2021.09.01.',
          groups: 'Forældre'
        },
        {
          name: 'Sct. Georgsløb',
          date: '2021.09.18.',
          groups: 'Mikro'
        },
        {
          name: 'Sct. Georgsweekend',
          date: '2021.09.18.',
          groups: 'Mini'
        },
        {
          name: 'Sct. Georgsweekend',
          date: '2021.09.18 - 19.',
          groups: 'Junior, Trop'
        }
      ],
      oct: [
        {
          name: 'Divisionsweekend',
          date: '2021.10.1 - 3.',
          groups: 'Junior, Trop'
        }
      ],
      nov: [
        {
          name: 'Gruppestyrelsesmøde',
          date: '2021.11.03.',
          groups: 'Forældre'
        },
        {
          name: 'Juletur',
          date: '2021.11.27.',
          groups: 'Mikro, Mini'
        },
        {
          name: 'Juletur',
          date: '2021.11.26 - 28.',
          groups: 'Junior'
        },
        {
          name: 'Divisionsjuletur',
          date: '2021.11.27 - 28.',
          groups: 'Trop'
        }
      ],
      dec: [
        {
          name: 'Ingen begivenheder',
          date: '-',
          groups: '-'
        }
      ],
    }
  }

}
</script>

<style lang="scss">
@mixin section {
  display: flex;
  justify-content: center;
  min-height: max-content;
  min-width: unset;
  margin: 0;
}

.section-1 {
  @include section();
  padding: 70px 10vw 0 10vw
}

.section-2 {
  @include section();
  padding: 200px 10vw 200px 10vw;
}

.dark {
  background: url('../assets/Artboard1.png');
  background-size: contain ;
}

.light {
  background-color: #eee ;
}

</style>