const imgPath = "assets/images/s2/";

const lessonData = {
  title: "Energy in Devices and Conservation of Energy",
  info: "Junior 4 Science - Unit 3 - Concept 1 - Session 2",

  slides: [

    // 🔹 Activity 6
    {
      title: "Activity 6",
      text: "Devices need <span class='highlight'>energy</span> to work.",

      cards: [
        {
          image: imgPath + "u3c1a6.jpg",
          title: "Electric Bulb",
          text: "<span class='keyword'>Electrical → Light + Thermal (wasted)</span>"
        },
        {
          image: imgPath + "u3c1a62.jpg",
          title: "Flashlight",
          text: "<span class='keyword'>Chemical → Light + Thermal</span>"
        },
        {
          image: imgPath + "u3c1a63.jpg",
          title: "Heater / Bell",
          text: "Electrical → Thermal | Kinetic → Sound"
        }
      ],

      sections: [
        {
          heading: "Important Idea",
          bullets: [
            "Each device has <span class='highlight'>input energy</span>",
            "Each device produces <span class='highlight'>output energy</span>"
          ]
        },
        {
          heading: "Note",
          bullets: [
            "Battery stores <span class='highlight'>chemical energy</span>",
            "Converted into <span class='highlight'>electrical energy</span>"
          ]
        }
      ]
    },

    // 🔹 Activity 7
    {
      title: "Activity 7",
      text: "Energy is always converted from one form to another.",

      cards: [
        {
          image: imgPath + "u3c1a7.jpg",
          title: "Riding a Bike",
          text: "Chemical → Kinetic → Thermal"
        },
        {
          image: imgPath + "u3c1a72.jpg",
          title: "Light Bulb",
          text: "Electrical → Light + Thermal"
        }
      ],

      sections: [
        {
          heading: "Law of Conservation of Energy",
          bullets: [
            "Energy cannot be <span class='highlight'>created</span>",
            "Energy cannot be <span class='highlight'>destroyed</span>",
            "Energy is only <span class='highlight'>converted</span>"
          ]
        }
      ]
    },

    // 🔹 Activity 8
    {
      title: "Activity 8",
      text: "Energy entering a device is called <span class='highlight'>input</span>.",

      cards: [
        {
          image: imgPath + "u3c1a8.jpg",
          title: "Hair Dryer",
          text: "Electrical → Thermal + Kinetic + Sound"
        },
        {
          image: imgPath + "u3c1a82.jpg",
          title: "Mobile Phone",
          text: "Electrical → Light + Sound"
        }
      ],

      sections: [
        {
          heading: "Important Concepts",
          bullets: [
            "Input energy = energy entering device",
            "Output energy = energy leaving device",
            "Not all energy is <span class='highlight'>useful</span>",
            "Some energy is <span class='highlight'>wasted</span>"
          ]
        }
      ]
    },

    // 🔹 Activity 9
    {
      title: "Activity 9",
      text: "Energy chains show how energy flows.",

      cards: [
        {
          image: imgPath + "u3c1a9.jpg",
          title: "Blender",
          text: "Example of energy chain"
        }
      ],

      sections: [
        {
          heading: "Energy Chain",
          bullets: [
            "Light → Chemical → Electrical → Kinetic",
            "Some energy becomes <span class='highlight'>heat</span> and <span class='highlight'>sound</span>"
          ]
        }
      ]
    },

    // 🔹 Notes
    {
      title: "Important Notes",

      bullets: [
        "Some energy is <span class='highlight'>wasted</span>",
        "Wasted energy is usually <span class='highlight'>heat</span> or <span class='highlight'>sound</span>",
        "Energy is <span class='highlight'>converted</span>, not lost"
      ]
    },

    // 🔹 Summary
    {
      title: "Summary",
      image: imgPath + "u3c1s2summary.jpg",

      bullets: [
        "Devices need <span class='highlight'>energy</span> to work",
        "Energy has <span class='highlight'>input</span> and <span class='highlight'>output</span>",
        "Energy can be <span class='highlight'>converted</span>",
        "Batteries store <span class='highlight'>chemical energy</span>",
        "Electrical energy → light / heat / sound / kinetic",
        "Some energy is <span class='highlight'>wasted</span>",
        "Wasted energy is heat or sound",
        "Energy chains show flow of energy",
        "Energy cannot be created or destroyed"
      ]
    }

  ]
};
