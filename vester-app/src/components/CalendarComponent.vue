<template>
  <v-calendar
    :attributes='attributes'
    />
</template>

<script>
export default {
    data() {
    const todos = [
      {
        description: 'Take Noah to basketball practice.',
        isComplete: false,
        dates: new Date(2021, 0, 1), // Every Friday
        color: 'red',
      },
    ];
    return {
      incId: todos.length,
      todos,
    };
  },
  computed: {
    attributes() {
      return [
        // Attributes for todos
        ...this.todos.map(todo => ({
          dates: todo.dates,
          dot: {
            color: todo.color,
            class: todo.isComplete ? 'opacity-75' : '',
          },
          popover: {
            label: todo.description,
          },
          customData: todo,
        })),
      ];
    }
  }
}

</script>

<style lang="scss">
    #title {
        text-align: left;
        margin: 0 0 24px 0;
        max-width: 600px;
        padding: 0;
        h1 {
            // font-family: 'Sansita Swashed', cursive;
            // font-family: 'Lato', sans-serif;
            font-family: 'Merriweather', serif;
            font-size: 40px;
            font-weight: bold;
        }
    }

    @media screen and (max-width:600px) {
        #title {
            h1 {
                font-size: 32px;
            }
        }
    }

</style>