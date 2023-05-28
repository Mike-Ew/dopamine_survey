const questions = [
  //1
  {
    name: "conversation",
    title:
      "Do you find yourself missing key parts of conversations because of drifting off in your own thought?",
  },
  //2
  {
    name: "priorities",
    title:
      "I spend a lot of time doing tasks that aren't very important, even if there are tasks that are much more important that I should be working on.",
  },
  //3
  {
    name: "daydreamFrequency",
    title:
      "How often do you find yourself daydreaming or getting lost in your thoughts during activities that require your attention?",
  },
  //4
  {
    name: "needIsolation",
    title: "Do you need relative isolation to get work done?",
  },
  //5
  {
    name: "restlessness",
    title: "How often do you feel restless or fidgety?",
  },
  //6
  {
    name: "listeningDifficulty",
    title:
      "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
  },
  //7
  {
    name: "procrastinationTendency",
    title:
      "I tend to procrastinate, and then try to do the majority of my work right before it absolutely has to be done",
  },
  //8
  {
    name: "forgetfulness",
    title:
      "Do you forget to bring things to work, such as work materials or assignments due chat day?",
  },
  //9
  {
    name: "taskOrganization",
    title: "Do you have trouble organizing tasks into ordered seeps?",
  },
  //10
  {
    name: "memoryDifficulty",
    title:
      "How often do you find yourself having difficulty remembering information or details that you have learned?",
  },
  //11
  {
    name: "distractionSensitivity",
    title:
      "Are you ever very easily distracted by event around you such as noise (conversations, TV, radio), movement, or clutter?",
  },
  //12
  {
    name: "avoidChallengingTasks",
    title:
      "Do you avoid asks (work, chores, reading, board games) that are challenging or lengthy because it's hard to stay focused on these things for a long time?",
  },
  //13
  {
    name: "inattentivenessComplaints",
    title:
      "Do people (boss, colleagues, friends) complain that you don't seem to listen or respond (or daydream} when spoken to or when asked to do tasks?",
  },
  //14
  {
    name: "relianceOnDeadlines",
    title: "Do you need consequences (such as deadlines) to finish?",
  },
  //15
  {
    name: "incompleteProjects",
    title: "Do you often leave things half done and start another project?",
  },
  //16
  {
    name: "prolongedTasks",
    title:
      "Does it take a longer time than it should to complete task because you can't keep your mind on the task?",
  },
  //17
  {
    name: "readingDifficulty",
    title:
      "Do you have trouble remembering what you read, and do you need to re-read the same passage several times?",
  },
  //18
  {
    name: "boringTaskFocus",
    title:
      "Do you have unusual trouble staying focused on boring or repetitive tasks?",
  },
  //19
  {
    name: "sustainedAttentionDifficulty",
    title:
      "Do you have trouble paying attention when watching movies, reading, or attending lectures for an extended period of time?",
  },
  //20
  {
    name: "messiness",
    title: "Are you messy?",
  },
  // add more questions here...
];

const attentionSpanAssessmentQuestions = questions.map((question) => ({
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

export const AttentionSpanAssessment = {
  name: "Attention Span Level Assessment",
  elements: attentionSpanAssessmentQuestions,
};
