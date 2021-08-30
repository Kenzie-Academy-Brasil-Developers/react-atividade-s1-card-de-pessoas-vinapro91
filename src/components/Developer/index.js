import "./style.css"
export const Developer = ({name, age, country}) => (
    <div className="UserBox"> 
        <h1>Dev: {name}</h1>
        <h2>Idade: {age}</h2>
        <h2>País: {country}</h2>
    </div>
)