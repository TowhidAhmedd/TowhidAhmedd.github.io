





/* script.js */
function initTailwind() {
    return { config() { return { content: [], theme: { extend: {} }, plugins: [] } } }
}

// Typing animation
let typingTimeout;
function startTyping() {
    const textEl = document.getElementById('typing-text');
    const cursor = document.getElementById('cursor');
    const full = "And I'm an AI/ML Engineer";
    textEl.textContent = "And I'm an ";
    let i = 11;

    function type() {
        if (i < full.length) {
            textEl.textContent += full.charAt(i);
            i++;
            typingTimeout = setTimeout(type, 55);
        } else {
            cursor.style.animation = 'none';
            setTimeout(() => {
                textEl.textContent = "And I'm an ";
                i = 11;
                cursor.style.animation = 'blink 0.8s step-end infinite';
                type();
            }, 2800);
        }
    }
    type();
}

// Mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('hamburger-icon');
    menu.classList.toggle('hidden');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
}

// Smooth scroll
function smoothScrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Download CV (replace filename if needed)
function downloadCV() {
    const link = document.createElement('a');
    link.href = 'AI_ML_Resume.pdf';           // ← Put your PDF in the same folder
    link.download = 'Towhid_Ahmed_CV.pdf';
    link.click();

    const toast = document.createElement('div');
    toast.innerHTML = `<div class="fixed bottom-8 right-8 bg-[#0a7c6b] text-white px-8 py-4 rounded-3xl shadow-2xl flex items-center gap-x-3 z-[9999]"><i class="fa-solid fa-check-circle"></i><span>CV downloaded successfully!</span></div>`;
    document.body.appendChild(toast.firstElementChild);
    setTimeout(() => toast.firstElementChild.remove(), 2500);
}

// Projects Data
const projectsData = [
    {
        title: "SMS Spam Detection System",
        short: "97% accurate NLP spam classifier with Streamlit UI",
        desc: "Built an end-to-end machine learning model to classify SMS messages as Spam or Ham. Applied text preprocessing techniques: tokenization, stopword removal, and TF-IDF vectorization. Trained models including Logistic Regression, Naive Bayes, and SVM. Achieved 97.06% accuracy.",
        tech: "Python, Scikit-learn, NLTK, Pandas, NumPy, Streamlit",
        github: "https://github.com/TowhidAhmedd/SMS_Spam_Classifier-",
        demo: "https://sms-spam-classifier-jz35.onrender.com"
    },
    {
        title: "Production-Ready MLOps Pipeline",
        short: "Full ETL + ML lifecycle pipeline with MLflow & Docker",
        desc: "Designed and implemented an end-to-end machine learning pipeline with modular architecture covering data ingestion, preprocessing, model training, and evaluation. Integrated MLflow for experiment tracking and Docker for containerization.",
        tech: "Python, Scikit-learn, MLflow, Docker, GitHub Actions",
        github: "https://github.com/TowhidAhmedd/Production-Ready-MLOps-Pipeline-with-ETL",
        demo: "#"
    },
    {
        title: "Potato Disease Classification (CNN)",
        short: "Deep Learning model for agricultural disease detection",
        desc: "Developed a deep learning-based image classification system to detect potato plant diseases using Convolutional Neural Networks (CNN). Achieved ~97.8% accuracy. Deployed interactive web app using Streamlit.",
        tech: "Python, TensorFlow, Keras, CNN, OpenCV, Streamlit",
        github: "https://github.com/TowhidAhmedd/Potato-Disease-Classification-using-Deep-Learning",
        demo: "https://potato-disease-classification-using-deep-m67m.onrender.com"
    },
    {
        title: "Movie Recommendation System",
        short: "Content-based NLP recommendation engine",
        desc: "Built a content-based movie recommendation system using NLP techniques to analyze movie metadata. Applied TF-IDF and cosine similarity. Integrated TMDB API for live data.",
        tech: "Python, Pandas, Scikit-learn, TF-IDF, Streamlit, TMDB API",
        github: "https://github.com/TowhidAhmedd/Movie-Recommendation-System",
        demo: "https://movie-recommendation-system-cc8s.onrender.com"
    },
    {
        title: "End-to-End Medical Chatbot (RAG)",
        short: "LangChain + OpenAI powered medical assistant",
        desc: "Built a retrieval-augmented generation (RAG) medical chatbot using LangChain and OpenAI GPT. Deployed with Flask, Pinecone vector DB, and Docker on Render.",
        tech: "Python, LangChain, Flask, Pinecone, OpenAI, Docker",
        github: "#",
        demo: "#"
    },
    {
        title: "Customer Churn Prediction (Deep Learning)",
        short: "ANN model with 79.33% accuracy",
        desc: "Designed an Artificial Neural Network using TensorFlow/Keras to predict telecom customer churn. Performed extensive feature engineering and achieved 79.33% test accuracy.",
        tech: "Python, TensorFlow, Keras, Pandas, NumPy",
        github: "#",
        demo: "#"
    },
    {
        title: "Face Mask Detection (CNN)",
        short: "92.19% accurate real-time mask detector",
        desc: "Developed a deep learning CNN using TensorFlow/Keras and OpenCV to detect mask usage on facial images. Achieved 92.19% accuracy with data augmentation.",
        tech: "Python, TensorFlow, Keras, OpenCV, CNN",
        github: "#",
        demo: "#"
    }
];

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-grid');
    container.innerHTML = projectsData.map((p, i) => `
        <div onclick="showProject(${i})" class="bg-white/95 backdrop-blur rounded-3xl p-8 cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all border border-white/30">
            <div class="text-emerald-600 text-sm font-bold mb-2">PROJECT ${String(i+1).padStart(2,'0')}</div>
            <h3 class="text-2xl font-semibold mb-3">${p.title}</h3>
            <p class="text-gray-600 mb-6">${p.short}</p>
            <div class="flex items-center justify-between text-xs uppercase">
                <div class="flex gap-1 flex-wrap">${p.tech.split(', ').map(t => `<span class="bg-gray-100 px-3 py-1 rounded-3xl">${t}</span>`).join('')}</div>
                <button class="bg-[#0a7c6b] text-white px-6 py-2 rounded-3xl text-sm font-medium">View Details →</button>
            </div>
        </div>
    `).join('');
}

