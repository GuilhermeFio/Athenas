import './index.scss'

export default function Footer() {

  return (
    <div className='Footer'>

      <footer>

        <div className='rede1'>
          <div className="insta">
            <img className='logoinsta' src='/assets/images/instalogo.jpg'/><p>@devfox</p>
          </div>
        </div>

        <div className='rede2'>
        <div className="x">
            <img className='logox' src='/assets/images/xlogo.png'/><p>@devfox</p>
          </div>
        </div>

        <p className='direitos'> @ 2024 DevFox </p>

      </footer>

    </div>
  )
}