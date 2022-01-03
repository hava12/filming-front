import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./template/Header";
import Counter from "./components/Counter";
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";

function App() {
    useEffect(() => {
        console.log("effect");
    });
    console.log("rendering");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [condition, setCondition] = useState(false);

    const toggle = () => {
        setCondition(!condition);
    };

    useEffect(() => {
        console.log(condition);
    }, [condition]);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
        alert("submitted");
    };

    const renderCondition = condition ? "True" : "False";

    const [movies, setMovies] = useState([]);

    const removeMovie = (id) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    const renderMovies =
        movies.length > 0
            ? movies.map((movie) => {
                  return <Movie movie={movie} key={movie.id} removeMovie={removeMovie} />;
              })
            : "추가된 영화가 없습니다.";

    const addMovie = (movie) => {
        setMovies([...movies, movie]);
    };

    return (
        <div className="App">
            <Header />
            <form onSubmit={onSubmit}>
                <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /> <br />
                <input placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /> <br />
                <button type="submit">Login</button>
            </form>
            <Counter />
            <Counter click="click1" />
            <Counter click="click2" />
            <div>{renderCondition}</div>
            {condition ? <div>True</div> : <div>False</div>}
            <button onClick={toggle}>Toggle</button>'
            <MovieForm addMovie={addMovie} />
            {renderMovies}
        </div>
    );
}

export default App;
