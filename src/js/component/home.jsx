import React, { useState, useEffect } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [lista, setLista] = useState(["lavar el carro", "ir al cine"])

	const handleInput = (e) => {
		let texto = e.target.value
		if (e.keyCode == 13) {
			setTarea(texto)
			//Una primera aproximación para agregar a la lista es usando una variable auxiliar
			//let tempArr = lista.slice() //copia de arreglo por valor
			//tempArr.push(texto)
			//setLista(tempArr)

			//Una segunda aproximación es usando el operador spread ...
			setLista([...lista, texto])
		}
	}

	const deleteTask = (index) => { 
		let tempArr = lista.slice() //copiar el estado lista en una variable auxiliar
		tempArr = tempArr.filter((item, index2) => { return index2 != index })
		setLista(tempArr)
	}

	return (
		<>
			<div className="text-center">
				
			</div>

			<div className="container md mt-3 pt-5" style={{width: "18rem"}} >
				<div>
					<h1 className="letra">ToDO</h1>
					 </div>
				<input placeholder="Escriba aquí una tarea"
					onKeyUp={
						(e) => { handleInput(e) }
					} />
				<ol className= "list-group list-group-numbered shadow p-3 mb-5 bg-body rounded">
					{
						lista && lista.length > 0 ?
							<>{
								lista.map((item, index) => {
									return <li className="list-group-item  " key={index}>
										{item}
										
										<button className="boton " type="button" onClick={e => { deleteTask(index) }}>
											❌
										</button>
									
									</li>
								})
							}</>
							: "la lista está vacía"
					}
				</ol>
			</div>
		</>
	);
};

export default Home;