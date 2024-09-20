import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const columns = [
  { field: 'id', headerName: 'S.NO', width: 70 },
  { field: 'projectCode', headerName: 'Project Code', width: 130 },
  { field: 'projectName', headerName: 'Project Name', width: 600 },
  {
    field: 'viewDetails',
    headerName: 'View Details',
    sortable: false,
    width: 200,
    renderCell: (params) => (
<Typography
  variant="body2"
  color="primary"
  onClick={() => handleViewDetails(params.row)}
  style={{ cursor: 'pointer', textDecoration: 'underline', paddingTop: '15px' }} // Adjust value as needed
>
  View Details
</Typography>

    ),
  },
];

const rows = [
  { id: 1, projectCode: 'PTSY101', projectName: 'Diabetic Detection using Machine learning' },
  { id: 2, projectCode: 'PTSY102', projectName: 'Leaf disease detection using learning' },
  { id: 3, projectCode: 'PTSY103', projectName: 'Prediction of Air Pollution by using Machine learning Alhorithm' },
  { id: 4, projectCode: 'PTSY104', projectName: 'A Multi- Stream Feature Fusion Approach for Traffic Prediction' },
  { id: 5, projectCode: 'PTSY105', projectName: 'Malicious URL Detection based on Machine learning' },
  { id: 6, projectCode: 'PTSY106', projectName: 'E-Pilots:A system to predict hard landing during the approach phase of commerce' },
  { id: 7, projectCode: 'PTSY107', projectName: 'Credit card Fraud Detection Using State-of-the-Art Machine Learning and Deep Learning' },
  { id: 8, projectCode: 'PTSY108', projectName: 'Fraud Detection and Analysis for Insurance Claime  using Machine learning' },
  { id: 9, projectCode: 'PTSY109', projectName: 'A Machine learning-Based Classification and Prediction Technique for DDsoS Att' },
  { id: 10, projectCode: 'PTSY110', projectName: 'Prediction Of Used Car Prices Using Artifical Neural Network And Machine learning' },
  { id: 11, projectCode: 'PTSY111', projectName: 'Campus Placement Prediction And Analysis using Mechine Learning' },
  { id: 12, projectCode: 'PTSY112', projectName: 'Predicting drug-drug interactions based on integrated similarity and semi- superv.. ' },
  { id: 13, projectCode: 'PTSY113', projectName: 'Machine learning learning for fast and reliable sourse-location eatimation in  earthquake ' },
  { id: 14, projectCode: 'PTSY114', projectName: 'Machine learning-Based Analysis of crypto Currency Market Financial Risk Mana..' },
  { id: 15, projectCode: 'PTSY115', projectName: 'Deep fake Detection: A Systematic Literature Review' },
  { id: 16, projectCode: 'PTSY116', projectName: 'Detect DUI: An In-Car Detection System for Drink Driving and BACs' },
  { id: 17, projectCode: 'PTSY117', projectName: 'A Novel Time-Aware Food Recommender-System Based on Deep learning and G..' },
  { id: 18, projectCode: 'PTSY118', projectName: 'Membership Inference Attack and Dfense for Wireless Signal Classifiers with Deep Learning..' },
  { id: 19, projectCode: 'PTSY119', projectName: 'Water Net: A Network for Monitoring And Assessing Water Quality for Deinking a Water..' },
  { id: 20, projectCode: 'PTSY120', projectName: 'Identifying Health Insurance Claim Frauds Using Mixture of Clinical Concepts' },
  { id: 21, projectCode: 'PTSY121', projectName: 'Composite Behavioral Modeling for Identity Theft Detection in Online Social Network.' },
  { id: 22, projectCode: 'PTSY122', projectName: 'Glucoma Detection Using Machine Learning' },
  { id: 23, projectCode: 'PTSY123', projectName: 'Bone Fraction Detection using python gui' },
  { id: 24, projectCode: 'PTSY124', projectName: 'Age and Gender prediction and save no.of person in afolder using python' },
  { id: 25, projectCode: 'PTSY125', projectName: 'Face mask detection using machine learning' },
  { id: 26, projectCode: 'PTSY126', projectName: 'Traffic Sign detection for blind people using Deep learning' },
  { id: 27, projectCode: 'PTSY127', projectName: 'Object detection for blind people using Deep learning' },
  { id: 28, projectCode: 'PTSY128', projectName: 'Alzheimers disease detection using Deep learning' },
  { id: 29, projectCode: 'PTSY129', projectName: 'Brain Tumur detection using python deep learning' },
  { id: 30, projectCode: 'PTSY130', projectName: 'Gender detection based on Voice module using Machine Learning' },
  { id: 31, projectCode: 'PTSY131', projectName: 'Emotion Recognition Based on Voice Module' },
  { id: 32, projectCode: 'PTSY132', projectName: 'Maleria Detection using deep learning' },
  { id: 33, projectCode: 'PTSY133', projectName: 'Emotion Detectio(image,Video,live streame) using Machine Learning' },
  { id: 34, projectCode: 'PTSY134', projectName: 'Lung cancer detection using Machine Learning(Through Image Video Live web camera)' },
  { id: 35, projectCode: 'PTSY135', projectName: 'Social distance detection in Real time using opencv and Yolo' },
  { id: 36, projectCode: 'PTSY136', projectName: 'Fake currency detection using deep learning' },
  { id: 37, projectCode: 'PTSY137', projectName: 'Vehicle Wrong way detection using python' },
  { id: 38, projectCode: 'PTSY138', projectName: 'Card Fraud Detection using Machine Learning' },
  { id: 39, projectCode: 'PTSY139', projectName: 'Skin Cancer detection using Machine Learning' },
  { id: 40, projectCode: 'PTSY140', projectName: 'Heart Disease prediction using Machine Learning'},
  { id: 41, projectCode: 'PTSY141', projectName: 'Smart Health Care System using python Django and machine learning' },
  { id: 42, projectCode: 'PTSY142', projectName: 'Human Action Recognition using deep learning and opencv' },
  { id: 43, projectCode: 'PTSY143', projectName: 'Crime data Analysis using Machine learning and Django' },
  { id: 44, projectCode: 'PTSY144', projectName: 'Plants Identification in a Combined Imbalanced leaf Dataset' },
  { id: 45, projectCode: 'PTSY145', projectName: 'Prediction of modernized loan approval system base on machine learning approch..' },
  { id: 46, projectCode: 'PTSY146', projectName: 'Suicidal Ideation Detection A Review of Machine Learning Methods and Application' },
  { id: 47, projectCode: 'PTSY147', projectName: 'Stress Detection in IT Professionals' },
  { id: 48, projectCode: 'PTSY148', projectName: 'Drowsiness and yawn detection using opencv' },
  { id: 49, projectCode: 'PTSY149', projectName: 'Adaptive Hierarchical Cyber Attack Detection and Localization in Active Distribution' },
  { id: 50, projectCode: 'PTSY150', projectName: 'Detection of Fake and Clone accounts in Twitter using Classification and Distance..' },
  { id: 51, projectCode: 'PTSY151', projectName: 'Comparative Analysis of Liver diseases by using Machine Learning Techniques' },
  { id: 52, projectCode: 'PTSY152', projectName: 'Heart Rate monitering and Calculate BPM system using python' },
  { id: 53, projectCode: 'PTSY153', projectName: 'Curson control using eye ball for handicapped people using opencv' },
  { id: 54, projectCode: 'PTSY154', projectName: 'Face Recognition For Security purpose using python' },
  { id: 55, projectCode: 'PTSY155', projectName: 'Speed detection and overspeed captured cars using opencv' },
  { id: 56, projectCode: 'PTSY156', projectName: 'Hospital management system using python Django' },
  { id: 57, projectCode: 'PTSY157', projectName: 'Number plate extraction using Pytesseract-OCR and Email The number plate' },
  { id: 58, projectCode: 'PTSY158', projectName: 'Parking Allignment system using php and my sql' },
  { id: 59, projectCode: 'PTSY159', projectName: 'shopping cart using Php and my sq' },
  { id: 60, projectCode: 'PTSY160', projectName: 'Virtual paint using opencv' },
  { id: 61, projectCode: 'PTSY161', projectName: 'Parking Management system web application using Nodejs and mongo db' },
  { id: 62, projectCode: 'PTSY162', projectName: 'Food ordering system using my sql and php' },
  { id: 63 , projectCode: 'PTSY163', projectName: 'Web based graphical password user authentication system using phthon Django' },
  { id: 64, projectCode: 'PTSY164', projectName: 'College online Sub registration using my sql. and web applications' },
  { id: 65, projectCode: 'PTSY165', projectName: 'Library management system using Django' },
  { id: 66, projectCode: 'PTSY166', projectName: 'Sign language detection using web application' },
  { id: 67, projectCode: 'PTSY167', projectName: 'Voic module chat bot using python GUI' },
  { id: 68, projectCode: 'PTSY168', projectName: 'Stock management system using python GUI' },
  { id: 69, projectCode: 'PTSY169', projectName: 'Data Hiding using Stegnography using python' },
  { id: 70, projectCode: 'PTSY170', projectName: 'A neural based research too analysis' },
  { id: 71, projectCode: 'PTSY171', projectName: 'Detection of Fake and Clone accounts in Twitter using Classification and Distance' },
  { id: 72, projectCode: 'PTSY172', projectName: 'A spam Transformer Model for SMS Spam Detection' },
  { id: 73, projectCode: 'PTSY173', projectName: 'A student attendance management method based on crowd sensing in classroom' },
  { id: 74, projectCode: 'PTSY174', projectName: 'Honey bee queen detection and worker classification using machine learning' },
  { id: 75, projectCode: 'PTSY175', projectName: 'Detection Deepfake Videos Using Long Distance Attention' },
  { id: 76, projectCode: 'PTSY176', projectName: 'Color Detection in Real-Time using Opencv' },
  { id: 77, projectCode: 'PTSY177', projectName: 'Representing Fine-Grained Co-Occurrences for Behavior-Based Fraud Detection' },
  { id: 78, projectCode: 'PTSY178', projectName: 'Fire and Gun Voilence based Anomaly Detection System Using Deep  Neural Network' },
  { id: 79, projectCode: 'PTSY179', projectName: 'A Multi perspective Fraud Detection Method for Multi-participant E-commerce Tracking' },
  { id: 80, projectCode: 'PTSY180', projectName: 'A Computer-Aided Inspection System to Predict Quality Characteristics in food...' },
  { id: 81, projectCode: 'PTSY181', projectName: 'Crime Type And Occurrence Prediction Using Machine Learning Algorithm' },
  { id: 82, projectCode: 'PTSY182', projectName: 'Emotion recognition using text based analysis using machine learning'},
  { id: 83, projectCode: 'PTSY183', projectName: 'Checking Security Properties of Cloud Service Rest APIs' },
  { id: 84, projectCode: 'PTSY184', projectName: 'Cotton disease prediction using deep learning' },
  { id: 85, projectCode: 'PTSY185', projectName: 'Prediction of students performance using Regression Based On Machine Learning' },
  { id: 86, projectCode: 'PTSY186', projectName: 'Improving Shopping Mall Revenue by Real-Time Customized Digital Coupon Issues..' },
  { id: 87, projectCode: 'PTSY187', projectName: 'Vitamin Deficiency Detection Using Image Processing and Neural Network' },
  { id: 88, projectCode: 'PTSY188', projectName: 'Anamoly Detection Using Face Recognition'},
  { id: 89, projectCode: 'PTSY189', projectName: 'Cyber bullying on social media' },
  { id: 90, projectCode: 'PTSY190', projectName: 'Automated Emerging Cyber Threat Identification and Profiling Based on Natuarl' },
  { id: 91, projectCode: 'PTSY191', projectName: 'Foureye Defensive Deception based on Hypergame Theory' },

  
  
];

const paginationModel = { page: 0, pageSize: 5 };

const handleViewDetails = (row) => {
  // Your logic to view details goes here
  console.log('Viewing details for:', row);
};

export default function DataTable() {
  return (
    <Paper sx={{ height: 400, width: '100%',marginLeft:'5px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