// Show modal
function showProject(index) {
    const p = projectsData[index];
    const modal = document.getElementById('project-modal');
    const content = document.getElementById('modal-content');
    
    content.innerHTML = `
        <div class="flex justify-between items-start mb-6">
            <h2 class="text-4xl font-bold">${p.title}</h2>
            <button onclick="closeModal()" class="text-4xl text-gray-400 hover:text-gray-900">×</button>
        </div>
        <p class="text-xl text-gray-600 mb-8">${p.desc}</p>
        <div class="mb-8">
            <span class="font-semibold text-sm uppercase tracking-widest">Tech Stack</span>
            <div class="flex flex-wrap gap-2 mt-3">${p.tech.split(', ').map(t => `<span class="bg-gray-100 text-gray-700 px-4 py-2 rounded-3xl text-sm">${t}</span>`).join('')}</div>
        </div>
        <div class="flex gap-4">
            ${p.github !== '#' ? `<a href="${p.github}" target="_blank" class="flex-1 bg-gray-900 text-white text-center py-4 rounded-3xl font-medium flex items-center justify-center gap-x-2"><i class="fa-brands fa-github"></i> GitHub Repo</a>` : ''}
            ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" class="flex-1 bg-[#0a7c6b] text-white text-center py-4 rounded-3xl font-medium flex items-center justify-center gap-x-2"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live Demo</a>` : ''}
        </div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
}

function closeModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

