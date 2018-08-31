import connect from '../connect'
import Dog from './Dog'

const mapContextToProps = (props) => (context) => ({
  name: props.name,
  family: context.data.family
})


const ConnectedDog = (props) => (connect(Dog, mapContextToProps(props)))

export default ConnectedDog
