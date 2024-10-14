import './index.scss';
import { Link, useParams } from 'react-router-dom'
import Menu from '../../components/abasMenu'

import axios from 'axios'

export default function InfoClientes (){

const{id} = useParams()
return(
    <div className="secaomae">
        
<Menu />
    </div>
    

)

}