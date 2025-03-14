import React from "react";
import YouTubeEmbed from "@/components/YouTubeEmbed";

const ChatbotPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Chatbot Demo</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Leveraged pre-trained transformer models to code a chatbot that
          assists with common job search tasks. This chatbot analyzes text,
           generates personalized cover letters, and provides
          sentence auto-completion to make your job search process more
          efficient.
        </p>
      </header>

      {/* Embedded Video */}
      <main className="w-full max-w-3xl">
        <YouTubeEmbed videoId="2Kctle8eEVY" />
      </main>
    </div>
  );
};

export default ChatbotPage;
