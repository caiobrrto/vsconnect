//estilização
import "./style.css";

//components
import CardServ from "../../components/CardServ";

//hooks
import { useState } from "react";

function ListaServicos() {

    //STATE DEVS
    const [serv, setServ] = useState<any[]>([
        {
            titulo: "Desenvolvimento de site institucional - Gateway de Pagamento / Fintech",
            valor: "R$ 1300,00",
            descricao: "Desenvolver um site responsivo que seja utilizado como uma plataforma de apresentação do nosso gateway de pagamento. O objetivo principal deste projeto é criar um site atraente e informativo, que demonstre as funcionalidades e benefícios do nosso gateway de pagamento para potenciais clientes.",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            titulo: "Bot telegram Pagamento",
            valor: "R$ 2400,00",
            descricao: "Preciso fazer um código em python para um bot do telegram. O bot será para solicitação de pagamento.",
            skills: ["HTML", "CSS", "REACT"]
        },
        {
            titulo: "Caixa Rápido",
            valor: "R$ 1200,00",
            descricao: "Preciso fazer um  software que permita ao usuário fazer o upload de seu extrato bancário em formato( ofx). Dentro do software o mesmo poderá categorizar todas as suas receitas e despesas, tendo categorias sugeridas pelo software e permitindo também personalizações. Após o lançamento de vários extratos o software irá entender que são lançamentos parecidos e fará a categorização de maneira automática, cabendo ao usuário somente categorizar as receitas e despesas que não se repetem. Após a categorização o software irá emitir gráficos e relatórios baseados na categorização das contas.",
            skills: ["PYTHON"]
        }

    ]);

    const [listaServicosFiltrados, setListaServicosFiltrados] = useState<any[]>(serv);

    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            setListaServicosFiltrados(serv);
        }
        setSkillDigitado(event.target.value);
    }

    function buscarDevPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servicosFiltrados = serv.filter((serv: any) => serv.skills.includes(skillDigitado.toLocaleUpperCase()));

        if (servicosFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setListaServicosFiltrados(servicosFiltrados);
        }


    }

    return (
        <>
            <main id="main_listaservicos">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarDevPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input onChange={verificarCampoSkill} type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    listaServicosFiltrados.map((serv: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServ
                                                titulo={serv.titulo}
                                                valor={serv.valor}
                                                descricao={serv.descricao}
                                                listaTechs={serv.skills}
                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}

export default ListaServicos;