import './index.scss'

export default function Footer() {

  return (
    <div className='Footer'>

      <footer>

        <div className='brands'>
          <div className="insta">
            <i id='logoinsta' class="fa-brands fa-instagram"><p>@devfox</p></i>
          </div>
          <div className="x">
            <i id='logox' class="fa-brands fa-x-twitter"><p>@devfox</p></i>
          </div>
        </div>

        <div className='opcoes'>
            <li> Terms of use </li>
            <li> Privacy Policy </li>
        </div>

        <p> @ 2024 DevFox </p>

      </footer>

    </div>
  )
}