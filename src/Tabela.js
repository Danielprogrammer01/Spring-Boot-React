function Tabela({ vetor }) {
    return (

        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Selecionar</th>
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <>
                            <tr key={indice} />
                            <td>{indice + 1}</td>
                            <td>{Object.nome}</td>
                            <td>{Object.marca}</td>
                            <td><button className="btn btn=sucess">Selecionar</button></td>
                        </>
                    ))
                }

            </tbody>
        </table>
    )
}

export default Tabela;
