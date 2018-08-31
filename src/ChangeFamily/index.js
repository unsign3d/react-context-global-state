import connect from '../connect'
import ChangeFamily from './ChangeFamily'

const mapContextToProps = (context) => ({
  family: context.data.family,
  updateState: context.actions.updateState,
})

const ConnectedChangeFamily = () => (connect(ChangeFamily, mapContextToProps))

export default ConnectedChangeFamily