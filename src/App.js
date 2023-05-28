// // surveyQuestions.js
// import { useCallback, useState, useRef } from 'react';
// import './App.css'

// import 'survey-core/defaultV2.min.css';
// import { Model } from 'survey-core';
// import { Survey } from 'survey-react-ui';
// import { surveyQuestions } from './surveyQuestions.js';


// import { surveyQuestions } from './surveyQuestions';

// function App() {
//   const survey = useRef(new Model(surveyQuestions)).current;
//   const [surveyResults, setSurveyResults] = useState("");
//   const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

//   const displayResults = useCallback((sender) => {
//     setSurveyResults(JSON.stringify(sender.data, null, 4));
//     setIsSurveyCompleted(true);
//   }, []);

//   survey.onComplete.add(displayResults);

//   return (
//     <>
//       <Survey model={survey} id="surveyContainer" />
//       {isSurveyCompleted && (
//         <>
//           <p>Result JSON:</p>
//           <code style={{ whiteSpace: 'pre' }}>
//             {surveyResults}
//           </code>
//         </>
//         )
//       }
//     </>
//   );
// }

// export default App;

import React, { useCallback, useState, useRef } from 'react';
import './App.css'
import 'survey-core/defaultV2.min.css';
import { Model } from 'survey-core';
import { Survey } from 'survey-react-ui';
import { DemographicData } from './DemographicData';
import { DopamineAssessment } from './DopamineAssessment';
import { AttentionSpanAssessment } from './AttentionSpanAssessment';

const surveyJson = {
  pages: [ DemographicData, DopamineAssessment, AttentionSpanAssessment ],
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Submit",
  showPrevButton: false,
  firstPageIsStarted: true,
  startSurveyText: "Start the Survey",
  completedHtml: "Thank you for your participation!",
  showPreviewBeforeComplete: "showAnsweredQuestions"
};

function App() {
  const survey = useRef(new Model(surveyJson)).current;
  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  const displayResults = useCallback((sender) => {
    setSurveyResults(JSON.stringify(sender.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onComplete.add(displayResults);

  return (
    <>
      <Survey model={survey} id="surveyContainer" />
      {isSurveyCompleted && (
        <>
          <p>Result JSON:</p>
          <code style={{ whiteSpace: 'pre' }}>
            {surveyResults}
          </code>
        </>
        )
      }
    </>
  );
}

export default App;
