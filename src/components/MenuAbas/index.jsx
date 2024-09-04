import './index.scss'

export default function Menu (){

    return(

<div className='menu'>


<i id='user' class="fa-solid fa-user"></i>

<div className='barra' /> 


<div className='opcoes'>

<i class="fa-solid fa-calendar-days"> Horário dos treinos </i>
<i class="fa-regular fa-calendar-check"> Treinos concluidos & Pendentes </i>
<i class="fa-solid fa-right-from-bracket"> Sair </i>
</div>

</div>
      
    )

}