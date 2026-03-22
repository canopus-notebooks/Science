const imgPath = "assets/images/sX/";

const lessonData = {
  title: "Template Lesson Title",
  info: "Junior 4 Science - Unit X - Concept X - Session X",

  slides: [
    {
      title: "Activity 1",
      text: "Write the main idea here with <span class='highlight'>important words</span> and <span class='keyword'>keywords</span>.",

      cards: [
        {
          image: imgPath + "uXcXa1.jpg",
          title: "Card 1",
          text: "Short explanation with <span class='highlight'>highlight</span>."
        },
        {
          image: imgPath + "uXcXa12.jpg",
          title: "Card 2",
          text: "Another short explanation."
        }
      ],

      sections: [
        {
          heading: "Section 1",
          bullets: [
            "First important point",
            "Second point with <span class='highlight'>highlight</span>",
            "Third point with <span class='keyword'>keyword</span>"
          ]
        },
        {
          heading: "Section 2",
          bullets: [
            "Another grouped point",
            "Another explanation"
          ]
        }
      ]
    },

    {
      title: "Activity 2",
      text: "Another activity main idea.",

      cards: [
        {
          image: imgPath + "uXcXa2.jpg",
          title: "Example Card",
          text: "Example text"
        }
      ],

      sections: [
        {
          heading: "Important Facts",
          bullets: [
            "Point one",
            "Point two",
            "Point three"
          ]
        }
      ]
    },

    {
      title: "Summary",
      image: imgPath + "uXcXsummary.jpg",

      bullets: [
        "Summary point 1",
        "Summary point 2",
        "Summary point 3",
        "Summary point 4",
        "Summary point 5"
      ]
    }
  ]
};
