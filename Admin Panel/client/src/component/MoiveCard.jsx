import "../style/MovieCard.css";

function MoiveCard({ movies }) {
  return (
    <>
      <div className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="movie-card" key={movie._id}>

              <div className="movie-details">
                <div className="movie-meta">
                  <h2 className="movie-title">{movie.title}</h2>
                </div>

                <div className="movie-extra">
                  <span>⭐ {movie.rating || "N/A"}</span>
                  <span>🎭 {movie.genre || "Action"}</span>
                  <span>📅 {movie.year || "Unknown"}</span>
                  <span>⏱️ {movie.duration || "N/A"}</span>
                  <span>🗣️ {movie.language || "N/A"}</span>
                </div>

               <p className="movie-description">{movie.desc || "No description available."}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No action movies found.</p>
        )}
      </div>
    </>
  );
}

export default MoiveCard;
