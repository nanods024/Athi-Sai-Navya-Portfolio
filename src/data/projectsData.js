import EmotionRecognition from "../assets/projects/emotion-recognition.jpg";
import ChatAnalysis from "../assets/projects/chat-analysis.jpg";
import TimeSeries from "../assets/projects/time-series.jpg";
import BoxOffice from "../assets/projects/box-office-ml.jpg";
import IPLAnalysis from "../assets/projects/ipl-analysis.jpg";
import DisneyAnalysis from "../assets/projects/disney-analysis.jpg";
import CifarCNN from "../assets/projects/cifar10-cnn.jpg";

export const projectsData = [
  {
    id: 7,
    title: "Emotion Recognition from Audio",
    category: "Machine Learning",
    tech: [
      "Python",
      "Librosa",
      "NumPy",
      "Scikit-learn",
      "TensorFlow",
      "Matplotlib"
    ],
    image: EmotionRecognition,
    github: "https://github.com/sainavyaathi",
    demo: "",
    description:
      "Machine learning project to classify human emotions from audio signals using MFCC features. Built models to detect emotions like happy, sad, and angry."
  },

  {
    id: 6,
    title: "WhatsApp Group Chat Analysis",
    category: "Data Analysis",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Regex"
    ],
    image: ChatAnalysis,
    github: "https://github.com/sainavyaathi",
    demo: "",
    description:
      "Performed EDA on WhatsApp chats to analyze user activity, message patterns, and peak conversation times."
  },

  {
    id: 5,
    title: "Time Series Forecasting & Analysis",
    category: "Data Science",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Statsmodels",
      "ARIMA"
    ],
    image: TimeSeries,
    github: "https://github.com/sainavyaathi",
    demo: "",
    description:
      "Time series forecasting project using ARIMA models. Analyzed trends, seasonality, and patterns."
  },

  {
    id: 4,
    title: "Box Office Prediction using ML",
    category: "Machine Learning",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "XGBoost",
      "Matplotlib"
    ],
    image: BoxOffice,
    github: "https://github.com/sainavyaathi/Box-Office-Prediction-using-ML-",
    demo: "",
    description:
      "ML project predicting movie revenue using regression models. XGBoost achieved best performance."
  },

  {
    id: 3,
    title: "IPL Match Analysis (2008–2020)",
    category: "Data Analysis",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    image: IPLAnalysis,
    github:
      "https://github.com/sainavyaathi/IPL-Match-Analysis-2008-2020-Exploratory-Data-Analysis-Project",
    demo: "",
    description:
      "EDA project analyzing IPL matches. Explored team performance, player stats, and trends."
  },

  {
    id: 2,
    title: "Disney Movies Data Analysis",
    category: "Data Analysis",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    image: DisneyAnalysis,
    github:
      "https://github.com/sainavyaathi/Disney-Movies-Data-Analysis-EDA-Visualizations-",
    demo: "",
    description:
      "Analyzed Disney movie datasets to uncover trends in revenue, genres, and release years."
  },

  {
    id: 1,
    title: "CIFAR-10 CNN Evolution & Adversarial Robustness",
    category: "Deep Learning",
    tech: [
      "Python",
      "PyTorch",
      "Torchvision",
      "NumPy",
      "Matplotlib",
      "Google Colab"
    ],
    image: CifarCNN,
    github:
      "https://github.com/sainavyaathi/CIFAR-10-CNN-Evolution-and-Adversarial-Robustness",
    demo: "",
    description:
      "Deep learning project using CNNs and transfer learning on CIFAR-10. Achieved ~82% accuracy with adversarial testing."
  }
];

export const filterOptions = [
  "All",
  "Data Science",
  "Data Analysis",
  "Machine Learning",
  "Deep Learning"
];