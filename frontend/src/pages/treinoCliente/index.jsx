import { useNavigate, useParams, Link } from 'react-router-dom'
import './index.scss'
import Menu from '../../components/abasMenu'
import axios from 'axios'
import moment from 'moment';
import { useEffect, useState } from "react";
import { validarReavaliacao } from './vallidation';

import toast, {Toaster} from 'react-hot-toast';

export default function InfoClientes() {

    const [token, setToken] = useState(null);

    const navigate = useNavigate();

    const { id } = useParams();

    //INFOCLIENTE
    const [nomeCliente, setNomeCliente] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [idadeCliente, setIdadeCliente] = useState('');
    const [numCliente, setNumCliente] = useState('');
    const [diaAvaliacao, setDiaAvaliacao] = useState('');
    const [diaReavaliacao, setDiaReavaliacao] = useState('');
    const [imagem, setImagem] = useState('')

    //VARIÁVEIS QUE SERÃO REAPROVEITADAS NAS FUNÇÕES
    const [idTreino, setIdTreino] = useState(0);
    const [idAvaliacao, setIdAvaliacao] = useState(0);
    const [vouEditar, SetVouEditar] = useState(false);
    const [imgAlterada, setImgAlterada] = useState(false);
    const [editandoAva, setEditandoAva] = useState(false);
    const [editinfoTre, setEditinfoTre] = useState(false);
    const [editdtRev, setEditdtRev] = useState(false);


    //AVALIAÇÃO | 
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState('');
    const [freqCard, setFreqCard] = useState('');
    const [indcCoracao, setIndcCoracao] = useState('');
    const [taxaMuscular, setTaxaMuscular] = useState('');
    const [iddMetabolica, setIddMetabolica] = useState('');
    const [taxaMetBasal, setTaxaMetBasal] = useState('');
    const [proteina, setProteina] = useState('');
    const [massaLivGord, setMassaLivGord] = useState('');
    const [massaMusc, setMassaMusc] = useState('');
    const [massaMuscEsq, setMassaMuscEsq] = useState('');
    const [massaOssea, setMassaOssea] = useState('');
    const [gordCorp, setGordCorp] = useState('');
    const [gordSub, setGordSub] = useState('');
    const [gordVis, setGordVis] = useState('');
    const [aguaCorp, setAguaCorp] = useState('');

    //REAVALIAÇÃO
    const [peso2, setPeso2] = useState('');
    const [imc2, setImc2] = useState('');
    const [freqCard2, setFreqCard2] = useState('');
    const [indcCoracao2, setIndcCoracao2] = useState('');
    const [taxaMuscular2, setTaxaMuscular2] = useState('');
    const [iddMetabolica2, setIddMetabolica2] = useState('');
    const [taxaMetBasal2, setTaxaMetBasal2] = useState('');
    const [proteina2, setProteina2] = useState('');
    const [massaLivGord2, setMassaLivGord2] = useState('');
    const [massaMusc2, setMassaMusc2] = useState('');
    const [massaMuscEsq2, setMassaMuscEsq2] = useState('');
    const [massaOssea2, setMassaOssea2] = useState('');
    const [gordCorp2, setGordCorp2] = useState('');
    const [gordSub2, setGordSub2] = useState('');
    const [gordVis2, setGordVis2] = useState('');
    const [aguaCorp2, setAguaCorp2] = useState('');

    //TREINO
    const [objetivos, setObjetivos] = useState('');
    const [exercicios, setExercicios] = useState('');



    //VALIDAÇÃO PRA VER SE O USUÁRIO TA LOGADO
    useEffect(() => {
        let usu = localStorage.getItem('USUARIO')
        setToken(usu)

        if (usu == 'undefined' || usu == 'null' || !usu) {
            navigate('/loginUsuario')
        }
    }, [])


    //RENDERIZAÇÃO PRA CHAMAR A FUNÇÃO DE CONSULTAR
    useEffect(() => {
        if (token && id) {
            consultar();

        }

    }, [token, id]);


    //FUNÇÃO PRA PUXAR AS INFORMAÇÕES DO CLIENTE
    async function consultar() {

        const url = `http://4.172.207.208:5008/cliente/${id}`;
        const resp = await axios.get(url);
        const cliente = resp.data;

        let data = moment(cliente.nascimento).format('DD/MM/YYYY')
        let dataAva = moment(cliente.dataAvaliacao).format('DD/MM/YYYY HH:mm')
        let dataRev = moment(cliente.dataReavaliacao).format('DD/MM/YYYY HH:mm')

        setIdTreino(cliente.treino_id);

        setIdAvaliacao(cliente.avaliacao_id);
        setNomeCliente(cliente.nome);
        setDataNascimento(data);
        setIdadeCliente(cliente.idade);
        setNumCliente(cliente.telefone);
        setDiaAvaliacao(dataAva);
        setDiaReavaliacao(dataRev);
        setImagem(cliente.perfil)

        setPeso(cliente.peso);
        setImc(cliente.imc);
        setFreqCard(cliente.frequenciaCardiaca);
        setIndcCoracao(cliente.indiceCoracao);
        setTaxaMuscular(cliente.taxaMuscular);
        setIddMetabolica(cliente.idadeMetabolica);
        setTaxaMetBasal(cliente.taxaMetabolicaBasal);
        setProteina(cliente.proteina);
        setMassaLivGord(cliente.massaLivreGordura);
        setMassaMusc(cliente.massaMuscular);
        setMassaMuscEsq(cliente.massaMuscularEsqueletica);
        setMassaOssea(cliente.massaOssea);
        setGordCorp(cliente.gorduraCorporal);
        setGordSub(cliente.gorduraSubcutanea);
        setGordVis(cliente.gorduraVisceral);
        setAguaCorp(cliente.aguaCorporal);

        setObjetivos(cliente.objetivos);
        setExercicios(cliente.exercicios);
    }


    //FUNÇÃO PRA EXCLUIR O TREINO
    async function excluir() {

        await axios.delete(`http://4.172.207.208:5008/avaliacao/deletar/${idAvaliacao}?x-access-token=${token}`);

        await axios.delete(`http://4.172.207.208:5008/treinos/deletar/${idTreino}?x-access-token=${token}`);


        toast.success(`Treino excluido com sucesso!`);
        navigate('/horariosTreinos')
        await axios.delete(`http://4.172.207.208:5008/cliente/deletar/${id}?x-access-token=${token}`);


    }



    //FUNÇÃO QUE VAI ADICIONAR AS INFORMAÇÕES DA REAVALIAÇÃO E VAI MARCAR O TREINO COMO CONCLUÍDO
    async function addRev() {
        try {

            //ADICIONAR A REAVALIAÇÃO
            const reavaliacaoData = {
                "peso": peso2,
                "massaLivreGordura": massaLivGord2,
                "imc": imc2,
                "massaMuscular": massaMusc2,
                "frequenciaCardiaca": freqCard2,
                "massaMuscularEsqueletica": massaMuscEsq2,
                "indiceCoracao": indcCoracao2,
                "massaOssea": massaOssea2,
                "taxaMuscular": taxaMuscular2,
                "gorduraCorporal": gordCorp2,
                "idadeMetabolica": iddMetabolica2,
                "gorduraSubcutanea": gordSub2,
                "taxaMetabolicaBasal": taxaMetBasal2,
                "gorduraVisceral": gordVis2,
                "proteina": proteina2,
                "aguaCorporal": aguaCorp2,

            };
            const respReavaliacao = await axios.post(`http://4.172.207.208:5008/reavaliacao/adicionar?x-access-token=${token}`, reavaliacaoData);

            //vallidation

            validarReavaliacao(reavaliacaoData)

            const reavaliacaoId = respReavaliacao.data.novoId;


            const clienteData = {
                "reavaliacao_id": reavaliacaoId,
            };

            await axios.put(`http://4.172.207.208:5008/cliente/atualizaridrev/${id}?x-access-token=${token}`, clienteData);


            //MARCAR O TREINO COMO CONCLUÍDO
            const treinoData = {
                "concluido": true,
            };

            const url = `http://4.172.207.208:5008/treinos/atualizar/${idTreino}?x-access-token=${token}`
            await axios.put(url, treinoData);


            toast.success(`Treino do(a) cliente ${nomeCliente} concluído com sucesso! Redirecionando para a página de treinos concluídos...`);

            setTimeout(() => {
                navigate('/treinosConcluidos')
            }, 2500);

        } catch (error) {
            toast.error('Erro ao adicionar os dados: ' + error.message);
        }
    }


    //FUNÇÃO QUE PERMITIRA O USUÁRIO EDITAR O NOME DO CLIENTE
    async function editNom() {
        SetVouEditar(1)


        //É NECESSÁRIO COLOCAR A DATA NESSE FORMATO PRA SER ACEITO PELO BACKEND
        setDataNascimento(moment(dataNascimento).format('YYYY-MM-DD'))



    }
    //FUNÇÃO QUE PERMITIRA O USUÁRIO EDITAR A DATA DE NASCIMENTO DO CLIENTE
    async function editNasc() {
        SetVouEditar(2)

        setDataNascimento(moment(dataNascimento).format('YYYY-MM-DD'))

    }
    //FUNÇÃO QUE PERMITIRA O USUÁRIO EDITAR O TELEFONE DO CLIENTE
    async function editTel() {
        SetVouEditar(3)

        setDataNascimento(moment(dataNascimento).format('YYYY-MM-DD'))
    }

    //FUNÇÃO QUE VAI FAZER O UPDATE
    async function concluirEdit() {
        try {



            const editCli = {
                "nome": nomeCliente,
                "nascimento": dataNascimento,
                "idade": idadeCliente,
                "telefone": numCliente
            }

            const url = `http://4.172.207.208:5008/cliente/atualizar/${id}?x-access-token=${token}`
            await axios.put(url, editCli)
            toast.success('Dado alterado com sucesso')

            setDataNascimento(moment(dataNascimento).format('DD/MM/YYYY'))
            SetVouEditar(false)

        } catch (error) {
            toast.error('Erro ao alterar os dados: ' + error.message);
        }
    }




    async function editObj() {
        setEditinfoTre(3)
    }

    async function editTre() {
        setEditinfoTre(4)
    }


    async function concluirEditTre() {


        try {

            const editTreino = {
                "objetivos": objetivos,
                "exercicios": exercicios,
            }

            const url = `http://4.172.207.208:5008/treinos/atualizarInfo/${id}?x-access-token=${token}`
            await axios.put(url, editTreino)
            toast.success('Dado alterado com sucesso')


            setEditinfoTre(false)

        } catch (error) {
            toast.error('Erro ao alterar os dados: ' + error.message);
        }
    }

 


    async function editRev() {
        setEditdtRev(true)
        setDiaReavaliacao(moment(diaReavaliacao).format('YYYY-MM-DDTHH:mm'))
    }

    
    async function concluirdtRev() {


        try {

            const editReavaliacao = {
                "dataReavaliacao": diaReavaliacao,
            }

            const url = `http://4.172.207.208:5008/treinos/atualizardtrev/${id}?x-access-token=${token}`
            await axios.put(url, editReavaliacao)
            toast.success('Dado alterado com sucesso')


            setEditdtRev(false)
            setDiaReavaliacao(moment(diaReavaliacao).format('DD/MM/YYYY HH:mm'))

        } catch (error) {
            toast.error('Erro ao alterar os dados: ' + error.message);
        }
    }


    function podeEditAva() {
        setEditandoAva(true)
    }

    async function editarAva() {

        try {
            const Avadata = {
                "peso": peso,
                "massaLivreGordura": massaLivGord,
                "imc": imc,
                "massaMuscular": massaMusc,
                "frequenciaCardiaca": freqCard,
                "massaMuscularEsqueletica": massaMuscEsq,
                "indiceCoracao": indcCoracao,
                "massaOssea": massaOssea,
                "taxaMuscular": taxaMuscular,
                "gorduraCorporal": gordCorp,
                "idadeMetabolica": iddMetabolica,
                "gorduraSubcutanea": gordSub,
                "taxaMetabolicaBassal": taxaMetBasal,
                "gorduraVisceral": gordVis,
                "proteina": proteina,
                "aguaCorporal": aguaCorp,



            }

            const url = `http://4.172.207.208:5008/avaliacao/atualizar/${idAvaliacao}?x-access-token=${token}`
            await axios.put(url, Avadata)
            toast.success('Dados alterado com sucesso')

            setEditandoAva(false)

        } catch (error) {
            toast.error('Erro ao alterar os dados: ' + error.message);
        }

    }

    //ESSA FUNÇÃO É PRA CALCULAR A IDADE DE ACORDO COM A DATA DE NACIMENTO
    function calcularIdade() {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }
        return idade;
    }

    //AQUI RENDERIZA O CAMPO DA IDADE DE ACORDO COM A DATA DE NASCIMENTO
    useEffect(() => {
        if (dataNascimento) {
            setIdadeCliente(calcularIdade(dataNascimento));
        }
    }, [dataNascimento]);




    //ESSA FUNÇÃO VAI PERMITIR SOMENTE QUE O USUÁRIO DIGITE O TELEFONE NO FORMATO '(XX)XXXXX-XXXX'
    function formatarTelefone(tel) {
        tel = tel.replace(/\D/g, ""); //AQUI IMPEDE QUE ELE COLOQUE DIGITOS QUE NÃO SEJA NUMEROS
        tel = tel.slice(0, 11);       //AQUI IMPEDE QUE ELE PASSE DE 11 DIGITOS
        tel = tel.replace(/^(\d{2})(\d)/g, "($1) $2"); //AQUI FAZ COM QUE OS DOIS PRIMEIROS NÚMEROS FIQUE EM PARENTESE
        tel = tel.replace(/(\d{4})(\d{4})$/, "$1-$2"); //AQUI FAZ COM QUE TENHA UM TRAÇO ANTES DOS 4 ULTIMOS NUMEROS
        return tel;
    }


    function alterarImg(e) {
        setImgAlterada(true)
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagem(reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    async function updateImg() {
        try {

            const imgData = {
                "imagem": imagem
            }

            const url = `http://4.172.207.208:5008/cliente/atualizar/imagem/${id}?x-access-token=${token}`
            await axios.put(url, imgData)
            toast.success('Dado alterado com sucesso')

            setImgAlterada(false)

        } catch (error) {
            toast.error('Erro ao alterar os dados: ' + error.message);
        }
    }





    return (
        <div className="pagina-treino-cliente">

            <Menu />

            <div className='secaomae'>

                <h2 className='titulo'>TREINO DE {nomeCliente.toUpperCase()}</h2>

                <div className='secaoCliente'>
                    <div className='avatar'>

                        <p>PROPORÇÃO RECOMENDADA - 1:1</p>

                        <div className='imagem'>
                            {imagem == null ? (
                                <img id='cliente' src='/assets/images/avatarfoto.png' />
                            ) : (
                                <img id='cliente' src={imagem} alt="Foto" />
                            )}
                        </div>


                        <div className="sobreimg">

                            <input type='file' accept='image/*' onChange={alterarImg} />
                            {imgAlterada ? (
                                <p onClick={updateImg}>SALVAR</p>
                            ) : (
                                <button className='butao'><p onClick={() => setImagem(null)}>REMOVER <i class='fa-solid fa-trash botao' /></p></button>)}

                        </div>
                    </div>

                    <div className="infosCliente">
                        <div className='nome'>
                            <h2>Nome do Cliente:</h2>
                            {vouEditar == 1 ?
                                (
                                    <div>
                                        <input type='text' placeholder='Nome do cliente' value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} />
                                        <img className='icon' src='/assets/images/checkicon.webp' onClick={concluirEdit} />
                                    </div>) :
                                (
                                    <div>
                                        <input type='text' placeholder='Nome do cliente' value={nomeCliente} onChange={e => setNomeCliente(e.target.value)} readOnly />
                                        <img className='icon' src='/assets/images/editicon.png' onClick={editNom} />
                                    </div>)
                            }
                        </div>

                        <div className="datidade">
                            <div className='nascimento'>
                                <h2>Data de Nascimento:</h2>
                                {vouEditar == 2 ?
                                    (
                                        <div>
                                            <input type='date' placeholder='Data de Nascimento' value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} max={new Date().toISOString().split("T")[0]} />
                                            <img className='icon' src='/assets/images/checkicon.webp' onClick={concluirEdit} />
                                        </div>) :
                                    (
                                        <div>
                                            <input type='text' placeholder='Nome do cliente' value={dataNascimento} onChange={e => setDataNascimento(e.target.value)} readOnly />
                                            <img className='icon' src='/assets/images/editicon.png' onClick={editNasc} />
                                        </div>)
                                }
                            </div>

                            <div className='idade'>
                                <h2>Idade do Cliente:</h2>
                                <input type='text' placeholder='Idade do cliente' value={idadeCliente} onChange={e => setIdadeCliente(e.target.value)} readOnly />
                            </div>
                        </div>


                        <div className='telefone'>
                            <h2>Telefone do Cliente:</h2>
                            {vouEditar == 3 ?
                                (
                                    <div>
                                        <input type='text' placeholder='Telefone do Cliente' value={numCliente} onChange={e => setNumCliente(formatarTelefone(e.target.value))} />
                                        <img className='icon' src='/assets/images/checkicon.webp' onClick={concluirEdit} />
                                    </div>) :
                                (
                                    <div>
                                        <input type='text' placeholder='Telefone do Cliente' value={numCliente} onChange={e => setNumCliente(e.target.value)} readOnly />
                                        <img className='icon' src='/assets/images/editicon.png' onClick={editTel} />
                                    </div>)
                            }
                        </div>

                        <div className="avas">
                            <div className='dataava'>
                                <h2>Data da Avaliação:</h2>

                                <input type='text' placeholder='Data da Avaliação' value={diaAvaliacao} onChange={e => setDiaAvaliacao(e.target.value)} readOnly />


                            </div>

                            <div className='datareava'>
                                <h2>Data da Reavaliação:</h2>
                                {editdtRev ? (
                                    <div>
                                        <input type='datetime-local' placeholder='Data da Reavaliação' value={diaReavaliacao} onChange={e => setDiaReavaliacao(e.target.value)} min={moment(diaAvaliacao).format('YYYY-MM-DDTHH:mm')} />
                                        <img className='icon' src='/assets/images/checkicon.webp' onClick={concluirdtRev} />
                                        </div>) : 
                                        (<div>
                                            <input type='text' placeholder='Data da Reavaliação' value={diaReavaliacao} onChange={e => setDiaReavaliacao(e.target.value)} readOnly />
                                            <img className='icon' src='/assets/images/editicon.png' onClick={editRev} />
                                            </div>) }
                                



                            </div>
                        </div>

                    </div>
                </div>

                {editandoAva == false ? (<div className="tabAvaliacao">
                    <h2>AVALIAÇÃO FÍSICA DO CLIENTE</h2>

                    <div className="dadosFisicos">
                        <div className="dados1">
                            <h3>Peso:</h3>
                            <input type='text' placeholder='Peso' value={peso} onChange={e => setPeso(e.target.value)} readOnly />

                            <h3>IMC:</h3>
                            <input type='text' placeholder='Índice de Massa Corporal' value={imc} onChange={e => setImc(e.target.value)} readOnly />

                            <h3>Frequência Cardíaca:</h3>
                            <input type='text' placeholder='Frequência Cardíaca' value={freqCard} onChange={e => setFreqCard(e.target.value)} readOnly />

                            <h3>Índice de Coração:</h3>
                            <input type='text' placeholder='Índice de Coração' value={indcCoracao} onChange={e => setIndcCoracao(e.target.value)} readOnly />

                            <h3>Taxa Muscular:</h3>
                            <input type='text' placeholder='Taxa Muscular' value={taxaMuscular} onChange={e => setTaxaMuscular(e.target.value)} readOnly />

                            <h3>Idade Metabólica:</h3>
                            <input type='text' placeholder='Idade Metabólica' value={iddMetabolica} onChange={e => setIddMetabolica(e.target.value)} readOnly />

                            <h3>Taxa Metabólica Basal:</h3>
                            <input type='text' placeholder='Taxa Metabólica Basal (TMB)' value={taxaMetBasal} onChange={e => setTaxaMetBasal(e.target.value)} readOnly />

                            <h3>Proteína:</h3>
                            <input type='text' placeholder='Proteína' value={proteina} onChange={e => setProteina(e.target.value)} readOnly />
                        </div>

                        <div className="dados2">
                            <h3>Massa Livre de Gordura:</h3>
                            <input type='text' placeholder='Massa Livre de Gordura' value={massaLivGord} onChange={e => setMassaLivGord(e.target.value)} readOnly />

                            <h3>Massa Muscular:</h3>
                            <input type='text' placeholder='Massa Muscular' value={massaMusc} onChange={e => setMassaMusc(e.target.value)} readOnly />

                            <h3>Massa Muscular Esquelética:</h3>
                            <input type='text' placeholder='Massa Muscular Esquelética' value={massaMuscEsq} onChange={e => setMassaMuscEsq(e.target.value)} readOnly />

                            <h3>Massa Óssea:</h3>
                            <input type='text' placeholder='Massa Óssea' value={massaOssea} onChange={e => setMassaOssea(e.target.value)} readOnly />

                            <h3>Gordura Corporal:</h3>
                            <input type='text' placeholder='Gordura Corporal' value={gordCorp} onChange={e => setGordCorp(e.target.value)} readOnly />

                            <h3>Gordura Subcutânea:</h3>
                            <input type='text' placeholder='Gordura Subcutânea' value={gordSub} onChange={e => setGordSub(e.target.value)} readOnly />

                            <h3>Gordura Visceral:</h3>
                            <input type='text' placeholder='Gordura Visceral' value={gordVis} onChange={e => setGordVis(e.target.value)} readOnly />

                            <h3>Água Corporal:</h3>
                            <input type='text' placeholder='Água Corporal' value={aguaCorp} onChange={e => setAguaCorp(e.target.value)} readOnly />
                        </div>
                    </div>
                    <button className='butonedit' onClick={podeEditAva}>EDITAR AVALIAÇÃO</button>
                </div>) :
                    (
                        <div className="tabAvaliacao">
                            <h2>AVALIAÇÃO FÍSICA DO CLIENTE</h2>

                            <div className="dadosFisicos">
                                <div className="dados1">
                                    <h3>Peso:</h3>
                                    <input type='text' placeholder='Peso' value={peso} onChange={e => setPeso(e.target.value)} />

                                    <h3>IMC:</h3>
                                    <input type='text' placeholder='Índice de Massa Corporal' value={imc} onChange={e => setImc(e.target.value)} />

                                    <h3>Frequência Cardíaca:</h3>
                                    <input type='text' placeholder='Frequência Cardíaca' value={freqCard} onChange={e => setFreqCard(e.target.value)} />

                                    <h3>Índice de Coração:</h3>
                                    <input type='text' placeholder='Índice de Coração' value={indcCoracao} onChange={e => setIndcCoracao(e.target.value)} />

                                    <h3>Taxa Muscular:</h3>
                                    <input type='text' placeholder='Taxa Muscular' value={taxaMuscular} onChange={e => setTaxaMuscular(e.target.value)} />

                                    <h3>Idade Metabólica:</h3>
                                    <input type='text' placeholder='Idade Metabólica' value={iddMetabolica} onChange={e => setIddMetabolica(e.target.value)} />

                                    <h3>Taxa Metabólica Basal:</h3>
                                    <input type='text' placeholder='Taxa Metabólica Basal (TMB)' value={taxaMetBasal} onChange={e => setTaxaMetBasal(e.target.value)} />

                                    <h3>Proteína:</h3>
                                    <input type='text' placeholder='Proteína' value={proteina} onChange={e => setProteina(e.target.value)} />
                                </div>

                                <div className="dados2">
                                    <h3>Massa Livre de Gordura:</h3>
                                    <input type='text' placeholder='Massa Livre de Gordura' value={massaLivGord} onChange={e => setMassaLivGord(e.target.value)} />

                                    <h3>Massa Muscular:</h3>
                                    <input type='text' placeholder='Massa Muscular' value={massaMusc} onChange={e => setMassaMusc(e.target.value)} />

                                    <h3>Massa Muscular Esquelética:</h3>
                                    <input type='text' placeholder='Massa Muscular Esquelética' value={massaMuscEsq} onChange={e => setMassaMuscEsq(e.target.value)} />

                                    <h3>Massa Óssea:</h3>
                                    <input type='text' placeholder='Massa Óssea' value={massaOssea} onChange={e => setMassaOssea(e.target.value)} />

                                    <h3>Gordura Corporal:</h3>
                                    <input type='text' placeholder='Gordura Corporal' value={gordCorp} onChange={e => setGordCorp(e.target.value)} />

                                    <h3>Gordura Subcutânea:</h3>
                                    <input type='text' placeholder='Gordura Subcutânea' value={gordSub} onChange={e => setGordSub(e.target.value)} />

                                    <h3>Gordura Visceral:</h3>
                                    <input type='text' placeholder='Gordura Visceral' value={gordVis} onChange={e => setGordVis(e.target.value)} />

                                    <h3>Água Corporal:</h3>
                                    <input type='text' placeholder='Água Corporal' value={aguaCorp} onChange={e => setAguaCorp(e.target.value)} />
                                </div>
                            </div>
                            <button className='butonedit' onClick={editarAva}>SALVAR AVALIAÇÃO</button>

                        </div>)}

                <div className="detalhesTreino">
                    <div className="objetivosTreino">
                        <h2>OBJETIVOS DO CLIENTE:</h2>
                        {editinfoTre == 3 ? (<div>
                            <input className='objetivos' type='text' placeholder='Objetivos do Cliente' value={objetivos} onChange={e => setObjetivos(e.target.value)} />
                            <img className='icon' src='/assets/images/checkicon.webp' onClick={concluirEditTre} />
                        </div>) :
                            (<div>
                                <input className='objetivos' type='text' placeholder='Objetivos do Cliente' value={objetivos} onChange={e => setObjetivos(e.target.value)} readOnly />
                                <img className='icon' src='/assets/images/editicon.png' onClick={editObj} />
                            </div>)}

                    </div>

                    <div className="exerciciosTreino">
                        <h2>EXERCÍCIOS SELECIONADOS:</h2>
                        {editinfoTre == 4 ? (<div>
                            <input className='exercicios' type='text' placeholder='Exercícios Selecionados' value={exercicios} onChange={e => setExercicios(e.target.value)} />
                            <img className='icon' src='/assets/images/checkicon.webp' onClick={concluirEditTre} />
                        </div>) :
                            (<div><input className='exercicios' type='text' placeholder='Exercícios Selecionados' value={exercicios} onChange={e => setExercicios(e.target.value)} readOnly />
                                <img className='icon' src='/assets/images/editicon.png' onClick={editTre} />
                            </div>)}

                    </div>
                </div>


                <div className="tabReavaliacao">
                    <h2>REAVALIAÇÃO FÍSICA DO CLIENTE</h2>

                    <div className="dadosFisicos">
                        <div className="dados1">
                            <h3>Peso:</h3>
                            <input type='text' placeholder='Peso' value={peso2} onChange={e => setPeso2(e.target.value)} />

                            <h3>IMC:</h3>
                            <input type='text' placeholder='Índice de Massa Corporal' value={imc2} onChange={e => setImc2(e.target.value)} />

                            <h3>Frequência Cardíaca:</h3>
                            <input type='text' placeholder='Frequência Cardíaca' value={freqCard2} onChange={e => setFreqCard2(e.target.value)} />

                            <h3>Índice de Coração:</h3>
                            <input type='text' placeholder='Índice de Coração' value={indcCoracao2} onChange={e => setIndcCoracao2(e.target.value)} />

                            <h3>Taxa Muscular:</h3>
                            <input type='text' placeholder='Taxa Muscular' value={taxaMuscular2} onChange={e => setTaxaMuscular2(e.target.value)} />

                            <h3>Idade Metabólica:</h3>
                            <input type='text' placeholder='Idade Metabólica' value={iddMetabolica2} onChange={e => setIddMetabolica2(e.target.value)} />

                            <h3>Taxa Metabólica Basal:</h3>
                            <input type='text' placeholder='Taxa Metabólica Basal (TMB)' value={taxaMetBasal2} onChange={e => setTaxaMetBasal2(e.target.value)} />

                            <h3>Proteína:</h3>
                            <input type='text' placeholder='Proteína' value={proteina2} onChange={e => setProteina2(e.target.value)} />
                        </div>

                        <div className="dados2">
                            <h3>Massa Livre de Gordura:</h3>
                            <input type='text' placeholder='Massa Livre de Gordura' value={massaLivGord2} onChange={e => setMassaLivGord2(e.target.value)} />

                            <h3>Massa Muscular:</h3>
                            <input type='text' placeholder='Massa Muscular' value={massaMusc2} onChange={e => setMassaMusc2(e.target.value)} />

                            <h3>Massa Muscular Esquelética:</h3>
                            <input type='text' placeholder='Massa Muscular Esquelética' value={massaMuscEsq2} onChange={e => setMassaMuscEsq2(e.target.value)} />

                            <h3>Massa Óssea:</h3>
                            <input type='text' placeholder='Massa Óssea' value={massaOssea2} onChange={e => setMassaOssea2(e.target.value)} />

                            <h3>Gordura Corporal:</h3>
                            <input type='text' placeholder='Gordura Corporal' value={gordCorp2} onChange={e => setGordCorp2(e.target.value)} />

                            <h3>Gordura Subcutânea:</h3>
                            <input type='text' placeholder='Gordura Subcutânea' value={gordSub2} onChange={e => setGordSub2(e.target.value)} />

                            <h3>Gordura Visceral:</h3>
                            <input type='text' placeholder='Gordura Visceral' value={gordVis2} onChange={e => setGordVis2(e.target.value)} />

                            <h3>Água Corporal:</h3>
                            <input type='text' placeholder='Água Corporal' value={aguaCorp2} onChange={e => setAguaCorp2(e.target.value)} />
                        </div>
                    </div>
                </div>
                <div className='botoes'>
                    <button onClick={addRev} className='concluir'> Concluir treino </button>
                    <button onClick={excluir} className='excluir'> Excluir treino </button>

                </div>

            </div>

            <Toaster/>

        </div>
    );
}