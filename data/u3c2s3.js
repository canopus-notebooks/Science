const imgPath = "assets/images/s3/";

const lessonData = {
  title: "Fuels and Energy Sources",
  info: "Junior 4 Science - Unit 3 - Concept 2 - Session 3",

  slides: [

    {
      title: "Activity 1",
      text: "The <span class='highlight'>Sun</span> is the main source of energy.",

      cards: [
        {
          image: imgPath + "u3c2a1.jpg",
          title: "Sun",
          text: "Main source of energy"
        },
        {
          image: imgPath + "u3c2a12.jpg",
          title: "Fuels",
          text: "Important energy source"
        }
      ],

      sections: [
        {
          heading: "Fuel",
          bullets: [
            "Fuel produces <span class='highlight'>thermal energy</span> when burned"
          ]
        },
        {
          heading: "Uses",
          bullets: [
            "Warming houses",
            "Moving cars"
          ]
        },
        {
          heading: "Examples",
          bullets: [
            "Gasoline",
            "Coal",
            "Natural gas"
          ]
        }
      ]
    },

    {
      title: "Activity 2",
      text: "Fuel helps cars move.",

      cards: [
        {
          image: imgPath + "u3c2a2.jpg",
          title: "Car",
          text: "Needs fuel to move"
        },
        {
          image: imgPath + "u3c2a22.jpg",
          title: "Engine",
          text: "Fuel burns inside engine"
        }
      ],

      sections: [
        {
          heading: "How it works",
          bullets: [
            "Fuel burns → produces energy",
            "Thermal energy → kinetic energy",
            "Moves the wheels"
          ]
        },
        {
          heading: "Notes",
          bullets: [
            "Without fuel → car stops",
            "More speed → more fuel"
          ]
        }
      ]
    },

    {
      title: "Activity 3",
      text: "Fuels have many uses.",

      cards: [
        {
          image: imgPath + "u3c2a3.jpg",
          title: "Cooking & Heating",
          text: "Coal and wood"
        },
        {
          image: imgPath + "u3c2a32.jpg",
          title: "Electricity & Transport",
          text: "Gasoline and gas"
        }
      ],

      sections: [
        {
          heading: "Uses",
          bullets: [
            "Cooking",
            "Heating",
            "Electricity",
            "Transportation"
          ]
        },
        {
          heading: "Energy Chain",
          bullets: [
            "<span class='keyword'>Light → Chemical → Thermal</span>"
          ]
        }
      ]
    },

    {
      title: "Activity 4",
      text: "There are two types of fuels.",

      cards: [
        {
          image: imgPath + "u3c2a4.jpg",
          title: "Biofuels",
          text: "From plants"
        },
        {
          image: imgPath + "u3c2a42.jpg",
          title: "Fossil Fuels",
          text: "From ancient remains"
        }
      ],

      sections: [
        {
          heading: "Biofuels",
          bullets: [
            "Renewable",
            "Examples: wood, plants"
          ]
        },
        {
          heading: "Fossil Fuels",
          bullets: [
            "Nonrenewable",
            "Examples: coal, oil, gas"
          ]
        },
        {
          heading: "Coal Formation",
          bullets: [
            "Plants buried under rocks",
            "Heat and pressure → coal"
          ]
        }
      ]
    },

    {
      title: "Summary",
      image: imgPath + "u3c2summary.jpg",

      bullets: [
        "Sun is main energy source",
        "Fuel produces thermal energy",
        "Used in heating and transport",
        "Thermal → kinetic energy",
        "Biofuels are renewable",
        "Fossil fuels are nonrenewable"
      ]
    }

  ]
};