// FAQ Data
const faqData = [
    { q: "Tell me about yourself", a: "I am an aspiring AI/ML Engineer with a strong focus on building end-to-end machine learning and NLP-based systems. I have worked on projects like spam detection and recommendation systems, where I handled data preprocessing, model training, and evaluation. I also have strong problem-solving skills, solving 400+ DSA problems. Currently, I am exploring Generative AI and working on building real-world AI applications." },
    { q: "Are you working in any timezone?", a: "I am based in Bangladesh (GMT+6), but I am flexible and comfortable working in different time zones depending on team requirements." },
    { q: "Have you worked with any team?", a: "I have primarily worked independently on my projects, which helped me develop strong self-learning and problem-solving skills. However, I am comfortable collaborating with teams and using tools like GitHub for version control and project management." },
    { q: "Are you open to remote work?", a: "Yes, I am open to remote opportunities and comfortable working in distributed teams." },
    { q: "What tools do you use for collaboration?", a: "I use Git and GitHub for version control and collaboration. I am also familiar with communication tools like Slack, Trello, and Jira." },
    { q: "How do you manage your time?", a: "I prioritize tasks based on importance and deadlines. I break down work into smaller tasks and follow a structured approach to complete projects efficiently." },
    { q: "Are you comfortable learning new technologies?", a: "Yes, I actively learn new technologies, especially in AI/ML and Generative AI." },
    { q: "Why should we hire you?", a: "I have hands-on experience building end-to-end AI/ML projects and strong problem-solving skills. I am highly motivated and focused on building real-world impactful AI solutions." }
];

// Render FAQ
function renderFAQ() {
    const container = document.getElementById('faq-container');
    container.innerHTML = faqData.map((item, i) => `
        <div onclick="toggleFAQ(this)" class="faq-item border border-gray-200 rounded-3xl px-8 py-6 cursor-pointer">
            <div class="flex justify-between items-center">
                <h4 class="font-semibold text-xl">${item.q}</h4>
                <i class="fa-solid fa-chevron-down text-[#0a7c6b]"></i>
            </div>
            <div class="faq-answer hidden mt-6 text-gray-600 leading-relaxed">${item.a}</div>
        </div>
    `).join('');
}

function toggleFAQ(el) {
    const answer = el.querySelector('.faq-answer');
    const icon = el.querySelector('i');
    answer.classList.toggle('hidden');
    icon.classList.toggle('fa-chevron-down');
    icon.classList.toggle('fa-chevron-up');
}



// Form handler - Backend message send to your email (replace ONLY this function)
function handleSubmit(e) {
    e.preventDefault();

    const btn = e.target.querySelector('button');
    const original = btn.innerHTML;

    // Show sending state
    btn.innerHTML = `SENDING <span class="animate-spin inline-block ml-2">⟳</span>`;

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Data for email
    const formData = {
        name: name,
        email: email,
        message: message,
        _subject: `New Portfolio Message from ${name}`,
        _replyto: email,
        _captcha: "false"
    };

    // === BACKEND SEND (Formsubmit) ===
    fetch('https://formsubmit.co/ajax/mdt169068@gmail.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success === true || data.success === "true") {
            btn.innerHTML = `✅ MESSAGE SENT!`;
            setTimeout(() => {
                e.target.reset();
                btn.innerHTML = original;
                alert("Thank you! I'll reply within 24 hours.");
            }, 1800);
        } else {
            throw new Error('Submission failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        btn.innerHTML = `❌ ERROR - TRY AGAIN`;
        setTimeout(() => { btn.innerHTML = original; }, 2500);
        alert("Something went wrong. Please email me directly at mdt169068@gmail.com Or WhatsApp");
    });
}



// function handleSubmit(e) {
//     e.preventDefault();
//     const btn = e.target.querySelector('button');
//     const original = btn.innerHTML;
//     btn.innerHTML = `SENDING <span class="animate-spin inline-block ml-2">⟳</span>`;
//     setTimeout(() => {
//         btn.innerHTML = `✅ MESSAGE SENT!`;
//         setTimeout(() => {
//             e.target.reset();
//             btn.innerHTML = original;
//             alert("Thank you! I'll reply within 24 hours.");
//         }, 1800);
//     }, 1400);
// }

// Initialize everything
window.onload = () => {
    initTailwind();
    startTyping();
    renderProjects();
    renderFAQ();
    console.log('%c✅ Towhid Ahmed Portfolio ready! Built as Senior Frontend Engineer', 'background:#0a7c6b;color:#fff;padding:2px 6px;border-radius:9999px');
};