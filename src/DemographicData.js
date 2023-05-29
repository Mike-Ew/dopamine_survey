  
export const DemographicData = {
  name: "Demographic",
  elements: [
    {
      type: "radiogroup",
      name: "gender",
      title: "Gender",
      choices: ["Male", "Female"],
      isRequired: true
    },
    {
      type: "text",
      name: "age",
      title: "Age",
      isRequired: true
    },
    //... More questions
    {
      type: "text",
      name: "university Name",
      title: "University Name",
      isRequired: true
      },
      {
      type: "text",
      name: "Faculty",
      title: "Faculty/College",
      isRequired: true
      },      
      {
      type: "text",
      name: "Department",
      title: "Department",
      isRequired: true
      },      
      {
      type: "text",
      name: "Program",
      title: "Course of study",
      isRequired: true
      },
      {
      type: "radiogroup",
      name: "level",
      title: "Year/Level",
      choices: ["100", "200", "300", "400", "500"],
      isRequired: true
      },
      {
      type: "radiogroup",
      name: "academic class",
      title: "Academic Class",
      choices: ["First Class", "Second Class Upper", "Second Class Lower", "Third Class"],
      isRequired: true
      },
      {
      type: "text",
      name: "gpa",
      title: "LAst GPA",
      isRequired: true
      },
      {
      type: "text",
      name: "club",
      title: "social Club Membership across Campus",
      isRequired: true
      }
  ]
};
