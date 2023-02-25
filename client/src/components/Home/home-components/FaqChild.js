import React ,{useState}from 'react'
import '../LandingPage'
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';

const FaqChild = ({item}) => {

	const [state, set_state] = useState(false);

	return (
		<div className="faq_row">
			{
				state ? <RemoveIcon onClick={()=>set_state(!state)} /> : <AddCircleIcon onClick={()=>set_state(!state)} />
			}		


			<div className="faq_col">
				<h1>{item.ques}</h1>
				<h2>{state ? item.ans : ""}</h2>
			</div>
		</div>
	)
}

export default FaqChild