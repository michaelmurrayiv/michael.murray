export default function NBAPage() {
  return (
    <div>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">NBA Game Prediction</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Developed machine learning models to predict the outcome of NBA games. Code written in Python
          using libraries including Pandas, Scikit-learn and PyTorch. The model was trained on historical game data and 
          player statistics.
        </p>
      </header>
      <iframe src="/nba_report.pdf" width="100%" height="800px"></iframe>
    </div>
  );
}