// export const DopamineAssessment = {
//   name: "Dopamine Level Assessment",
//   elements: [
//     {
//       type: "radiogroup",
//       name: "sleep",
//       title: "Do you get excessive amounts of sleep and still awaken tired?",
//       choices: [
//         { value: "N", text: "Never" },
//         { value: "R", text: "Rarely" },
//         { value: "S", text: "Sometimes" },
//         { value: "O", text: "Often" },
//         { value: "AA", text: "Almost Always" }
//       ],
//       isRequired: true
//     },
//     //... More questions
//   ]
// };

// DopamineAssessment.js

const questions = [
  { name: "energy after sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" }, //1
  { name: "light-sleeper", title: "I tend to be a light sleeper"}, //2
  { name: "harmatthan", title: "In the harmattan season, I find it a lot harder to get up in the morning" }, //3
  { name: "shutoff", title: "When I try to sleep at night, I often find that my mind does not shut off."}, //4
  { name: "tired", title: "Are you tired, or do you have a significant loss of energy?" }, //5
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  { name: "sleep", title: "Do you get excessive amounts of sleep and still awaken tired?" },
  { name: "energy", title: "Do you often feel low on energy?" },
  // add more questions here...
];

const dopamineAssessmentQuestions = questions.map(question => ({
  type: "radiogroup",
  name: question.name,
  title: question.title,
  choices: [
    { value: "N", text: "Never" },
    { value: "R", text: "Rarely" },
    { value: "S", text: "Sometimes" },
    { value: "O", text: "Often" },
    { value: "AA", text: "Almost Always" }
  ],
  isRequired: true
}));

export const DopamineAssessment = {
  name: "Dopamine Level Assessment",
  elements: dopamineAssessmentQuestions
};
