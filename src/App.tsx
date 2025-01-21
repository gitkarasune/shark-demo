
function App() {
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-2xl text-center">
        <h1 className="text-2xl font-bold mb-4">Shark Demo</h1>
        <p className="text-gray-700 mb-4 font-medium">Welcome to the Shark Demo!</p>
        <img 
          src="https://cms.bbcearth.com/sites/default/files/2021-02/2g5tv0k80001000.jpeg" 
          alt="Shark" 
          className="w-96 h-96 object-cover rounded-2xl mx-auto mb-4"
        />
        <button className="bg-black text-white px-4 py-2 rounded-full">
          Shark Demo
        </button>
      </div>
    </div>
  );
}

export default App;