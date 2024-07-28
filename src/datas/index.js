import {
    rbm,
    vit,
    app,
    menslook,
    ml,
    portfolio,
    ws,
    html,
    css,
    js,
    react,
    java,
    python,
    // node,
    // mdb,
    // angular
} from "../assets"

const historys =[
    {
        role: "Master of Computer Application",
        org: "Vellore Institute of Technology",
        grade:"(Currently Pursuing) 8.13/10 CGPA",    
        imageSrc: vit
    },
    {
        role: "Bachelor of Computer Application",
        org: "Vellore Institute of Technology (2023)",
        grade:"8.5/10 CGPA",
        imageSrc: vit
    },
    {
        role: "Higher Secondary",
        org: "Rathinagiri Bageerathan Matriculation Higher Secondary School (2020)",
        grade:"71%",
        imageSrc: rbm
    },
    {
        role: "Secondary Education",
        org: "Rathinagiri Bageerathan Matriculation Higher Secondary School (2018)",
        grade:"84%",
        imageSrc: rbm
    }
]

const skills =
[
    {
        "title":"HTML",
        "imageSrc":html
    },
    {
        "title":"CSS",
        "imageSrc":css
    },
    {
        "title":"JavaScript",
        "imageSrc":js
    },
    {
        "title":"React",
        "imageSrc":react
    },
    
    {
        "title":"Java",
        "imageSrc":java
    },
    {
        "title":"Python",
        "imageSrc":python
    }
]

const projects = 
[
    // {
    //     "title":"Detection and Prediction of Phishing Websites. (2022)",
    //     "imageSrc":ml,
    //     "des":"Its goal was to identify effective classifiers for classification performance.",
    //     "skills":["Machine Learing", "Python", "Jupyter Notebook"],
    //     "source":"https://github.com/dineshkumarc9102/Dineshkumar_Detection_And_Prediction_Of_Phishing_Websites_Using_Data_Mining_Techniques"
    // },
    {
        "title":"My Portfolio Website. (2024)",
        "imageSrc":portfolio,
        "des":"This is my portfolio showcasing projects I've worked on and contributions I've made.",
        "skills":["HTML", "CSS", "JavaScript", "React"],
        "source":"https://github.com/dineshkumarc9102/Dineshkumar_Portfolio_With_React"
    },
    {
        "title":"Mens Look. (2024)",
        "imageSrc":menslook,
        "des":"This project involves creating a dynamic, visually appealing, and user-friendly website for a local salon shop.",
        "skills":["HTML", "CSS", "JavaScript", "React with Vite", "Framer Motion"],
        "source":"https://github.com/dineshkumarc9102/Dineshkumar_Mens_Look"
    },
    {
        "title":"Web Pages.",
        "imageSrc":ws,
        "des":"This Repository includes several web pages or frontend pages to showcase me skills.",
        "skills":["HTML", "CSS", "JavaScript", "React with Vite"],
        "source":"https://github.com/dineshkumarc9102/Dineshkumar_Web_Pages"
    },
    {
        "title":"Feature Selection and Classification Model for Cancer. (2023)",
        "imageSrc":ml,
        "des":"It conducted predictive analysis to optimize algorithm selection and minimize error rates using confusion matrices and entropy.",
        "skills":["Machine Learing", "Python", "Jupyter Notebook"],
        "source":"https://github.com/dineshkumarc9102/Dineshkumar_Feature_Selection_And_Classification_Model_For_Cancer"
    },
    {
        "title":"Agro Mobile Application. (2023)",
        "imageSrc":app,
        "des":"The application is to allow farmers to fix a satisfactory rate for their product and to sell them as well. A user can login as a farmer, customer, retailers and even as hotel managers.",
        "skills":["Java", "XML", "Android Studio"],
        "source":"https://github.com/dineshkumarc9102/Dineshkumar_Agro_Application"
    }

]

export {historys, skills, projects};