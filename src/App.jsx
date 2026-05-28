import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profile from "./assets/profile.jpeg";
import Navbar from "./components/Navbar";

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("portfolio-theme") || "dark");
  const isDark = theme === "dark";
  const pageBg = isDark ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-950";
  const cardBg = isDark ? "bg-slate-900/70 text-white border border-white/10" : "bg-white/90 text-slate-950 border border-slate-200/80";
  const sectionBorder = isDark ? "border-white/10" : "border-slate-200/60";
  const textLight = isDark ? "text-gray-300" : "text-slate-700";
  const textMuted = isDark ? "text-gray-400" : "text-slate-600";

  useEffect(() => {
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${pageBg}`}>

      <div
        className={`absolute inset-0 ${isDark ? "bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_20%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.14),_transparent_15%),radial-gradient(circle_at_80%_80%,_rgba(168,85,247,0.12),_transparent_18%)]" : "bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),_transparent_20%),radial-gradient(circle_at_20%_20%,_rgba(59,130,246,0.08),_transparent_16%),radial-gradient(circle_at_80%_80%,_rgba(168,85,247,0.08),_transparent_20%)]"}`}
      ></div>
      <div className="background-stars absolute inset-0 pointer-events-none opacity-40"></div>
      <div className={`absolute top-10 left-10 h-[260px] w-[260px] rounded-full ${isDark ? "bg-violet-500/20" : "bg-sky-500/10"} blur-[120px]`}></div>
      <div className={`absolute bottom-16 right-10 h-[260px] w-[260px] rounded-full ${isDark ? "bg-cyan-500/20" : "bg-cyan-500/12"} blur-[120px]`}></div>
      <div className={`absolute top-1/2 right-0 h-[180px] w-[180px] -translate-y-1/2 rounded-full ${isDark ? "bg-[#0ea5e9]/15" : "bg-slate-400/10"} blur-[100px]`}></div>

      {/* NAVBAR */}

      <Navbar theme={theme} toggleTheme={() => setTheme(prev => (prev === "dark" ? "light" : "dark"))} />

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      {/* HERO SECTION */}

      <section id="home" className="min-h-screen max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 px-6 md:px-12 pt-32 relative z-10">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="mb-5 text-sm uppercase tracking-[0.4em] text-cyan-300">Data Scientist & AI Engineer</p>
          <h1 className={`text-5xl sm:text-6xl md:text-7xl font-bold leading-tight ${isDark ? "text-white" : "text-slate-950"}`}>
            Atul Sharma
          </h1>
          <p className={`mt-8 text-lg md:text-xl leading-9 ${textLight}`}>
            Building intelligent, production-ready AI systems with Generative AI, RAG, LangGraph, FastAPI, and scalable machine learning.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-3xl bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Contact Me
            </a>
            <a
              href="./resume.pdf"
              download
              className={`inline-flex items-center justify-center rounded-3xl border px-8 py-4 text-base font-semibold transition ${isDark ? "border-cyan-400 text-white hover:bg-cyan-500/20" : "border-slate-300 text-slate-950 hover:bg-slate-200"}`}
            >
              Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center"
        >
          <div className={`absolute inset-0 ${isDark ? "bg-cyan-500/20" : "bg-slate-400/10"} blur-[100px] rounded-full`} />
          <img
            src={profile}
            alt="Atul Sharma"
            className={`relative w-[300px] sm:w-[340px] md:w-[380px] h-[300px] sm:h-[340px] md:h-[380px] object-cover rounded-full border-4 ${isDark ? "border-cyan-400" : "border-slate-300"} shadow-2xl ${isDark ? "shadow-cyan-500/30" : "shadow-slate-400/30"}`}
          />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        <div className="grid gap-6 md:grid-cols-2">
          <div className={`rounded-[28px] p-8 ${cardBg} shadow-2xl ${isDark ? "shadow-black/30" : "shadow-slate-300/20"}`}>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Email</p>
            <p className="mt-4 text-xl font-semibold">atulsharmagbn@gmail.com</p>
          </div>
          <div className={`rounded-[28px] p-8 ${cardBg} shadow-2xl ${isDark ? "shadow-black/30" : "shadow-slate-300/20"}`}>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">LinkedIn</p>
            <p className="mt-4 text-xl font-semibold">linkedin.com/in/atul-sharma-0ab286304</p>
          </div>
        </div>
      </section>

      <main className="relative z-10">
        <section id="about" className={`max-w-7xl mx-auto px-8 md:px-12 py-24 ${sectionBorder}`}> 
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Professional Summary</p>
            <h2 className={`mt-4 text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-950"}`}>Experienced Data Scientist</h2>
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr]">
            <div>
              <p className={`text-xl leading-9 ${textLight}`}>
                Results-driven Data Scientist with 3.5 years of experience in Machine Learning, Deep Learning, and Generative AI solutions. Skilled in building scalable AI systems, enterprise-grade RAG applications, and multi-agent AI workflows using LangChain, LangGraph, GPT-4, Mistral, and FastAPI.
              </p>
              <p className={`mt-8 ${textMuted} leading-8`}>
                Experienced in developing AI copilots, chatbot systems, and predictive models using XGBoost, Random Forest, and LSTM. Proficient in FAISS, Pinecone, Docker, Kubernetes, AWS, and cloud-native deployment architectures.
              </p>
              <p className={`mt-6 ${textMuted} leading-8`}>
                Strong background in designing production-ready AI workflows, optimizing retrieval systems, and delivering end-to-end solutions across data, ML, and generative AI domains.
              </p>
            </div>
            <div className="space-y-4">
              <div className={`rounded-[28px] p-6 ${cardBg}`}>
                <p className="text-sm text-cyan-300 uppercase tracking-[0.24em]">Education</p>
                <p className="mt-4 text-lg font-semibold">Bachelor of Computer Applications (BCA)</p>
                <p className={textMuted}>Kalinga University • 2020 – 2023</p>
              </div>
              <div className={`rounded-[28px] p-6 ${cardBg}`}>
                <p className="text-sm text-cyan-300 uppercase tracking-[0.24em]">Experience</p>
                <p className="mt-4 text-lg font-semibold">3.5 Years in AI & Data Science</p>
              </div>
              <div className={`rounded-[28px] p-6 ${cardBg}`}>
                <p className="text-sm text-cyan-300 uppercase tracking-[0.24em]">Contact</p>
                <p className="mt-4 text-lg font-semibold">+91-9528610870</p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className={`max-w-7xl mx-auto px-8 md:px-12 py-24 border-t ${sectionBorder}`}>
          <div className="mb-12 text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Technical Skills</p>
            <h2 className={`mt-4 text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-950"}`}>Core Expertise</h2>
            <p className={`mt-4 ${textMuted}`}>Technical skills drawn directly from professional experience and resume details.</p>
          </div>
          <div className="grid gap-6 xl:grid-cols-3">
            <div className={`rounded-[32px] p-8 ${cardBg}`}>
              <h3 className="text-2xl font-semibold mb-6">Programming & ML</h3>
              <div className={`space-y-4 ${textLight}`}>
                <div>
                  <p className="font-semibold">Programming Languages</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>Python, SQL, MySQL, PostgreSQL</p>
                </div>
                <div>
                  <p className="font-semibold">Machine Learning & Data Science</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>Scikit-learn, XGBoost, Logistic Regression, Random Forest, Feature Engineering, Model Evaluation, Cross Validation, Hyperparameter Tuning, Data Preprocessing, SMOTE, EDA, Predictive Analytics</p>
                </div>
                <div>
                  <p className="font-semibold">Deep Learning & NLP</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>TensorFlow, Keras, PyTorch (Basic), CNN, RNN, LSTM, NLP, Text Classification</p>
                </div>
              </div>
            </div>
            <div className={`rounded-[32px] p-8 ${cardBg}`}>
              <h3 className="text-2xl font-semibold mb-6">Generative AI</h3>
              <div className={`space-y-4 ${textLight}`}>
                <div>
                  <p className="font-semibold">Generative AI & LLMs</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>GPT-4, Mistral 7B, LLaMA 3, BERT, Prompt Engineering, RAG, Agentic AI, Multi-Agent Systems, Conversational AI, Tool Calling, Function Calling</p>
                </div>
                <div>
                  <p className="font-semibold">Agentic AI & Orchestration</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>LangGraph, LangChain Agents, Workflow Orchestration, Dynamic Tool Routing, Stateful AI Agents, Conversational Memory, Autonomous AI Workflows</p>
                </div>
                <div>
                  <p className="font-semibold">RAG & Retrieval Systems</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>Semantic Search, Hybrid Retrieval, BM25, Cross-Encoder Reranking, Embedding Models, Recursive Chunking, Metadata Filtering, Vector Search</p>
                </div>
              </div>
            </div>
            <div className={`rounded-[32px] p-8 ${cardBg}`}>
              <h3 className="text-2xl font-semibold mb-6">Infrastructure & Tools</h3>
              <div className={`space-y-4 ${textLight}`}>
                <div>
                  <p className="font-semibold">GenAI Frameworks & APIs</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>LangChain, LangGraph, Hugging Face Transformers, OpenAI API, Hugging Face Hub</p>
                </div>
                <div>
                  <p className="font-semibold">Vector Databases & Caching</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>Pinecone, FAISS, Redis</p>
                </div>
                <div>
                  <p className="font-semibold">Backend & APIs</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>FastAPI, Flask, REST APIs, Async Processing</p>
                </div>
                <div>
                  <p className="font-semibold">Cloud & DevOps</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>AWS (EC2, S3, Lambda), Docker, Kubernetes, Cloud-Native Deployment</p>
                </div>
                <div>
                  <p className="font-semibold">Monitoring & Automation</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>LangSmith, Prometheus, Grafana, Pandas, NumPy, OCR, Data Ingestion Pipelines</p>
                </div>
                <div>
                  <p className="font-semibold">Tools & Platforms</p>
                  <p className={`mt-2 text-sm ${textMuted}`}>Git, GitHub, VS Code, Jupyter Notebook, Google Colab, Streamlit</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="max-w-7xl mx-auto px-8 md:px-12 py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold text-white mb-6">Professional Experience</h2>
          <div className="rounded-3xl bg-white/5 p-8 text-gray-200 shadow-lg shadow-black/10">
            <h3 className="text-2xl font-semibold text-white">Data Scientist | BOTEXAI Private Limited | Delhi</h3>
            <p className="text-cyan-300 mt-2">Generative AI & Machine Learning Engineer • Jan 2022 – Present</p>
            <ul className="mt-6 space-y-3 list-disc list-inside text-gray-300 leading-8">
              <li>Developed enterprise AI Copilot platform using LangGraph and RAG architecture.</li>
              <li>Built hybrid retrieval systems using vector search, BM25, and reranking.</li>
              <li>Developed NL-to-SQL workflows for conversational enterprise analytics.</li>
              <li>Implemented Redis conversational memory and FastAPI backend services.</li>
              <li>Worked on Docker, Kubernetes, and AWS deployment for scalable AI infrastructure.</li>
              <li>Collaborated on AI integration, API development, deployment optimization, and monitoring.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="max-w-7xl mx-auto px-8 md:px-12 py-24 border-t border-white/10">
          <h2 className="text-4xl font-bold text-white mb-6">Projects</h2>
          <div className="grid gap-6">
            <div className="rounded-3xl bg-white/5 p-8 text-gray-200 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold text-white">Enterprise Multi-Agent AI Copilot Platform</h3>
              <p className="text-cyan-300 mt-2">GenAI – Agentic AI Enterprise Solution</p>
              <ul className="mt-4 space-y-3 list-disc list-inside leading-8">
                <li>Developed an enterprise-grade AI Copilot platform enabling intelligent interaction with structured (SQL) and unstructured enterprise data using natural language queries.</li>
                <li>Designed and implemented multi-agent AI workflows using LangGraph for intelligent routing, orchestration, and dynamic tool selection.</li>
                <li>Built advanced RAG pipelines including document ingestion, chunking, embedding generation, semantic retrieval, metadata filtering, and contextual response generation.</li>
                <li>Implemented hybrid retrieval architecture using Vector Search, BM25 retrieval, and reranking techniques to improve retrieval precision and reduce hallucinations.</li>
                <li>Developed Natural Language-to-SQL workflows enabling non-technical users to query enterprise databases conversationally.</li>
                <li>Built scalable FastAPI backend services, Redis conversational memory, and multimodal AI workflows with OCR-based document understanding.</li>
                <li>Implemented monitoring and observability pipelines using LangSmith, Prometheus, and Grafana for tracking retrieval quality, latency, hallucination rate, and agent performance.</li>
                <li>Collaborated on Dockerization, Kubernetes orchestration, AWS deployment workflows, and scalable cloud-native infrastructure optimization.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">Technologies Used: Python, FastAPI, LangChain, LangGraph, GPT-4o, Pinecone, FAISS, Redis, PostgreSQL, Docker, Kubernetes, AWS, Streamlit, OCR, Prometheus, Grafana, LangSmith</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-8 text-gray-200 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold text-white">AI-Powered Customer Support Chatbot</h3>
              <p className="text-cyan-300 mt-2">RAG-based intelligent chatbot using LLMs and semantic search</p>
              <ul className="mt-4 space-y-3 list-disc list-inside leading-8">
                <li>Built chatbot using LangChain and FAISS for intelligent query handling.</li>
                <li>Implemented semantic retrieval and contextual response generation using LLMs.</li>
                <li>Developed backend APIs using FastAPI and frontend using Streamlit.</li>
                <li>Reduced customer support workload by nearly 50% through automated AI-driven responses.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">Technologies Used: Python, FAISS, FastAPI, Streamlit, GPT/Mistral</p>
            </div>
            <div className="rounded-3xl bg-white/5 p-8 text-gray-200 shadow-lg shadow-black/10">
              <h3 className="text-2xl font-semibold text-white">Customer Churn Prediction System</h3>
              <p className="text-cyan-300 mt-2">Machine Learning system for churn prediction and retention analytics</p>
              <ul className="mt-4 space-y-3 list-disc list-inside leading-8">
                <li>Built and compared Logistic Regression, Random Forest, and XGBoost models for churn prediction.</li>
                <li>Achieved 0.90 ROC-AUC using XGBoost with hyperparameter tuning and feature engineering.</li>
                <li>Used SMOTE for handling imbalanced datasets and improving prediction stability.</li>
                <li>Developed FastAPI APIs for real-time churn prediction and business analytics integration.</li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">Technologies Used: Python, Scikit-learn, XGBoost, SHAP, Docker</p>
            </div>
          </div>
        </section>

        <section id="contact" className="max-w-7xl mx-auto px-8 md:px-12 py-24 border-t border-white/10">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Let&apos;s Connect</p>
            <h2 className="mt-4 text-5xl md:text-6xl font-bold text-white">Let&apos;s Connect</h2>
            <p className={`mx-auto mt-6 max-w-3xl text-lg leading-8 ${textLight}`}>
              Open to Data Engineer, Data Analyst, Business Analyst roles, and freelance opportunities.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className={`rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20 ${cardBg}`}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 text-2xl">
                ✉️
              </div>
              <p className="text-xl font-semibold text-white">Email</p>
              <p className="mt-3 text-cyan-300">atulsharmagbn@gmail.com</p>
            </div>
            <div className={`rounded-[32px] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20 ${cardBg}`}>
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/20 text-blue-300 text-2xl">
                💼
              </div>
              <p className="text-xl font-semibold text-white">LinkedIn</p>
              <a href="https://linkedin.com/in/atul-sharma-0ab286304" className="mt-3 inline-block text-cyan-300 hover:underline">
                linkedin.com/in/atul-sharma-0ab286304
              </a>
            </div>
          </div>

          <div className={`mt-16 rounded-[32px] border border-white/10 bg-white/5 p-10 text-center shadow-2xl shadow-black/20 ${cardBg}`}>
            <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">Download My Resume</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Get a detailed overview of my experience, skills, and achievements</h3>
            <a
              href="./resume.pdf"
              download
              className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Download Resume
            </a>
          </div>
        </section>

        <footer className="mt-20 border-t border-white/10 bg-slate-950/60 py-12">
          <div className="max-w-7xl mx-auto px-8 md:px-12 text-center">
            <p className="text-lg uppercase tracking-[0.24em] text-cyan-300">THANK YOU FOR VISITING</p>
            <p className="mt-4 text-2xl font-semibold text-white">© 2026 Atul Sharma.</p>
            <p className="mt-3 text-cyan-300 text-lg">Data Scientist | AI & Generative AI Engineer</p>
            <p className="mx-auto mt-6 max-w-2xl whitespace-pre-line text-slate-300 text-base leading-8">
              Building scalable AI systems, intelligent automation,
              and modern Generative AI applications.
            </p>
          </div>
        </footer>

        <a
          href="mailto:atulsharmagbn@gmail.com?subject=Portfolio%20Feedback&body=Hello%20Atul%2C%0A%0AI%20would%20like%20to%20share%20feedback%20about%20your%20portfolio.%0A%0AThank%20you.%0A"
          className="fixed right-8 bottom-8 z-50 inline-flex items-center gap-3 rounded-full bg-violet-500 px-6 py-4 text-white shadow-[0_20px_50px_-20px_rgba(124,58,237,0.75)] transition hover:bg-violet-400"
        >
          <span className="text-xl">✉️</span>
          <span className="font-semibold">Feedback</span>
        </a>
      </main>
    </div>
  )
}

export default App;