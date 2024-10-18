import './index.scss'

export default function Footer() {

  return (
    <div className='Footer'>

      <footer>

        <div className='brands'>
          <div className="insta">
            <img className='logoinsta' src='/assets/images/instalogo.jpg'/><p>@devfox</p>
          </div>
          <div className="x">
            <img className='logox' src='/assets/images/xlogo.png'/><p>@devfox</p>
          </div>
        </div>

        <div className='opcoes'>
            <li> Terms of use </li>
            <li> Privacy Policy </li>
        </div>

        <p className='direitos'> @ 2024 DevFox </p>

      </footer>

    </div>
  )
}