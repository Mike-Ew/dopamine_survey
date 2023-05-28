export const AttentionSpanAssessment = {
    name: "Attention Span Level Assessment",
    elements: [
      {
        type: "radiogroup",
        name: "conversation",
        title: "Do you find yourself missing key parts of conversations because of drifting off in your own thought?",
        choices: [
          { value: "N", text: "Never" },
          { value: "R", text: "Rarely" },
          { value: "S", text: "Sometimes" },
          { value: "O", text: "Often" },
          { value: "AA", text: "Almost Always" }
        ],
        isRequired: true
      },
      //... More questions
    ]
  };
  