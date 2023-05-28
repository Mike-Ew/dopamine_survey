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
  //1
  {
    name: "energyAfterSleep",
    title: "Do you get excessive amounts of sleep and still awaken tired?",
  },
  //2
  { name: "lightSleeperTendency", title: "I tend to be a light sleeper" },
  //3
  {
    name: "harmattanEffect",
    title:
      "In the harmattan season, I find it a lot harder to get up in the morning",
  },
  //4
  {
    name: "mindShutOffDifficulty",
    title:
      "When I try to sleep at night, I often find that my mind does not shut off.",
  },
  //5
  {
    name: "constantTiredness",
    title: "Are you tired, or do you have a significant loss of energy?",
  },
  //6
  {
    name: "easyIrritability",
    title: "Are you easily angered, irritated, or frustrated?",
  },
  //7
  {
    name: "stressFrequency",
    title: "How often do you experience feelings of stress? ",
  },
  //8
  {
    name: "substanceCoping",
    title: "Have you ever used drugs or alcohol to cope with stress",
  },
  //9
  {
    name: "alertUnderStress",
    title: "Do you feel more alert and focused when you are under stress",
  },
  //10
  {
    name: "cloudyThinkingEpisodes",
    title: "Do you have episodes of irritability and cloudy thinking?",
  },
  //11
  {
    name: "stressHandlingAbility",
    title: "Do you have an inability to handle stress?",
  },
  //12
  {
    name: "depressionSymptoms",
    title: "Do you feel depressed or down, or do you lack an interest in life?",
  },
  //13
  {
    name: "motivationDifficulty",
    title: "Do you find it difficult to enjoy life or to get motivated?",
  },
  //14
  {
    name: "mentalSluggishness",
    title: "Are you mentally down or sluggish?",
  },
  //15
  {
    name: "socialIsolation",
    title: "Do you regularly isolate yourself from others?",
  },
  //16
  { name: "regularMoodSwings", title: "Do you regularly have mood swings?" },
  //17
  {
    name: "fattyFoodCravings",
    title:
      "Do you regularly crave salty or fatty foods such as steak, hamburgers, bacon, sausage, salami, pepperoni, or a meat lover's pizza? ",
  },
  //18
  {
    name: "saltyStarchCravings",
    title:
      "Do you regularly crave salty starches such as French fries, potato chips, corn chips, pretzels, popcorn, or crackers?",
  },
  //19
  {
    name: "caffeineDependence",
    title: "Do you drink coffee or caffeinated beverages to keep you going?",
  },
  //20
  {
    name: "lowBloodSugar",
    title:
      "Do you have episodes of low blood sugar with light-headedness and extreme hunger?",
  },
  //21
  {
    name: "naturalAthlete",
    title: "I am naturally athletic and coordinated",
  },
  //22
  {
    name: "postWorkoutPleasure",
    title: "Do you experience feelings of pleasure or reward after exercising?",
  },
  //23
  {
    name: "fitnessGoalSatisfaction",
    title:
      "Do you experience a sense of pleasure or satisfaction from achieving fitness goals or milestones?",
  },
  //24
  {
    name: "workoutAgitation",
    title:
      "Do you feel more agitated when you cannot exercise on an almost daily basis?",
  },
  //25
  {
    name: "increasingSMUrges",
    title: "You feel the urge to use social media more and more",
  },
  //26
  {
    name: "failedSMCutdownAttempts",
    title:
      "You have tried to cut down on the use of social media without success",
  },
  //27
  {
    name: "negativeSMEffects",
    title:
      "You use social media so much that it has had a negative impact on your job/studies",
  },
  //28
  {
    name: "SMCheckFrequency",
    title:
      "How often do you find yourself checking social media platforms throughout the day",
  },
  //29
  {
    name: "pastAddictions",
    title:
      "Are you or have you ever been addicted to alcohol, cigarettes, drugs, gambling, sex, or food?",
  },
  //30
  {
    name: "rewardingHabits",
    title:
      "How often do you engage in rewarding personal habits (e.g., hobbies, creative activities) that bring you a sense of pleasure or satisfaction.",
  },
  //31
  {
    name: "workMobility",
    title:
      "It is hard for me to sit at a desk and work without getting up and moving around",
  },
  //32
  {
    name: "lowEnergyFrequency",
    title: "Do you often feel low on energy?",
  },
  //33
  {
    name: "lonelinessFrequency",
    title:
      "I am the sort of person who gets lonely pretty quickly if I am not around other people",
  },
  //34
  { name: "anxietyFrequency", title: "How often do you experience anxiety?" },
  //35
  { name: "natureEnjoyment", title: "I enjoy being outdoors in nature" },
  // add more questions here...
];

const dopamineAssessmentQuestions = questions.map((question) => ({
  type: "radiogroup",
  name: question.name,
  title: question.title,
  choices: [
    { value: "N", text: "Never" },
    { value: "R", text: "Rarely" },
    { value: "S", text: "Sometimes" },
    { value: "O", text: "Often" },
    { value: "AA", text: "Almost Always" },
  ],
  isRequired: true,
}));

export const DopamineAssessment = {
  name: "Dopamine Level Assessment",
  elements: dopamineAssessmentQuestions,
};
