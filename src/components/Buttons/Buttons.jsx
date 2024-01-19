import './Buttons.css'
export default function Buttons({ icon, onAction }) {
  return (
    <button className="btn-icons" onClick={onAction}>{icon}</button>
  )


}

