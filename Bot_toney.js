
// DOM elements
const chatbotBtn = document.getElementById('chatbotBtn');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const suggestions = document.querySelectorAll('.suggestion');

// Toggle chat window
chatbotBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
    userInput.focus();
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('active');
});

// Send message function
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;
    
    // Add user message
    addMessage(message, 'user');
    userInput.value = '';
    
    // Simulate bot thinking
    setTimeout(() => {
        // Get bot response
        const response = getBotResponse(message);
        addMessage(response, 'bot');
        
        // Auto-scroll to bottom
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 800);
}

// Send message on button click
sendBtn.addEventListener('click', sendMessage);

// Send message on Enter key
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Add suggestion click handlers
suggestions.forEach(button => {
    button.addEventListener('click', () => {
        const question = button.getAttribute('data-question');
        userInput.value = question;
        sendMessage();
    });
});

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', `${sender}-message`);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    
    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Bot responses
function getBotResponse(message) {
    const lowerMsg = message.toLowerCase();
    
    if (lowerMsg.includes('hello') || lowerMsg.includes('hi') || lowerMsg.includes('hey')) {
        return "Hello there! I'm here to help you learn more about Antoney and his skills. What would you like to know?";
    }
    
    if (lowerMsg.includes('skill') || lowerMsg.includes('expert') || lowerMsg.includes('strong')) {
        return "Antoney specializes in frontend development (React, Vue.js), backend technologies (Node.js, Python), UI/UX design, and database management. His strongest skills are in creating responsive web applications with intuitive user interfaces.";
    }
    
    if (lowerMsg.includes('experience') || lowerMsg.includes('background')) {
        return "Antoney  has over 5 years of experience in full stack development. He's worked with startups and established companies, delivering web applications that solve real business problems. He has experience leading development teams and managing projects from concept to launch.";
    }
    
    if (lowerMsg.includes('project') || lowerMsg.includes('work')) {
        return "Some of Antoney 's notable projects include: a healthcare management system built with React and Node.js, an e-commerce platform with real-time inventory tracking, a financial dashboard for investment analysis, and several open-source UI component libraries.";
    }
    
    if (lowerMsg.includes('contact') || lowerMsg.includes('reach') || lowerMsg.includes('email')) {
        return "You can reach Antoney  at aouko178@gmail.com or connect with him on LinkedIn. He's open to freelance opportunities, full-time positions, and collaborations on interesting projects.";
    }
    
    if (lowerMsg.includes('availability') || lowerMsg.includes('freelance')) {
        return "Antoney  is currently available for freelance projects and full-time opportunities. He can dedicate about 20 hours per week to freelance work or is open to full-time remote positions.";
    }
    
    if (lowerMsg.includes('education') || lowerMsg.includes('degree')) {
        return "Antoney  holds a Diploma in Business Information Technology from Zetech University. He also maintains several professional certifications in cloud computing and UX design.";
    }
    
    if (lowerMsg.includes('design') || lowerMsg.includes('ui') || lowerMsg.includes('ux')) {
        return "Antoney  has strong UI/UX design skills with expertise in Figma and Adobe XD. He focuses on creating intuitive user experiences backed by user research and usability testing. His design process includes wireframing, prototyping, and creating design systems.";
    }
    
    if (lowerMsg.includes('thank') || lowerMsg.includes('thanks')) {
        return "You're welcome! Is there anything else you'd like to know about Antoney  or his work?";
    }
    
    if (lowerMsg.includes('bye') || lowerMsg.includes('goodbye')) {
        return "Goodbye! Feel free to reach out anytime if you have more questions. Have a great day!";
    }
    
    // Default response
    return "I'm Antoney 's portfolio assistant. I can tell you about his skills, experience, projects, and availability. Try asking about his strongest technical skills or design experience.";
}

// Initial setup
window.addEventListener('load', () => {
    // Auto-scroll to bottom of messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
});
